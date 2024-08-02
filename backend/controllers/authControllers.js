import User from "../models/users.js";
import jwt from "jsonwebtoken";
import AppError from '../utils/appError.js';
import {addPhoto, graphQlError} from "../utils/helperFunctions.js";
import Gallery from "../models/gallery.js";

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN + 20 * 60 * 60 * 1000),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);
    res
        .status(statusCode)
        .json(
            {
                status: "Success",
                token,
                data: {
                    user
                }
            }
        )
    ;
}
const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRES_IN});
}


export async function signup({email, fullName, socials, phoneNumber, position, background, file}) {
    const existingUser = await User.findOne({email});
    if (existingUser) throw graphQlError("User with email:  " + email + " already exists")
    const user = new User(
        {
            fullName,
            phoneNumber,
            position,
            background,
            email,
            socials
        }
    )
    if (file) {
        const { fileId, url } = await addPhoto({file, category: '/user-profiles'});
        if (fileId || url) {
            const addedPhoto = await Gallery.create(
                {
                    fileId,
                    filePath: url,
                    year: new Date().getFullYear(),
                    description: `${fullName}_profile_picture`,
                    showInGallery: false
                }
            )
            if (addedPhoto) {
                user.profile = addedPhoto._id;
            }
        }
    }
    return await user.save({validateModifiedOnly: true});
}


export async function login(req, res, next) {
    const { email, password } = req.body;
    if (!email || password) return next(new AppError("username or password is missing", "BAD_INPUTS"));
    const user = await User.findOne({email}).select('+password');
    if (!user || !(await user.verifyPassword(password))) {
        return next(new AppError("Invalid username or password", 400));
    }
    user.password = undefined;
    createSendToken(user, 200, res)
}