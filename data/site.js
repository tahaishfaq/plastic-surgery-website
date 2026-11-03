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

export function getMapsSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function getMapsEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}

export const clinicBranches = [
  {
    id: "islamabad",
    city: "Islamabad",
    label: "Main Branch",
    place: "Defence Medical Complex",
    status: "open",
    address: "Sector F, DHA Phase 7",
    region: "Islamabad, Pakistan",
    mapsQuery: "Defence Medical Complex, Sector F DHA Phase 7, Islamabad",
    image: "/images/branches/defence-medical-complex.png",
    imagePosition: "object-top",
    imageAlt: "Exterior of Defence Medical Complex in Sector F, DHA Phase 7, Islamabad.",
  },
  {
    id: "lahore",
    city: "Lahore",
    label: "Lahore Branch",
    place: "MSK Dialysis & Medical Complex",
    status: "open",
    address: "Johar Town",
    region: "Lahore, Pakistan",
    mapsQuery: "MSK Dialysis and Medical Complex, Johar Town, Lahore",
    image: "/images/branches/MSK-hsp.png",
    imagePosition: "object-center",
    imageAlt: "Exterior of MSK Dialysis and Medical Complex in Johar Town, Lahore.",
  },
  {
    id: "multan",
    city: "Multan",
    label: "Multan Branch",
    place: "Mughal General Hospital",
    status: "open",
    address: "Nishtar Road, Al-Raheem Colony",
    region: "Multan, Pakistan",
    mapsQuery: "Mughal General Hospital, Nishtar Road, Al-Raheem Colony, Multan",
    image: "/images/branches/mughal-general-hsp.png",
    imagePosition: "object-center",
    imageAlt: "Exterior of Mughal General Hospital on Nishtar Road, Al-Raheem Colony, Multan.",
  },
];

export const siteConfig = {
  name: "Rahman Plastic Surgery",
  tagline: "Precision care. Natural-looking confidence.",
  phone: contactPhones[0].display,
  phones: contactPhones,
  whatsappNumber: contactPhones[0].e164,
  email: "info@rahmanplasticsurgery.com",
  address: "Defence Medical Complex, Sector F, DHA Phase 7",
  city: "Islamabad, Pakistan",
  workingHours: "Mon-Sat, 10:00 AM-7:00 PM",
  hoursNote: "Consultations by appointment",
  mapOverlay: {
    label: "Main Branch",
    address: "Defence Medical Complex, Sector F, DHA Phase 7",
    city: "Islamabad, Pakistan",
  },
  googleMapsUrl: getMapsSearchUrl("Defence Medical Complex, Sector F DHA Phase 7, Islamabad"),
  googleMapsEmbedUrl: getMapsEmbedUrl("Defence Medical Complex, Sector F DHA Phase 7, Islamabad"),
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
