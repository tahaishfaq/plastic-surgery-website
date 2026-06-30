import Image from "next/image";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { aboutPageContent } from "@/data/about";

export const metadata = {
  title: "About Us | Rahman Plastic Surgery",
  description:
    "Learn about Rahman Plastic Surgery, one of Pakistan's largest plastic surgery teams offering cosmetic, reconstructive, and international patient VIP services.",
};

function AboutList({ items }) {
  return (
    <ul className="mt-8 max-w-3xl divide-y divide-brand-line border-t border-brand-line">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-5 text-base leading-7 text-brand-body">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  const { hero, intro, procedures, approach, international, whyChoose, closing, vision, mission, tagline, cta } =
    aboutPageContent;

  return (
    <SiteShell>
      <PageHero title={hero.title} description={hero.description} />

      <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px] space-y-6">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-base leading-7 text-brand-body sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            {procedures.heading}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-brand-body">{procedures.intro}</p>
          <AboutList items={procedures.items} />
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
              {approach.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-brand-body">{approach.body}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-brand-line bg-brand-white">
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
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
            {international.heading}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-brand-body">{international.intro}</p>
          <AboutList items={international.items} />
          <p className="mt-8 max-w-3xl text-base leading-7 text-brand-body">{international.closing}</p>
        </div>
      </section>

      <section className="bg-brand-ink px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {whyChoose.heading}
          </h2>
          <ul className="mt-10 max-w-3xl divide-y divide-white/10 border-t border-white/10">
            {whyChoose.items.map((item) => (
              <li key={item} className="flex gap-4 py-5 text-base leading-7 text-white/85">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="max-w-3xl text-base leading-7 text-brand-body sm:text-lg">{closing}</p>

          <div className="mt-16 grid gap-12 border-t border-brand-line pt-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
                {vision.heading}
              </h2>
              <p className="mt-5 text-base leading-7 text-brand-body">{vision.body}</p>
            </div>
            <div>
              <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
                {mission.heading}
              </h2>
              <p className="mt-5 text-base leading-7 text-brand-body">{mission.body}</p>
            </div>
          </div>

          <blockquote className="mt-16 border-l-2 border-brand-primary pl-6">
            <p className="font-instrument text-2xl font-semibold leading-snug tracking-[-0.03em] text-brand-ink sm:text-3xl">
              &ldquo;{tagline}&rdquo;
            </p>
          </blockquote>

          <div className="mt-12">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
