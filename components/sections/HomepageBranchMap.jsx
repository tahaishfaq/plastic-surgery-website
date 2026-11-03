"use client";

import { useState } from "react";
import BranchesShowcase from "@/components/ui/BranchesShowcase";
import { branchShowcaseItems } from "@/data/branches";
import { getMapsEmbedUrl } from "@/data/site";

const primaryBranchId = "islamabad";

export default function HomepageBranchMap() {
  const [selectedId, setSelectedId] = useState(primaryBranchId);
  const selected = branchShowcaseItems.find((branch) => branch.id === selectedId) ?? branchShowcaseItems[0];

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <BranchesShowcase className="mt-10" selectedId={selected.id} onSelect={setSelectedId} />
      </div>

      <div className="relative mt-12 border-t border-brand-line">
        <iframe
          key={selected.id}
          title={`Map of ${selected.place} in ${selected.city}`}
          src={getMapsEmbedUrl(selected.mapsQuery)}
          className="h-[min(72vh,820px)] min-h-[520px] w-full border-0 sm:min-h-[600px] lg:min-h-[720px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 w-[min(92%,380px)] -translate-x-1/2 bg-brand-primary px-5 py-4 text-center text-white shadow-[0_18px_40px_-24px_rgba(43,35,30,0.45)] sm:bottom-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/85">{selected.label}</p>
          <p className="mt-2 text-sm font-bold leading-6">
            {selected.place}, {selected.address}
            <br />
            {selected.region}
          </p>
        </div>
      </div>
    </>
  );
}
