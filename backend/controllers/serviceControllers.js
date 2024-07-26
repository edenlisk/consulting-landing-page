import Service from '../models/services.js';
import {addPhoto, graphQlError} from "../utils/helperFunctions.js";
import Gallery from "../models/gallery.js";

export async function getServices() {
    return await Service.find().populate('image');
}

export async function addService({title, description, file }){
    const service = new Service(
        {
            title,
            description
        }
    )
    if (file) {
        const { url, fileId } = await addPhoto({file, category: '/gallery'});
        if (url || fileId) {
            const addedPhoto = await Gallery.create(
                {
                    fileId,
                    filePath: url,
                    year: new Date().getFullYear(),
                    description: `title_service_image`,
                    showInGallery: false
                }
            )
            if (addedPhoto) service.image = addedPhoto._id;
        }
    }
    await service.save({validateModifiedOnly: true});
    if (!service) throw graphQlError('Unable to add new service', 'UNKNOWN_ISSUE');
    return service;
}

export async function removeService({serviceId}) {
    const removedService = await Service.findByIdAndDelete(serviceId);
    if (!removedService) throw graphQlError('Unable to remove service', '');
    return null;
}

export async function updateService({serviceId, title, description, display}){
    const service = await Service.findById(serviceId);
    if (!service) throw graphQlError('Unable to get requested Service', 'INVALID_INPUT');
    if (title) service.title = title;
    if (description) service.description = description;
    if (display) service.display = true;
    if (display === false) service.display = false;
    return await service.save({validateModifiedOnly: true});
}

export async function getService({serviceId}) {
    const service = await Service.findById(serviceId).populate('image');
    if (!service) throw graphQlError('Unable to get selected service', 'INVALID_INPUT');
    return service;
}