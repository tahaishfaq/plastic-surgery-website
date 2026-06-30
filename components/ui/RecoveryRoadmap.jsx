"use client";

import { useEffect, useRef, useState } from "react";
import {
  CircleCheck,
  ClipboardList,
  HeartPulse,
  LampCeiling,
  MessagesSquare,
} from "lucide-react";

const iconMap = {
  consultation: MessagesSquare,
  planning: ClipboardList,
  procedure: LampCeiling,
  recovery: HeartPulse,
  results: CircleCheck,
};

function RoadmapStepCard({ step, align }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const Icon = iconMap[step.icon] ?? MessagesSquare;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`relative flex w-full ${align === "left" ? "lg:justify-start" : "lg:justify-end"}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-4 top-8 hidden size-2.5 rounded-full border-2 border-brand-white bg-brand-primary shadow-[0_0_0_4px_rgba(248,242,235,1)] lg:left-1/2 lg:block lg:-translate-x-1/2"
      />

      <article
        className={`w-full max-w-md rounded-[2px] border border-brand-line bg-brand-white p-5 shadow-[0_14px_44px_-34px_rgba(43,35,30,0.24)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary hover:shadow-[0_20px_50px_-34px_rgba(168,141,112,0.3)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
      >
        <div className="flex items-start gap-4">
          <span className="inline-flex min-w-11 items-center justify-center rounded-[2px] bg-brand-soft-blue px-2.5 py-1.5 font-instrument text-sm font-semibold tracking-[-0.02em] text-brand-primary">
            {step.number}
          </span>
          <div className="flex size-10 shrink-0 items-center justify-center rounded-[2px] border border-brand-line bg-[#f7f1e8]/70 text-brand-primary">
            <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-bold text-brand-ink">{step.title}</h3>
        <p className="mt-2 text-sm leading-6 text-brand-body">{step.description}</p>
      </article>
    </li>
  );
}

export default function RecoveryRoadmap({ steps }) {
  return (
    <div className="relative">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-4 top-6 hidden w-8 text-brand-primary/35 lg:left-1/2 lg:block lg:-translate-x-1/2"
        viewBox="0 0 32 600"
        preserveAspectRatio="none"
      >
        <path
          d="M16 0 C28 80, 4 140, 16 200 S28 320, 16 380 S4 500, 16 600"
          fill="none"
          stroke="currentColor"
          strokeDasharray="4 8"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-4 top-6 w-px text-brand-primary/35 lg:hidden"
        viewBox="0 0 2 600"
        preserveAspectRatio="none"
      >
        <line x1="1" y1="0" x2="1" y2="600" stroke="currentColor" strokeDasharray="4 8" strokeWidth="1.5" />
      </svg>

      <ol className="relative space-y-6 pl-10 lg:space-y-8 lg:pl-0">
        {steps.map((step, index) => (
          <RoadmapStepCard key={step.id} step={step} align={index % 2 === 0 ? "left" : "right"} />
        ))}
      </ol>
    </div>
  );
}
