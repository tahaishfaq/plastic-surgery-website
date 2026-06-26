import { clinicCoordinates, siteConfig } from "@/data/site";

export function getMedicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    telephone: siteConfig.phones.map((phone) => `+${phone.e164}`),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicCoordinates.lat,
      longitude: clinicCoordinates.lng,
    },
    openingHours: siteConfig.workingHours,
  };
}
