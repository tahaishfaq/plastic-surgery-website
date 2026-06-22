export const procedureImages = {
  tummyTuck: "/images/procedures/tummy-tuck.png",
  liposuction: "/images/procedures/liposuction.jpg",
  mommyMakeover: "/images/procedures/mommy-makeover.png",
  breastProcedure: "/images/procedures/breast-procedure.png",
  pending: "/images/placeholders/og-placeholder.svg",
};

export const homepageProceduresContent = {
  eyebrow: "Signature Procedures",
  title: "Featured Procedures",
  description:
    "Explore our most requested plastic surgery procedures, designed to help patients achieve refined, natural-looking body confidence.",
  cta: {
    label: "View All Procedures",
    href: "/featured-procedures",
  },
};

export const homepageProcedureCards = [
  {
    id: "tummy-tuck",
    category: "Body Contouring",
    title: "Tummy Tuck",
    description:
      "Remove excess abdominal skin and refine waistline definition with a surgeon-led body contouring plan.",
    image: procedureImages.tummyTuck,
    alt: "Luxury plastic surgery consultation for tummy tuck body contouring",
    href: "/featured-procedures#tummy-tuck",
  },
  {
    id: "lipo-360",
    category: "Body Sculpting",
    title: "Liposuction / Lipo 360",
    description:
      "Target stubborn fat areas and enhance overall body shape with advanced contouring techniques.",
    image: procedureImages.liposuction,
    alt: "Premium body contouring consultation for liposuction and Lipo 360",
    href: "/featured-procedures#lipo-360",
  },
  {
    id: "mommy-makeover",
    category: "Post-Pregnancy Contouring",
    title: "Mommy Makeover",
    description:
      "A personalized combination of procedures to help restore body confidence after pregnancy or weight changes.",
    image: procedureImages.mommyMakeover,
    alt: "Premium consultation for mommy makeover plastic surgery",
    href: "/featured-procedures#mommy-makeover",
  },
  {
    id: "breast-procedures",
    category: "Aesthetic Surgery",
    title: "Breast Procedures",
    description:
      "Surgical options designed to improve breast shape, proportion, balance, and aesthetic harmony.",
    image: procedureImages.breastProcedure,
    alt: "Luxury plastic surgery consultation for breast procedures",
    href: "/featured-procedures#breast-procedures",
  },
];

export const proceduresPageHero = {
  eyebrow: "Surgical Procedure Guide",
  title: "Featured Plastic Surgery Procedures",
  description:
    "Explore our most requested body contouring and cosmetic surgery procedures, including treatment goals, recovery expectations, and consultation guidance.",
  image: procedureImages.tummyTuck,
  alt: "Luxury plastic surgery consultation room for featured procedures",
  ctas: [
    { label: "Book Consultation", href: "/#consultation", variant: "primary" },
    { label: "View Tummy Tuck", href: "#tummy-tuck", variant: "outline" },
  ],
};

export const proceduresStickyNav = [
  { label: "Tummy Tuck", href: "#tummy-tuck" },
  { label: "Lipo 360", href: "#lipo-360" },
  { label: "Mommy Makeover", href: "#mommy-makeover" },
  { label: "Breast Surgery", href: "#breast-procedures" },
  { label: "Gynecomastia", href: "#gynecomastia" },
  { label: "Face Procedures", href: "#face-procedures" },
];

