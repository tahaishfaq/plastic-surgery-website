import Image from "next/image";
import ProcedureAccordion from "@/components/ui/ProcedureAccordion";
import { tummyTuckDetail } from "@/data/featuredProcedures";

export default function TummyTuckSection() {
  return (
    <section id={tummyTuckDetail.id} className="scroll-mt-40 bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-brand-line bg-brand-white shadow-[0_16px_48px_-36px_rgba(43,35,30,0.28)]">
          <Image
            src={tummyTuckDetail.image}
            alt={tummyTuckDetail.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {tummyTuckDetail.eyebrow}
          </p>
          <h2 className="mt-4 font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
            {tummyTuckDetail.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-brand-body">{tummyTuckDetail.subtitle}</p>

          <div className="mt-10 space-y-8">
            {tummyTuckDetail.blocks.map((block) => (
              <div key={block.heading} className="border-t border-brand-line pt-6">
                <h3 className="text-lg font-bold text-brand-ink">{block.heading}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-body">{block.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-brand-line pt-8">
            <h3 className="text-lg font-bold text-brand-ink">Benefits</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {tummyTuckDetail.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-6 text-brand-body">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t border-brand-line pt-8">
            <h3 className="text-lg font-bold text-brand-ink">Recovery Timeline</h3>
            <ol className="mt-6 space-y-5">
              {tummyTuckDetail.recoveryTimeline.map((item) => (
                <li key={item.period} className="grid gap-2 border-l-2 border-brand-primary/40 pl-5">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-ink">{item.period}</p>
                  <p className="text-sm leading-6 text-brand-body">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 border-t border-brand-line pt-8">
            <h3 className="text-lg font-bold text-brand-ink">FAQ</h3>
            <div className="mt-5">
              <ProcedureAccordion items={tummyTuckDetail.faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
