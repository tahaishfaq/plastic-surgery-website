"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProcedureAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-brand-line border-y border-brand-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-bold text-brand-ink">{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                size={18}
                className={`shrink-0 text-brand-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <div className="pb-5 pr-8">
                <p className="text-sm leading-7 text-brand-body">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
