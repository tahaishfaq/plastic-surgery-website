import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { branchShowcaseItems } from "@/data/branches";
import { getGoogleMapsUrl, siteConfig } from "@/data/site";

function BranchShowcaseCard({ branch }) {
  const isOpen = branch.status === "open";

  const cardBody = (
    <>
      <div
        className={[
          "relative aspect-square overflow-hidden bg-brand-paper",
          isOpen ? "ring-1 ring-brand-primary/35 ring-offset-2 ring-offset-brand-paper" : "",
        ].join(" ")}
      >
        <Image
          src={branch.image}
          alt={branch.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="mt-4 border-t border-brand-line pt-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-primary">{branch.landmark}</p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="font-instrument text-xl font-semibold tracking-[-0.03em] text-brand-ink sm:text-[1.35rem]">
            {branch.city}
          </h3>
          <span
            className={[
              "shrink-0 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
              isOpen ? "bg-brand-soft-blue text-brand-ink" : "bg-brand-line/80 text-brand-body",
            ].join(" ")}
          >
            {isOpen ? "Open" : "Coming Soon"}
          </span>
        </div>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-brand-muted">{branch.label}</p>
        {isOpen && branch.address ? (
          <p className="mt-3 text-sm leading-6 text-brand-body">
            {branch.address}
            <br />
            {branch.region}
          </p>
        ) : (
          <p className="mt-3 text-sm leading-6 text-brand-body">{branch.note}</p>
        )}
      </div>
    </>
  );

  if (isOpen && branch.href) {
    return (
      <article className="group">
        <Link href={branch.href} target="_blank" rel="noopener noreferrer" className="block">
          {cardBody}
        </Link>
      </article>
    );
  }

  return <article className="group">{cardBody}</article>;
}

export default function BranchesShowcase({ className = "" }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {branchShowcaseItems.map((branch) => (
          <BranchShowcaseCard key={branch.id} branch={branch} />
        ))}
      </div>

      <Button
        href={getGoogleMapsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        className="mt-8"
      >
        Get directions to {siteConfig.address}
      </Button>
    </div>
  );
}
