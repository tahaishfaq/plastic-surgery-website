import Image from "next/image";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import { doctors, doctorsPageContent } from "@/data/doctors";

export const metadata = {
  title: "Our Surgeons | Rahman Plastic Surgery",
  description:
    "Meet the surgical team at Rahman Plastic Surgery. Provisional profiles until client-approved bios and photography are available.",
};

export default function DoctorsPage() {
  return (
    <SiteShell>
      <PageHero title={doctorsPageContent.hero.title} description={doctorsPageContent.hero.description} />

      {!doctorsPageContent.isFinalized ? (
        <div className="border-b border-brand-line bg-brand-paper px-5 py-4 sm:px-8 lg:px-12">
          <p className="mx-auto max-w-[1280px] text-sm text-brand-muted">{doctorsPageContent.placeholderNote}</p>
        </div>
      ) : null}

      <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px] space-y-20">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.id}
              className={`grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-brand-line bg-brand-white">
                <Image
                  src={doctor.image.src}
                  alt={doctor.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">{doctor.role}</p>
                <h2 className="mt-4 font-instrument text-3xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-4xl">
                  {doctor.name}
                </h2>
                <p className="mt-3 text-sm font-medium text-brand-muted">{doctor.credentials}</p>
                <p className="mt-6 text-base leading-7 text-brand-body">{doctor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-7 text-brand-body">
            Ready to discuss your goals with our team? Start with a private consultation.
          </p>
          <Button href="/contact#consultation">Book Consultation</Button>
        </div>
      </section>
    </SiteShell>
  );
}
