import jwt from 'jsonwebtoken';
import { appError } from "../utils/helperFunctions.js";
import User from "../models/user.js";

const signToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRES_IN});
}

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(Date.now()),
        httpOnly: true
    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);
    res
        .status(statusCode)
        .json(
            {
                status: 'success',
                token,
                data: {
                    user
                }
            }
        )
    ;
}

export async function signup(req, res, next){
    const existingUser = await User.findOne({email: req.body.email});
}

export async function login(req, res, next) {
    const { email, password } = req.body;
    if (!email || password) throw appError('username or password is missing', 'BAD_INPUTS');

}
