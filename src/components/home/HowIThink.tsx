"use client";

import {
  Lightbulb,
  Target,
  Cpu,
  Code2,
  CheckCircle,
  Gauge,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

interface Step {
  step: string;
  title: string;
  question: string;
  description: string;
  icon: React.ElementType;
  keyOutputs: string[];
}

const steps: Step[] = [
  {
    step: "01",
    title: "Understand",
    question: "What are we actually trying to solve?",
    description:
      "Before writing a single line of code, I dissect the real business context, user pain points, and operational constraints.",
    icon: Lightbulb,
    keyOutputs: [
      "Root Problem Definition",
      "User Friction Analysis",
      "Business Constraint Mapping",
    ],
  },
  {
    step: "02",
    title: "Define",
    question: "What should the product do?",
    description:
      "Clarifying functional specifications, scope boundaries, and core product milestones to prevent costly architectural creep.",
    icon: Target,
    keyOutputs: [
      "Feature Prioritization (MVP vs V2)",
      "User Flow Specifications",
      "Data Contract Definitions",
    ],
  },
  {
    step: "03",
    title: "Design",
    question: "How should the system work?",
    description:
      "Designing resilient schemas, API contracts, caching layers, and decoupled services before committing to code.",
    icon: Cpu,
    keyOutputs: [
      "Relational & Document DB Modeling",
      "API & Webhook Architecture",
      "Security & Authentication Patterns",
    ],
  },
  {
    step: "04",
    title: "Build",
    question: "Turn the architecture into software.",
    description:
      "Executing with modular, type-safe clean code, adhering to SOLID principles and maintainable design patterns.",
    icon: Code2,
    keyOutputs: [
      "Type-Safe Next.js & NestJS Code",
      "Decoupled Business Logic",
      "Structured Error & Logging Handling",
    ],
  },
  {
    step: "05",
    title: "Validate",
    question: "Does it actually solve the problem?",
    description:
      "Testing against edge cases, simulating high concurrency, verifying transactional integrity, and validating UX.",
    icon: CheckCircle,
    keyOutputs: [
      "End-to-End User Flow Testing",
      "Concurrency & ACID Validation",
      "Real-world UX Sanity Checks",
    ],
  },
  {
    step: "06",
    title: "Improve",
    question: "Make it faster, safer and more scalable.",
    description:
      "Continuous optimization—reducing response latency, profiling slow SQL queries, introducing Redis, and monitoring uptime.",
    icon: Gauge,
    keyOutputs: [
      "Database Query Indexing & Profiling",
      "Sub-Millisecond Redis Caching",
      "Zero-Downtime CI/CD Automation",
    ],
  },
];

export default function HowIThink() {
  return (
    <section
      id="thinking"
      className="relative py-24 sm:py-32 bg-[#FAFCFB] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-teal-50/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-100 text-xs font-bold text-[#057A55] tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Approach</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.16]">
            I Don&apos;t Start With Code.{" "}
            <span className="text-[#057A55]">I Start With the Problem.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Great software isn&apos;t measured by lines of code, but by the
            clarity of the architecture and the business value it delivers. Here
            is my systematic 6-step engineering methodology.
          </p>
        </div>

        {/* 6-Stage Process Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.08)] hover:border-emerald-200/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center group-hover:bg-[#057A55] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      STEP {item.step}
                    </span>
                  </div>

                  {/* Title & Core Question */}
                  <div className="mt-6 space-y-1">
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#057A55] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#057A55]">
                      &ldquo;{item.question}&rdquo;
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Outputs */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Concrete Deliverables:
                  </span>
                  {item.keyOutputs.map((out, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#057A55]" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Thought Leadership Banner */}
        <div className="mt-14 sm:mt-18 rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#057A55] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Architectural Rigor</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Why this methodology matters to your business:
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Rushing to write code leads to fragile systems, technical debt, and
              expensive rewrites. By de-risking system architecture upfront,
              products reach production faster, stay reliable under heavy load,
              and adapt seamlessly as your user base expands.
            </p>
          </div>

          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#057A55] hover:bg-[#046546] text-white font-semibold text-sm shadow-[0_8px_25px_rgba(5,122,85,0.25)] hover:shadow-[0_12px_30px_rgba(5,122,85,0.35)] transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
