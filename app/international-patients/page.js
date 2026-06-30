import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import InternationalServicesSection from "@/components/sections/InternationalServicesSection";
import Button from "@/components/ui/Button";
import { internationalServicesContent } from "@/data/internationalServices";

export const metadata = {
  title: "International Patients | Rahman Plastic Surgery",
  description:
    "Travel planning, virtual consultations, and recovery support for international patients visiting Rahman Plastic Surgery in Pakistan.",
};

export default function InternationalPatientsPage() {
  return (
    <SiteShell>
      <PageHero
        title="International Patient Services"
        description="From your first virtual consultation to recovery in Pakistan, our team helps coordinate a private, well-planned medical journey."
      />

      <InternationalServicesSection />

      <section className="border-t border-brand-line bg-brand-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-7 text-brand-body">
            {internationalServicesContent.description}
          </p>
          <Button href="/contact#consultation">{internationalServicesContent.cta.label}</Button>
        </div>
      </section>
    </SiteShell>
  );
}
