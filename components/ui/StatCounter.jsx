export default function StatCounter({ value, label, variant = "light", featured = false, className = "" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={[
        "flex flex-col",
        featured ? "items-start text-left" : "items-start text-left",
        className,
      ].join(" ")}
    >
      <p
        className={[
          "font-instrument font-semibold tracking-[-0.04em]",
          featured ? "text-6xl sm:text-7xl lg:text-[4.5rem]" : "text-5xl sm:text-6xl",
          isDark ? "text-white" : "text-brand-ink",
        ].join(" ")}
      >
        {value}
      </p>
      <div
        className={["mt-4 h-px bg-brand-primary", featured ? "w-20" : "w-14"].join(" ")}
        aria-hidden="true"
      />
      <p
        className={[
          "mt-4 max-w-[16ch] text-sm font-medium leading-6 sm:text-base",
          isDark ? "text-white/70" : "text-brand-body",
        ].join(" ")}
      >
        {label}
      </p>
    </div>
  );
}
