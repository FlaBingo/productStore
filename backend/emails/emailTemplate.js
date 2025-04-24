
export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .logo {
            max-width: 150px;
        }
        .content {
            padding: 20px 0;
        }
        .verification-code {
            background-color: #f5f5f5;
            padding: 15px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
            border-radius: 5px;
            letter-spacing: 2px;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin: 10px 0;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
        <h1>Verify Your Email Address</h1>
    </div>
    
    <div class="content">
        <p>Hello,</p>
        <p>Thank you for registering with us. To complete your registration, please verify your email address by using the following verification code:</p>
        
        <div class="verification-code">
            {verifyCode}
        </div>
        
        <p>This code will expire in 24 hours. If you didn't request this, please ignore this email.</p>
        
        <!-- <p>Alternatively, you can click the button below to verify your email:</p>
        
        <p style="text-align: center;">
            <a href="https://example.com/verify?token={verificationCode}" class="button">Verify Email</a>
        </p> -->
    </div>
    
    <div class="footer">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <p>If you're having trouble with the button above, copy and paste the following URL into your web browser:</p>
        <p>https://example.com/verify?token={verificationCode}</p>
    </div>
</body>
</html>
`

export const RESET_PASSWORD_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
        body {
            font-family: 'Poppins', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f7f9fc;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 30px 0;
        }
        .logo {
            max-width: 150px;
        }
        .content-box {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }
        h1 {
            color: #2c3e50;
            margin-top: 0;
            font-weight: 600;
            font-size: 24px;
        }
        .highlight {
            color: #3498db;
            font-weight: 500;
        }
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e0e0e0, transparent);
            margin: 25px 0;
        }
        .reset-button {
            display: inline-block;
            padding: 14px 28px;
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white !important;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 500;
            margin: 20px 0;
            text-align: center;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
        }
        .info-box {
            background: #f1f9fe;
            padding: 15px;
            border-radius: 8px;
            margin: 25px 0;
            font-size: 14px;
            border-left: 4px solid #3498db;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #7f8c8d;
            font-size: 13px;
        }
        .small-text {
            font-size: 13px;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://example.com/logo.png" alt="Company Logo" class="logo">
        </div>
        
        <div class="content-box">
            <h1>Password Reset Request</h1>
            
            <p>Hello,</p>
            
            <p>We received a request to reset the password for your account associated with <span class="highlight">{email}</span>.</p>
            
            <div style="text-align: center;">
                <a href="{resetLink}" class="reset-button">Reset Password</a>
            </div>
            
            <p class="small-text" style="text-align: center;">This link will expire in 1 hour.</p>
            
            <div class="divider"></div>
            
            <div class="info-box">
                <p><strong>Didn't request this?</strong></p>
                <p>If you didn't request a password reset, please ignore this email or contact support if you have concerns about your account's security.</p>
            </div>
            
            <p>For your security, this link can only be used once. If you need to reset your password again, please visit our <a href="https://example.com/forgot-password">password reset page</a>.</p>
        </div>
        
        <div class="footer">
            <p>© 2025 FlaBingo. All rights reserved.</p>
            <p>
                <a href="#" style="color: #3498db; text-decoration: none;">Help Center</a> | 
                <a href="#" style="color: #3498db; text-decoration: none;">Privacy Policy</a>
            </p>
            <p>DYPatil Educational Complex, akurdi, pune, India</p>
        </div>
    </div>
</body>
</html>

`