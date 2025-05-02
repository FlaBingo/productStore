import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  try {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.conn = await mongoose.connect(process.env.MONGO_URI, opts);
    console.log(`MongoDB Connected: ${cached.conn.connection.host}`);
    return cached.conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error; // Better error handling than exiting process
  }
};