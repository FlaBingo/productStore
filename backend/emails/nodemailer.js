import transporter from "./email.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

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