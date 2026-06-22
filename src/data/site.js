export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Rahman Plastic Surgery, I would like to book a consultation and learn more about your procedures.";

export const siteConfig = {
  name: "Rahman Plastic Surgery",
  tagline: "Precision care. Natural-looking confidence.",
  phone: "+92 3XX XXX XXXX",
  whatsappNumber: "923XXXXXXXXX",
  email: "info@rahmanplasticsurgery.com",
  address: "Clinic address to be confirmed",
  city: "Lahore, Pakistan",
  workingHours: "Mon-Sat, 10:00 AM-7:00 PM",
  hoursNote: "Consultations by appointment",
  mapOverlay: {
    address: "476 5th Avenue",
    city: "New York, NY 10018",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.965196874!2d-73.984083684775!3d40.753182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a496344371%3A0xbe8d60ea520bc6!2sNew%20York%20Public%20Library!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus",
  googleReviewUrl: "",
  instagramUrl: "",
  facebookUrl: "",
};

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  if (/x/i.test(siteConfig.whatsappNumber)) {
    return "#consultation";
  }

  const phoneNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(phone = siteConfig.phone) {
  if (/x/i.test(phone)) {
    return "#consultation";
  }

  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function getMailtoUrl(email = siteConfig.email) {
  return `mailto:${email}`;
}
