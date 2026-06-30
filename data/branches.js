import { getGoogleMapsUrl } from "@/data/site";

function branchImage(photoId) {
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=900&h=900&q=85`;
}

export const branchesShowcaseContent = {
  eyebrow: "Clinic Network",
  title: "Our Branches Across Pakistan",
  description:
    "Consultations are available at our Islamabad main branch today. Lahore and Karachi locations are opening soon.",
};

export const branchShowcaseItems = [
  {
    id: "islamabad",
    city: "Islamabad",
    label: "Main Branch",
    landmark: "Faisal Mosque",
    status: "open",
    address: "G-8 Markaz",
    region: "Islamabad, Pakistan",
    note: "Consultations and procedures available now.",
    image: branchImage("1764697758403-83229fd73fb0"),
    imageAlt: "Faisal Mosque, Islamabad",
    href: getGoogleMapsUrl(),
  },
  {
    id: "lahore",
    city: "Lahore",
    label: "Lahore Branch",
    landmark: "Badshahi Mosque",
    status: "coming-soon",
    note: "Opening soon. Contact us for launch updates.",
    image: branchImage("1603491656337-3b491147917c"),
    imageAlt: "Badshahi Mosque, Lahore",
  },
  {
    id: "karachi",
    city: "Karachi",
    label: "Karachi Branch",
    landmark: "Mazar-e-Quaid",
    status: "coming-soon",
    note: "Opening soon. Contact us for launch updates.",
    image: branchImage("1606511490662-b2c5be7d95a1"),
    imageAlt: "Mazar-e-Quaid, Karachi",
  },
];
