"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import FeaturedProcedureShowcaseCard from "@/components/ui/FeaturedProcedureShowcaseCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AUTO_SCROLL_SPEED = 1.1;

export default function ProceduresSlider({ cards }) {
  const [emblaApi, setEmblaApi] = useState(null);

  const autoScrollPlugin = useMemo(
    () =>
      AutoScroll({
        speed: AUTO_SCROLL_SPEED,
        direction: "forward",
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        stopOnFocusIn: false,
        playOnInit: true,
        startDelay: 0,
      }),
    [],
  );

  useEffect(() => {
    if (!emblaApi || cards.length <= 1) return undefined;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      autoScroll.stop();
      return undefined;
    }

    autoScroll.play();

    const handleReInit = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        autoScroll.play();
      }
    };

    emblaApi.on("reInit", handleReInit);

    return () => {
      emblaApi.off("reInit", handleReInit);
      autoScroll.stop();
    };
  }, [emblaApi, cards.length]);

  const resumeAutoScroll = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      autoScroll.play();
    }
  }, [emblaApi]);

  if (!cards.length) return null;

  const hasMultipleCards = cards.length > 1;
  const loopCards = hasMultipleCards ? [...cards, ...cards, ...cards] : cards;

  return (
    <Carousel
      className="relative mt-14 w-full"
      setApi={setEmblaApi}
      onMouseLeave={resumeAutoScroll}
      opts={{
        align: "start",
        loop: hasMultipleCards,
        containScroll: false,
      }}
      plugins={hasMultipleCards ? [autoScrollPlugin] : []}
    >
      <CarouselContent className="-ml-px">
        {loopCards.map((card, index) => (
          <CarouselItem
            key={`${card.id}-${index}`}
            className="basis-[85%] pl-px sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <FeaturedProcedureShowcaseCard card={card} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {hasMultipleCards ? (
        <>
          <CarouselPrevious className="hidden lg:inline-flex" />
          <CarouselNext className="hidden lg:inline-flex" />
        </>
      ) : null}
    </Carousel>
  );
}
