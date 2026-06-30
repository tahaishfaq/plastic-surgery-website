"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Button from "@/components/ui/Button";
import {
  beforeAfterCategories,
  beforeAfterContent,
  beforeAfterGallery,
} from "@/data/beforeAfter";

export default function BeforeAfterGallerySection() {
  const [activeCategory, setActiveCategory] = useState(beforeAfterCategories[0].id);

  const activeItem = useMemo(() => {
    return (
      beforeAfterGallery.find((item) => item.category === activeCategory) ?? beforeAfterGallery[0]
    );
  }, [activeCategory]);

  return (
    <section id="before-after" className="scroll-mt-24 bg-brand-ink px-5 pb-20 text-white sm:px-8 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-[1280px] pt-12 sm:pt-14 lg:pt-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
              {beforeAfterContent.eyebrow}
            </p>
            <h2 className="mt-5 font-instrument text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.25rem]">
              {beforeAfterContent.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72 sm:text-lg">
              {beforeAfterContent.description}
            </p>
          </div>

          <div className="shrink-0 lg:pt-8">
            <Button href={beforeAfterContent.cta.href}>
              {beforeAfterContent.cta.label}
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:items-start lg:gap-14 xl:grid-cols-[minmax(0,260px)_minmax(0,1fr)] xl:gap-20">
          <div
            className="flex gap-5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:gap-0 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Before and after categories"
          >
            {beforeAfterCategories.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`shrink-0 border-b-2 pb-3 text-left text-xs font-bold uppercase tracking-[0.16em] transition-colors sm:text-sm lg:border-b-0 lg:border-l-2 lg:px-0 lg:py-4 lg:pl-5 ${
                    isActive
                      ? "border-brand-primary text-brand-primary lg:border-l-brand-primary"
                      : "border-transparent text-white/50 hover:text-white/75 lg:border-l-transparent"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {activeItem ? (
            <article className="overflow-hidden rounded-[2px] bg-brand-white text-brand-ink shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)] lg:max-w-[500px] lg:justify-self-end xl:max-w-[520px]">
              <div className="bg-brand-paper p-2 sm:p-3">
                <BeforeAfterSlider
                  key={activeItem.id}
                  before={activeItem.before}
                  after={activeItem.after}
                  label={activeItem.title}
                />
              </div>
              <div className="border-t border-brand-line px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="font-instrument text-lg font-semibold leading-snug tracking-[-0.03em] text-brand-ink sm:text-xl">
                  {activeItem.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-brand-body sm:text-sm">{activeItem.description}</p>
                {activeItem.provisional ? (
                  <p className="mt-4 text-xs text-brand-muted">
                    Illustrative frames only. Approved patient photography will replace these assets.
                  </p>
                ) : null}
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
