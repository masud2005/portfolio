"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { METHODOLOGY_STEPS } from "./how-i-think/types";
import { StepTimeline } from "./how-i-think/StepTimeline";
import { CardStage3D } from "./how-i-think/CardStage3D";
import { RigorBanner } from "./how-i-think/RigorBanner";

export default function HowIThink() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance through methodology steps every 6s, pausing on hover or manual interaction
  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % METHODOLOGY_STEPS.length);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused]);

  const handleSelectStep = (index: number) => {
    setActiveIndex(index);
    // Pause briefly after user interaction so they can read
    setIsPaused(true);
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  return (
    <section
      id="thinking"
      className="relative py-20 sm:py-28 bg-[#FAFCFB] overflow-hidden scroll-mt-20"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-100 text-xs font-bold text-[#057A55] tracking-wide uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#057A55]" />
            <span>Engineering Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.16]">
            I Don&apos;t Start With Code.{" "}
            <span className="text-[#057A55]">I Start With the Problem.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Great software isn&apos;t measured by lines of code, but by the
            clarity of the architecture and the business value it delivers.
            Explore my systematic 6-phase engineering lifecycle.
          </p>
        </div>

        {/* Interactive 3D Methodology Showcase (Side-by-Side balanced layout, no dead scroll space) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Timeline & Stepper */}
          <div className="lg:col-span-5 xl:col-span-5">
            <StepTimeline
              steps={METHODOLOGY_STEPS}
              activeIndex={activeIndex}
              onSelectStep={handleSelectStep}
            />
          </div>

          {/* Right Column: 3D Staged Stacking Card Deck */}
          <div className="lg:col-span-7 xl:col-span-7">
            <CardStage3D
              steps={METHODOLOGY_STEPS}
              activeIndex={activeIndex}
              onSelectStep={handleSelectStep}
              isPaused={isPaused}
              onPauseChange={setIsPaused}
            />
          </div>

        </div>

        {/* Thought Leadership Rigor Banner at the bottom of the section */}
        <div className="mt-14 sm:mt-20">
          <RigorBanner />
        </div>

      </div>
    </section>
  );
}
