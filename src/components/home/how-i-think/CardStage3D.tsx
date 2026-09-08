"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StepItem } from "./types";
import { StepCard } from "./StepCard";

interface CardStage3DProps {
  steps: StepItem[];
  activeIndex: number;
  onSelectStep: (index: number) => void;
  isPaused?: boolean;
  onPauseChange?: (paused: boolean) => void;
}

export function CardStage3D({
  steps,
  activeIndex,
  onSelectStep,
  onPauseChange,
}: CardStage3DProps) {
  const handleNext = () => {
    onSelectStep((activeIndex + 1) % steps.length);
  };

  const handlePrev = () => {
    onSelectStep((activeIndex - 1 + steps.length) % steps.length);
  };

  return (
    <div
      className="relative w-full max-w-2xl mx-auto [perspective:1400px] pt-2 pb-6"
      onMouseEnter={() => onPauseChange?.(true)}
      onMouseLeave={() => onPauseChange?.(false)}
    >
      {/* 3D Glass Stack Layer 2 (Farthest back in visible deck stack) */}
      <div
        className="absolute inset-x-6 top-4 bottom-6 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-emerald-100/40 via-teal-50/20 to-white/40 border border-emerald-200/50 shadow-xs pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md"
        style={{
          transform: "translate3d(0, 24px, -50px) scale(0.92)",
          opacity: 0.5,
          zIndex: 10,
        }}
      />

      {/* 3D Glass Stack Layer 1 (Middle card in visible deck stack) */}
      <div
        className="absolute inset-x-3 top-2 bottom-6 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-white/85 via-white/70 to-emerald-50/40 border border-white/90 shadow-sm pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-xl"
        style={{
          transform: "translate3d(0, 12px, -25px) scale(0.96)",
          opacity: 0.8,
          zIndex: 20,
        }}
      />

      {/* Foreground Main Glassmorphic Card */}
      <div className="relative z-30 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-white/92 via-white/85 to-emerald-50/40 backdrop-blur-2xl border border-white/95 ring-1 ring-emerald-500/10 shadow-[0_25px_65px_-15px_rgba(5,122,85,0.14),0_10px_25px_-10px_rgba(15,23,42,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden">
        {/* Top Glass Specular Highlight Line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-40" />

        {/* Subtle Ambient Radial Light Bloom */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-100/25 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="p-6 sm:p-8 lg:p-9 relative z-30">
          {/* Silky-Smooth Slide Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{
                transform: "translateX(-" + (activeIndex * 100) + "%)",
              }}
            >
              {steps.map((step) => (
                <div key={step.step} className="w-full flex-shrink-0">
                  <StepCard step={step} totalSteps={steps.length} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card Controls: Step Progress Dots & Prev/Next Arrows */}
          <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            {/* Step Indicators with Emerald Glow on Active Dot */}
            <div className="flex items-center gap-1.5">
              {steps.map((_, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onSelectStep(i)}
                    aria-label={"Go to step " + (i + 1)}
                    className={"h-2 rounded-full transition-all duration-400 " + (
                      isActive
                        ? "w-7 bg-[#057A55] shadow-[0_0_8px_rgba(5,122,85,0.5)]"
                        : i < activeIndex
                        ? "w-2.5 bg-emerald-300 hover:bg-emerald-400"
                        : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    )}
                  />
                );
              })}
            </div>

            {/* Step Counter + Navigation Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 select-none">
                <span className="text-slate-700 font-extrabold">{activeIndex + 1}</span> / {steps.length}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous step"
                  className="w-9 h-9 rounded-full border border-slate-200/80 bg-white/90 text-slate-600 flex items-center justify-center hover:bg-emerald-50 hover:text-[#057A55] hover:border-emerald-200/80 active:scale-95 transition-all shadow-2xs backdrop-blur-md"
                >
                  <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next step"
                  className="w-9 h-9 rounded-full bg-[#057A55] text-white flex items-center justify-center hover:bg-[#046546] hover:scale-105 active:scale-95 transition-all shadow-xs"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
