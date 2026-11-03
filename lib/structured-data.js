import { clinicBranches, getMapsSearchUrl, siteConfig } from "@/data/site";

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
    hasMap: siteConfig.googleMapsUrl,
    location: clinicBranches.map((branch) => ({
      "@type": "Place",
      name: `${branch.place}, ${branch.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${branch.place}, ${branch.address}`,
        addressLocality: branch.city,
        addressCountry: "PK",
      },
      hasMap: getMapsSearchUrl(branch.mapsQuery),
    })),
    openingHours: siteConfig.workingHours,
  };
}
