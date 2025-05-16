import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURL);
        console.log('DB connected successfully');
    } catch (err) {
        console.log('MongoDB connection error:', err);
    }
};

export default connectDB;
