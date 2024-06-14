import User from "../models/users.js";
import jwt from "jsonwebtoken";
import AppError from '../utils/appError.js';

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


export async function signup(req, res, next) {
    const existingUser = await User.findOne({email: req.body.email});
    if (existingUser) return next(new AppError("User with email:  " + req.body.email + " already exists", 400));
    const user = await User.create(
        {
            name: req.body.fullName,
            username: req.body.username,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            position: req.body.position,
            background: req.body.background,
        }
    )
    createSendToken(user, 200, res);
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