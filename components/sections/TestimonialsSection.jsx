import TestimonialVideoSlider from "@/components/ui/TestimonialVideoSlider";
import { testimonialsContent } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {testimonialsContent.eyebrow}
          </p>
          <h2 className="mt-5 font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.25rem]">
            {testimonialsContent.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-brand-body sm:text-lg">
            {testimonialsContent.description}
          </p>
        </div>

        <TestimonialVideoSlider slides={testimonialsContent.slides} />
      </div>
    </section>
  );
}
