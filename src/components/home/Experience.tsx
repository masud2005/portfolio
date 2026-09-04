"use client";

import {
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  Server,
} from "lucide-react";

interface Responsibility {
  num: string;
  title: string;
  desc: string;
}

const currentRoleResponsibilities: Responsibility[] = [
  {
    num: "01",
    title: "Full-Stack Product Engineering",
    desc: "Architecting and delivering complete web applications from initial system design to production release.",
  },
  {
    num: "02",
    title: "Backend Architecture & APIs",
    desc: "Designing resilient RESTful and real-time APIs using NestJS, Node.js, and event-driven patterns.",
  },
  {
    num: "03",
    title: "Database Design & Optimization",
    desc: "Modeling relational schemas in PostgreSQL, caching with Redis, and optimizing complex queries.",
  },
  {
    num: "04",
    title: "Third-Party & Payment Integrations",
    desc: "Implementing secure payment gateways (Stripe), webhooks, authentication, and external services.",
  },
  {
    num: "05",
    title: "Deployment & Infrastructure",
    desc: "Managing Docker environments, CI/CD pipelines, and cloud platform deployments with zero downtime.",
  },
  {
    num: "06",
    title: "Cross-Functional Collaboration",
    desc: "Working closely with product stakeholders, UI/UX designers, and QA teams to maintain velocity.",
  },
];

const priorRoleResponsibilities: Responsibility[] = [
  {
    num: "01",
    title: "REST API & Microservices",
    desc: "Engineered scalable endpoints, request validation pipelines, and business logic layers.",
  },
  {
    num: "02",
    title: "Database Modeling & Indexing",
    desc: "Designed and optimized database schemas, transactions, and migration strategies.",
  },
  {
    num: "03",
    title: "Authentication & Security",
    desc: "Implemented JWT, session management, RBAC access control, and endpoint rate limiting.",
  },
  {
    num: "04",
    title: "Performance Optimization",
    desc: "Reduced server response latency via Redis caching and optimized database query execution.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-teal-50/30 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7F0] border border-emerald-100 text-xs font-bold text-[#057A55] tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Evolution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.16]">
            From Backend Depth to{" "}
            <span className="text-[#057A55]">Full-Stack Leadership</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            My career began with a deep focus on server-side architecture,
            database performance, and APIs. That foundational rigor paved the
            way for complete full-stack ownership and digital product
            engineering.
          </p>
        </div>

        {/* Promotion Story Highlight Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#F0FAF5] border border-emerald-100/90 shadow-[0_4px_25px_rgba(5,122,85,0.05)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#057A55] uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Growth is Part of the Work</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
              Earned Promotion Through Demonstrated Impact
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              From managing backend systems to owning end-to-end full-stack
              applications, my progression reflects proactive problem-solving
              and business ownership.
            </p>
          </div>

          {/* Promotion Diagram Pill Flow */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white px-5 py-3.5 rounded-2xl border border-emerald-200/60 shadow-sm text-xs sm:text-sm font-bold">
            <span className="text-slate-600 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60">
              Backend Developer
            </span>
            <span className="text-[#057A55]">→</span>
            <span className="text-emerald-700 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200">
              Expanded Ownership
            </span>
            <span className="text-[#057A55]">→</span>
            <span className="text-white px-3 py-1.5 rounded-xl bg-[#057A55] shadow-sm">
              Executive Full Stack
            </span>
          </div>
        </div>

        {/* Career Timeline Cards */}
        <div className="mt-14 space-y-8">
          
          {/* ROLE 1: Current Role */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-10 border-2 border-emerald-200/80 shadow-[0_12px_40px_rgba(5,122,85,0.07)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/25 flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                      Executive Full Stack Developer
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-bold">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#057A55]" />
                      </span>
                      Current Role
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Leading product engineering across modern web, backend & cloud architectures
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 self-start sm:self-auto">
                <span>Present</span>
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Key Responsibilities & System Ownership:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentRoleResponsibilities.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 rounded-2xl bg-[#FAFCFB] border border-slate-100 hover:border-emerald-200 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#057A55] bg-[#E8F7F0] px-2 py-0.5 rounded-md">
                        {item.num}
                      </span>
                      <h5 className="text-sm font-bold text-[#0F172A]">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-500">
                Primary Technologies:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "NestJS",
                  "Node.js",
                  "PostgreSQL",
                  "Redis",
                  "Prisma",
                  "Docker",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ROLE 2: Previously - Backend Developer */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-10 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:border-slate-200 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Backend Developer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Focused on scalable REST APIs, relational schemas & server performance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 self-start sm:self-auto">
                <span>Previously</span>
              </div>
            </div>

            {/* Responsibilities Grid */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Core Contributions:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {priorRoleResponsibilities.map((item) => (
                  <div
                    key={item.num}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">
                        {item.num}
                      </span>
                      <h5 className="text-sm font-bold text-slate-800">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tags */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-500">
                Core Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "NestJS",
                  "MongoDB",
                  "PostgreSQL",
                  "REST APIs",
                  "JWT",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Education & Certifications Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#FAFCFB] border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#057A55] uppercase tracking-wider">
                Formal Education
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#0F172A] mt-0.5">
                Diploma in Computer Science & Technology
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Foundational computing, data structures & algorithms
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAFCFB] border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#057A55] uppercase tracking-wider">
                Professional Program
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#0F172A] mt-0.5">
                Complete Web Development
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Programming Hero — Full Stack JavaScript & Ecosystem
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAFCFB] border border-slate-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#057A55] uppercase tracking-wider">
                Certification
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#0F172A] mt-0.5">
                IT Support Service Level 03
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                NSDA — Certified Technical & Systems Competency
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
