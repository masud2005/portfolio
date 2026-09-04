"use client";

import {
  Sparkles,
  Layout,
  Server,
  Database,
  Cloud,
  Radio,
  Plug,
  CheckCircle2,
  Radio as LiveIcon,
} from "lucide-react";

interface TechGroup {
  id: string;
  category: string;
  tagline: string;
  icon: React.ElementType;
  skills: { name: string; level: string }[];
}

const techGroups: TechGroup[] = [
  {
    id: "frontend",
    category: "Frontend Engineering",
    tagline: "Component Architecture & Performance",
    icon: Layout,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "State Management", level: "Core" },
      { name: "Responsive & Accessible UI", level: "Core" },
    ],
  },
  {
    id: "backend",
    category: "Backend Architecture",
    tagline: "High-Throughput & Resilient APIs",
    icon: Server,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "NestJS", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Microservices", level: "Core" },
      { name: "Authentication (JWT/OAuth)", level: "Core" },
    ],
  },
  {
    id: "data",
    category: "Data & Persistence",
    tagline: "Relational Modeling & Fast Caching",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Redis Caching", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" },
      { name: "Schema Migrations", level: "Core" },
      { name: "ACID & Query Optimization", level: "Core" },
    ],
  },
  {
    id: "infrastructure",
    category: "Infrastructure & DevOps",
    tagline: "Containerization & Continuous Delivery",
    icon: Cloud,
    skills: [
      { name: "Docker & Compose", level: "Advanced" },
      { name: "Linux Administration", level: "Advanced" },
      { name: "CI/CD Pipelines", level: "Core" },
      { name: "Cloud Platforms", level: "Core" },
      { name: "Reverse Proxy (Nginx)", level: "Core" },
      { name: "Environment Security", level: "Core" },
    ],
  },
  {
    id: "realtime",
    category: "Real-time & Streaming",
    tagline: "Low-Latency Event-Driven Systems",
    icon: Radio,
    skills: [
      { name: "WebSockets", level: "Advanced" },
      { name: "Socket.io", level: "Advanced" },
      { name: "WebRTC Audio/Video", level: "Core" },
      { name: "Event-Driven Queues", level: "Core" },
      { name: "Sub-100ms State Sync", level: "Core" },
    ],
  },
  {
    id: "integrations",
    category: "Integrations & Ecosystem",
    tagline: "Payment Gateways & Cloud Services",
    icon: Plug,
    skills: [
      { name: "Stripe Payments", level: "Advanced" },
      { name: "Firebase Ecosystem", level: "Advanced" },
      { name: "Cloudinary CDN", level: "Advanced" },
      { name: "SMTP & Email Workflows", level: "Core" },
      { name: "Third-party Webhooks", level: "Core" },
    ],
  },
];

const currentlyBuildingItems = [
  "Working as an Executive Full Stack Developer leading production deployments",
  "Building scalable multi-tenant SaaS platforms and commerce engines",
  "Optimizing high-throughput NestJS and PostgreSQL backend architectures",
  "Engineering AI-powered retrieval (RAG) and autonomous agent workflows",
];

export default function TechStack() {
  return (
    <section
      id="expertise"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-emerald-50/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-teal-50/30 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7F0] border border-emerald-100 text-xs font-bold text-[#057A55] tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.16]">
            Technical Expertise:{" "}
            <span className="text-[#057A55]">Engineered for Scale</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Technology is the tool; the product is the goal. I don&apos;t chase
            hype—I select proven, scalable technologies that maximize runtime
            reliability and developer velocity.
          </p>
        </div>

        {/* Tech Grid by Architectural Layer */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {techGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.07)] hover:border-emerald-200/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Icon & Title */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 group-hover:bg-[#046546] transition-all flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#057A55] transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {group.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAFCFB] hover:bg-[#E8F7F0] border border-slate-200/70 hover:border-emerald-200 text-xs font-semibold text-slate-700 hover:text-[#057A55] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#057A55]" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 08 & 19: Currently Building Status Card */}
        <div className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-br from-[#065F46] via-[#057A55] to-[#034832] p-8 sm:p-10 text-white shadow-[0_20px_50px_rgba(5,122,85,0.25)] border border-emerald-400/25">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/15">
            <div className="flex items-center gap-3">
              <div className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Currently Engineering & Scaling
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-200 border border-white/15">
              <LiveIcon className="w-3.5 h-3.5" />
              <span>Live System Status</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentlyBuildingItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-emerald-100 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
