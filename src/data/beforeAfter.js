export const caseStudyImages = {
  tummyTuckBefore: "/images/case studies/tummy-tuck-before.png",
  tummyTuckAfter: "/images/case studies/tummy-tuck-after.png",
  lipo360Before: "/images/case studies/lipo-360-before.png",
  lipo360After: "/images/case studies/lipo-360-after.png",
  mommyMakeoverBefore: "/images/case studies/mommy-makeover-before.png",
  mommyMakeoverAfter: "/images/case studies/mommy-makeover-after.png",
  brachioplastyBefore: "/images/case studies/Brachioplasty%20Before.png",
  brachioplastyAfter: "/images/case studies/Brachioplasty%20After.png",
};

export const beforeAfterCategories = [
  { id: "tummy-tuck", label: "Tummy Tuck" },
  { id: "liposuction", label: "Liposuction" },
  { id: "lipo-360", label: "Lipo 360" },
  { id: "mommy-makeover", label: "Mommy Makeover" },
  { id: "brachioplasty", label: "Brachioplasty" },
];

export const beforeAfterGallery = [
  {
    id: "tt-01",
    category: "tummy-tuck",
    title: "Tummy tuck body contouring",
    description:
      "A patient-focused abdominoplasty plan addressing excess abdominal skin and waistline definition. Individual results vary based on anatomy, goals, and recovery.",
    before: {
      src: caseStudyImages.tummyTuckBefore,
      alt: "Before tummy tuck body contouring",
      width: 800,
      height: 1000,
    },
    after: {
      src: caseStudyImages.tummyTuckAfter,
      alt: "After tummy tuck body contouring result",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "lipo-01",
    category: "liposuction",
    title: "Liposuction contouring",
    description:
      "Targeted fat reduction to refine body proportion in areas selected during surgeon assessment. Outcomes depend on skin quality, lifestyle, and healing.",
    before: {
      src: caseStudyImages.lipo360Before,
      alt: "Before liposuction body contouring",
      width: 800,
      height: 1000,
    },
    after: {
      src: caseStudyImages.lipo360After,
      alt: "After liposuction body contouring result",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "l360-01",
    category: "lipo-360",
    title: "Lipo 360 midsection refinement",
    description:
      "Circumferential contouring of the abdomen, waist, and flanks to create a more balanced silhouette. Final results continue to refine as swelling reduces.",
    before: {
      src: caseStudyImages.lipo360Before,
      alt: "Before Lipo 360 body contouring",
      width: 800,
      height: 1000,
    },
    after: {
      src: caseStudyImages.lipo360After,
      alt: "After Lipo 360 body contouring result",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "mm-01",
    category: "mommy-makeover",
    title: "Mommy makeover combination plan",
    description:
      "A personalized combination of procedures designed around post-pregnancy body concerns. Suitability and recovery are discussed during private consultation.",
    before: {
      src: caseStudyImages.mommyMakeoverBefore,
      alt: "Before mommy makeover consultation",
      width: 800,
      height: 1000,
    },
    after: {
      src: caseStudyImages.mommyMakeoverAfter,
      alt: "After mommy makeover result",
      width: 800,
      height: 1000,
    },
  },
  {
    id: "brach-01",
    category: "brachioplasty",
    title: "Brachioplasty arm contouring",
    description:
      "Upper arm contouring to address excess skin and improve arm shape after weight change or aging. Outcomes vary based on skin quality, healing, and surgical plan.",
    before: {
      src: caseStudyImages.brachioplastyBefore,
      alt: "Before brachioplasty arm contouring",
      width: 800,
      height: 1000,
    },
    after: {
      src: caseStudyImages.brachioplastyAfter,
      alt: "After brachioplasty arm contouring result",
      width: 800,
      height: 1000,
    },
  },
];

export const beforeAfterContent = {
  eyebrow: "Real Patient Results",
  title: "Before & After Gallery",
  description:
    "Explore selected transformation results across our most requested procedures. Each case is unique, and outcomes vary based on anatomy, goals, and recovery.",
  cta: {
    label: "Case Studies",
    href: "/case-studies",
  },
};
