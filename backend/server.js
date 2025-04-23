import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/user.route.js"
import path from "path";
 

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve(); // For Production
app.use(express.urlencoded({extended: true}))
app.use(express.json())  //allow us to accept JSON data in the req.body
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes)

//For production/Deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    connectDB(); 
    console.log(`Server started at http://localhost:${PORT}`) 
}) 