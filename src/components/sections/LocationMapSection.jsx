import ClinicLocationPanel, { ClinicMapEmbed } from "@/components/ui/ClinicLocationPanel";

export default function LocationMapSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-12 lg:py-14">
        <ClinicLocationPanel className="lg:sticky lg:top-28" />
        <ClinicMapEmbed className="mt-8 lg:mt-0" />
      </div>
    </section>
  );
}
