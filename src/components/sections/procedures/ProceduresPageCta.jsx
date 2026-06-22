import Button from "@/components/ui/Button";
import { proceduresPageCta } from "@/data/featuredProcedures";

export default function ProceduresPageCta() {
  return (
    <section className="bg-brand-ink px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-instrument text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            {proceduresPageCta.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70">{proceduresPageCta.description}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.14em] text-white/50">
            {proceduresPageCta.trustLine}
          </p>
        </div>
        <Button href={proceduresPageCta.buttonHref} variant="primary">
          {proceduresPageCta.buttonLabel}
        </Button>
      </div>
    </section>
  );
}
