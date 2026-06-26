import { clinicBranches, getGoogleMapsUrl, siteConfig } from "@/data/site";

function BranchCard({ branch }) {
  const isOpen = branch.status === "open";

  return (
    <article
      className={[
        "border border-brand-line px-5 py-4",
        isOpen ? "bg-brand-white" : "bg-brand-paper/70",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-instrument text-lg font-semibold tracking-[-0.02em] text-brand-ink">
            {branch.city}
          </h3>
          {branch.label ? (
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">
              {branch.label}
            </p>
          ) : null}
        </div>
        <span
          className={[
            "shrink-0 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
            isOpen ? "bg-brand-soft-blue text-brand-ink" : "bg-brand-line/80 text-brand-body",
          ].join(" ")}
        >
          {isOpen ? "Open" : "Coming Soon"}
        </span>
      </div>

      {isOpen ? (
        <p className="mt-3 text-sm leading-6 text-brand-body">
          {branch.address}
          <br />
          {branch.region}
        </p>
      ) : (
        <p className="mt-3 text-sm leading-6 text-brand-body">Opening soon. Contact us for updates.</p>
      )}
    </article>
  );
}

export default function ClinicLocationPanel({ showDirectionsLink = true, className = "" }) {
  return (
    <div className={className}>
      <div className="grid gap-3">
        {clinicBranches.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>

      {showDirectionsLink ? (
        <a
          href={getGoogleMapsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.12em] text-brand-primary transition-colors duration-200 hover:text-brand-primary-hover"
        >
          Get directions to {siteConfig.address}
        </a>
      ) : null}
    </div>
  );
}

export function ClinicMapEmbed({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <iframe
        title="Rahman Plastic Surgery main branch map"
        src={siteConfig.googleMapsEmbedUrl}
        className="h-[min(72vh,820px)] min-h-[520px] w-full border-0 sm:min-h-[600px] lg:min-h-[720px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      <div className="pointer-events-none absolute left-1/2 top-8 z-10 w-[min(92%,380px)] -translate-x-1/2 bg-brand-primary px-5 py-4 text-center text-white shadow-[0_18px_40px_-24px_rgba(43,35,30,0.45)] sm:top-10">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/85">
          {siteConfig.mapOverlay.label}
        </p>
        <p className="mt-2 text-sm font-bold leading-6">
          {siteConfig.mapOverlay.address}
          <br />
          {siteConfig.mapOverlay.city}
        </p>
      </div>
    </div>
  );
}
