"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 600);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <a className="fixed bottom-24 right-5 z-20 inline-flex size-11 items-center justify-center rounded-full bg-[#2B231E] text-white shadow-lg transition-transform hover:-translate-y-1 lg:bottom-8 lg:right-8" href="#home" aria-label="Back to top">
      <ArrowUp aria-hidden="true" size={19} />
    </a>
  );
}
