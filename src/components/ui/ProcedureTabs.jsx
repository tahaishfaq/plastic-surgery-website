"use client";

import { useState } from "react";

export default function ProcedureTabs({ items, renderPanel }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div>
      <div
        className="flex gap-6 overflow-x-auto border-b border-brand-line pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Featured procedures"
      >
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`procedure-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`procedure-panel-${item.id}`}
              className={`shrink-0 border-b-2 pb-3 text-sm font-bold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-brand-primary text-brand-ink"
                  : "border-transparent text-brand-body hover:text-brand-primary-hover"
              }`}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {activeItem ? (
        <div
          role="tabpanel"
          id={`procedure-panel-${activeItem.id}`}
          aria-labelledby={`procedure-tab-${activeItem.id}`}
          className="pt-10"
        >
          {renderPanel(activeItem)}
        </div>
      ) : null}
    </div>
  );
}
