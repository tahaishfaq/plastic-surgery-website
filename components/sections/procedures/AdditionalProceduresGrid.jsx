import ProcedureCard from "@/components/ui/ProcedureCard";
import { additionalProceduresPage } from "@/data/featuredProcedures";

export default function AdditionalProceduresGrid() {
  return (
    <section className="bg-brand-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="font-instrument text-4xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-5xl">
          {additionalProceduresPage.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-body">
          {additionalProceduresPage.description}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {additionalProceduresPage.cards.map((card) => (
            <div key={card.id} id={card.id} className="scroll-mt-40">
              <ProcedureCard
                compact
                card={{
                  ...card,
                  category: null,
                  ctaLabel: "Request Consultation",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
