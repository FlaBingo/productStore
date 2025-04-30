import { create } from "zustand";
import axiosInstance from "../utils/axiosInstance.js";

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    message: null,
    isLoading: false,
    isCheckingAuth: false,

    signup: async (name, email, password) => {
        set({ isLoading: true, message: null});
        try {
            const res = await axiosInstance.post('/auth/signup', {
                name, email, password
            })
            console.log(res)
            if(!res.data.success){
                set({ isLoading: false, message: res.data.message})
                return false;
            }

            set({user: res.data.user, message: res.data.message, isAuthenticated: true, isLoading: false})
            return true;
        } catch (error) {
            set({message: error.response?.data?.message || "Error signing up", isLoading:false})
            return false;
        }
    },
    verifyEmail: async (otp) => {
        set({isLoading: true, message: null});
        try {
            const res = await axiosInstance.post("/auth/verify-email", { otp })
            if(res.data.success){
                set({
                    user: res.data.data,
                    isAuthenticated: true,
                    isLoading: false,
                    message: res.data.message,
                })
                return true;
            }
            set({
                isLoading: false,
                isAuthenticated: false,
                message: res.data.message
            })
            return false;
        } catch (error) {
            console.log("Error in verifyEmail store",error.message)
            set({isLoading: false, isAuthenticated: false, message: error.response?.data?.message})
            return false;
        }
    },
    login: async (email, password) => {
        set({isLoading: true, message: null})
        try {
            const res = await axiosInstance.post("/auth/login", {email, password})
            if(res.data.success){
                set({
                    user: res.data.data,
                    isAuthenticated: true,
                    isLoading: false,
                    message: res.data.message
                })
                return true
            }
            set({
                isLoading: false,
                message: res.data.message,
                isAuthenticated: false,
                user: null
            })
            return false

        } catch (error) {
            set({message: error.response?.data?.message || "Error signing up", isLoading:false, isAuthenticated: false, user: null})
            return false;
        }

    },
    logout: async () => {
        set({isLoading: true, message: null})
        try {
            const res = await axiosInstance.post("/auth/logout")
            set({
                user: null,
                isLoading: false,
                isAuthenticated: false,
                message: res.data.message,
            })
            return true
        } catch (error) {
            console.log(error.message);
            set({
                isLoading: false,
                message: error.response.data?.message
            })
        }
    },
    checkAuth: async () => {
        set({ isCheckingAuth: true, message: null })
        try {
            const res = await axiosInstance.get('/auth/check-auth');
            set({
                user: res.data.user,
                message: res.data.message,
                isAuthenticated: true,
                isCheckingAuth: false
            })

        } catch (error) {
            set({ user: null, isCheckingAuth: false, isAuthenticated: false, message: error.response?.data?.message || "Authentication check failed" })
        }
    },
}))