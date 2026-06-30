import SiteShell from "@/components/layout/SiteShell";
import ConsultationFormSection from "@/components/sections/ConsultationFormSection";
import BranchesShowcase from "@/components/ui/BranchesShowcase";
import { ClinicMapEmbed } from "@/components/ui/ClinicLocationPanel";
import { ContactPhoneList } from "@/components/ui/ContactPhoneList";
import Button from "@/components/ui/Button";
import { contactPageContent } from "@/data/contact";
import { getMailtoUrl, getWhatsAppUrl, siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact Us | Rahman Plastic Surgery",
  description:
    "Contact Rahman Plastic Surgery at G-8 Markaz Islamabad. View branch locations, clinic hours, and send a consultation request.",
};

export default function ContactPage() {
  return (
    <SiteShell>
        <section className="border-b border-brand-line bg-brand-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-end lg:gap-16">
            <div className="max-w-2xl">
              <h1 className="font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-brand-ink sm:text-5xl lg:text-[3.5rem]">
                {contactPageContent.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-brand-body sm:text-lg">
                {contactPageContent.description}
              </p>
            </div>

            <div className="border border-brand-line bg-brand-paper p-6 sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-primary">Main Branch</p>
              <p className="mt-3 font-instrument text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                {siteConfig.address}
              </p>
              <p className="mt-1 text-sm leading-6 text-brand-body">{siteConfig.city}</p>
              <p className="mt-4 text-sm leading-6 text-brand-body">{siteConfig.workingHours}</p>
              <ContactPhoneList
                className="mt-5 space-y-2 text-sm text-brand-ink"
                linkClassName="font-medium transition-colors hover:text-brand-primary"
                mutedClassName="font-normal text-brand-body"
              />
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={getWhatsAppUrl()}>WhatsApp</Button>
                <Button href="/contact#consultation" variant="outline">
                  Request Consultation
                </Button>
              </div>
              <a
                href={getMailtoUrl()}
                className="mt-4 inline-block text-sm text-brand-body transition-colors hover:text-brand-ink"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-brand-paper px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="max-w-2xl">
              <h2 className="font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
                {contactPageContent.branchesHeading}
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-body">{contactPageContent.branchesDescription}</p>
            </div>

            <BranchesShowcase className="mt-10" />
          </div>
        </section>

        <section className="border-t border-brand-line bg-brand-paper">
          <ClinicMapEmbed />
        </section>

        <ConsultationFormSection />
    </SiteShell>
  );
}
