import Event from '../models/events.js';
import {graphQlError, graphqlLogger} from "../utils/helperFunctions.js";


export async function getEvents() {
    const events = await Event.find();
    return events;
}

export async function getOneEvent({eventId}) {
    const event = await Event.findById(eventId);
    if (!event) throw graphQlError('Unable to find selected event', 'BAD_INPUT');
    return event;
}

export async function createEvent({name, date, location, description}) {
    const event = await Event.create(
        {
            name,
            date,
            location,
            description
        }
    )
    if (!event) throw graphQlError('Unable to add new event', 'BAD_INPUT');
    return event;
}
