import StatCounter from "@/components/ui/StatCounter";
import { statisticsContent } from "@/data/statistics";

export default function StatisticsSection() {
  const [featuredStat, ...supportingStats] = statisticsContent.stats;

  return (
    <section
      id="clinic-overview"
      className="relative isolate scroll-mt-24 overflow-hidden bg-brand-ink px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(168,141,112,0.1),transparent_52%)]"
      />
      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-end lg:gap-16 xl:gap-20">
          <header className="max-w-md lg:max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              {statisticsContent.eyebrow}
            </p>
            <h2 className="mt-5 font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem]">
              {statisticsContent.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">{statisticsContent.description}</p>
          </header>

          <div className="grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
            <div className="sm:col-span-2 lg:col-span-1 lg:border-r lg:border-white/10 lg:pr-10 xl:pr-14">
              <StatCounter
                value={featuredStat.value}
                label={featuredStat.label}
                variant="dark"
                featured
              />
            </div>

            <div className="grid gap-10 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:gap-12">
              {supportingStats.map((stat) => (
                <StatCounter key={stat.id} value={stat.value} label={stat.label} variant="dark" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
