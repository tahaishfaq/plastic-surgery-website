"use client";

import { useMemo, useState } from "react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { beforeAfterCategories, beforeAfterGallery } from "@/data/beforeAfter";

export default function CaseStudiesGallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return beforeAfterGallery;
    return beforeAfterGallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div
        className="flex flex-wrap gap-3 border-b border-brand-line pb-8"
        role="tablist"
        aria-label="Case study categories"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          className={`min-h-11 border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
            activeCategory === "all"
              ? "border-brand-primary bg-brand-primary text-white"
              : "border-brand-line bg-brand-white text-brand-body hover:border-brand-primary hover:text-brand-ink"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {beforeAfterCategories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`min-h-11 border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-brand-line bg-brand-white text-brand-body hover:border-brand-primary hover:text-brand-ink"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden border border-brand-line bg-brand-white shadow-[0_16px_48px_-36px_rgba(43,35,30,0.2)]"
          >
            <BeforeAfterSlider before={item.before} after={item.after} label={item.title} />
            <div className="border-t border-brand-line px-6 py-7 sm:px-8">
              <h2 className="font-instrument text-2xl font-semibold tracking-[-0.03em] text-brand-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-brand-body">{item.description}</p>
              {item.provisional ? (
                <p className="mt-4 text-xs text-brand-muted">
                  Illustrative frames only. Approved patient photography will replace these assets.
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
