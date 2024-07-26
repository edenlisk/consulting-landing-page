import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

export const socialsSchema = new Schema(
    {
        name: String,
        iconLink: String,
        socialMediaLink: String
    }
)

const userSchema = new Schema(
    {
        password: {
            type: String,
            required: true,
            select: false
        },
        email: {
            type: String
        },
        fullName: String,
        phoneNumber: {
            unique: true
        },
        background: String,
        position: String,
        socials: [socialsSchema],
        profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        }
    },
    {
        timestamps: true
    }
)


userSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.verifyPassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

export default model('User', userSchema);