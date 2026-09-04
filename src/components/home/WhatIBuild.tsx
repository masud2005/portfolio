"use client";

import Link from "next/link";
import {
  Layers,
  Server,
  ShoppingCart,
  Radio,
  Sparkles,
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";

interface Category {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  capabilities: string[];
  featuredBadge?: string;
}

const categories: Category[] = [
  {
    id: "digital-products",
    number: "01",
    title: "Digital Products",
    tagline: "Idea to Production",
    description:
      "End-to-end web applications engineered around real business workflows, user behavior, and rock-solid system reliability.",
    icon: Layers,
    capabilities: [
      "Custom Workflow Automation",
      "Intuitive UX Engineering",
      "API & System Integration",
      "Production Deployments",
    ],
  },
  {
    id: "saas-platforms",
    number: "02",
    title: "SaaS Platforms",
    tagline: "Multi-Tenant Architecture",
    description:
      "Scalable platforms featuring multi-tenancy, authentication, subscription billing, operational dashboards, and resilient background jobs.",
    icon: Server,
    capabilities: [
      "Role-Based Access Control (RBAC)",
      "Stripe & Subscription Billing",
      "High-Throughput REST & GraphQL",
      "Analytics & Admin Consoles",
    ],
    featuredBadge: "High Demand",
  },
  {
    id: "ecommerce-platforms",
    number: "03",
    title: "E-Commerce & Marketplaces",
    tagline: "Transactional Scalability",
    description:
      "Multi-vendor commerce engines with resilient inventory sync, complex checkout funnels, automated payout workflows, and robust security.",
    icon: ShoppingCart,
    capabilities: [
      "Multi-Vendor Architecture",
      "Zero-Downtime Cart & Checkout",
      "Payment Gateway Integrations",
      "Real-time Inventory Tracking",
    ],
  },
  {
    id: "realtime-systems",
    number: "04",
    title: "Real-time Applications",
    tagline: "Low Latency & WebSockets",
    description:
      "Instantaneous collaboration, interactive messaging, and real-time state synchronization powered by WebSockets, Socket.io, and WebRTC.",
    icon: Radio,
    capabilities: [
      "WebSocket Event Streaming",
      "Live Audio/Video Infrastructure",
      "Real-Time Data Feeds",
      "Optimistic UI Updates",
    ],
  },
  {
    id: "ai-applications",
    number: "05",
    title: "AI-Powered Applications",
    tagline: "Intelligent Systems",
    description:
      "Context-aware applications powered by LLMs, vector search, retrieval-augmented generation (RAG), and autonomous agent workflows.",
    icon: Sparkles,
    capabilities: [
      "LLM Pipeline Integration",
      "Vector Embeddings & Semantic Search",
      "Autonomous Agent Workflows",
      "Intelligent Business Automation",
    ],
    featuredBadge: "Next-Gen",
  },
];

export default function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      {/* Background Decorative Mesh & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-emerald-50/50 to-transparent blur-3xl -z-10" />
        <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-emerald-50/40 rounded-full blur-3xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F7F0] border border-emerald-100 text-xs font-bold text-[#057A55] tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Categories & Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
            What I Build: Turning Business Needs into{" "}
            <span className="text-[#057A55]">Production-Ready</span> Software
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            I don&apos;t just write code; I design systems around real business
            outcomes. Every product is engineered for high throughput, seamless
            user experience, and long-term scalability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-8 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.09)] hover:border-emerald-200/80 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top Row: Icon + Number / Badge */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 group-hover:bg-[#046546] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {cat.featuredBadge && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-[#057A55]">
                          {cat.featuredBadge}
                        </span>
                      )}
                      <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                        {cat.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6">
                    <span className="text-xs font-semibold text-[#057A55] uppercase tracking-wider">
                      {cat.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-1 group-hover:text-[#057A55] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div className="mt-6 space-y-2.5 pt-5 border-t border-slate-100">
                    {cat.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#E8F7F0] text-[#057A55] flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-4 border-t border-slate-100/80 flex items-center justify-between">
                  <Link
                    href="#work"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#057A55] group-hover:text-[#046546] transition-colors"
                  >
                    <span>View Related Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Special 6th Card: The Engineering Philosophy Anchor */}
          <div className="relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 bg-gradient-to-br from-[#065F46] via-[#057A55] to-[#034832] text-white shadow-[0_20px_50px_rgba(5,122,85,0.25)] border border-emerald-400/20">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md text-emerald-100 flex items-center justify-center border border-white/20">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>

              <div className="mt-6">
                <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
                  The Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-tight">
                  Technology is the Tool.
                  <br />
                  The Product is the Goal.
                </h3>
              </div>

              <p className="text-sm text-emerald-100/90 mt-3 leading-relaxed">
                Rather than selecting a tech stack based on hype, I select tools
                strictly based on business needs, developer velocity, and
                uncompromising runtime stability.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-2 text-xs text-emerald-50">
                <p className="font-semibold text-white">Full Stack Ownership:</p>
                <p>• Architecture & System Design</p>
                <p>• Scalable Backend & Data Modeling</p>
                <p>• Modern, High-Performance UI</p>
                <p>• Production Deployment & Monitoring</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-600/50">
              <Link
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-white text-[#057A55] font-semibold text-sm hover:bg-emerald-50 transition-all shadow-md active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
