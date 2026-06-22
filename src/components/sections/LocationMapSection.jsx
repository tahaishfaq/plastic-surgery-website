import { siteConfig } from "@/data/site";

export default function LocationMapSection() {
  return (
    <section className="bg-brand-paper">
      <div className="relative">
        <iframe
          title="Clinic location map"
          src={siteConfig.googleMapsEmbedUrl}
          className="h-[min(72vh,820px)] min-h-[520px] w-full border-0 sm:min-h-[600px] lg:min-h-[720px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="pointer-events-none absolute left-1/2 top-8 z-10 w-[min(92%,380px)] -translate-x-1/2 bg-brand-primary px-5 py-4 text-center text-white shadow-[0_18px_40px_-24px_rgba(43,35,30,0.45)] sm:top-10">
          <p className="text-sm font-bold leading-6">
            {siteConfig.mapOverlay.address}
            <br />
            {siteConfig.mapOverlay.city}
          </p>
        </div>
      </div>
    </section>
  );
}
