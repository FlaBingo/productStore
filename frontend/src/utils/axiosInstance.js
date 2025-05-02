import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? process.env.VITE_API_URL : "http://localhost:5000/api";

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json"
    // }
})

export default axiosInstance;