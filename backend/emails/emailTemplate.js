
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