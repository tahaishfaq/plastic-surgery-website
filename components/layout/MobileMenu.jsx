"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { getWhatsAppUrl } from "@/data/site";
import Button from "@/components/ui/Button";

export default function MobileMenu({ isOpen, onClose }) {
  const [expandedServices, setExpandedServices] = useState(false);

  const handleClose = useCallback(() => {
    setExpandedServices(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-ink text-white min-[1400px]:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex h-full flex-col px-5 pb-8 pt-5 sm:px-8">
        <div className="flex items-center justify-between">
          <Link
            className="font-instrument text-xl font-semibold tracking-[-0.04em]"
            href="/"
            onClick={handleClose}
          >
            Rahman <span className="font-normal text-white/60">Plastic Surgery</span>
          </Link>
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20"
            type="button"
            aria-label="Close menu"
            onClick={handleClose}
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>

        <nav className="mt-16" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={item.label}>
                {item.hasSubmenu ? (
                  <>
                    <button
                      type="button"
                      className="group flex w-full items-center justify-between border-b border-white/15 py-4 font-instrument text-3xl font-medium tracking-[-0.04em] transition-colors hover:text-brand-soft-blue"
                      aria-expanded={expandedServices}
                      onClick={() => setExpandedServices((open) => !open)}
                    >
                      <span>
                        <span className="mr-4 text-xs font-bold tracking-[0.16em] text-brand-primary">
                          0{index + 1}
                        </span>
                        {item.label}
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        size={22}
                        className={`transition-transform ${expandedServices ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedServices ? (
                      <ul className="border-b border-white/15 py-2 pl-8">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              className="block py-3 text-sm font-medium uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-white"
                              href={subItem.href}
                              onClick={handleClose}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    className="group flex items-center justify-between border-b border-white/15 py-4 font-instrument text-3xl font-medium tracking-[-0.04em] transition-colors hover:text-brand-soft-blue"
                    href={item.href}
                    onClick={handleClose}
                  >
                    <span>
                      <span className="mr-4 text-xs font-bold tracking-[0.16em] text-brand-primary">
                        0{index + 1}
                      </span>
                      {item.label}
                    </span>
                    <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={22} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto grid gap-3 pt-8">
          <Button href={getWhatsAppUrl()} variant="light" onClick={handleClose}>
            WhatsApp Us
          </Button>
          <Button href="/contact#consultation" variant="secondary" onClick={handleClose}>
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
