"use client";

import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { StepItem } from "./types";

interface StepCardProps {
  step: StepItem;
  totalSteps: number;
}

export function StepCard({ step, totalSteps }: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="w-full flex flex-col justify-between select-none">
      <div>
        {/* Top Header Bar inside Card: Phase Badge + Icon + Live Metric */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200/60">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#E8F7F0]/90 text-[#057A55] flex items-center justify-center shadow-xs border border-emerald-200/60 backdrop-blur-md flex-shrink-0">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700/80">
                Phase {step.step} of 0{totalSteps}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                {step.tagline}
              </h4>
            </div>
          </div>

          {step.metricsPreview && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/70 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-2xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#057A55]" />
              <span>{step.metricsPreview.value}</span>
            </div>
          )}
        </div>

        {/* Title & Core Question */}
        <div className="mt-5 sm:mt-6 space-y-2.5">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-4xl font-black text-slate-300/80 select-none tracking-tight">
              {step.step}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {step.title}
            </h3>
          </div>

          {/* Guiding Question Callout with Frosted Emerald Glass */}
          <div className="p-3 sm:p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 text-[#057A55] text-xs sm:text-sm font-semibold italic flex items-center gap-2.5 backdrop-blur-sm shadow-2xs">
            <span className="text-emerald-600 text-lg leading-none select-none font-serif">“</span>
            <span>{step.question}</span>
            <span className="text-emerald-600 text-lg leading-none select-none font-serif">”</span>
          </div>

          {/* Detailed Narrative */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 sm:pt-1.5 font-normal">
            {step.description}
          </p>
        </div>

        {/* Concrete Deliverables Grid */}
        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200/60">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
            Engineering Deliverables:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {step.keyOutputs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-slate-200/70 text-[11px] sm:text-xs font-medium text-slate-700 shadow-2xs backdrop-blur-sm hover:bg-emerald-50/80 hover:border-emerald-200/80 transition-all duration-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#057A55] flex-shrink-0 stroke-[2.2]" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
