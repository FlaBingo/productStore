import mongoose from "mongoose";
import Product from "../models/product.model.js";
import { sendError } from "../utils/handleResponses.js";

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find({userId: req.userId}).populate("userId", "name email")

        res.status(200).json({success:true, data: product})
    } catch (error) {
        console.error("Error fetching products: ", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; // user will send this data

    // console.log(product)
	if (!product?.name || !product?.price) {
		return res.status(400).json({ success: false, message: "Please provide required fields" });
	}

	const newProduct = new Product({
        ...req.body,
        name: product.name.trim(),
        image: product.image.trim(),
        userId: req.userId,
    });

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error Creating product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    // console.log(product)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    try {
        const oldProduct = await Product.findOne({_id: id, userId: req.userId})
        if(!oldProduct){
            return sendError(res, 404, "Product not Found or anauthorized")
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, {...product, userId:req.userId}, {new: true})
        if(!updatedProduct) return res.status(404).json({success: false, message: "Product not found"})

        // console.log(Product)
        res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        console.error("Error Updating product", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    } 
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    try {
        const oldProduct = await Product.findOne({_id: id, userId: req.userId})
        if(!oldProduct){
            return sendError(res, 404, "Product not Found or anauthorized")
        }

        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message:"product deleted"})
    } catch (error) {
        console.error("Error Deleting product", error.message);
        res.status(500).json({success: false, message: "Server Error"})
    }
}