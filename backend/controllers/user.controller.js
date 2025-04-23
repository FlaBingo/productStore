import User from "../models/user.model.js";
import jwt from "jsonwebtoken"
import { generateTokenSetCookie } from "../utils/generateTokenSetCookie.js";

export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        if(!name || !email || !password){
            return res.json({success: false, message: "All fields are required"})
        }

        if(password < 8){
            return res.json({success: false, message: "password should be atleast 8 character long"})
        }

        const existingUser = await User.findOne({email})
        if(!existingUser){
            return res.json({success:false, message: "User already exists"})
        }

        const verifyToken = Math.floor(100000 + Math.random * 900000).toString();

        const user = new User({
            name,
            email,
            password,
            verificationToken: verifyToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })
        await user.save();

        await generateTokenSetCookie(res, user._id)
        await sendVerificationEmail(user.email, verifyToken);

        res.status(201).json({success: true, message: "User created successfully"})
    } catch (error) {
        console.log("Error in signup controller ", error.message)
        return res.status(400).json({ success: false, message: error.message })
    }
}

export const login = () => {

}

export const logout = () => {
    
}