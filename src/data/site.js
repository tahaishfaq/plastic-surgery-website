export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Rahman Plastic Surgery, I would like to book a consultation and learn more about your procedures.";

export const contactPhones = [
  {
    id: "whatsapp",
    display: "0312 411 6784",
    e164: "923124116784",
    isWhatsApp: true,
  },
  {
    id: "phone-2",
    display: "0308 832 7000",
    e164: "923088327000",
  },
  {
    id: "phone-3",
    display: "0311 772 3331",
    e164: "923117723331",
  },
];

export const clinicCoordinates = {
  lat: 33.697471618652344,
  lng: 73.04971313476562,
  zoom: 17,
};

export const clinicBranches = [
  {
    id: "islamabad",
    city: "Islamabad",
    label: "Main Branch",
    status: "open",
    address: "G-8 Markaz",
    region: "Islamabad, Pakistan",
  },
  {
    id: "lahore",
    city: "Lahore",
    status: "coming-soon",
  },
  {
    id: "multan",
    city: "Multan",
    status: "coming-soon",
  },
  {
    id: "karachi",
    city: "Karachi",
    status: "coming-soon",
  },
];

export const siteConfig = {
  name: "Rahman Plastic Surgery",
  tagline: "Precision care. Natural-looking confidence.",
  phone: contactPhones[0].display,
  phones: contactPhones,
  whatsappNumber: contactPhones[0].e164,
  email: "info@rahmanplasticsurgery.com",
  address: "G-8 Markaz",
  city: "Islamabad, Pakistan",
  workingHours: "Mon-Sat, 10:00 AM-7:00 PM",
  hoursNote: "Consultations by appointment",
  mapOverlay: {
    label: "Main Branch",
    address: "G-8 Markaz",
    city: "Islamabad, Pakistan",
  },
  googleMapsUrl: `https://www.google.com/maps?q=${clinicCoordinates.lat},${clinicCoordinates.lng}&z=${clinicCoordinates.zoom}&hl=en`,
  googleMapsEmbedUrl: `https://maps.google.com/maps?q=${clinicCoordinates.lat},${clinicCoordinates.lng}&z=${clinicCoordinates.zoom}&hl=en&output=embed`,
  googleReviewUrl: "",
  instagramUrl: "",
  facebookUrl: "",
};

export function getGoogleMapsUrl() {
  return siteConfig.googleMapsUrl;
}

export function getWhatsAppPhone() {
  return contactPhones.find((phone) => phone.isWhatsApp) ?? contactPhones[0];
}

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  const phoneNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(phone = siteConfig.phone) {
  const entry =
    typeof phone === "object"
      ? phone
      : contactPhones.find((item) => item.display === phone || item.e164 === phone || item.id === phone) ??
        contactPhones[0];

  return `tel:+${entry.e164}`;
}

export function getMailtoUrl(email = siteConfig.email) {
  return `mailto:${email}`;
}

export function getMainBranch() {
  return clinicBranches.find((branch) => branch.status === "open") ?? clinicBranches[0];
}
