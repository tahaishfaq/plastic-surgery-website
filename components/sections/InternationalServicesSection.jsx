import {
  BedDouble,
  Car,
  ClipboardList,
  IdCard,
  Languages,
  Plane,
  Video,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { internationalServicesContent } from "@/data/internationalServices";

const iconMap = {
  video: Video,
  plane: Plane,
  passport: IdCard,
  car: Car,
  hotel: BedDouble,
  language: Languages,
  clipboard: ClipboardList,
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] ?? ClipboardList;

  return (
    <li>
      <article className="group h-full rounded-xl border border-brand-line bg-brand-white p-6 shadow-[0_14px_44px_-34px_rgba(43,35,30,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-primary hover:shadow-[0_20px_50px_-34px_rgba(168,141,112,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-line bg-[#f7f1e8]/60 text-brand-primary transition-colors duration-300 group-hover:border-brand-primary/40 group-hover:bg-[#f7f1e8]">
            <Icon aria-hidden="true" size={19} strokeWidth={1.5} />
          </div>
          <span className="font-instrument text-sm font-semibold tracking-[-0.02em] text-brand-muted">
            {service.number}
          </span>
        </div>
        <h3 className="mt-5 text-base font-bold leading-snug text-brand-ink">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-brand-body">{service.description}</p>
      </article>
    </li>
  );
}

export default function InternationalServicesSection() {
  return (
    <section id="international-patients" className="scroll-mt-24 bg-brand-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {internationalServicesContent.eyebrow}
          </p>
          <h2 className="mt-5 max-w-md font-instrument text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-brand-ink sm:text-5xl">
            {internationalServicesContent.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-brand-body sm:text-lg">
            {internationalServicesContent.description}
          </p>

          <div className="mt-10">
            <Button href={internationalServicesContent.cta.href}>
              {internationalServicesContent.cta.label}
            </Button>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {internationalServicesContent.services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
