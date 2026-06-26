"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { servicesSubmenu } from "@/data/navigation";

export default function NavServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <li
      ref={containerRef}
      className="relative shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 uppercase tracking-[0.14em] transition-colors hover:text-brand-primary-hover"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Services
        <ChevronDown
          aria-hidden="true"
          size={15}
          strokeWidth={1.8}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen ? (
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul
            className="min-w-[240px] border border-brand-line bg-brand-white py-2 shadow-panel"
            role="menu"
          >
            {servicesSubmenu.map((item) => (
              <li key={item.href} role="none">
                <a
                  className="block px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-brand-ink transition-colors hover:bg-brand-paper hover:text-brand-primary-hover"
                  href={item.href}
                  role="menuitem"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}
