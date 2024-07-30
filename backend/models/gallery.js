import mongoose, {Schema} from "mongoose";


const photoSchema = new mongoose.Schema(
    {
        referenceObj: {
            type: Schema.Types.ObjectId
        },
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