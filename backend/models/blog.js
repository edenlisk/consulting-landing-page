import mongoose, { model } from "mongoose";
import slugify from "slugify";


const blogSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        slug: String,
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gallery'
        }
    },
    {
        timestamps: true
    }
)

blogSchema.pre('save', async function(next) {
    if (this.isModified('title')) this.slug = slugify(this.title);
    next();
})

export default model('Blog', blogSchema);