import mongoose from "mongoose";



export const connectDb = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {dbName: 'consulting-landing-page'});
    if (connection) {
        console.log('Connection to database was successful');
    } else {
        console.log('Error occurred while connecting to database');
    }
}