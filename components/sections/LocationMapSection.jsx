import HomepageBranchMap from "@/components/sections/HomepageBranchMap";
import { branchesShowcaseContent } from "@/data/branches";

export default function LocationMapSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-[1280px] px-5 pt-12 sm:px-8 lg:px-12 lg:pt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {branchesShowcaseContent.eyebrow}
          </p>
          <h2 className="mt-5 font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            {branchesShowcaseContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-body">{branchesShowcaseContent.description}</p>
        </div>
      </div>

      <HomepageBranchMap />
    </section>
  );
}
