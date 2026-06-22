import Button from "@/components/ui/Button";
import RecoveryRoadmap from "@/components/ui/RecoveryRoadmap";
import { recoveryJourneyContent } from "@/data/recoveryJourney";

export default function RecoveryJourneySection() {
  return (
    <section id="recovery-journey" className="scroll-mt-24 bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              {recoveryJourneyContent.eyebrow}
            </p>
            <h2 className="mt-5 max-w-lg font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.25rem]">
              {recoveryJourneyContent.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-brand-body sm:text-lg">
              {recoveryJourneyContent.description}
            </p>

            <div className="mt-8">
              <Button href={recoveryJourneyContent.cta.href}>{recoveryJourneyContent.cta.label}</Button>
            </div>
          </div>

          <RecoveryRoadmap steps={recoveryJourneyContent.steps} />
        </div>
      </div>
    </section>
  );
}
