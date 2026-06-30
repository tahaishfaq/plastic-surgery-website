import BranchesShowcase from "@/components/ui/BranchesShowcase";
import { branchesShowcaseContent } from "@/data/branches";
import { ClinicMapEmbed } from "@/components/ui/ClinicLocationPanel";

export default function LocationMapSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {branchesShowcaseContent.eyebrow}
          </p>
          <h2 className="mt-5 font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            {branchesShowcaseContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-body">{branchesShowcaseContent.description}</p>
        </div>

        <BranchesShowcase className="mt-10" />
      </div>

      <div className="mt-10 border-t border-brand-line">
        <ClinicMapEmbed />
      </div>
    </section>
  );
}
