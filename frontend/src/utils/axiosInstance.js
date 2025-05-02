import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api` || "http://localhost:5000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;