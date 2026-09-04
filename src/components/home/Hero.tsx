"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Play,
  Briefcase,
  Code2,
  Database,
  Cpu,
  CheckCircle2,
  Users,
  TrendingUp,
  Layers,
  ChevronDown,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FAFCFB] pt-8 pb-20 lg:pt-14 lg:pb-28"
    >
      {/* Background Decorative SVG Wave Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <svg
          className="absolute -bottom-6 left-0 right-0 w-full h-[320px] sm:h-[380px] lg:h-[420px] opacity-[0.24] pointer-events-none"
          viewBox="0 0 1920 420"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 340C260 260 520 400 920 320C1320 240 1600 370 1970 300"
            stroke="#057A55"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-50 380C240 300 500 440 900 360C1300 280 1580 410 1970 340"
            stroke="#057A55"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-50 310C280 230 540 370 940 290C1340 210 1620 340 1970 270"
            stroke="#10B981"
            strokeWidth="1.2"
            strokeOpacity="0.8"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-50 270C300 190 560 330 960 250C1360 170 1640 300 1970 230"
            stroke="#057A55"
            strokeWidth="0.8"
            strokeOpacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-50 410C220 330 480 470 880 390C1280 310 1560 440 1970 370"
            stroke="#10B981"
            strokeWidth="0.8"
            strokeDasharray="3 3"
            strokeOpacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M-50 240C320 160 580 300 980 220C1380 140 1660 270 1970 200"
            stroke="#057A55"
            strokeWidth="0.6"
            strokeOpacity="0.4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Ambient Mint Radial Glow behind the right side */}
        <div className="absolute top-12 right-0 w-[550px] h-[550px] bg-gradient-to-br from-emerald-100/40 via-teal-50/20 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-emerald-50/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">

            {/* Story / Persona Pill Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white border border-emerald-100 shadow-[0_2px_10px_rgba(5,122,85,0.06)] hover:border-emerald-200 transition-colors">
              <button
                type="button"
                onClick={() => setVideoModalOpen(true)}
                className="w-7 h-7 rounded-full bg-[#E8F7F0] text-[#057A55] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-inner"
                aria-label="Watch Introduction Story"
              >
                <Play className="w-3.5 h-3.5 fill-[#057A55] ml-0.5" />
              </button>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Executive Full Stack Developer
              </span>
              <span className="h-3 w-px bg-slate-200" />
              <span className="text-xs font-medium text-[#057A55] flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Product Engineer
              </span>
            </div>

            {/* High-Impact Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
              Building Digital Products with{" "}
              <span className="text-[#057A55] relative inline-block">
                Smart Architecture
                {/* Subtle highlight flourish */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-emerald-300/60"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 2 150 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Executive Full Stack Developer focused on building scalable web
              applications, robust backend architectures, and production-ready
              digital products from idea to deployment.
            </p>

            {/* CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#057A55] hover:bg-[#046546] text-white font-medium text-sm sm:text-base shadow-[0_8px_25px_rgba(5,122,85,0.28)] hover:shadow-[0_12px_30px_rgba(5,122,85,0.38)] transition-all hover:scale-[1.02] active:scale-98"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-sm sm:text-base border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all hover:scale-[1.01] active:scale-98"
              >
                <Layers className="w-4 h-4 text-[#057A55]" />
                <span>Let&apos;s Build Something</span>
              </Link>
            </div>

            {/* Trust Indicators / Stat Row */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#057A55]" />
                <span>30+ Projects Shipped</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#057A55]" />
                <span>Backend → Full Stack</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#057A55]" />
                <span>Production Experience</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (FLOATING 3D CARDS COMPOSITION) ================= */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[500px] sm:min-h-[560px] lg:min-h-[580px] select-none">

            {/* Composition Container */}
            <div className="relative w-full max-w-[500px] sm:max-w-[530px] lg:max-w-[540px] h-[480px] sm:h-[520px] lg:ml-auto">

              {/* Background Arch and Concentric Decorative Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[340px] sm:w-[410px] h-[440px] sm:h-[490px] border border-emerald-200/50 rounded-t-[180px] rounded-b-[40px] bg-gradient-to-b from-emerald-50/40 via-transparent to-transparent" />
                <div className="absolute w-[280px] sm:w-[340px] h-[360px] sm:h-[410px] border border-emerald-100/60 rounded-t-[150px] rounded-b-[30px]" />
              </div>

              {/* CARD 1: Top-Left Floating White Card */}
              <div className="absolute -top-2 left-0 sm:left-2 z-20 w-[200px] sm:w-[220px] bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Digital Products
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Real business workflows
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2: Top-Right Floating White Card */}
              <div className="absolute top-10 right-0 z-20 w-[200px] sm:w-[220px] bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Full Stack Systems
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Next.js & NestJS APIs
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3: CENTER ANCHOR CARD (The Signature Emerald Stat Card) */}
              <div className="absolute top-[130px] sm:top-[140px] left-1/2 -translate-x-1/2 z-30 w-[280px] sm:w-[320px] rounded-3xl bg-gradient-to-br from-[#065F46] via-[#057A55] to-[#034832] p-6 text-white shadow-[0_20px_50px_rgba(5,122,85,0.32)] border border-emerald-400/25">
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  {/* Metric 1 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-200">
                      <Users className="w-4 h-4" />
                      <span className="text-xl sm:text-2xl font-black text-white">
                        30+
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-emerald-100 font-medium">
                      Projects Built
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-200">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xl sm:text-2xl font-black text-white">
                        100%
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-emerald-100 font-medium">
                      Production Ready
                    </p>
                  </div>

                  {/* Metric 3 */}
                  <div className="space-y-1 pt-2 border-t border-emerald-600/40">
                    <div className="flex items-center gap-1.5 text-emerald-200">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm sm:text-base font-bold text-white">
                        Full Stack
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-emerald-100 font-medium">
                      End-to-End Delivery
                    </p>
                  </div>

                  {/* Metric 4 */}
                  <div className="space-y-1 pt-2 border-t border-emerald-600/40">
                    <div className="flex items-center gap-1.5 text-emerald-200">
                      <Cpu className="w-4 h-4" />
                      <span className="text-sm sm:text-base font-bold text-white">
                        Scalable
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-emerald-100 font-medium">
                      Optimized Backend
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4: Bottom-Left Floating White Card */}
              <div className="absolute bottom-6 left-0 sm:left-2 z-20 w-[190px] sm:w-[215px] bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Data & Backend
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      PostgreSQL & Redis
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 5: Bottom-Right Floating White Card */}
              <div className="absolute bottom-2 right-0 z-20 w-[190px] sm:w-[215px] bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      Real-time & AI
                    </h2>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      WebSockets & Automations
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Center Section Indicator Pill (matching screenshot style) */}
        <div className="mt-14 sm:mt-20 flex justify-center">
          <Link
            href="#what-i-build"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200/50 shadow-sm"
          >
            <span className="text-emerald-500">✦</span>
            <span>What I Build</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Floating Quick Contact & Scroll-to-Top Actions (Bottom Right) */}
      <aside aria-label="Quick actions" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll-to-Top Pill Button */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-11 h-11 rounded-full bg-[#057A55] hover:bg-[#046546] text-white flex items-center justify-center shadow-lg shadow-emerald-900/25 transition-all hover:scale-105 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp / Direct Chat Action Button */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-transparent" />
        </a>
      </aside>

      {/* Intro Modal (Accessible when clicking the play pill) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold text-slate-900">
              Executive Full Stack Philosophy
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              &ldquo;Don&apos;t just show what you know. Show what you build, how you think,
              and why businesses can trust you.&rdquo;
            </p>
            <div className="mt-4 p-4 rounded-2xl bg-[#F0FAF5] border border-emerald-100 text-xs text-[#057A55] space-y-1.5">
              <p className="font-semibold">Core Engineering Values:</p>
              <p>• Start with the business problem before writing any code</p>
              <p>• Build reliable, high-throughput backend systems</p>
              <p>• Deliver end-to-end products from idea to production</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2 rounded-full bg-[#057A55] text-white text-sm font-medium hover:bg-[#046546] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
