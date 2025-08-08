import jwt from "jsonwebtoken";
import { sendError } from "../utils/handleResponses.js";

export const verifyToken = async (req, res, next) => {
    try {
        let token;

        // 1️⃣ Check Authorization header (for extension requests)
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }
        // 2️⃣ Otherwise, check cookies (for website requests)
        else if (req.cookies["jwt-token"]) {
            token = req.cookies["jwt-token"];
        }

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized - token not provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized - Invalid token" });
        }

        // For your JWTs, you were storing userId in `userId`, not `id`
        req.userId = decoded.userId || decoded.id;

        next();
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return sendError(res, 401, "Unauthorized - Invalid token");
        }
        if (error instanceof jwt.TokenExpiredError) {
            return sendError(res, 401, "Unauthorized - Token Expired");
        }

        console.error("Error in verifyToken", error.message);
        return sendError(res, 500, "Internal Server Error");
    }
};







// import jwt from "jsonwebtoken"
// import { sendError } from "../utils/handleResponses.js"

// export const verifyToken = async (req, res, next) => {
//     try {
//         const token = req.cookies["jwt-token"]
//         // console.log(token, typeof req.cookies)
//         if(!token){
//             return res.status(401).json({success: false, message: "Unauthorized - token not provided"})
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)
//         if(!decoded) {
//             return res.status(401).json({success: false, message: "Unauthorized - Invalide token"})
//         }

//         req.userId = decoded.userId

//         next();
//     } catch (error) {
//         if(error instanceof jwt.JsonWebTokenError){
//             return sendError(res, 401, "Unauthorized - Invalid token")
//         }
//         if(error instanceof jwt.TokenExpiredError){
//             return sendError(res, 401, "Unauthorized - Token Expired")
//         }

//         console.error("Error in verifyToken", error.message)
//         return sendError(res, 500, "Internal Server Error")
//     }
// }
