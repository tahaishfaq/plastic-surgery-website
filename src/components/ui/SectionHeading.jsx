export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-instrument text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-body sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
