import Image from "next/image";
import Button from "@/components/ui/Button";
import { proceduresPageHero } from "@/data/featuredProcedures";

export default function FeaturedProceduresHero() {
  return (
    <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {proceduresPageHero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-xl font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-6xl">
            {proceduresPageHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-brand-body sm:text-lg">
            {proceduresPageHero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {proceduresPageHero.ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2px] bg-[#f7f1e8] sm:-inset-4"
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-brand-line bg-brand-white shadow-[0_20px_60px_-40px_rgba(43,35,30,0.35)]">
            <Image
              src={proceduresPageHero.image}
              alt={proceduresPageHero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
