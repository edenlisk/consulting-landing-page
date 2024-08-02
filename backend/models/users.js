import mongoose, { model } from "mongoose";
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';

export const socialsSchema = new mongoose.Schema(
    {
        name: String,
        iconLink: String,
        socialMediaLink: String
    }
)

const userSchema = new mongoose.Schema(
    {
        fullName: String,
        password: {
            type: String,
            select: false
        },
        phoneNumber: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            validate: [isEmail, 'Please provide valid email address']
        },
        background: String,
        position: String,
        socials: [socialsSchema],
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        }
    }
)

// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
// });


userSchema.methods.verifyPassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

export default model('User', userSchema);


