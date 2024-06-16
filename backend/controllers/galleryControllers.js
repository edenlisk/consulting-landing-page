import Gallery from "../models/gallery.js";
import imagekit from "../utils/imagekit.js";
import {graphQlError} from "../utils/helperFunctions.js";

export async function getAllGallery() {
    return await Gallery.find({showInGallery: true});
}

export async function addToGallery({fileId, filePath, description, year, showInGallery}) {
    const newPhoto = await Gallery.create(
        {
            fileId,
            filePath,
            year,
            description,
            showInGallery
        }
    )
    if (!newPhoto) throw graphQlError('Unable to add photo to gallery', 'UNKNOWN_ISSUE');
    return newPhoto;
}

export async function removePhoto({photoId}) {
    const removedPhoto = await Gallery.findByIdAndDelete(photoId);
    if (!removedPhoto) throw graphQlError('Unable to remove photo from gallery', 'INVALID_INPUT');
    return removedPhoto;
}