import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyRecaptcha } from "@/lib/verifyRecaptcha";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function userConfirmationHtml(name: string, rating: number): string {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Thank you for your feedback</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:24px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0451c4 0%,#056bfa 100%);padding:48px 40px 40px;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:50px;padding:8px 24px;margin-bottom:20px;">
              <span style="color:#ffffff;font-size:13px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">Couponsbit Feedback</span>
            </div>
            <h1 style="color:#ffffff;font-size:28px;font-weight:900;margin:0 0 8px;line-height:1.3;">Feedback Received!</h1>
            <p style="color:rgba(255,255,255,0.85);font-size:15px;margin:0;line-height:1.6;">Thank you for sharing your experience with us.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:48px 40px;">
            <p style="color:#111111;font-size:22px;font-weight:800;margin:0 0 16px;">Hi ${name},</p>
            <p style="color:#555555;font-size:15px;line-height:1.8;margin:0 0 24px;">
              Thank you for leaving a review on <strong style="color:#056bfa;">Couponsbit</strong>! Your feedback is invaluable to us and helps our team keep coupons verified, working, and reliable for millions of online shoppers.
            </p>

            <!-- Rating Box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
              <tr>
                <td style="background:linear-gradient(135deg,#f0f6ff 0%,#e8f0fe 100%);border-left:4px solid #056bfa;border-radius:0 12px 12px 0;padding:20px 24px;">
                  <p style="margin:0;color:#0344b0;font-size:14px;font-weight:700;">Your Rating: <span style="color:#f59e0b;font-size:16px;">${stars}</span> (${rating}/5)</p>
                  <p style="margin:6px 0 0;color:#555555;font-size:13px;">Our community relies on honest experiences like yours.</p>
                </td>
              </tr>
            </table>

            <!-- CTA Button -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0 0;">
              <tr>
                <td align="center">
                  <a href="https://www.couponsbit.us" style="display:inline-block;background:linear-gradient(135deg,#056bfa,#0451c4);color:#ffffff;font-size:15px;font-weight:800;text-decoration:none;padding:16px 40px;border-radius:50px;letter-spacing:0.5px;">
                    Explore Latest Deals &#8594;
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
            <p style="color:#999999;font-size:12px;margin:0 0 8px;">You received this email because you submitted a review on Couponsbit.</p>
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
  rating: number;
  category: string;
  storeName?: string;
  sourcePlatform?: string;
  message: string;
}): string {
  const stars = "★".repeat(data.rating) + "☆".repeat(5 - data.rating);
  const fields: [string, string][] = [
    ["Reviewer Name", data.fullName],
    ["Email", data.email],
    ["Rating", `${stars} (${data.rating} / 5)`],
    ["Feedback Category", data.category],
    ["Store / Brand", data.storeName || "—"],
    ["Platform", data.sourcePlatform || "Couponsbit Website"],
    ["Submitted At", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Customer Review / Feedback</title></head>
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
            <h1 style="color:#ffffff;font-size:24px;font-weight:900;margin:0 0 6px;">New Review Submitted (${data.rating}★)</h1>
            <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:0;">Couponsbit Feedback & Reviews</p>
          </td>
        </tr>

        <!-- Alert Banner -->
        <tr>
          <td style="background:#056bfa;padding:14px 40px;text-align:center;">
            <p style="color:#ffffff;font-size:13px;font-weight:700;margin:0;">&#11088; New review from <strong>${data.fullName}</strong> (${data.email})</p>
          </td>
        </tr>

        <!-- Details Table -->
        <tr>
          <td style="background:#ffffff;padding:40px;">
            <p style="color:#111111;font-size:16px;font-weight:800;margin:0 0 24px;">Review Details</p>
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

            <!-- Review Message -->
            <p style="color:#111111;font-size:15px;font-weight:800;margin:32px 0 12px;">Review Comments</p>
            <div style="background:#ffffff;border:1px solid #e8e8e8;border-left:4px solid #056bfa;border-radius:0 12px 12px 0;padding:20px 24px;">
              <p style="color:#111111;font-size:14px;line-height:1.8;margin:0;white-space:pre-wrap;">${data.message}</p>
            </div>

            <!-- Reply Button -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0 0;">
              <tr>
                <td align="center">
                  <a href="mailto:${data.email}?subject=Thank you for your feedback on Couponsbit" style="display:inline-block;background:#056bfa;color:#ffffff;font-size:14px;font-weight:800;text-decoration:none;padding:14px 36px;border-radius:50px;">
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
            <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;">Couponsbit Admin &nbsp;|&nbsp; Automated Feedback Notification</p>
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
    const { fullName, email, rating, category, storeName, sourcePlatform, message, recaptchaToken } = body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fullName || fullName.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name (min 2 characters)" }, { status: 400 });
    }
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Please provide a rating between 1 and 5" }, { status: 400 });
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "Review text must be at least 10 characters" }, { status: 400 });
    }

    if (recaptchaToken) {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
      }
    }

    // Try sending email notifications if SMTP is configured
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        await Promise.all([
          // Confirmation to user
          transporter.sendMail({
            from: `"Couponsbit Feedback" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Thank you for your feedback — Couponsbit ⭐",
            html: userConfirmationHtml(fullName, Number(rating)),
          }),
          // Notification to admin
          transporter.sendMail({
            from: `"Couponsbit Reviews" <${process.env.GMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
            subject: `[${rating}★ Review] New feedback from ${fullName} — Couponsbit`,
            html: adminNotificationHtml({
              fullName,
              email,
              rating: Number(rating),
              category: category || "General Experience",
              storeName,
              sourcePlatform,
              message,
            }),
          }),
        ]);
      } catch (mailError) {
        console.error("Feedback email sending failed:", mailError);
        // Do not crash the user response if mail fails; submission is recorded
      }
    }

    return NextResponse.json({
      success: true,
      review: {
        id: `rev-${Date.now()}`,
        name: fullName,
        rating: Number(rating),
        date: "Just now",
        platform: "Couponsbit Review",
        comment: message,
        verified: true,
        category: category || "General",
        storeName: storeName || null,
      },
    });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 });
  }
}
