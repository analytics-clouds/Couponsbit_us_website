import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function userConfirmationHtml(name: string, inquiryType: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>We received your message</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:24px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0451c4 0%,#056bfa 100%);padding:48px 40px 40px;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:50px;padding:8px 24px;margin-bottom:20px;">
              <span style="color:#ffffff;font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">Couponsbit</span>
            </div>
            <h1 style="color:#ffffff;font-size:28px;font-weight:900;margin:0 0 8px;line-height:1.3;">Message Received!</h1>
            <p style="color:rgba(255,255,255,0.85);font-size:15px;margin:0;line-height:1.6;">We have got your ${inquiryType.toLowerCase()} inquiry and we will be in touch soon.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:48px 40px;">
            <p style="color:#111111;font-size:22px;font-weight:800;margin:0 0 16px;">Hi ${name},</p>
            <p style="color:#555555;font-size:15px;line-height:1.8;margin:0 0 24px;">
              Thank you for reaching out to <strong style="color:#056bfa;">Couponsbit</strong>! We have received your message and our support team will review it shortly.
            </p>

            <!-- Promise Box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
              <tr>
                <td style="background:linear-gradient(135deg,#f0f6ff 0%,#e8f0fe 100%);border-left:4px solid #056bfa;border-radius:0 12px 12px 0;padding:20px 24px;">
                  <p style="margin:0;color:#0344b0;font-size:14px;font-weight:700;">&#9200; We typically respond within 24 hours</p>
                  <p style="margin:6px 0 0;color:#555555;font-size:13px;">Our team is available Monday to Saturday, 9 AM – 6 PM IST.</p>
                </td>
              </tr>
            </table>

            <!-- What happens next -->
            <p style="color:#111111;font-size:16px;font-weight:800;margin:0 0 16px;">What happens next?</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ["&#10003;", "Your message has been safely received"],
                ["&#128269;", "Our team will review your inquiry"],
                ["&#128231;", "You will receive a detailed reply within 24 hours"],
              ].map(([icon, text]) => `
              <tr>
                <td style="padding:8px 0;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:36px;height:36px;background:#f0f6ff;border-radius:50%;text-align:center;vertical-align:middle;font-size:16px;">${icon}</td>
                      <td style="padding-left:14px;color:#333333;font-size:14px;vertical-align:middle;">${text}</td>
                    </tr>
                  </table>
                </td>
              </tr>`).join("")}
            </table>

            <!-- CTA Button -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:40px 0 0;">
              <tr>
                <td align="center">
                  <a href="https://www.couponsbit.com" style="display:inline-block;background:linear-gradient(135deg,#056bfa,#0451c4);color:#ffffff;font-size:15px;font-weight:800;text-decoration:none;padding:16px 40px;border-radius:50px;letter-spacing:0.5px;">
                    Browse Deals on Couponsbit &#8594;
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="background:#ffffff;padding:0 40px;"><div style="height:1px;background:#f0f0f0;"></div></td></tr>

        <!-- Footer -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px;text-align:center;">
            <p style="color:#999999;font-size:12px;margin:0 0 8px;">You received this email because you submitted the contact form on Couponsbit.</p>
            <p style="color:#999999;font-size:12px;margin:0;">
              &copy; ${new Date().getFullYear()} Couponsbit &nbsp;|&nbsp;
              <a href="mailto:support.couponsbit@gmail.com" style="color:#056bfa;text-decoration:none;">support.couponsbit@gmail.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function adminNotificationHtml(data: {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  inquiryType: string;
}): string {
  const fields: [string, string][] = [
    ["Full Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Country", data.country],
    ["Inquiry Type", data.inquiryType],
    ["Submitted At", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Contact Submission</title></head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:24px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.12);">

        <!-- Header -->
        <tr>
          <td style="background:#051a33;padding:36px 40px;text-align:center;">
            <div style="display:inline-block;background:rgba(5,107,250,0.25);border-radius:50px;padding:6px 20px;margin-bottom:16px;">
              <span style="color:#56acff;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">Admin Notification</span>
            </div>
            <h1 style="color:#ffffff;font-size:24px;font-weight:900;margin:0 0 6px;">New ${data.inquiryType} Inquiry</h1>
            <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:0;">Submitted via Couponsbit Contact Form</p>
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background:#056bfa;padding:14px 40px;text-align:center;">
            <p style="color:#ffffff;font-size:13px;font-weight:700;margin:0;">&#128276; New message from <strong>${data.fullName}</strong> (${data.email})</p>
          </td>
        </tr>

        <!-- Details Table -->
        <tr>
          <td style="background:#ffffff;padding:40px;">
            <p style="color:#111111;font-size:16px;font-weight:800;margin:0 0 24px;">Submission Details</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${fields.map(([label, value], i) => {
                const rowBg = i % 2 === 0 ? "#f9fafb" : "#ffffff";
                return `
              <tr>
                <td style="background-color:${rowBg};padding:14px 16px;border:1px solid #e8e8e8;font-size:13px;font-weight:700;color:#666666;width:35%;vertical-align:top;"><span style="color:#666666;">${label}</span></td>
                <td style="background-color:${rowBg};padding:14px 16px;border:1px solid #e8e8e8;font-size:13px;vertical-align:top;"><span style="color:#111111;">${value}</span></td>
              </tr>`;
              }).join("")}
            </table>

            <!-- Message -->
            <p style="color:#111111;font-size:15px;font-weight:800;margin:32px 0 12px;">Message</p>
            <div style="background:#ffffff;border:1px solid #e8e8e8;border-left:4px solid #056bfa;border-radius:0 12px 12px 0;padding:20px 24px;">
              <p style="color:#111111;font-size:14px;line-height:1.8;margin:0;white-space:pre-wrap;">${data.message}</p>
            </div>

            <!-- Reply Button -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0 0;">
              <tr>
                <td align="center">
                  <a href="mailto:${data.email}?subject=Re: Your inquiry to Couponsbit" style="display:inline-block;background:#056bfa;color:#ffffff;font-size:14px;font-weight:800;text-decoration:none;padding:14px 36px;border-radius:50px;">
                    &#128231; Reply to ${data.fullName}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#051a33;padding:24px 40px;text-align:center;">
            <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;">Couponsbit Admin &nbsp;|&nbsp; This is an automated notification</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, country, message, inquiryType } = body;

    // Server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName || fullName.length < 3) {
      return NextResponse.json({ error: "Full name must be at least 3 characters" }, { status: 400 });
    }
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (!country) {
      return NextResponse.json({ error: "Country is required" }, { status: 400 });
    }

    await Promise.all([
      // Email to user
      transporter.sendMail({
        from: `"Couponsbit Support" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "We received your message — Couponsbit ✓",
        html: userConfirmationHtml(fullName, inquiryType || "General"),
      }),
      // Email to admin
      transporter.sendMail({
        from: `"Couponsbit Contact Form" <${process.env.GMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `[${inquiryType || "General"}] New contact from ${fullName} — Couponsbit`,
        html: adminNotificationHtml({ fullName, email, phone, country, message, inquiryType: inquiryType || "General" }),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
