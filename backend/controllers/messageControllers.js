import Message from "../models/message.js";
import {graphQlError} from "../utils/helperFunctions.js";


export async function addMessage({senderEmail, senderName, senderPhoneNumber, textMessage}) {
    const message = await Message.create(
        {
            senderEmail,
            senderName,
            senderPhoneNumber,
            textMessage
        }
    )
    if (!message) throw graphQlError('Unable to send message', 'UNKNOWN_ISSUE');
    return message;
}

export async function getMessages() {
    return await Message.find();
}