export const tummyTuckDetail = {
  id: "tummy-tuck",
  eyebrow: "Main Focus",
  title: "Tummy Tuck",
  subtitle:
    "A surgeon-led body contouring procedure focused on improving abdominal shape, excess skin, and waistline definition.",
  image: procedureImages.tummyTuck,
  alt: "Luxury consultation for tummy tuck procedure",
  blocks: [
    {
      heading: "What is Tummy Tuck?",
      body: "A tummy tuck, also known as abdominoplasty, is a body contouring procedure designed to remove excess abdominal skin and improve the appearance of the waistline. The procedure may also address abdominal contour concerns after pregnancy, aging, or significant weight changes.",
    },
    {
      heading: "Who is a good candidate?",
      body: "This procedure may be suitable for patients with loose abdominal skin, weakened abdominal muscles, or body changes after pregnancy or weight loss. Final suitability is determined after an in-person or virtual consultation with the surgeon.",
    },
  ],
  benefits: [
    "Removes excess abdominal skin",
    "Improves abdominal contour",
    "Helps refine waistline shape",
    "Can support post-pregnancy body goals",
    "Can support post-weight-loss body contouring goals",
    "Creates a more structured and balanced abdominal appearance",
  ],
  recoveryTimeline: [
    {
      period: "Week 1",
      detail: "Rest, swelling management, limited movement, and close post-operative care.",
    },
    {
      period: "Weeks 2-3",
      detail: "Light daily activity may gradually resume depending on surgeon guidance.",
    },
    {
      period: "Weeks 4-6",
      detail: "Recovery improves and the surgeon may allow more activity based on healing progress.",
    },
    {
      period: "After 6 Weeks",
      detail: "Results continue to refine as swelling reduces. Final recovery varies from patient to patient.",
    },
  ],
  faqs: [
    {
      question: "Is tummy tuck a weight loss surgery?",
      answer:
        "No. A tummy tuck is not a weight loss procedure. It is a body contouring surgery designed to address excess skin and abdominal contour concerns.",
    },
    {
      question: "How long does recovery take?",
      answer:
        "Recovery varies for each patient, but many patients need several weeks for swelling, movement, and activity levels to improve. The surgeon will provide personalized recovery guidance.",
    },
    {
      question: "Will there be scars?",
      answer:
        "Yes, surgical scars are expected with tummy tuck surgery. The surgeon discusses incision placement, scar care, and realistic expectations during consultation.",
    },
    {
      question: "Can tummy tuck be combined with liposuction?",
      answer:
        "In some cases, tummy tuck may be combined with liposuction depending on the patient's anatomy, goals, and surgeon assessment.",
    },
  ],
};

export const lipo360Detail = {
  id: "lipo-360",
  eyebrow: "Main Focus",
  title: "Liposuction / Lipo 360",
  subtitle:
    "Advanced body contouring designed to target stubborn fat areas and enhance overall body shape.",
  image: procedureImages.liposuction,
  alt: "Premium body contouring consultation for Liposuction and Lipo 360",
  blocks: [
    {
      heading: "Areas Treated",
      body: "Liposuction can target stubborn fat areas such as the abdomen, waist, flanks, back, arms, thighs, and chin depending on surgeon assessment.",
    },
    {
      heading: "Procedure Details",
      body: "Lipo 360 focuses on contouring the midsection from multiple angles, including the abdomen, waist, flanks, and back area. The goal is to create a more balanced and refined body contour.",
    },
    {
      heading: "Recovery",
      body: "Patients may experience swelling, bruising, and temporary discomfort after treatment. Compression garments and follow-up care are usually part of recovery guidance.",
    },
    {
      heading: "Results",
      body: "Results gradually become more visible as swelling reduces. Final outcome depends on healing, skin quality, lifestyle, and the treatment plan recommended by the surgeon.",
    },
  ],
  resultsNote:
    "Individual results vary. A consultation is required to understand suitability, expected recovery, and realistic outcomes.",
};

export const additionalProceduresPage = {
  title: "Additional Procedures",
  description:
    "Explore other surgical options that may be recommended based on your goals, anatomy, and consultation.",
  cards: [
    {
      id: "mommy-makeover",
      title: "Mommy Makeover",
      description: "A personalized combination of procedures designed around post-pregnancy body concerns.",
      image: procedureImages.mommyMakeover,
      alt: "Premium mommy makeover consultation",
      href: "/#consultation",
    },
    {
      id: "breast-procedures",
      title: "Breast Surgery",
      description: "Options focused on improving breast shape, proportion, and balance.",
      image: procedureImages.breastProcedure,
      alt: "Luxury breast surgery consultation",
      href: "/#consultation",
    },
    {
      id: "gynecomastia",
      title: "Gynecomastia",
      description:
        "Male chest contouring procedure designed to reduce excess chest tissue and improve chest appearance.",
      image: procedureImages.pending,
      alt: "Premium gynecomastia consultation",
      href: "/#consultation",
    },
    {
      id: "face-procedures",
      title: "Face Procedures",
      description: "Aesthetic facial procedures focused on facial balance, refinement, and rejuvenation.",
      image: procedureImages.pending,
      alt: "Luxury aesthetic face procedure consultation",
      href: "/#consultation",
    },
  ],
};

export const proceduresPageCta = {
  title: "Ready to Discuss Your Procedure?",
  description:
    "Start with a private consultation and receive surgeon-led guidance based on your goals, anatomy, and recovery expectations.",
  buttonLabel: "Request a Consultation",
  buttonHref: "/#consultation",
  trustLine: "Private assessment • Surgeon-led planning • Recovery guidance",
};
