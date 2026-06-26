import SiteShell from "@/components/layout/SiteShell";
import CaseStudiesGallery from "@/components/sections/CaseStudiesGallery";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Case Studies | Rahman Plastic Surgery",
  description:
    "Browse selected before and after case studies across tummy tuck, liposuction, Lipo 360, and mommy makeover procedures. Individual results vary.",
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">Patient Results</p>
          <h1 className="mt-5 max-w-2xl font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
            Case Studies
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
            Explore selected transformation results. Each case is unique, and outcomes vary based on anatomy, goals, and
            recovery.
          </p>
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <CaseStudiesGallery />

          <div className="mt-16 border-t border-brand-line pt-10">
            <p className="max-w-3xl text-sm leading-7 text-brand-muted">
              Images are illustrative until all patient photography receives written consent. Results vary by individual.
              This gallery does not replace a private medical consultation.
            </p>
            <div className="mt-8">
              <Button href="/contact#consultation">Request a Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
