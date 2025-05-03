import mongoose from "mongoose";

// For Vercel serverless functions, use a cached connection
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 20000,
            bufferTimeoutMS: 30000,
            maxPoolSize: 5,  // Reduce pool size for serverless environments
            family: 4
        }).then(mongoose => mongoose);
    }

    try {
        cached.conn = await cached.promise;
        console.log(`MongoDB Connected: ${cached.conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

    return cached.conn;
};