import Service from '../models/services.js';
import {graphQlError} from "../utils/helperFunctions.js";

export async function getServices() {
    return await Service.find();
}

export async function addService({title, description }){
    const service = await Service.create(
        {
            title,
            description
        }
    )
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
    const service = await Service.findById(serviceId);
    if (!service) throw graphQlError('Unable to get selected service', 'INVALID_INPUT');
    return service;
}