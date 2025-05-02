import axios from "axios";

const baseURL = import.meta.env.PROD 
  ? "https://product-store-kappa-tawny.vercel.app/api"
  : "http://localhost:5000/api";

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosInstance;