import { getService, getServices, updateService, removeService, addService } from './controllers/serviceControllers.js';
import { finished } from 'stream/promises';
// import { GraphQLUpload } from 'graphql-upload';
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs";
import * as fs from 'fs';
import {getUsers, removeUser, updateUser} from "./controllers/userControllers.js";
import {addToGallery, getAllGallery, removePhoto} from "./controllers/galleryControllers.js";
import {addPhoto, deletePhoto} from "./utils/helperFunctions.js";
import {addMessage, getMessages} from "./controllers/messageControllers.js";
import {signup} from "./controllers/authControllers.js";
import {createCompany, getCompany, updateCompany} from "./controllers/companyControllers.js";
import {addBlog, getBlog, getBlogs, updateBlog} from "./controllers/blogControllers.js";
import {getEvents, getOneEvent} from "./controllers/eventsControllers.js";

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
        getGallery: () => {
            return getAllGallery();
        },
        getMessages: () => {
            return getMessages();
        },
        getCompany: () => {
            return getCompany()
        },
        getBlogs: () => {
            return getBlogs();
        },
        getBlog: (_root, { blogId }) => {
            return getBlog(blogId);
        },
        events: () => {
            return getEvents();
        },
        event: (_root, { eventId }) => {
            return getOneEvent({eventId});
        }
    },
    Mutation: {
        addService: (_root, { input: { title, description }, file }) => {
            return addService({title, description, file});
        },
        updateService: (_root, { input: { title, description, display, serviceId } }) => {
            return updateService({description, title, display, serviceId});
        },
        deleteService: (_root, { serviceId }) => {
            return removeService({serviceId});
        },
        addPhotoToGallery: async (_root, { file, input: { description, year, showInGallery } }) => {
            const { fileId, url } = await addPhoto({file, category: '/gallery'});
            return addToGallery({fileId, filePath: url, description, year, showInGallery});
        },
        removeFromGallery: async (_root, { photoId, fileId }) => {
            const response = await deletePhoto({fileId});
            if (response) {
                return removePhoto({photoId});
            } else {
                return null;
            }
        },
        sendMessage: (_root, { input: { senderEmail, senderName, senderPhoneNumber, textMessage } }) => {
            return addMessage({senderEmail, senderName, senderPhoneNumber, textMessage});
        },
        addUser: async (_root, { input, file }) => {
            return signup({...input, file});
        },
        deleteUser: (_root, { userId }) => {
            return removeUser({userId});
        },
        updateUser: (_root, { input }) => {
            return updateUser(input)
        },
        addCompanyInfo: (_root, { input, file }) => {
            return createCompany({ ...input, file });
        },
        updateCompany: (_root, { input }) => {
            return updateCompany(input);
        },
        addBlog: (_root, { input: {title, content }, file }) => {
            return addBlog({title, content, file});
        },
        updateBlog: (_root, { input: { title, content }, blogId, file }) => {
            return updateBlog({ title, content, blogId, file });
        },
        singleUpload: async (_root, { file }) => {
            const { createReadStream, filename, mimetype, encoding } = await file;
            const stream = createReadStream();
            const out = fs.createWriteStream('local-file-output.txt');
            stream.pipe(out);
            await finished(out);
            return { filename, mimetype, encoding };
        },
    },
    Event: {
        date: (event) => {
            return event.date.toISOString().slice(0, 10);
        }
    }
}