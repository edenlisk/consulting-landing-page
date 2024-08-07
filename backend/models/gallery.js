import mongoose from "mongoose";


const photoSchema = new mongoose.Schema(
    {
        fileId: String,
        filePath: String,
        year: String,
        description: String,
        showInGallery: Boolean
    }, {
        timestamps: true
    }
)


export default mongoose.model('Gallery', photoSchema);