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
    { label: "Book Consultation", href: "/contact#consultation", variant: "primary" },
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

export const mommyMakeoverDetail = {
  id: "mommy-makeover",
  eyebrow: "Combination Care",
  title: "Mommy Makeover",
  subtitle:
    "A personalized combination of procedures designed to address post-pregnancy body changes with surgeon-led planning.",
  image: procedureImages.mommyMakeover,
  alt: "Premium mommy makeover consultation",
  blocks: [
    {
      heading: "What is a Mommy Makeover?",
      body: "A mommy makeover is a customized surgical plan that may combine procedures such as tummy tuck, liposuction, and breast surgery. The goal is to address body changes after pregnancy, breastfeeding, or significant weight fluctuation.",
    },
    {
      heading: "Who may benefit?",
      body: "Patients seeking to restore abdominal contour, address excess skin, or improve breast shape after pregnancy may explore this option. Final suitability depends on health history, goals, and surgeon assessment.",
    },
  ],
  benefits: [
    "Combines multiple concerns in one coordinated plan",
    "Addresses abdominal and breast changes together",
    "Supports post-pregnancy body confidence goals",
    "Personalized based on anatomy and recovery capacity",
    "Surgeon-led sequencing of procedures",
    "Recovery guidance tailored to the combination plan",
  ],
  recoveryTimeline: [
    {
      period: "Week 1",
      detail: "Rest, swelling management, and limited movement with close post-operative monitoring.",
    },
    {
      period: "Weeks 2-4",
      detail: "Gradual return to light daily activity based on surgeon guidance and healing progress.",
    },
    {
      period: "Weeks 4-8",
      detail: "Activity restrictions ease as swelling reduces and incisions continue to heal.",
    },
    {
      period: "After 8 Weeks",
      detail: "Results continue to refine. Final timeline varies based on procedures included in the plan.",
    },
  ],
  faqs: [
    {
      question: "Which procedures can be included?",
      answer:
        "Common combinations may include tummy tuck, liposuction, and breast procedures. The surgeon recommends a plan based on your goals and medical assessment.",
    },
    {
      question: "Is recovery longer than a single procedure?",
      answer:
        "Recovery may involve more downtime when multiple procedures are combined. The surgeon provides a personalized timeline during consultation.",
    },
    {
      question: "When can I resume exercise?",
      answer:
        "Activity clearance depends on healing progress and the procedures performed. Follow surgeon guidance before returning to strenuous exercise.",
    },
  ],
};

export const breastSurgeryDetail = {
  id: "breast-procedures",
  eyebrow: "Aesthetic Surgery",
  title: "Breast Surgery",
  subtitle:
    "Surgical options focused on improving breast shape, proportion, balance, and aesthetic harmony.",
  image: procedureImages.breastProcedure,
  alt: "Luxury breast surgery consultation",
  blocks: [
    {
      heading: "Procedure Options",
      body: "Breast surgery may include augmentation, reduction, lift, or revision depending on patient goals. Each approach is discussed during private consultation with the surgeon.",
    },
    {
      heading: "Consultation Focus",
      body: "The surgeon reviews anatomy, symmetry, skin quality, and lifestyle factors to recommend an approach aligned with realistic expectations and recovery capacity.",
    },
  ],
  benefits: [
    "Improves breast proportion and balance",
    "Addresses shape concerns after pregnancy or weight change",
    "Supports clothing fit and body confidence goals",
    "Personalized implant or lift recommendations when appropriate",
    "Surgeon-led incision and scar planning",
    "Recovery guidance based on procedure type",
  ],
  recoveryTimeline: [
    {
      period: "Week 1",
      detail: "Rest, swelling management, and limited arm movement as directed by the surgical team.",
    },
    {
      period: "Weeks 2-3",
      detail: "Light daily activity may resume. Compression or support garments are typically worn as advised.",
    },
    {
      period: "Weeks 4-6",
      detail: "Gradual return to more activity based on healing and surgeon clearance.",
    },
    {
      period: "After 6 Weeks",
      detail: "Results continue to settle as swelling reduces. Final shape may take additional time to refine.",
    },
  ],
  faqs: [
    {
      question: "How do I choose the right procedure?",
      answer:
        "The surgeon evaluates your goals, anatomy, and health history to recommend augmentation, lift, reduction, or a combination approach.",
    },
    {
      question: "Will scars be visible?",
      answer:
        "Surgical scars are expected. Incision placement and scar care are discussed during consultation with realistic expectations.",
    },
    {
      question: "How long before final results?",
      answer:
        "Initial results are visible after swelling reduces, but final shape may continue to refine over several months.",
    },
  ],
};

