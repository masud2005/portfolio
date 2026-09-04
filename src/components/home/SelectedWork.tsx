"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Monitor,
  Code2,
  ExternalLink,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "all" | "saas" | "ecommerce" | "fullstack" | "realtime";
  categoryLabel: string;
  description: string;
  platform: string;
  techStack: string[];
  role: string;
  slug: string;
  liveUrl?: string;
  previewColor: string;
  accentGradient: string;
  stats: { label: string; value: string };
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "bazarkhojo",
    title: "Bazarkhojo",
    tagline: "Multi-vendor Commerce & Marketplace Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    description:
      "A scalable multi-vendor e-commerce platform engineered to handle complex merchant catalogs, instant payment routing, real-time inventory tracking, and centralized administrative controls.",
    platform: "Web Application",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Stripe"],
    role: "Backend Architecture & Full Stack",
    slug: "bazarkhojo",
    liveUrl: "https://bazarkhojo.com",
    previewColor: "from-emerald-950/80 via-slate-900 to-emerald-900/60",
    accentGradient: "from-[#065F46] to-[#044E37]",
    stats: { label: "Architecture", value: "Multi-Vendor" },
    highlights: [
      "Dynamic Merchant Onboarding & Storefronts",
      "Transactional DB Isolation with PostgreSQL",
      "Sub-millisecond Redis Caching Layer",
    ],
  },
  {
    id: "at-book-erp",
    title: "AT-Book Enterprise Platform",
    tagline: "Multi-tenant Operational ERP & CRM Suite",
    category: "saas",
    categoryLabel: "SaaS",
    description:
      "A high-throughput enterprise SaaS platform featuring multi-tenant database isolation, role-based access security, recurring billing automation, and comprehensive business operations dashboards.",
    platform: "Cloud Platform",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    role: "System Architect & Full Stack",
    slug: "at-book-erp",
    previewColor: "from-slate-900 via-emerald-950 to-slate-900",
    accentGradient: "from-slate-800 to-emerald-900",
    stats: { label: "Tenancy", value: "Multi-Tenant" },
    highlights: [
      "Granular RBAC & Audit Trail Logging",
      "Automated Invoicing & Stripe Webhooks",
      "Operational Reports & Real-time Metrics",
    ],
  },
  {
    id: "sajda-travel",
    title: "Sajda Travel & Tours",
    tagline: "Hajj, Umrah & Global Travel Booking Engine",
    category: "fullstack",
    categoryLabel: "Web Platform",
    description:
      "A modern travel booking and packaging platform for Hajj, Umrah, and international destinations with seamless package customizers, hotel tiering, and secure booking management.",
    platform: "Web Application",
    techStack: ["Next.js", "Tailwind CSS", "REST API", "PostgreSQL"],
    role: "Full Stack Developer",
    slug: "sajda-travel",
    previewColor: "from-amber-950/70 via-slate-900 to-emerald-950",
    accentGradient: "from-slate-900 to-amber-950/60",
    stats: { label: "Booking Cycle", value: "Real-Time" },
    highlights: [
      "Interactive Itinerary & Package Customizer",
      "Multi-Currency Dynamic Conversion",
      "Instant Confirmation & PDF Voucher Generator",
    ],
  },
  {
    id: "syncpulse-realtime",
    title: "SyncPulse Collaboration Hub",
    tagline: "Low-Latency Real-Time Communication Engine",
    category: "realtime",
    categoryLabel: "Real-time & AI",
    description:
      "An event-driven collaborative workspace delivering sub-100ms messaging, live canvas synchronization, peer-to-peer WebRTC video conferencing, and an integrated contextual AI assistant.",
    platform: "Real-time Web App",
    techStack: ["React", "NestJS", "WebSockets", "WebRTC", "OpenAI API"],
    role: "Backend & Real-Time Engineer",
    slug: "syncpulse-realtime",
    previewColor: "from-teal-950 via-slate-900 to-emerald-900",
    accentGradient: "from-teal-900 to-[#057A55]",
    stats: { label: "Latency", value: "<100ms" },
    highlights: [
      "Bi-directional WebSocket Message Routing",
      "WebRTC Mesh Audio & Video Streaming",
      "AI-Assisted Workflow Automation",
    ],
  },
];

