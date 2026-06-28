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
  lat: 33.6974206,
  lng: 73.0497688,
  zoom: 19,
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
  googleMapsUrl:
    "https://www.google.com/maps/place/Rahman+Plastic+Surgery/@33.6974206,73.0497688,19z/data=!3m1!4b1!4m6!3m5!1s0x38dfbf0069753beb:0x8c310c74423cc8de!8m2!3d33.6974206!4d73.0497688!16s%2Fg%2F11n4vmsx17",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.8!2d73.0497688!3d33.6974206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf0069753beb%3A0x8c310c74423cc8de!2sRahman%20Plastic%20Surgery!5e0!3m2!1sen!2spk!5m2!1sen!2spk",
  googleReviewUrl: "",
  youtubeUrl: "https://youtube.com/@abhdtv1?si=0GoJfbNc7S2holm2",
  tiktokUrl: "https://www.tiktok.com/@abhdtv?_r=1&_t=ZS-97XI376Q5u0",
  facebookUrl: "https://www.facebook.com/share/14gDMLXWPAe/?mibextid=wwXIfr",
  instagramUrl: "https://www.instagram.com/rahman_plasticsurgery?igsh=MTE2eTRrejFycHJ6dg==",
};

export const socialLinks = [
  {
    id: "youtube",
    label: "YouTube",
    href: siteConfig.youtubeUrl,
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: siteConfig.tiktokUrl,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: siteConfig.facebookUrl,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: siteConfig.instagramUrl,
  },
];

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
