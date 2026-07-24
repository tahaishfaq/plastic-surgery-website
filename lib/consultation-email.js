import nodemailer from "nodemailer";

function buildEmailHtml(data) {
  return `
    <h2>New consultation request</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Country:</strong> ${data.country}</p>
    <p><strong>Procedure:</strong> ${data.procedure}</p>
    <p><strong>Preferred date:</strong> ${data.preferredConsultationDate || "Not provided"}</p>
    <p><strong>International patient:</strong> ${data.isInternationalPatient === "yes" ? "Yes" : "No"}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message || "No additional message provided."}</p>
  `;
}

function buildEmailText(data) {
  return [
    "New consultation request",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Country: ${data.country}`,
    `Procedure: ${data.procedure}`,
    `Preferred date: ${data.preferredConsultationDate || "Not provided"}`,
    `International patient: ${data.isInternationalPatient === "yes" ? "Yes" : "No"}`,
    "",
    "Message:",
    data.message || "No additional message provided.",
  ].join("\n");
}

function getMailConfig() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const to = process.env.CONSULTATION_TO_EMAIL || user;

  return { user, pass, to };
}

export async function sendConsultationEmail(data) {
  const { user, pass, to } = getMailConfig();

  if (!user || !pass || !to) {
    return { sent: false, reason: "email_not_configured" };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Rahman Plastic Surgery" <${user}>`,
      to,
      replyTo: data.email,
      subject: `Consultation request: ${data.fullName}`,
      text: buildEmailText(data),
      html: buildEmailHtml(data),
    });

    return { sent: true };
  } catch (error) {
    console.error("Gmail email failed:", error);
    return { sent: false, reason: "email_delivery_failed" };
  }
}
