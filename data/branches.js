import { clinicBranches, getMapsSearchUrl } from "@/data/site";

export const branchesShowcaseContent = {
  eyebrow: "Clinic Network",
  title: "Our Branches Across Pakistan",
  description: "Consultations are available at our Islamabad, Lahore, and Multan branches.",
};

export const branchShowcaseItems = clinicBranches.map((branch) => ({
  ...branch,
  landmark: branch.place,
  href: getMapsSearchUrl(branch.mapsQuery),
  note: "Consultations and procedures available now.",
}));
