import Blog from "../models/blog.js";
import {addPhoto, graphQlError} from "../utils/helperFunctions.js";
import Gallery from "../models/gallery.js";

export async function getBlogs() {
    return await Blog.find().populate('image');
}

export async function getBlog(blogId){
    const blog = await Blog.findById(blogId).populate('image');
    if (!blog) throw graphQlError('Unable to find selected blog', 'INVALID_INPUT');
    return blog;
}

export async function addBlog({ title, content, file }) {
    const newBlog = new Blog(
        {
            title,
            content
        }
    )
    if (file) {
        const { fileId, url } = await addPhoto({file, category: '/blogs'});
        if (url || fileId) {
            const addedPhoto = await Gallery.create(
                {
                    fileId,
                    filePath: url,
                    description: `${title}_asset`,
                    year: new Date().getFullYear(),
                    showInGallery: false
                }
            )
            if (addedPhoto) {
                newBlog.image = addedPhoto._id;
            }
        }
    }
    return (await newBlog.save({validateModifiedOnly: true}));
    // if (!newBlog) throw graphQlError('Unable to add new blog', 'UNKNOWN_ISSUE');
}