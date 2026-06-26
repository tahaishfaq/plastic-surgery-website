import Image from "next/image";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { aboutPageContent } from "@/data/about";

export const metadata = {
  title: "About Us | Rahman Plastic Surgery",
  description:
    "Learn about Rahman Plastic Surgery's surgeon-led approach, facility standards, and care philosophy for patients in Pakistan and abroad.",
};

export default function AboutPage() {
  const { hero, philosophy, values, facility, cta } = aboutPageContent;

  return (
    <SiteShell>
      <PageHero title={hero.title} description={hero.description} />

      {!aboutPageContent.isFinalized ? (
        <div className="border-b border-brand-line bg-brand-paper px-5 py-4 sm:px-8 lg:px-12">
          <p className="mx-auto max-w-[1280px] text-sm text-brand-muted">
            Provisional content. Final clinic story and credentials require client approval.
          </p>
        </div>
      ) : null}

      <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
              {philosophy.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-brand-body">{philosophy.body}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-brand-line bg-brand-white">
            <Image
              src={philosophy.image.src}
              alt={philosophy.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            What Guides Our Care
          </h2>
          <ul className="mt-10 max-w-3xl divide-y divide-brand-line border-t border-brand-line">
            {values.map((value) => (
              <li key={value} className="flex gap-4 py-5 text-base leading-7 text-brand-body">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            {facility.heading}
          </h2>
          <ul className="mt-8 max-w-2xl space-y-4">
            {facility.items.map((item) => (
              <li key={item} className="text-base leading-7 text-brand-body">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
