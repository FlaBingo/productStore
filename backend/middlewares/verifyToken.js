import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-token"]
        if(!token){
            return res.status(401).json({success: false, message: "Unauthorized - token not provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded) {
            return res.status(401).json({success: false, message: "Unauthorized - Invalide token"})
        }

        req.userId = decoded.userId

        next();
    } catch (error) {
        console.error("Error in verifyToken", error.message)
        return res.status(500).json({success: false, message: "Internal Server Error"})
    }
}