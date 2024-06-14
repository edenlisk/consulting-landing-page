import Users from "../models/users.js";
import {graphQlError} from "../utils/helperFunctions.js";


export async function getUsers(){
    return await Users.find();
}


export async function updateUser({fullName, background, position, userId}){
    const existingUser = await Users.findById(userId);
    if (!existingUser) throw graphQlError('Unable to find selected user', 'INVALID_INPUT');
    if (fullName) existingUser.fullName = fullName;
    if (background) existingUser.background = background;
    if (position) existingUser.position = position;
    return await existingUser.save({validateModifiedOnly: true});
}

export async function removeUser({userId}) {
    const deletedUser = await Users.findByIdAndDelete(userId);
    if (!deletedUser) throw graphQlError('Unable to delete user', 'INVALID_INPUT');
    return deletedUser;
}
