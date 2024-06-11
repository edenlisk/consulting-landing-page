import mongoose, { model } from "mongoose";
import {socialsSchema} from "./members.js";


const companySchema = new mongoose.Schema(
    {
        name: String,
        logo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        },
        address: {
            country: String,
            province: String,
            district: String,
            sector: String,
            street: String,
            mapCoords: {
                lat: String,
                lng: String
            }
        },
        socials: [socialsSchema],
    }
)


export default model('Company', companySchema);