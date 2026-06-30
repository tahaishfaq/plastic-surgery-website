"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export default function BeforeAfterSlider({ before, after, label }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const isRasterCaseStudy = /\.(png|jpe?g|webp)(\?|$)/i.test(after.src);

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [updateWidth]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full overflow-hidden bg-brand-paper"
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        sizes="(max-width: 640px) 100vw, 500px"
        unoptimized={isRasterCaseStudy}
        className="object-cover"
      />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
        aria-hidden="true"
      >
        <div className="relative h-full" style={{ width: containerWidth || "100%" }}>
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(max-width: 640px) 100vw, 500px"
            unoptimized={isRasterCaseStudy}
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 -translate-x-1/2"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <div className="h-full w-px bg-white shadow-[0_0_8px_rgba(43,35,30,0.25)]" />
        <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-white/40 bg-white/95 text-brand-ink shadow-[0_8px_24px_-8px_rgba(43,35,30,0.45)]">
          <ChevronsLeft size={14} strokeWidth={2} />
          <ChevronsRight size={14} strokeWidth={2} />
        </div>
      </div>

      <label className="absolute inset-0 z-20 cursor-ew-resize">
        <span className="sr-only">Drag to compare before and after for {label}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full appearance-none bg-transparent opacity-0"
        />
      </label>
    </div>
  );
}
