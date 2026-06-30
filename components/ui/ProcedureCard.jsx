import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProcedureCard({ card, compact = false }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-brand-line bg-brand-white shadow-[0_14px_44px_-34px_rgba(43,35,30,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-primary hover:shadow-[0_20px_50px_-34px_rgba(168,141,112,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className={`relative overflow-hidden bg-brand-paper ${compact ? "aspect-square" : "aspect-[4/5]"}`}>
        <Image
          src={card.image}
          alt={card.alt}
          fill
          loading="eager"
          sizes={compact ? "(max-width: 768px) 100vw, 25vw" : "(max-width: 768px) 100vw, 50vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {card.category ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-primary">{card.category}</p>
        ) : null}
        <h3 className={`font-bold text-brand-ink ${card.category ? "mt-3" : ""} ${compact ? "text-base" : "text-lg"}`}>
          {card.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-brand-body">{card.description}</p>
        <Link
          href={card.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-brand-ink transition-colors hover:text-brand-primary-hover"
        >
          {card.ctaLabel ?? "Explore Procedure"}
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </article>
  );
}
