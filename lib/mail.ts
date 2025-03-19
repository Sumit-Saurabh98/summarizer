import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email: string, token: string) => {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const confirmLink = `${process.env.BASE_URL}/auth/verification?token=${token}`;

  const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email - Document Summarizer</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        .header {
            background: linear-gradient(to right bottom, #8b5cf6, #ec4899, #f97316);
            padding: 35px;
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }
        .content {
            padding: 40px 30px;
            line-height: 1.6;
        }
        .greeting {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
            background: linear-gradient(to right, #8b5cf6, #ec4899);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }
        .message {
            margin-bottom: 30px;
            font-size: 16px;
            color: #4B5563;
        }
        .button-container {
            text-align: center;
            margin: 30px 0;
        }
        .verify-button {
            display: inline-block;
            background: linear-gradient(to right, #8b5cf6, #ec4899);
            color: white;
            text-decoration: none;
            padding: 14px 30px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s;
        }
        .verify-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }
        .alternative {
            font-size: 14px;
            color: #666;
            margin-top: 20px;
        }
        .link {
            color: #8b5cf6;
            word-break: break-all;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #6B7280;
        }
        .social-links {
            margin-top: 15px;
        }
        .social-icon {
            display: inline-block;
            margin: 0 8px;
            color: #8b5cf6;
            text-decoration: none;
        }
        .feature-row {
            display: flex;
            justify-content: center;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        .feature-item {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 15px;
            width: 28%;
            margin: 0 2%;
            text-align: center;
        }
        .feature-icon {
            display: inline-block;
            width: 48px;
            height: 48px;
            background: linear-gradient(to right, #8b5cf6, #ec4899);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 10px;
        }
        .feature-icon svg {
            width: 24px;
            height: 24px;
            fill: #ffffff;
        }
        .feature-title {
            font-weight: 600;
            margin-bottom: 5px;
            color: #4B5563;
        }
        @media only screen and (max-width: 600px) {
            .content {
                padding: 30px 20px;
            }
            .feature-item {
                width: 100%;
                margin: 10px 0;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">SUMMAI</div>
        </div>
        
        <div class="content">
            <div class="greeting">Verify Your Email Address</div>
            
            <div class="message">
                Thank you for signing up with SUMMAI! To complete your registration and start summarizing documents instantly, please verify your email address by clicking the button below.
            </div>
            
            <div class="button-container">
                <a href="${confirmLink}" class="verify-button">Verify My Email</a>
            </div>
            
            <div class="message">
                This verification link will expire in 24 hours. If you didn't create an account with us, please ignore this email.
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <div style="font-weight: 600; margin-bottom: 15px; color: #4B5563;">Summarize Documents in Seconds</div>
            </div>
            
            <div class="feature-row">
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="16" y1="13" x2="8" y2="13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line x1="16" y1="17" x2="8" y2="17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="10 9 9 9 8 9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                    <div class="feature-title">Upload</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                    <div class="feature-title">Process</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </div>
                    <div class="feature-title">Summarize</div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div>© 2025 SUMMAI. All rights reserved.</div>
            <div style="margin-top: 10px;">Save time and focus on what matters.</div>
        </div>
    </div>
</body>
</html>
`;

  await transport.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: "Verify your email",
    html: emailTemplate,
  });
};