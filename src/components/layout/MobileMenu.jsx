"use client";

import { useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { getWhatsAppUrl } from "@/data/site";
import Button from "@/components/ui/Button";

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2B231E] text-white min-[1400px]:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="flex h-full flex-col px-5 pb-8 pt-5 sm:px-8">
        <div className="flex items-center justify-between">
          <a className="font-instrument text-xl font-semibold tracking-[-0.04em]" href="#home" onClick={onClose}>
            Rahman <span className="font-normal text-white/60">Plastic Surgery</span>
          </a>
          <button className="inline-flex size-11 items-center justify-center rounded-full border border-white/20" type="button" aria-label="Close menu" onClick={onClose}>
            <X aria-hidden="true" size={20} />
          </button>
        </div>

        <nav className="mt-16" aria-label="Mobile navigation">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={item.href}>
                <a className="group flex items-center justify-between border-b border-white/15 py-4 font-instrument text-3xl font-medium tracking-[-0.04em] transition-colors hover:text-brand-soft-blue" href={item.href} onClick={onClose}>
                  <span><span className="mr-4 text-xs font-bold tracking-[0.16em] text-brand-primary">0{index + 1}</span>{item.label}</span>
                  <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={22} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto grid gap-3 pt-8">
          <Button href={getWhatsAppUrl()} variant="light" onClick={onClose}>
            WhatsApp Us
          </Button>
          <Button href="#consultation" variant="secondary" onClick={onClose}>
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}
