import mongoose from "mongoose";


const servicesSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        slug: String
    }, {
        timestamps: true
    }
)



export default servicesSchema;