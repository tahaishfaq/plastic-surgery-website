"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function getChapterLayout(index, total) {
  if (index === 0) return "featured";
  if (index === total - 1) return "closing";
  if (index % 3 === 1) return "split-left";
  if (index % 3 === 2) return "split-right";
  return "compact";
}

function ChapterMedia({ step, aspectClass, priority = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2px] border border-brand-line bg-brand-paper shadow-[0_20px_50px_-40px_rgba(43,35,30,0.2)] ${aspectClass}`}
    >
      <Image
        src={step.src}
        alt={step.alt}
        width={step.width}
        height={step.height}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
    </div>
  );
}

function ChapterCopy({ step, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "max-w-md";

  return (
    <div className={alignment}>
      <h3 className="font-instrument text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-brand-ink sm:text-[1.75rem]">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-brand-body sm:text-base">{step.description}</p>
    </div>
  );
}

function JourneyChapter({ step, index, total }) {
  const ref = useRef(null);
  const layout = getChapterLayout(index, total);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      node.dataset.visible = "true";
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      data-visible="false"
      style={{ "--chapter-index": index }}
      className="journey-chapter border-t border-brand-line pt-14 first:border-t-0 first:pt-0 lg:pt-20"
    >
      {layout === "featured" ? (
        <div className="space-y-8">
          <ChapterMedia step={step} aspectClass="aspect-[16/9] sm:aspect-[21/9]" priority={index === 0} />
          <ChapterCopy step={step} />
        </div>
      ) : null}

      {layout === "split-left" ? (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <ChapterMedia step={step} aspectClass="aspect-[4/3] sm:aspect-[3/2]" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pb-1">
            <ChapterCopy step={step} />
          </div>
        </div>
      ) : null}

      {layout === "split-right" ? (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:pb-1">
            <ChapterCopy step={step} />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ChapterMedia step={step} aspectClass="aspect-[4/3] sm:aspect-[3/2]" />
          </div>
        </div>
      ) : null}

      {layout === "compact" ? (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-5">
            <ChapterMedia step={step} aspectClass="aspect-[5/4]" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ChapterCopy step={step} />
          </div>
        </div>
      ) : null}

      {layout === "closing" ? (
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <ChapterMedia step={step} aspectClass="aspect-[3/2]" />
          <ChapterCopy step={step} align="center" />
        </div>
      ) : null}
    </article>
  );
}

export default function JourneyGalleryChapters({ steps }) {
  return (
    <ol className="mt-16 list-none space-y-14 lg:mt-24 lg:space-y-20" aria-label="Patient journey steps">
      {steps.map((step, index) => (
        <li key={step.id}>
          <JourneyChapter step={step} index={index} total={steps.length} />
        </li>
      ))}
    </ol>
  );
}
