import User from "../models/user.model.js";
import { generateTokenSetCookie } from "../utils/generateTokenSetCookie.js";
import { sendPasswordResetEmail, sendVerificationEmail } from "../emails/nodemailer.js";
import crypto from "crypto"
import { sendError, sendSuccess } from "../utils/handleResponses.js";
import { connectDB } from "../config/db.js";


export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        if(!name?.trim() || !email?.trim() || !password){
            return sendError(res, 400, "All fields are required")
        }

        if(password.length < 8){
            return sendError(res, 400, "password should be atleast 8 character long")
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return sendError(res, 409, "User already exists")
        }

        const verifyToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            name: name.trim(),
            email,
            password,
            verificationToken: verifyToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })
        await user.save();

        await generateTokenSetCookie(res, user._id)
        await sendVerificationEmail(user.email, verifyToken);

        const userData = {
            ...user._doc,
            password: undefined
        }
        return sendSuccess(res, 201, "User created successfully")
    } catch (error) {
        console.log("Error in signup controller ", error.message)
        return sendError(res, 500, "Internal Server Error")
    }
}

export const verifyEmail = async (req, res) => {
    const { otp } = req.body
    try {
        if(otp.length !== 6){
            return sendError(res, 400, "Invalid OTP")
        }
        const user = await User.findOne({
            verificationToken: otp,
            verificationTokenExpiresAt: { $gt: Date.now()}
        })
        if(!user){
            return sendError(res, 404, "Invalide or Expired OTP")
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save()

        // res.status(200).json({
        //     success: true,
        //     message: "Email Verified Successfully",
        //     user: {
        //         ...user._doc,
        //         password: undefined
        //     }
        // })
        return sendSuccess(res, 200, "Email Verified Successfully", {
            ...user._doc,
            password: undefined
        })
    } catch (error) {
        console.log("Error in verifyEmail controller ", error.message)
        return sendError(res, 500, "Internal Server Error")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password){
            return res.json({success: false, message: "All fields are Required"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "Invalid email or password"})
        }
        
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({success:false, message: "Invalid email or password"})
        }
        //Use matchPassword method to compare passwords
        const isPasswordCorrect = await user.matchPassword(password)
        if(!isPasswordCorrect){
            return res.status(401).json({success: false, message: "Invalid email or password"})
        }

        // generate token and set the cookie
        await generateTokenSetCookie(res, user._id).catch((err) => res.json({
            success: false,
            message: err.message
        }))

        res.status(200).json({
            success: true,
            message: "Logged in Successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.error("Error in login controller:", error.message);
        res.status(500).json({ 
            success: false, 
            message: error.message
        });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt-token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            path: "/"
        })
        res.status(200).json({success: true, message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller ", error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false, message: "User not found"})
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 60 * 60 * 1000;

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;
        await user.save();

        await sendPasswordResetEmail(email.trim(), `${process.env.CLIENT_URL}/reset-password/${resetToken}`)

        return sendSuccess(res, 200, "Password reset Link sent to your email")
    } catch (error) {
        console.log("Error in forgot-password controller", error.message);
        res.status(500).json({success:false, message: "Internal server error"});
    }
}

export const resetPassword = async (req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now()}
        })
        if(!user){
            return res.status(400).json({success: false, message: "Invalid or Expired reset token"})
        }

        user.password = password
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save();

        return sendSuccess(res, 200, "Password Reset Successfully")
    } catch (error) {
        console.error("Error in resetPassword controller", error.message
        )
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const checkAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password")
        if(!user){
            return res.status(400).json({success:false, message: "User not found"})
        }

        res.status(200).json({success: true, user})
    } catch (error) {
        console.error("Error in checkAuth ", error)
        res.status(400).json({ success: false, message: error.message });
    }
}