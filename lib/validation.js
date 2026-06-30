import { z } from "zod";

export const procedureOptions = [
  "Tummy Tuck",
  "Liposuction",
  "Lipo 360",
  "Mommy Makeover",
  "Breast Procedure",
  "Gynecomastia",
  "Face Procedure",
  "I Am Not Sure Yet",
];

export const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  country: z.string().trim().min(1, "Please enter your country."),
  procedure: z.string().refine((value) => procedureOptions.includes(value), {
    message: "Please select a procedure.",
  }),
  preferredConsultationDate: z.string().trim().optional().or(z.literal("")),
  isInternationalPatient: z.enum(["yes", "no"], {
    message: "Please select an option.",
  }),
  message: z.string().trim().max(1000, "Message must be 1000 characters or fewer.").optional(),
  privacyConsent: z.literal(true, {
    error: "Please accept the privacy consent to continue.",
  }),
  website: z.string().max(0, "Invalid submission."),
});

export function validateConsultation(data) {
  return consultationSchema.safeParse(data);
}
