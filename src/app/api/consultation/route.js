import { sendConsultationEmail } from "@/lib/consultation-email";
import { saveConsultationSubmission } from "@/lib/consultation-store";
import { validateConsultation } from "@/lib/validation";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = validateConsultation(body);

    if (!parsed.success) {
      return Response.json(
        {
          message: "Please check the form and try again.",
          issues: parsed.error.issues.map((issue) => issue.message),
        },
        { status: 400 },
      );
    }

    const submission = await saveConsultationSubmission(parsed.data);
    const emailResult = await sendConsultationEmail(parsed.data);

    console.info("Consultation request saved:", {
      id: submission.id,
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      procedure: parsed.data.procedure,
      emailSent: emailResult.sent,
    });

    return Response.json(
      {
        message: "Consultation request received.",
        id: submission.id,
        emailSent: emailResult.sent,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Consultation API error:", error);
    return Response.json({ message: "We could not process your request. Please try again." }, { status: 500 });
  }
}
