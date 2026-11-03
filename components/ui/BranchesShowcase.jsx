import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { branchShowcaseItems } from "@/data/branches";
import { getGoogleMapsUrl, siteConfig } from "@/data/site";

function BranchShowcaseCard({ branch, selected = false, onSelect }) {
  const isOpen = branch.status === "open";
  const isSelectable = Boolean(onSelect);

  const cardBody = (
    <>
      <div
        className={[
          "relative aspect-[3/2] overflow-hidden bg-brand-ink",
          (isSelectable ? selected : isOpen) ? "ring-1 ring-brand-primary/35 ring-offset-2 ring-offset-brand-paper" : "",
        ].join(" ")}
      >
        {branch.image ? (
          <Image
            src={branch.image}
            alt={branch.imageAlt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
            className={[
              "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
              branch.imagePosition || "object-center",
            ].join(" ")}
          />
        ) : (
          <div className="flex h-full items-center p-5 sm:p-6">
            <p className="font-instrument text-3xl font-semibold tracking-[-0.04em] text-white">{branch.city}</p>
          </div>
        )}
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

  if (isSelectable) {
    return (
      <article className="group">
        <button
          type="button"
          className="block w-full text-left"
          aria-pressed={selected}
          onClick={() => onSelect(branch.id)}
        >
          {cardBody}
        </button>
      </article>
    );
  }

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

export default function BranchesShowcase({ className = "", selectedId, onSelect }) {
  const selectedBranch = branchShowcaseItems.find((branch) => branch.id === selectedId);
  const directionsHref = selectedBranch?.href || getGoogleMapsUrl();
  const directionsLabel = selectedBranch
    ? `Get directions to ${selectedBranch.place}`
    : `Get directions to ${siteConfig.address}`;

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {branchShowcaseItems.map((branch) => (
          <BranchShowcaseCard
            key={branch.id}
            branch={branch}
            selected={selectedId === branch.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      <Button
        href={directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        className="mt-8"
      >
        {directionsLabel}
      </Button>
    </div>
  );
}
