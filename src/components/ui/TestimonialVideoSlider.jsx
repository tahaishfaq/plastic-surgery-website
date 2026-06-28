"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { getYouTubeThumbnail, resolveTestimonialImage } from "@/data/testimonials";

function TestimonialThumbnail({ slide }) {
  const [thumbnailSrc, setThumbnailSrc] = useState(() =>
    slide.videoId ? getYouTubeThumbnail(slide.videoId, "maxres") : resolveTestimonialImage(slide.thumbnail),
  );
  const isYouTubeThumbnail = thumbnailSrc.includes("ytimg.com") || thumbnailSrc.includes("youtube.com");

  return (
    <Image
      src={thumbnailSrc}
      alt={slide.thumbnailAlt}
      fill
      sizes="(max-width: 768px) 100vw, 720px"
      quality={95}
      unoptimized={isYouTubeThumbnail}
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      onError={() => {
        if (slide.videoId && thumbnailSrc.includes("maxresdefault")) {
          setThumbnailSrc(getYouTubeThumbnail(slide.videoId, "hq"));
        }
      }}
    />
  );
}

function TestimonialSlide({ slide, onPlay }) {
  const { review } = slide;

  return (
    <article className="group relative w-full">
      <div className="overflow-hidden rounded-[2px] border border-brand-line bg-brand-white shadow-[0_14px_44px_-34px_rgba(43,35,30,0.28)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-primary hover:shadow-[0_20px_50px_-34px_rgba(168,141,112,0.32)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <div className="relative aspect-video overflow-hidden bg-brand-paper">
          <TestimonialThumbnail slide={slide} />

          <button
            type="button"
            className="absolute left-1/2 top-1/2 z-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-brand-primary text-white shadow-[0_12px_32px_-12px_rgba(43,35,30,0.55)] transition-all duration-200 hover:scale-105 hover:bg-brand-primary-hover group-hover:opacity-0 group-focus-within:opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transition-none"
            aria-label="Play patient video testimonial"
            onClick={() => onPlay(slide)}
          >
            <Play aria-hidden="true" size={22} fill="currentColor" className="ml-0.5" />
          </button>

          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-ink/92 via-brand-ink/55 to-brand-ink/15 p-6 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 motion-reduce:opacity-100 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="relative size-12 shrink-0 overflow-hidden rounded-full border border-white/25 bg-brand-soft-blue sm:size-14">
                <Image
                  src={resolveTestimonialImage(review.avatar)}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
                <span className="sr-only">{review.name}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <StarRating count={review.rating} size={13} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-primary">
                    {review.source}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-white/88 sm:text-[15px]">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                    {review.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialVideoSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  if (!activeSlide) return null;

  return (
    <>
      <div className="mx-auto mt-12 max-w-[720px] lg:mt-14">
        <div aria-live="polite" aria-atomic="true">
          <TestimonialSlide key={activeSlide.id} slide={activeSlide} onPlay={setActiveVideo} />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[2px] border border-brand-line bg-brand-white text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            aria-label="Previous testimonial video"
            onClick={goToPrevious}
          >
            <ChevronLeft aria-hidden="true" size={18} />
          </button>
          <p className="min-w-16 text-center text-xs font-bold uppercase tracking-[0.14em] text-brand-muted">
            {activeIndex + 1} / {slides.length}
          </p>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[2px] border border-brand-line bg-brand-white text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            aria-label="Next testimonial video"
            onClick={goToNext}
          >
            <ChevronRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/85 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Patient video testimonial"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="absolute -top-2 right-0 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-3 focus-visible:outline-white"
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
            >
              <X aria-hidden="true" size={20} />
            </button>
            {activeVideo.embedUrl ? (
              <div className="relative aspect-video overflow-hidden rounded-[2px] bg-black">
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=1`}
                  title="Patient video testimonial"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="rounded-[2px] border border-white/15 bg-brand-ink px-6 py-10 text-center text-white">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-primary">Video testimonial</p>
                <p className="mt-4 text-base leading-7 text-white/80">
                  This patient video will be available here once approved for publication.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
