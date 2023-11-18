import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Invalid environment variable: MONGODB_URI");
}

export const connectToMongoDB = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI);
        if (connection.readyState === 1) return Promise.resolve(true);
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export const disconnectFromMongoDB = async () => {
    try {
        await mongoose.connection.close();
    }
    catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
    }
};