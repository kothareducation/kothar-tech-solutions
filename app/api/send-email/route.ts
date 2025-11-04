import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Kothar Tech Website <onboarding@resend.dev>", // Use your verified domain
      to: "info@kotharedu.com", // Your company email
      replyTo: email, // Customer's email
      subject: `New Contact Form: ${subject}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #ed6a06; padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
              </div>
              
              <div style="background-color: white; padding: 30px; margin-top: 20px; border-radius: 8px;">
                <h2 style="color: #ed6a06; margin-top: 0;">Contact Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 12px 0; font-weight: bold; width: 120px;">Name:</td>
                    <td style="padding: 12px 0;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 12px 0; font-weight: bold;">Email:</td>
                    <td style="padding: 12px 0;">
                      <a href="mailto:${email}" style="color: #63afc7; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ${
                    phone
                      ? `
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 12px 0; font-weight: bold;">Phone:</td>
                    <td style="padding: 12px 0;">
                      <a href="tel:${phone}" style="color: #63afc7; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  `
                      : ""
                  }
                  <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 12px 0; font-weight: bold;">Subject:</td>
                    <td style="padding: 12px 0;">${subject}</td>
                  </tr>
                </table>
                
                <h3 style="color: #ed6a06; margin-top: 24px;">Message:</h3>
                <div style="background-color: #f9f9f9; padding: 16px; border-left: 4px solid #ed6a06; border-radius: 4px;">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                <p>This email was sent from the Kothar Tech Solutions contact form</p>
                <p>Received on ${new Date().toLocaleString("en-AU", {
                  timeZone: "Australia/Sydney",
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
