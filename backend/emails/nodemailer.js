import transporter from "./email.config.js";
import { RESET_PASSWORD_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const sendVerificationEmail = async (email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Verify Your Email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verifyCode}", otp)
        })
        console.log("Email send at %s", info.messageId)
    } catch (error) {
        console.log("Error sending verification Email", error.message)
    }
}

export const sendPasswordResetEmail = async (email, resetLink) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Password Reset Request",
            html: RESET_PASSWORD_TEMPLATE.replace("{email}", email).replace("{resetLink}", resetLink)
        })

        console.log("Email sent at %s", info.messageId)
    } catch (error) {
        console.log("Error sending Password Reset Email", error.message)
    }
}