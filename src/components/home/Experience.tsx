"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Layers,
  Code2,
  Cpu,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface RoleMilestone {
  id: string;
  role: string;
  period: string;
  isCurrent: boolean;
  promotionBadge?: string;
  summary: string;
  achievements: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
  techStack: string[];
}

const experienceTimeline: RoleMilestone[] = [
  {
    id: "executive-fullstack",
    role: "Executive Full Stack Developer",
    period: "Jul 2026 – Present",
    isCurrent: true,
    promotionBadge: "Earned Promotion • Backend Developer → Executive Full Stack",
    summary:
      "Promoted to lead end-to-end digital product architecture, bridging scalable backend systems with modern, reactive client interfaces for agency clients worldwide.",
    achievements: [
      {
        title: "Full-Stack System Delivery",
        description:
          "Build scalable full stack applications with React, Next.js, NestJS, and PostgreSQL.",
        icon: Layers,
      },
      {
        title: "Client Requirements & Architecture",
        description:
          "Analyze client requirements, design databases, and develop production-ready solutions.",
        icon: ShieldCheck,
      },
      {
        title: "Real-Time Systems & DevOps",
        description:
          "Implement real-time features with Socket.IO and deploy applications using Docker and CI/CD.",
        icon: Zap,
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Socket.IO",
      "Docker",
      "CI/CD",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend-developer",
    role: "Backend Developer",
    period: "Nov 2025 – Jun 2026",
    isCurrent: false,
    summary:
      "Focused on high-performance server architectures, secure API development, transactional consistency, and data caching.",
    achievements: [
      {
        title: "Secure REST APIs & Services",
        description:
          "Developed secure REST APIs using Node.js, Express.js, NestJS, and TypeScript.",
        icon: Code2,
      },
      {
        title: "Auth, Payments & Caching",
        description:
          "Built authentication, payment, caching, and database-driven backend services.",
        icon: Cpu,
      },
      {
        title: "Database Optimization & Team Sync",
        description:
          "Optimized PostgreSQL, Prisma, MongoDB, Redis, and collaborated across cross-functional teams.",
        icon: CheckCircle2,
      },
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Redis",
      "REST APIs",
    ],
  },
];

const educationData = [
  {
    category: "Formal Education",
    title: "Diploma in Computer Science & Technology",
    institution: "Foundational computing, data structures & algorithms",
    icon: GraduationCap,
  },
  {
    category: "Professional Program",
    title: "Complete Web Development",
    institution: "Programming Hero — Full Stack JavaScript & Modern Web Ecosystem",
    icon: Award,
  },
  {
    category: "Certification",
    title: "IT Support Service Level 03",
    institution: "NSDA — Certified Technical & Systems Competency",
    icon: CheckCircle2,
  },
];

export default function Experience() {
  const [activeMilestone, setActiveMilestone] = useState<string>("executive-fullstack");

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 lg:py-32 bg-[#FAFCFB] overflow-hidden scroll-mt-20"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-emerald-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F7F0] border border-emerald-200/80 text-xs font-semibold text-[#057A55] tracking-wide shadow-xs cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-[#057A55]" />
            <span>Career Evolution & Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.16]">
            From Backend Depth to{" "}
            <span className="text-[#057A55]">Full-Stack Ownership</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            My journey at Softvence Agency demonstrates how deep server-side foundations
            and proactive problem solving naturally evolved into end-to-end digital product engineering.
          </p>
        </div>

        {/* Company Anchor Showcase Card */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_4px_30px_rgba(5,122,85,0.06)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            {/* Left: Softvence Logo & Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative h-14 w-44 sm:h-16 sm:w-48 bg-[#FAFCFB] rounded-2xl border border-slate-200/70 p-2.5 flex items-center justify-center shadow-xs overflow-hidden">
                <Image
                  src="/softvence.png"
                  alt="Softvence Logo"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 176px, 192px"
                  priority
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Softvence Agency
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-bold border border-emerald-200/60">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#057A55]"></span>
                    </span>
                    <span>Primary Tenure</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Digital Product Agency • Full-Stack Software Engineering & Scale
                </p>
              </div>
            </div>

            {/* Right: Tenure Metrics Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-[#FAFCFB] border border-slate-200/80">
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Total Duration
                </p>
                <p className="text-sm font-bold text-slate-800">
                  Nov 2025 – Present
                </p>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-[#F0FAF5] border border-emerald-200/80 text-[#057A55]">
                <p className="text-[11px] font-medium text-emerald-600 uppercase tracking-wider">
                  Career Trajectory
                </p>
                <p className="text-sm font-extrabold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#057A55]" />
                  <span>1 Internal Promotion</span>
                </p>
              </div>
            </div>
          </div>

          {/* Connected Timeline Rail of Roles */}
          <div className="mt-10 relative">
            {/* The Vertical Gradient Connector Line */}
            <div className="hidden sm:block absolute left-6 top-8 bottom-12 w-0.5 bg-gradient-to-b from-[#057A55] via-emerald-400 to-slate-200 z-0" />

            <div className="space-y-10 sm:space-y-12">
              {experienceTimeline.map((item, index) => {
                const isSelected = activeMilestone === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveMilestone(item.id)}
                    className={`relative z-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group cursor-pointer transition-all duration-300`}
                  >
                    {/* Timeline Node Icon Circle */}
                    <div className="flex items-center sm:flex-col justify-center">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${item.isCurrent
                          ? "bg-[#057A55] text-white ring-4 ring-[#E8F7F0]"
                          : "bg-slate-100 text-slate-600 group-hover:bg-[#E8F7F0] group-hover:text-[#057A55]"
                          }`}
                      >
                        {item.isCurrent ? (
                          <Briefcase className="w-5 h-5" />
                        ) : (
                          <Code2 className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    {/* Milestone Content Card */}
                    <div
                      className={`flex-1 w-full bg-[#FAFCFB] rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${isSelected
                        ? "border-emerald-300 shadow-[0_12px_35px_rgba(5,122,85,0.08)] bg-white"
                        : "border-slate-200/80 hover:border-emerald-200/80 hover:bg-white"
                        }`}
                    >
                      {/* Top Role Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                              {item.role}
                            </h4>
                            {item.isCurrent && (
                              <span className="px-2.5 py-0.5 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-bold">
                                Current Role
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-[#057A55] mt-1">
                            Softvence Agency
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200/70 shadow-2xs self-start sm:self-auto">
                          <Calendar className="w-4 h-4 text-[#057A55]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Promotion Banner Callout if present */}
                      {item.promotionBadge && (
                        <div className="mt-4 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#E8F7F0] to-[#F2FAF5] border border-emerald-200/70 flex items-center gap-3 text-xs sm:text-sm font-bold text-[#057A55]">
                          <TrendingUp className="w-4 h-4 text-[#057A55] shrink-0" />
                          <span>{item.promotionBadge}</span>
                        </div>
                      )}

                      {/* Summary */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                        {item.summary}
                      </p>

                      {/* Key Deliverables & Responsibilities Grid */}
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {item.achievements.map((ach, aIdx) => {
                          const Icon = ach.icon;
                          return (
                            <div
                              key={aIdx}
                              className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 transition-colors space-y-2 shadow-2xs"
                            >
                              <div className="w-8 h-8 rounded-xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center">
                                <Icon className="w-4 h-4" />
                              </div>
                              <h5 className="text-sm font-bold text-slate-900 leading-snug">
                                {ach.title}
                              </h5>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {ach.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Applied Tech Stack:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs hover:border-emerald-300 hover:text-[#057A55] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Academic & Certifications Row */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#057A55]">
              Accreditation & Foundations
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Education & Certified Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-emerald-200 hover:shadow-[0_8px_30px_rgba(5,122,85,0.06)] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#057A55] uppercase tracking-wider">
                      {edu.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 leading-snug">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to Discuss Work */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#057A55] hover:text-[#046546] transition-colors group"
          >
            <span>Explore Projects Built During My Agency Experience</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
