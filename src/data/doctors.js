export const doctorsPageContent = {
  isFinalized: false,
  hero: {
    title: "Our Surgeons",
    description:
      "Meet the clinical team behind Rahman Plastic Surgery. Bios and credentials below are provisional until client-approved photography and credentials are supplied.",
  },
  placeholderNote:
    "Team photography and credential details are placeholders. Final bios require client review and approval before launch.",
};

export const doctors = [
  {
    id: "lead-surgeon",
    name: "Dr. [Name Pending]",
    role: "Lead Plastic Surgeon",
    credentials: "Credentials pending client approval",
    bio: "Provisional bio placeholder. The lead surgeon profile will include board certification, training background, areas of focus, and languages spoken once approved by the clinic.",
    image: {
      src: "/images/placeholders/team/clinic-team.svg",
      alt: "Surgeon profile placeholder",
    },
  },
  {
    id: "associate-surgeon",
    name: "Dr. [Name Pending]",
    role: "Associate Plastic Surgeon",
    credentials: "Credentials pending client approval",
    bio: "Provisional bio placeholder. Associate surgeon details will be updated with verified training, specialties, and consultation availability.",
    image: {
      src: "/images/placeholders/team/why-choose.svg",
      alt: "Associate surgeon profile placeholder",
    },
  },
];
