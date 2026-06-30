"use client";

import { useEffect, useState } from "react";

export default function ProcedureStickyNav({ items }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      className="sticky top-[134px] z-30 border-y border-brand-line bg-brand-white/95 backdrop-blur-sm"
      aria-label="Procedure sections"
    >
      <div className="mx-auto flex max-w-[1280px] gap-6 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`shrink-0 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                isActive ? "text-brand-primary" : "text-brand-body hover:text-brand-primary-hover"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
