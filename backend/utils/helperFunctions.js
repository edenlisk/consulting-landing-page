import multer from "multer";
import * as path from "path";
import {GraphQLError} from 'graphql';
import {expressjwt} from "express-jwt";

export function graphQlError(message, code) {
    return new GraphQLError(message, { extensions: { code } });
}


const multerStorage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, `${__dirname}/../public/temp`);
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }
)

const multerFilter = (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const allowedExtensions = ['.png', '.jpg', 'pdf', '.jpeg'];
    if (allowedExtensions.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb(graphQlError("Not a .jpg, .jpeg, .png or pdf file selected", 'INVALID_INPUT'), false);
    }
}

export const upload = multer(
    {
        storage: multerStorage,
        fileFilter: multerFilter
    }
)

export function getContext({req}) {
    console.log('[getContext]')
    return {  }
}

// export const authMiddleware = expressjwt(
//     {
//         secret: process.env.JWT_SECRET,
//         algorithms: ['HS256'],
//         credentialsRequired: false
//     }
// )



