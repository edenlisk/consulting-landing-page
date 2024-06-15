import mongoose, { model } from "mongoose";
import isEmail from "validator/lib/isEmail.js";


const messageSchema = new mongoose.Schema(
    {
        senderName: {
            type: String,
            required: true
        },
        senderPhoneNumber: {
            type: String,
            minLength: 10
        },
        textMessage: {
            type: String,
        },
        senderEmail: {
            type: String,
            validate: [isEmail, 'Please provide valid email address']
        }
    }, {
        timestamps: true
    }
)

export default model('Message', messageSchema);