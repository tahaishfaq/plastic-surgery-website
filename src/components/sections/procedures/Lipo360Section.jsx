import Image from "next/image";
import { lipo360Detail } from "@/data/featuredProcedures";

export default function Lipo360Section() {
  return (
    <section id={lipo360Detail.id} className="scroll-mt-40 bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-brand-line bg-brand-paper shadow-[0_16px_48px_-36px_rgba(43,35,30,0.28)]">
            <Image
              src={lipo360Detail.image}
              alt={lipo360Detail.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {lipo360Detail.eyebrow}
          </p>
          <h2 className="mt-4 font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
            {lipo360Detail.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-body">{lipo360Detail.subtitle}</p>

          <div className="mt-10 space-y-8">
            {lipo360Detail.blocks.map((block) => (
              <div key={block.heading} className="border-t border-brand-line pt-6">
                <h3 className="text-lg font-bold text-brand-ink">{block.heading}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-body">{block.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-brand-line pt-8 text-sm leading-7 text-brand-muted">
            {lipo360Detail.resultsNote}
          </p>
        </div>
      </div>
    </section>
  );
}
