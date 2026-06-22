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

export async function sendConsultationEmail(data) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONSULTATION_TO_EMAIL;
  const from = process.env.CONSULTATION_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !to) {
    return { sent: false, reason: "email_not_configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Consultation request: ${data.fullName}`,
      html: buildEmailHtml(data),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Resend email failed:", errorBody);
    return { sent: false, reason: "email_delivery_failed" };
  }

  return { sent: true };
}