export const gynecomastiaDetail = {
  id: "gynecomastia",
  title: "Gynecomastia",
  subtitle:
    "Male chest contouring designed to reduce excess chest tissue and improve chest appearance.",
  image: procedureImages.pending,
  alt: "Premium gynecomastia consultation",
  blocks: [
    {
      heading: "What is Gynecomastia Surgery?",
      body: "Gynecomastia surgery addresses enlarged male breast tissue that may cause discomfort or self-consciousness. Treatment may involve liposuction, gland removal, or a combination based on tissue type.",
    },
    {
      heading: "Who is a candidate?",
      body: "Men with persistent chest fullness despite lifestyle changes may explore surgical options. Health history, medication use, and tissue composition are reviewed during consultation.",
    },
  ],
  benefits: [
    "Reduces excess chest tissue",
    "Improves chest contour and definition",
    "May address discomfort from enlarged tissue",
    "Supports clothing fit and confidence goals",
    "Personalized approach for fatty vs. glandular tissue",
    "Recovery guidance from the surgical team",
  ],
  recoveryTimeline: [
    {
      period: "Week 1",
      detail: "Rest, compression garment use, and limited upper-body activity.",
    },
    {
      period: "Weeks 2-3",
      detail: "Light daily activity may resume. Swelling and bruising gradually improve.",
    },
    {
      period: "Weeks 4-6",
      detail: "More activity may be permitted based on surgeon assessment and healing.",
    },
    {
      period: "After 6 Weeks",
      detail: "Chest contour continues to refine as swelling subsides.",
    },
  ],
  faqs: [
    {
      question: "Is liposuction enough?",
      answer:
        "Some patients benefit from liposuction alone, while others require glandular tissue removal. The surgeon determines the appropriate technique during assessment.",
    },
    {
      question: "Are results permanent?",
      answer:
        "Results are intended to be long-lasting, but weight changes, medications, or hormonal factors can affect chest appearance over time.",
    },
    {
      question: "When can I return to the gym?",
      answer:
        "Upper-body exercise is typically restricted for several weeks. The surgeon provides clearance based on your recovery progress.",
    },
  ],
  resultsNote:
    "Illustrative imagery pending client-approved photography. Individual results vary based on tissue type, healing, and surgical plan.",
};

export const faceProceduresDetail = {
  id: "face-procedures",
  title: "Face Procedures",
  subtitle:
    "Aesthetic facial procedures focused on facial balance, refinement, and rejuvenation.",
  image: procedureImages.pending,
  alt: "Luxury aesthetic face procedure consultation",
  blocks: [
    {
      heading: "Treatment Scope",
      body: "Facial aesthetic procedures may address concerns such as skin laxity, contour imbalance, or signs of aging. Options are discussed based on goals, anatomy, and recovery preferences.",
    },
    {
      heading: "Consultation Approach",
      body: "The surgeon reviews facial structure, skin quality, and patient expectations to recommend a conservative, natural-looking plan with clear recovery guidance.",
    },
  ],
  benefits: [
    "Addresses facial balance and proportion",
    "Supports rejuvenation goals with surgeon-led planning",
    "Personalized approach based on facial anatomy",
    "Recovery expectations discussed before treatment",
    "Focus on natural-looking refinement",
    "Follow-up care from the clinical team",
  ],
  recoveryTimeline: [
    {
      period: "Days 1-7",
      detail: "Rest, swelling management, and activity restrictions based on procedure type.",
    },
    {
      period: "Weeks 2-3",
      detail: "Gradual return to social and work activity as swelling and bruising improve.",
    },
    {
      period: "Weeks 4-6",
      detail: "Activity restrictions ease. Results become more visible as healing progresses.",
    },
    {
      period: "After 6 Weeks",
      detail: "Final refinement continues over time. Timeline varies by procedure and individual healing.",
    },
  ],
  faqs: [
    {
      question: "Which facial procedures are offered?",
      answer:
        "Available options depend on surgeon assessment and clinic scope. Specific procedures are confirmed during private consultation.",
    },
    {
      question: "How long is recovery?",
      answer:
        "Recovery varies widely by procedure. The surgeon provides a personalized timeline based on your treatment plan.",
    },
    {
      question: "Will results look natural?",
      answer:
        "Treatment planning prioritizes balanced, natural-looking outcomes. Realistic expectations are discussed during consultation.",
    },
  ],
  resultsNote:
    "Illustrative imagery pending client-approved photography. Outcomes vary based on procedure type, anatomy, and healing.",
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
  buttonHref: "/contact#consultation",
  trustLine: "Private assessment • Surgeon-led planning • Recovery guidance",
};
