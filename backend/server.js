import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/user.route.js"
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose"; // Add this

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize MongoDB connection before anything else
mongoose.set('strictQuery', false);



const allowedOrigins = [
  'https://product-store-frontend-six.vercel.app',
  'chrome-extension://abjmcblfmaojkachceegaflbjcipelkj'
];

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
          return callback(null, true);
        } else {
          return callback(new Error('Not allowed by CORS'));
        }
      },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB before routes
app.use("/api/products", async (req, res, next) => {
    await connectDB().catch(console.error);
    next();
}, productRoutes);

app.use("/api/auth", async (req, res, next) => {
    await connectDB().catch(console.error);
    next();
}, authRoutes);

// Production setup
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
    });
}

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Something broke!' });
});

// Export the app for Vercel
export default app;
