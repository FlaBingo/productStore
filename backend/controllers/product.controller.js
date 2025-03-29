import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json({success:true, data: product})
    } catch (error) {
        console.error("Error in fetching products: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product);
    console.log(newProduct);
    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct})
    } catch (error) {
        console.error("Error in Creating product", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    console.log(product)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})

        if(!updatedProduct) return res.status(404).json({success: false, message: "Product not found"})

        console.log(Product)
        res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        console.error("Error in Updating product")
        res.status(500).json({success: false, message: "Server Error"})
    } 
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message:"product deleted"})
    } catch (error) {
        console.error("Error in Deleting product", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}