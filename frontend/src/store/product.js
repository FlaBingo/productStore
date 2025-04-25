import { create } from "zustand";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance.js";
import { animate } from "framer-motion";

export const useProductStore = create((set) => ({
    products: [],

    setProducts: (products) => set({products}),

    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success: false, message: "Please fill in required fields."}
        }
        
        const data = await axiosInstance.post("/products", newProduct)
        set((state) => ({products: [...state.products, data.data]}))

        return {success:true, message: "Product created successfully"}
    },

    fetchProducts: async () =>{
        const data = await axiosInstance.get("/products");
        set({products: data.data});
    },

    deleteProducts: async (pid) => {
		const data = await axiosInstance.delete(`/products/${pid}`)
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
		return { success: true, message: data.message };
    },

    updateProduct: async (pid, updatedProduct) => {
        const data = await axiosInstance.put(`/products/${pid}`, updatedProduct)
        if(!data.success) return {success: false, message: data.message}
        set(state => ({
            products: state.products.map(product => product._id === pid ? data.data : product)
        }))
        return {success: true, message: data.message}
    } 
}))