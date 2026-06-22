import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProcedureShowcaseCard({ card }) {
  return (
    <article className="group h-full">
      <Link
        href={card.href}
        aria-label={card.title}
        className="block h-full overflow-hidden rounded-[2px] border border-brand-line bg-brand-white shadow-[0_14px_44px_-34px_rgba(43,35,30,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-primary hover:shadow-[0_20px_50px_-34px_rgba(168,141,112,0.35)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-brand-paper sm:aspect-[3/4] xl:aspect-[4/5]">
          <Image
            src={card.image}
            alt={card.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-ink/88 via-brand-ink/35 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 motion-reduce:opacity-100"
          />

          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 motion-reduce:opacity-100 sm:p-5">
            <div className="flex items-end justify-between gap-4 translate-y-2 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0 [@media(hover:none)]:translate-y-0 motion-reduce:translate-y-0">
              <div className="min-w-0 flex-1">
                <h3 className="font-instrument text-base font-semibold leading-snug tracking-[-0.02em] text-white sm:text-lg">
                  {card.title}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-white/75">{card.description}</p>
              </div>

              <span className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] bg-brand-primary text-white transition-colors duration-200 group-hover:bg-brand-primary-hover">
                <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
