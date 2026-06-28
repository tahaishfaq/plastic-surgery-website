"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeaturedProcedureShowcaseCard from "@/components/ui/FeaturedProcedureShowcaseCard";

const AUTOPLAY_INTERVAL_MS = 5500;

export default function ProceduresSlider({ cards }) {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const loopCards = cards.length > 1 ? [...cards, ...cards] : cards;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const getSlideWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const slide = track.querySelector("[data-procedure-slide]");
    return slide ? slide.getBoundingClientRect().width + 1 : track.clientWidth * 0.8;
  }, []);

  const normalizeScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || cards.length <= 1) return;

    const loopWidth = track.scrollWidth / 2;
    if (loopWidth <= 0) return;

    if (track.scrollLeft >= loopWidth) {
      track.scrollLeft -= loopWidth;
    } else if (track.scrollLeft < 1) {
      track.scrollLeft += loopWidth;
    }
  }, [cards.length]);

  const scrollByDirection = useCallback(
    (direction) => {
      const track = trackRef.current;
      if (!track) return;

      const distance = getSlideWidth();
      track.scrollBy({
        left: direction === "next" ? distance : -distance,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [getSlideWidth, reduceMotion],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const handleScroll = () => {
      window.requestAnimationFrame(normalizeScroll);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [normalizeScroll]);

  useEffect(() => {
    if (cards.length <= 1 || isPaused || reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || track.scrollWidth <= track.clientWidth + 4) return;

      scrollByDirection("next");
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [cards.length, isPaused, reduceMotion, scrollByDirection]);

  return (
    <div
      className="relative mt-14 w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        ref={trackRef}
        className="flex w-full gap-px overflow-x-auto scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Featured procedures"
      >
        {loopCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            data-procedure-slide
            className="w-[85vw] shrink-0 snap-start sm:w-[50vw] lg:w-[33.333vw] xl:w-[25vw]"
          >
            <FeaturedProcedureShowcaseCard card={card} />
          </div>
        ))}
      </div>

      {cards.length > 1 ? (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-3 sm:px-5 lg:flex">
          <button
            type="button"
            aria-label="Previous procedures"
            onClick={() => scrollByDirection("prev")}
            className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-brand-line bg-brand-white text-brand-ink shadow-[0_12px_32px_-20px_rgba(43,35,30,0.35)] transition-colors hover:border-brand-primary hover:text-brand-primary-hover"
          >
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button
            type="button"
            aria-label="Next procedures"
            onClick={() => scrollByDirection("next")}
            className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-brand-line bg-brand-white text-brand-ink shadow-[0_12px_32px_-20px_rgba(43,35,30,0.35)] transition-colors hover:border-brand-primary hover:text-brand-primary-hover"
          >
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