const filterTabs = [
  { id: "all", label: "All Projects", count: 4 },
  { id: "saas", label: "SaaS", count: 1 },
  { id: "ecommerce", label: "E-Commerce", count: 1 },
  { id: "fullstack", label: "Full Stack", count: 1 },
  { id: "realtime", label: "Real-time & AI", count: 1 },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-[#FAFCFB] overflow-hidden"
    >
      {/* Subtle Background Art */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-teal-50/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Matching Screenshot 2: "Our Work. Real Impact.") */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-emerald-100 shadow-sm text-xs font-semibold text-[#057A55]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selected Case Studies</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
            Our Work. <span className="text-[#057A55]">Real Impact.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Success stories and product architectures engineered across diverse
            business sectors. Each project reflects an uncompromising commitment
            to architectural reliability, user experience, and measurable
            business value.
          </p>

          {/* Metric Badges Row (Matching Screenshot 2 Trust Row) */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-7 h-7 rounded-xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-slate-900">30+</span>
                <span className="text-slate-500 ml-1">Projects Completed</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-7 h-7 rounded-xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-slate-900">100%</span>
                <span className="text-slate-500 ml-1">Production Ready</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-7 h-7 rounded-xl bg-[#E8F7F0] text-[#057A55] flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-slate-900">End-to-End</span>
                <span className="text-slate-500 ml-1">Full Stack Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toolbar (Matching Screenshot 2 & 3 Filter Bar) */}
        <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-between gap-4 p-2 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          {/* Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#057A55] text-white shadow-md shadow-emerald-700/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-3 px-3 text-xs text-slate-400 font-medium">
            <span>Showing {filteredProjects.length} Selected Products</span>
          </div>
        </div>

        {/* Project Cards Grid (Matching Screenshot 3 Layout) */}
        <div className="mt-8 space-y-8 sm:space-y-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_55px_rgba(5,122,85,0.08)] hover:border-emerald-200/70 transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-7 sm:p-10 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Pill Tag */}
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Case Study 0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-3 group-hover:text-[#057A55] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#057A55] mt-1">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights Bullet points */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                      {project.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#057A55]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata Row (Platform & Tech Stack) */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Monitor className="w-4 h-4 text-[#057A55]" />
                        <span>{project.platform}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#057A55]" />
                        <span>{project.role}</span>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-[11px] font-semibold text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Row with Signature Circular Green Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href={`#contact`}
                      className="inline-flex items-center gap-3 group/btn"
                    >
                      <span className="text-sm font-bold text-[#0F172A] group-hover/btn:text-[#057A55] transition-colors">
                        View Project Architecture
                      </span>
                      {/* Circular Green Arrow Button from Screenshot 3 */}
                      <div className="w-10 h-10 rounded-full bg-[#057A55] group-hover/btn:bg-[#046546] text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover/btn:scale-110 transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#057A55] transition-colors"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Mockup Column (Matching Screenshot 3 Presentation) */}
                <div className="lg:col-span-6">
                  <div
                    className={`relative rounded-2xl bg-gradient-to-br ${project.previewColor} p-6 sm:p-8 shadow-inner overflow-hidden min-h-[320px] sm:min-h-[380px] flex flex-col justify-between text-white border border-slate-800/40`}
                  >
                    {/* Ambient Glow inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-2xl" />

                    {/* Mockup Top Window Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-400/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <span className="w-3 h-3 rounded-full bg-green-400/80" />
                        <span className="ml-3 text-xs font-mono text-white/50">
                          {project.slug}.architecture
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-emerald-300">
                        {project.stats.label}: {project.stats.value}
                      </span>
                    </div>

                    {/* Realistic Architectural Visual Schematic */}
                    <div className="my-6 space-y-4 relative z-10">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 space-y-1">
                          <p className="text-[10px] uppercase font-mono text-emerald-300">
                            Frontend
                          </p>
                          <p className="text-xs font-bold text-white">Next.js App</p>
                        </div>
                        <div className="p-3 rounded-xl bg-[#057A55]/30 backdrop-blur-md border border-emerald-400/30 space-y-1">
                          <p className="text-[10px] uppercase font-mono text-emerald-200">
                            Backend API
                          </p>
                          <p className="text-xs font-bold text-white">NestJS Core</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 space-y-1">
                          <p className="text-[10px] uppercase font-mono text-emerald-300">
                            Database
                          </p>
                          <p className="text-xs font-bold text-white">PostgreSQL</p>
                        </div>
                      </div>

                      {/* Code / Architecture Snippet Box */}
                      <div className="p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[11px] text-emerald-200/90 leading-relaxed space-y-1">
                        <p className="text-white/40">{"// Engineering Decision"}</p>
                        <p className="text-emerald-400">
                          &gt; Redis Cache Layer: Sub-millisecond response
                        </p>
                        <p className="text-white/80">
                          &gt; DB ACID Compliant: Relational Integrity verified
                        </p>
                        <p className="text-teal-300">
                          &gt; Status: Production Deployed (99.9% uptime)
                        </p>
                      </div>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60 relative z-10">
                      <span>Production Verified</span>
                      <span className="text-emerald-400 font-mono">
                        ● Zero Downtime
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#065F46] via-[#057A55] to-[#034832] p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-950/20">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Have an idea worth building?
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base max-w-xl">
              Let&apos;s turn your vision into a scalable, production-grade
              digital product engineered for real business growth.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#057A55] font-bold text-sm sm:text-base hover:bg-emerald-50 transition-all shadow-lg active:scale-95"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
