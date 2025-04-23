import User from "../models/user.model.js";
import { generateTokenSetCookie } from "../utils/generateTokenSetCookie.js";
import { sendVerificationEmail } from "../emails/nodemailer.js";

export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        if(!name || !email || !password){
            return res.json({success: false, message: "All fields are required"})
        }

        if(password.length < 8){
            return res.json({success: false, message: "password should be atleast 8 character long"})
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.json({success:false, message: "User already exists"})
        }

        const verifyToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            name: name.trim(),
            email: email.trim(),
            password,
            verificationToken: verifyToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
        })
        await user.save();

        await generateTokenSetCookie(res, user._id)
        await sendVerificationEmail(user.email, verifyToken);

        res.status(201).json({
            success: true, 
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log("Error in signup controller ", error.message)
        return res.status(400).json({ success: false, message: error.message })
    }
}

export const verifyEmail = async (req, res) => {
    const { otp } = req.body
    try {
        if(otp.length !== 6){
            return res.json({success: false, message: "Invalid OTP"})
        }
        const user = await User.findOne({
            verificationToken: otp,
            verificationTokenExpiresAt: { $gt: Date.now()}
        })
        if(!user){
            return res.json({success: false, message: "Invalid OR Expired OTP"})
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;

        await user.save()

        res.status(200).json({
            success: true,
            message: "Email Verified Successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log("Error in verifyEmail controller ", error.message)
        return res.status(400).json({ success: false, message: error.message })
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
        generateTokenSetCookie(res, user._id)

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
            message: "Internal server error" 
        });
    }
}

export const logout = () => {
    
}