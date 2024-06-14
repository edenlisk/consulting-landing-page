import Gallery from "../models/gallery.js";

export async function getAllGallery() {
    return await Gallery.find({showInGallery: true});
}
