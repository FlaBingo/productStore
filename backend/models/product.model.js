import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description: {
        type: String,
    },
    price:{
        type:Number,
        required: true,
    },
    image:{
        type:String
    },
    purchaseLink: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true}); // createdAt ,  updatedAt

const Product = mongoose.model("Product", productSchema)

export default Product;