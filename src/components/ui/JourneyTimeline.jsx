import {
  ClipboardList,
  HeartPulse,
  Plane,
  Upload,
  Video,
} from "lucide-react";

const iconMap = {
  upload: Upload,
  video: Video,
  clipboard: ClipboardList,
  plane: Plane,
  "heart-pulse": HeartPulse,
};

function StepIcon({ name, size = 22, className = "" }) {
  const Icon = iconMap[name] ?? Upload;
  return <Icon aria-hidden="true" size={size} strokeWidth={1.5} className={className} />;
}

function StepBadge({ number }) {
  return (
    <span className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_-14px_rgba(168,141,112,0.85)]">
      Step {number}
    </span>
  );
}

function StepCard({ step, align = "left" }) {
  const textAlign = align === "right" ? "text-right" : "text-left";

  return (
    <article
      className={`group relative overflow-hidden rounded-[2px] border border-brand-line bg-brand-paper p-6 shadow-[0_16px_48px_-28px_rgba(43,35,30,0.28)] transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${textAlign}`}
    >
      {/* <div
        className={`pointer-events-none absolute ${align === "right" ? "left-4" : "right-4"} top-2 text-brand-primary/10`}
        aria-hidden="true"
      >
        <StepIcon name={step.icon} size={112} />
      </div> */}

      <div className={`relative z-1 flex items-center gap-3 ${align === "right" ? "justify-end" : ""}`}>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
          <StepIcon name={step.icon} />
        </div>
        <h3 className="text-lg font-bold leading-snug text-brand-ink">{step.title}</h3>
      </div>

      <p className={`relative z-1 mt-4 text-sm leading-6 text-brand-body ${align === "right" ? "ml-auto" : ""} max-w-md`}>
        {step.description}
      </p>
    </article>
  );
}

export default function JourneyTimeline({ steps }) {
  return (
    <>
      {/* Mobile: left spine timeline */}
      <ol className="relative mt-14 lg:hidden">
        <span aria-hidden="true" className="absolute bottom-6 left-[11px] top-3 w-px bg-brand-line" />

        {steps.map((step, index) => (
          <li key={step.number} className={`relative pl-12 ${index < steps.length - 1 ? "pb-12" : "pb-2"}`}>
            <span
              aria-hidden="true"
              className="absolute left-[11px] top-6 z-10 size-3.5 -translate-x-1/2 rounded-full border-2 border-brand-white bg-brand-primary shadow-sm"
            />
            <StepBadge number={step.number} />
            <div className="mt-5">
              <StepCard step={step} />
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: center-spine alternating timeline */}
      <ol className="relative mx-auto mt-16 hidden max-w-5xl lg:block">
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 top-8 w-px -translate-x-1/2 bg-brand-line"
        />

        {steps.map((step, index) => {
          const badgeOnLeft = index % 2 === 0;

          return (
            <li key={step.number} className="relative grid grid-cols-2 items-center gap-10 py-8">
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 z-20 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand-white bg-brand-primary shadow-sm"
              />

              {badgeOnLeft ? (
                <>
                  <div className="flex justify-end pr-6">
                    <StepBadge number={step.number} />
                  </div>
                  <div className="pl-6">
                    <StepCard step={step} align="left" />
                  </div>
                </>
              ) : (
                <>
                  <div className="pr-6">
                    <StepCard step={step} align="right" />
                  </div>
                  <div className="flex justify-start pl-6">
                    <StepBadge number={step.number} />
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
}
