import mongoose, { model } from "mongoose";
import {socialsSchema} from "./users.js";


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
        aboutUs: String,
        ourMission: String,
        companyOverview: String,
        phoneNumber: String,
        email: String,
        history: {
            type: [
                {
                    year: String,
                    title: String,
                    description: String
                }
            ]
        }
    }
)


export default model('Company', companySchema);