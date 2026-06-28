import Button from "@/components/ui/Button";
import ProceduresSlider from "@/components/ui/ProceduresSlider";
import {
  homepageProcedureCards,
  homepageProceduresContent,
} from "@/data/featuredProcedures";

function SectionEyebrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 text-brand-primary"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="3" r="2" />
      <circle cx="3" cy="8" r="2" />
      <circle cx="13" cy="8" r="2" />
      <circle cx="8" cy="13" r="2" />
    </svg>
  );
}

export default function FeaturedProceduresSection() {
  const { cta } = homepageProceduresContent;

  return (
    <section id="procedures" className="scroll-mt-24 bg-white pt-24 lg:pt-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
             
              {homepageProceduresContent.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.35rem]">
              {homepageProceduresContent.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-body sm:text-lg">
              {homepageProceduresContent.description}
            </p>
          </div>

          <div className="shrink-0 lg:pb-1">
            <Button href={cta.href} variant="soft">
              {cta.label}
            </Button>
          </div>
        </div>
      </div>

      <ProceduresSlider cards={homepageProcedureCards} />
    </section>
  );
}
