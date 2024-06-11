import mongoose from "mongoose";

export const socialsSchema = new mongoose.Schema(
    {
        name: String,
        iconLink: String,
        socialMediaLink: String
    }
)

const memberSchema = new mongoose.Schema(
    {
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
    }
)

export default memberSchema;


