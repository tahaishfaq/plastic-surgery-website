import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import HighlightedWord from "@/components/ui/HighlightedWord";
import { whyChooseContent } from "@/data/whyChoose";

export default function WhyChooseSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-ink px-5 py-16 text-white sm:px-10 lg:px-14 lg:py-24 xl:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {whyChooseContent.eyebrow}
          </p>
          <h2 className="mt-6 max-w-xl font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem]">
            <HighlightedWord tone="dark">Why</HighlightedWord> Choose Rahman Plastic Surgery
          </h2>

          <ul className="mt-10 max-w-lg space-y-4 border-t border-white/15 pt-10">
            {whyChooseContent.reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-base leading-7 text-white/88">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Button href={whyChooseContent.cta.href} variant="light" className="rounded-none px-6">
              {whyChooseContent.cta.label}
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-[640px]">
          <Image
            src={whyChooseContent.image.src}
            alt={whyChooseContent.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
