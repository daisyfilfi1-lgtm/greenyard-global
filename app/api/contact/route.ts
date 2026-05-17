import { NextResponse } from "next/server";

const RESEND_API_KEY = "re_DgmbQer8_PkHFYzDUaHTdLfcxY5eFqGNd";
const NOTIFY_EMAIL = "daisyfilfi1@outlook.com";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const emailBody = `
New contact form submission from GreenYard website:

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
`.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GreenYard Website <noreply@greenyardglobal.com>",
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `New Inquiry from ${name}${company ? ` at ${company}` : ""}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
