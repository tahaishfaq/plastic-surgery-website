import JourneyGalleryChapters from "@/components/ui/JourneyGalleryChapters";
import { patientJourneyGalleryContent } from "@/data/patientJourneyGallery";

export default function PatientJourneyGallerySection() {
  const { title, description, steps } = patientJourneyGalleryContent;

  return (
    <section
      id="patient-journey-gallery"
      className="scroll-mt-24 bg-brand-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <header className="max-w-2xl">
          <h2 className="font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-body sm:text-lg">{description}</p>
        </header>

        <JourneyGalleryChapters steps={steps} />
      </div>
    </section>
  );
}
