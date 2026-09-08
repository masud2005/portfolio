"use client";

import React from "react";
import { StepItem } from "./types";
import { Check } from "lucide-react";

interface StepTimelineProps {
  steps: StepItem[];
  activeIndex: number;
  onSelectStep: (index: number) => void;
}

export function StepTimeline({
  steps,
  activeIndex,
  onSelectStep,
}: StepTimelineProps) {
  return (
    <div className="relative w-full">
      {/* Mobile Horizontal Glassy Pill Bar */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          const isPassed = activeIndex > index;

          const btnClass = isActive
            ? "bg-[#057A55] text-white border-[#057A55] shadow-md shadow-emerald-950/20"
            : isPassed
            ? "bg-emerald-50/80 text-[#057A55] border-emerald-200/80"
            : "bg-white/80 text-slate-600 border-slate-200/80 hover:bg-white";

          return (
            <button
              key={step.step}
              type="button"
              onClick={() => onSelectStep(index)}
              className={"flex-shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all duration-300 border backdrop-blur-md " + btnClass}
            >
              <span className="text-[11px] opacity-80 font-mono">{step.step}</span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Vertical Stepper */}
      <div className="hidden lg:block relative pl-2">
        {/* Background Vertical Connecting Track */}
        <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200/80 rounded-full" />

        {/* Dynamic Glowing Emerald Progress Line */}
        <div
          className="absolute left-[27px] top-6 w-0.5 bg-[#057A55] transition-all duration-500 ease-out shadow-[0_0_12px_rgba(5,122,85,0.6)] rounded-full"
          style={{
            height: ((activeIndex / (steps.length - 1)) * 82) + "%",
          }}
        />

        {/* Steps List */}
        <div className="space-y-3 relative z-10">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            const isPassed = activeIndex > index;

            const rowClass = isActive
              ? "bg-white/92 border-emerald-200/90 shadow-[0_10px_30px_rgba(5,122,85,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] translate-x-1.5 ring-1 ring-emerald-500/10"
              : "bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200/60";

            const nodeClass = isActive
              ? "bg-[#057A55] text-white border-[#057A55] shadow-md shadow-emerald-700/30 scale-110"
              : isPassed
              ? "bg-[#E8F7F0] text-[#057A55] border-emerald-200/70"
              : "bg-white/90 text-slate-400 border-slate-200/80 group-hover:border-slate-300";

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => onSelectStep(index)}
                className={"w-full group text-left flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 border backdrop-blur-md " + rowClass}
              >
                {/* Node circle */}
                <div
                  className={"w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 text-xs font-bold border " + nodeClass}
                >
                  {isPassed ? (
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <span className="font-mono">{step.step}</span>
                  )}
                </div>

                {/* Step info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={"text-sm font-bold tracking-tight transition-colors " + (
                        isActive
                          ? "text-[#057A55]"
                          : "text-slate-700 group-hover:text-slate-900"
                      )}
                    >
                      {step.title}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#057A55] animate-ping" />
                    )}
                  </div>
                  <p
                    className={"text-xs transition-colors truncate mt-0.5 " + (
                      isActive
                        ? "text-slate-500 font-medium"
                        : "text-slate-400 group-hover:text-slate-500"
                    )}
                  >
                    {step.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
