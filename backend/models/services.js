import mongoose, { model } from "mongoose";
import slugify from "slugify";


const servicesSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        slug: String,
        display: {
            type: Boolean,
            default: true
        },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        }
    }, {
        timestamps: true
    }
)

servicesSchema.pre('save', async function(next) {
    if (this.isModified('title')) this.slug = slugify(this.title);
    next();
})


export default model('Service', servicesSchema);