import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function RigorBanner() {
  return (
    <div className="mt-14 sm:mt-20 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="space-y-3 max-w-2xl text-center lg:text-left relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#057A55] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Architectural Rigor</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
          Why this methodology matters to your business:
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Rushing to write code leads to fragile systems, technical debt, and
          expensive rewrites. By de-risking system architecture upfront,
          products reach production faster, stay reliable under heavy load,
          and scale gracefully without breaking.
        </p>
      </div>

      <Link
        href="#contact"
        className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#057A55] hover:bg-[#046546] text-white font-semibold text-sm shadow-[0_8px_25px_rgba(5,122,85,0.25)] hover:shadow-[0_12px_30px_rgba(5,122,85,0.35)] transition-all hover:scale-[1.02] active:scale-95 relative z-10"
      >
        <span>Let&apos;s Build Together</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

