import { getTelUrl, getWhatsAppUrl, siteConfig } from "@/data/site";

export const consultationContent = {
  title: "Request a Consultation",
  description:
    "Share your details and our team will follow up with next steps for a private consultation, whether you are local or traveling from abroad.",
  submitLabel: "Send Request",
  submittingLabel: "Sending...",
  successMessage:
    "Your consultation request has been received. Our team will contact you shortly.",
  errorMessage: "We could not send your request. Please try again or contact us directly.",
  contactPaths: [
    {
      id: "phone",
      label: "Call the clinic",
      value: siteConfig.phone,
      href: getTelUrl(),
    },
    {
      id: "whatsapp",
      label: "Message on WhatsApp",
      value: "Fast response for international patients",
      href: getWhatsAppUrl(),
    },
  ],
};
