import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { careersPageContent } from "@/data/careers";

export const metadata = {
  title: "Careers | Rahman Plastic Surgery",
  description:
    "View career opportunities at Rahman Plastic Surgery in Islamabad and share your interest for future clinic roles.",
};

export default function CareersPage() {
  const { hero, intro, openings, emptyState, cta } = careersPageContent;
  const hasOpenings = openings.length > 0;

  return (
    <SiteShell>
      <PageHero title={hero.title} description={hero.description} />

      <section className="border-b border-brand-line bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            {intro.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-body">{intro.body}</p>
        </div>
      </section>

      <section className="bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
            Open Roles
          </h2>

          {hasOpenings ? (
            <ul className="mt-10 divide-y divide-brand-line border-t border-brand-line">
              {openings.map((role) => (
                <li key={role.id} className="py-8 first:pt-10">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="max-w-2xl">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary">
                        {[role.location, role.type].filter(Boolean).join(" · ")}
                      </p>
                      <h3 className="mt-3 font-instrument text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                        {role.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-brand-body">{role.summary}</p>
                      {role.postedAt ? (
                        <p className="mt-4 text-sm text-brand-muted">Posted {role.postedAt}</p>
                      ) : null}
                    </div>
                    <Button href={cta.href} variant="outline" className="shrink-0 self-start">
                      Apply
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 max-w-2xl border border-brand-line bg-brand-paper px-6 py-8 sm:px-8 sm:py-10">
              <h3 className="font-instrument text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                {emptyState.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-brand-body">{emptyState.description}</p>
              <div className="mt-8">
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
