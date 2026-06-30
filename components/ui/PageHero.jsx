export default function PageHero({
  title,
  description,
  eyebrow,
  className = "border-b border-brand-line bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24",
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">{eyebrow}</p>
          ) : null}
          <h1
            className={`font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.5rem] ${eyebrow ? "mt-5" : ""}`}
          >
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-body sm:text-lg">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
