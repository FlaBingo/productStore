import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose, { mongo } from "mongoose";
import productRouter from "./routes/product.route.js";
 
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json())  //allow us to accept JSON data in the req.body
app.use("/api/products", productRouter)

app.listen(PORT, () => {
    connectDB(); 
    console.log(`Server started at http://localhost:${PORT}`)
}) 