import JourneyTimeline from "@/components/ui/JourneyTimeline";
import SectionHeading from "@/components/ui/SectionHeading";
import { journeyStepsContent } from "@/data/journeySteps";

export default function FiveStepJourneySection() {
  return (
    <section id="patient-journey" className="scroll-mt-24 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading
          eyebrow={journeyStepsContent.eyebrow}
          title={journeyStepsContent.title}
          description={journeyStepsContent.description}
        />

        <JourneyTimeline steps={journeyStepsContent.steps} />

      </div>
    </section>
  );
}
