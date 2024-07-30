import {model, Schema} from "mongoose";

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String }
});


eventSchema.virtual('images', {
    ref: 'Gallery',
    localField: '_id',
    foreignField: 'referenceObj',
    justOne: false
});


export default model('Event', eventSchema);