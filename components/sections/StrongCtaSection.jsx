import Image from "next/image";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { strongCtaContent } from "@/data/strongCta";
import { getTelUrl, getWhatsAppUrl } from "@/data/site";

const actionIcons = {
  call: Phone,
  whatsapp: MessageCircle,
  book: Calendar,
};

function resolveActionHref(href) {
  if (href === "tel") return getTelUrl();
  if (href === "whatsapp") return getWhatsAppUrl();
  return href;
}

export default function StrongCtaSection() {
  return (
    <section className="scroll-mt-24">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-brand-ink px-5 py-16 text-white sm:px-10 lg:px-14 lg:py-24 xl:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            {strongCtaContent.eyebrow}
          </p>
          <h2 className="mt-6 max-w-lg font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem]">
            {strongCtaContent.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/72 sm:text-lg">
            {strongCtaContent.description}
          </p>

          <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-stretch">
            {strongCtaContent.actions.map((action) => {
              const Icon = actionIcons[action.id] ?? ArrowRight;

              return (
                <Button
                  key={action.id}
                  href={resolveActionHref(action.href)}
                  variant={action.variant}
                  className="w-full justify-between px-5 sm:flex-1 sm:px-6"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon aria-hidden="true" size={16} strokeWidth={2} />
                    {action.label}
                  </span>
                  <ArrowRight aria-hidden="true" size={16} />
                </Button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
          <Image
            src={strongCtaContent.image.src}
            alt={strongCtaContent.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
