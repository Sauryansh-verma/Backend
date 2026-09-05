import mongoose from 'mongoose'
import { config } from './config.js'

export const connectDB = async () => {
    try{
        await mongoose.connect(config.MONGODB_URI);
        console.log('mongodb connected');
    }catch(error){
        console.log('error while connecting db', error);
    }
}