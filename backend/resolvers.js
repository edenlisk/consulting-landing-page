import { getService, getServices, updateService, removeService, addService } from './controllers/serviceControllers.js';
import { finished } from 'stream/promises';
// import { GraphQLUpload } from 'graphql-upload';
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import * as fs from 'fs';
import {getUsers} from "./controllers/userControllers.js";

export const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        service: (_root, { serviceId }) => {
            return getService({serviceId});
        },
        services: () => {
            return getServices();
        },
        users: () => {
            return getUsers();
        },
    },
    Mutation: {
        addService: (_root, { input: { title, description } }) => {
            return addService({title, description});
        },
        updateService: (_root, { input: { title, description, display, serviceId } }) => {
            return updateService({description, title, display, serviceId});
        },
        deleteService: (_root, { serviceId }) => {
            return removeService({serviceId});
        },
        singleUpload: async (_root, { file }) => {
            const { createReadStream, filename, mimetype, encoding } = await file;
            const stream = createReadStream();
            const out = fs.createWriteStream('local-file-output.txt');
            stream.pipe(out);
            await finished(out);
            return { filename, mimetype, encoding };
        },
    }
}