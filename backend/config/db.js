import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 20000, // Timeout after 20s instead of 10s
            socketTimeoutMS: 45000, // Close sockets after 45s
            connectTimeoutMS: 20000, // Give up initial connection after 20s
            maxPoolSize: 50, // Maintain up to 50 socket connections
            family: 4 // Use IPv4, skip trying IPv6
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}