"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Server,
  Layers,
  Radio,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  glowColor: string;
  ringQuadrant: string;
}

const categories: CategoryItem[] = [
  {
    id: "ecommerce-platforms",
    title: "E-Commerce & Marketplaces",
    description:
      "Multi-vendor commerce engines with resilient inventory sync, complex checkout funnels, automated payout workflows, and robust security.",
    icon: ShoppingCart,
    accentColor: "#057A55",
    glowColor: "rgba(5, 122, 85, 0.18)",
    ringQuadrant: "ecommerce",
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    description:
      "Scalable platforms featuring multi-tenancy, authentication, subscription billing, operational dashboards, and resilient background jobs.",
    icon: Server,
    accentColor: "#9333EA",
    glowColor: "rgba(147, 51, 234, 0.18)",
    ringQuadrant: "saas",
  },
  {
    id: "digital-products",
    title: "Digital Products",
    description:
      "End-to-end web applications engineered around real business workflows, user behavior, and rock-solid system reliability.",
    icon: Layers,
    accentColor: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.18)",
    ringQuadrant: "digital",
  },
  {
    id: "realtime-systems",
    title: "Real-time Applications",
    description:
      "Instantaneous collaboration, interactive messaging, and real-time state synchronization powered by WebSockets, Socket.io, and WebRTC.",
    icon: Radio,
    accentColor: "#0D9488",
    glowColor: "rgba(13, 148, 136, 0.18)",
    ringQuadrant: "realtime",
  },
  {
    id: "ai-applications",
    title: "AI-Powered Applications",
    description:
      "Context-aware applications powered by LLMs, vector search, retrieval-augmented generation (RAG), and autonomous agent workflows.",
    icon: Sparkles,
    accentColor: "#EA580C",
    glowColor: "rgba(234, 88, 12, 0.18)",
    ringQuadrant: "ai",
  },
];

// 24 Chunky Radial tick segments around the center ring matching the exact screenshot palette
// Oriented clockwise from 12 o'clock (Y-up) so each quadrant strictly matches its product card
const ringTicks = [
  // Top & Top-Right (Purples / Violets for SaaS Platforms) - 12:00 to 2:30
  { angle: 0, color: "#4F46E5", quadrant: "saas" },
  { angle: 15, color: "#6366F1", quadrant: "saas" },
  { angle: 30, color: "#7C3AED", quadrant: "saas" },
  { angle: 45, color: "#8B5CF6", quadrant: "saas" }, // 1:30 - Top-Right Axis
  { angle: 60, color: "#9333EA", quadrant: "saas" },
  { angle: 75, color: "#A855F7", quadrant: "saas" },
  // Right & Bottom-Right (Blues & Teals for Real-time Applications) - 3:00 to 5:00
  { angle: 90, color: "#0284C7", quadrant: "realtime" },
  { angle: 105, color: "#0EA5E9", quadrant: "realtime" },
  { angle: 120, color: "#06B6D4", quadrant: "realtime" },
  { angle: 135, color: "#0D9488", quadrant: "realtime" }, // 4:30 - Bottom-Right Axis
  { angle: 150, color: "#14B8A6", quadrant: "realtime" },
  // Bottom (Oranges for AI-Powered Applications) - 5:30 to 6:30
  { angle: 165, color: "#F97316", quadrant: "ai" },
  { angle: 180, color: "#EA580C", quadrant: "ai" }, // 6:00 - Bottom Axis
  { angle: 195, color: "#F97316", quadrant: "ai" },
  // Bottom-Left (Royal Blues for Digital Products) - 7:00 to 9:00
  { angle: 210, color: "#1D4ED8", quadrant: "digital" },
  { angle: 225, color: "#2563EB", quadrant: "digital" }, // 7:30 - Bottom-Left Axis
  { angle: 240, color: "#3B82F6", quadrant: "digital" },
  { angle: 255, color: "#60A5FA", quadrant: "digital" },
  { angle: 270, color: "#93C5FD", quadrant: "digital" },
  // Top-Left (Greens for E-Commerce & Marketplaces) - 9:30 to 11:30
  { angle: 285, color: "#065F46", quadrant: "ecommerce" },
  { angle: 300, color: "#057A55", quadrant: "ecommerce" },
  { angle: 315, color: "#059669", quadrant: "ecommerce" }, // 10:30 - Top-Left Axis
  { angle: 330, color: "#10B981", quadrant: "ecommerce" },
  { angle: 345, color: "#34D399", quadrant: "ecommerce" },
];

export default function WhatIBuild() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hubHovered, setHubHovered] = useState(false);

  // IntersectionObserver for entrance reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-i-build"
      className="relative pt-28 sm:pt-36 pb-24 sm:pb-32 bg-[#FAFCFB] overflow-hidden select-none scroll-mt-28"
    >
      {/* Background Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#FAFCFB]/60 to-[#FAFCFB]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F7F0] border border-emerald-200/80 text-xs font-semibold text-[#057A55] tracking-wide shadow-sm cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-[#057A55]" />
            <span>Product Categories &amp; Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.16]">
            What I Build: Turning Ideas into{" "}
            <span className="text-[#057A55]">Production-Ready</span> Software
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            I don&apos;t just write code; I design systems around real business outcomes. Every product is engineered for high throughput, seamless user experience, and long-term scalability.
          </p>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* DESKTOP VIEW: Connected Symmetrical Ecosystem Diagram (lg+)        */}
        {/* Exact S-Curves matching the Red Box screenshot                     */}
        {/* ----------------------------------------------------------------- */}
        <div className="hidden lg:block relative mt-16 w-[1200px] h-[860px] mx-auto">
          
          {/* SVG Connecting Lines Layer */}
          <svg
            className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-700 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 1200 860"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. TOP-LEFT LINE (Green, Exact S-Curve from Red Box) */}
            <g
              className={`transition-all duration-300 ${
                hoveredCard === "ecommerce-platforms" || hubHovered ? "opacity-100" : "opacity-85"
              }`}
              filter={hoveredCard === "ecommerce-platforms" || hubHovered ? "url(#glow-line)" : undefined}
            >
              {/* 3D Terminal Pin Node Dot (Radius 114 outside green tick 315°) */}
              <circle cx="520" cy="265" r="5.5" fill="#057A55" />
              <circle cx="520" cy="265" r="2.2" fill="#FFFFFF" />

              {/* S-Curve: Climbs steep upwards, rounded 90° elbow, then dead flat horizontal entry into Card 1 */}
              <path
                d="M 520 265 C 512 185, 460 155, 395 155 L 350 155"
                stroke="#057A55"
                strokeWidth={hoveredCard === "ecommerce-platforms" || hubHovered ? 2.8 : 2}
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              {/* Directional Chevron pointing Left `<` */}
              <path
                d="M 358 149 L 350 155 L 358 161"
                stroke="#057A55"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* 2. TOP-RIGHT LINE (Purple, Exact S-Curve from Red Box) */}
            <g
              className={`transition-all duration-300 ${
                hoveredCard === "saas-platforms" || hubHovered ? "opacity-100" : "opacity-85"
              }`}
              filter={hoveredCard === "saas-platforms" || hubHovered ? "url(#glow-line)" : undefined}
            >
              {/* 3D Terminal Pin Node Dot (Radius 114 outside purple tick 45°) */}
              <circle cx="680" cy="265" r="5.5" fill="#9333EA" />
              <circle cx="680" cy="265" r="2.2" fill="#FFFFFF" />

              {/* S-Curve: Climbs steep upwards, rounded 90° elbow, then dead flat horizontal entry into Card 2 */}
              <path
                d="M 680 265 C 688 185, 740 155, 805 155 L 850 155"
                stroke="#9333EA"
                strokeWidth={hoveredCard === "saas-platforms" || hubHovered ? 2.8 : 2}
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              {/* Directional Chevron pointing Right `>` */}
              <path
                d="M 842 149 L 850 155 L 842 161"
                stroke="#9333EA"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* 3. BOTTOM-LEFT LINE (Blue, Exact S-Curve from Red Box) */}
            <g
              className={`transition-all duration-300 ${
                hoveredCard === "digital-products" || hubHovered ? "opacity-100" : "opacity-85"
              }`}
              filter={hoveredCard === "digital-products" || hubHovered ? "url(#glow-line)" : undefined}
            >
              {/* 3D Terminal Pin Node Dot (Radius 114 outside blue tick 225°) */}
              <circle cx="520" cy="425" r="5.5" fill="#2563EB" />
              <circle cx="520" cy="425" r="2.2" fill="#FFFFFF" />

              {/* S-Curve: Drops steep downwards, rounded 90° elbow, then dead flat horizontal entry into Card 3 */}
              <path
                d="M 520 425 C 512 505, 460 535, 395 535 L 350 535"
                stroke="#2563EB"
                strokeWidth={hoveredCard === "digital-products" || hubHovered ? 2.8 : 2}
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              {/* Directional Chevron pointing Left `<` */}
              <path
                d="M 358 529 L 350 535 L 358 541"
                stroke="#2563EB"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* 4. BOTTOM-RIGHT LINE (Teal, Exact S-Curve from Red Box) */}
            <g
              className={`transition-all duration-300 ${
                hoveredCard === "realtime-systems" || hubHovered ? "opacity-100" : "opacity-85"
              }`}
              filter={hoveredCard === "realtime-systems" || hubHovered ? "url(#glow-line)" : undefined}
            >
              {/* 3D Terminal Pin Node Dot (Radius 114 outside teal tick 135°) */}
              <circle cx="680" cy="425" r="5.5" fill="#0D9488" />
              <circle cx="680" cy="425" r="2.2" fill="#FFFFFF" />

              {/* S-Curve: Drops steep downwards, rounded 90° elbow, then dead flat horizontal entry into Card 4 */}
              <path
                d="M 680 425 C 688 505, 740 535, 805 535 L 850 535"
                stroke="#0D9488"
                strokeWidth={hoveredCard === "realtime-systems" || hubHovered ? 2.8 : 2}
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              {/* Directional Chevron pointing Right `>` */}
              <path
                d="M 842 529 L 850 535 L 842 541"
                stroke="#0D9488"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>

            {/* 5. BOTTOM-CENTER LINE (Orange, Straight Vertical Line) */}
            <g
              className={`transition-all duration-300 ${
                hoveredCard === "ai-applications" || hubHovered ? "opacity-100" : "opacity-85"
              }`}
              filter={hoveredCard === "ai-applications" || hubHovered ? "url(#glow-line)" : undefined}
            >
              {/* 3D Terminal Pin Node Dot (Radius 114 outside orange tick 180°) */}
              <circle cx="600" cy="460" r="5.5" fill="#EA580C" />
              <circle cx="600" cy="460" r="2.2" fill="#FFFFFF" />

              {/* Straight Path down to Card 5 at (600, 600) */}
              <path
                d="M 600 460 L 600 598"
                stroke="#EA580C"
                strokeWidth={hoveredCard === "ai-applications" || hubHovered ? 2.8 : 2}
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              {/* Directional Chevron pointing Down `v` */}
              <path
                d="M 594 592 L 600 600 L 606 592"
                stroke="#EA580C"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          {/* ------------------------------------------------------------- */}
          {/* THE CENTRAL HUB: Concentric 3D Layers & Radial Segmented Ring */}
          {/* ------------------------------------------------------------- */}
          <div
            className={`absolute left-[600px] top-[345px] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
            }`}
            onMouseEnter={() => setHubHovered(true)}
            onMouseLeave={() => setHubHovered(false)}
          >
            {/* Ambient Radial 3D Glow */}
            <div
              className={`absolute w-72 h-72 rounded-full blur-3xl transition-all duration-700 pointer-events-none -z-10 ${
                hubHovered
                  ? "bg-gradient-to-r from-emerald-400/30 via-purple-400/30 to-orange-400/30 scale-125"
                  : "bg-emerald-300/20 scale-100"
              }`}
            />

            {/* Chunky Segmented Ring (24 thick tick pills) - Static & perfectly aligned */}
            <svg
              className={`w-[240px] h-[240px] transition-transform duration-500 origin-center ${
                hubHovered ? "scale-105" : "scale-100"
              }`}
              viewBox="0 0 240 240"
            >
              {ringTicks.map((tick, i) => {
                const isHighlight =
                  hubHovered ||
                  (hoveredCard &&
                    tick.quadrant ===
                      hoveredCard
                        .replace("-platforms", "")
                        .replace("-systems", "")
                        .replace("-applications", "")
                        .replace("-products", ""));
                return (
                  <rect
                    key={i}
                    x="114"
                    y="18"
                    width="12"
                    height="18"
                    rx="4"
                    fill={tick.color}
                    opacity={isHighlight ? 1 : 0.88}
                    transform={`rotate(${tick.angle} 120 120)`}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* 3D Tiered Bevel Ring */}
            <div className="absolute w-[150px] h-[150px] rounded-full bg-slate-50/80 border border-slate-200/60 flex items-center justify-center shadow-inner pointer-events-none" />

            {/* Center Circular Disc with Layered 3D Shadow */}
            <div className="absolute w-[126px] h-[126px] rounded-full bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08),_0_2px_6px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center p-3 transition-transform duration-500 hover:scale-105 group cursor-pointer z-10">
              <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="Masud Rana Logo"
                  fill
                  sizes="100px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* THE 5 SOLUTION CARDS (STATIONARY ON HOVER, ZERO OVERLAP)     */}
          {/* ------------------------------------------------------------- */}

          {/* CARD 1: TOP-LEFT (E-Commerce & Marketplaces) */}
          <div
            className={`absolute left-0 top-[40px] w-[350px] transition-opacity duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("ecommerce-platforms")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ProductCard item={categories[0]} isHovered={hoveredCard === "ecommerce-platforms"} />
          </div>

          {/* CARD 2: TOP-RIGHT (SaaS Platforms) */}
          <div
            className={`absolute right-0 top-[40px] w-[350px] transition-opacity duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("saas-platforms")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ProductCard item={categories[1]} isHovered={hoveredCard === "saas-platforms"} />
          </div>

          {/* CARD 3: BOTTOM-LEFT (Digital Products) - 145px gap below Card 1 */}
          <div
            className={`absolute left-0 top-[420px] w-[350px] transition-opacity duration-700 ease-out delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("digital-products")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ProductCard item={categories[2]} isHovered={hoveredCard === "digital-products"} />
          </div>

          {/* CARD 4: BOTTOM-RIGHT (Real-time Applications) - 145px gap below Card 2 */}
          <div
            className={`absolute right-0 top-[420px] w-[350px] transition-opacity duration-700 ease-out delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("realtime-systems")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ProductCard item={categories[3]} isHovered={hoveredCard === "realtime-systems"} />
          </div>

          {/* CARD 5: BOTTOM-CENTER (AI-Powered Applications) */}
          <div
            className={`absolute left-[425px] top-[600px] w-[350px] transition-opacity duration-700 ease-out delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("ai-applications")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <ProductCard item={categories[4]} isHovered={hoveredCard === "ai-applications"} />
          </div>

        </div>

        {/* ----------------------------------------------------------------- */}
        {/* MOBILE & TABLET VIEW (< lg): Responsive Stack                     */}
        {/* ----------------------------------------------------------------- */}
        <div className="block lg:hidden mt-14 space-y-10">
          {/* Mobile Center Hub */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-48 h-48 rounded-full bg-emerald-300/20 blur-2xl pointer-events-none" />

              <svg
                className="w-48 h-48"
                viewBox="0 0 240 240"
              >
                {ringTicks.map((tick, i) => (
                  <rect
                    key={i}
                    x="114"
                    y="18"
                    width="12"
                    height="18"
                    rx="4"
                    fill={tick.color}
                    transform={`rotate(${tick.angle} 120 120)`}
                  />
                ))}
              </svg>

              <div className="absolute w-28 h-28 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center p-3">
                <div className="relative w-18 h-18">
                  <Image
                    src="/logo.png"
                    alt="Masud Rana Logo"
                    fill
                    sizes="80px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="w-0.5 h-10 mt-4 bg-gradient-to-b from-emerald-500 via-purple-500 to-orange-500 opacity-60" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ProductCard item={categories[0]} isHovered={false} />
            <ProductCard item={categories[1]} isHovered={false} />
            <ProductCard item={categories[2]} isHovered={false} />
            <ProductCard item={categories[3]} isHovered={false} />
            <div className="sm:col-span-2 sm:max-w-[350px] sm:mx-auto w-full">
              <ProductCard item={categories[4]} isHovered={false} />
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* THE CORE ENGINEERING PHILOSOPHY BANNER (SLOGAN SECTION)           */}
        {/* ----------------------------------------------------------------- */}
        <div
          className={`mt-24 lg:mt-32 max-w-7xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#065F46] via-[#057A55] to-[#034832] text-white shadow-[0_20px_50px_rgba(5,122,85,0.22)] border border-emerald-400/20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-emerald-200 border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>The Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Technology is the Tool. The Product is the Goal.
              </h3>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Rather than selecting a tech stack based on hype, I select tools strictly based on business needs, developer velocity, and uncompromising runtime stability.
              </p>

              {/* Full Stack Ownership highlights */}
              <div className="pt-2">
                <p className="text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2.5">
                  Full Stack Ownership:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Architecture & System Design",
                    "Scalable Backend & Data Modeling",
                    "Modern, High-Performance UI",
                    "Production Deployment & Monitoring",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs sm:text-sm text-emerald-50 font-medium"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Link
                href="#contact"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 rounded-2xl bg-white text-[#057A55] font-bold text-sm sm:text-base hover:bg-emerald-50 transition-all shadow-xl active:scale-95 group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// SUB-COMPONENT: Product Card (Stationary on hover, Smooth Springy Arrow)
// ---------------------------------------------------------------------------
interface CardProps {
  item: CategoryItem;
  isHovered: boolean;
}

function ProductCard({ item, isHovered }: CardProps) {
  const Icon = item.icon;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[28px] p-7 border transition-all duration-300 min-h-[230px] bg-white ${
        isHovered
          ? "border-slate-200"
          : "border-slate-100 hover:border-slate-200/80"
      }`}
      style={{
        boxShadow: isHovered
          ? `0 22px 48px -8px ${item.glowColor}, 0 4px 12px rgba(0,0,0,0.04)`
          : `0 14px 38px -10px ${item.glowColor}`,
      }}
    >
      <div>
        {/* Top 3D Embossed Icon Box */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md border-t border-white/30 transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: item.accentColor }}
        >
          <Icon className="w-6 h-6 stroke-[2.2]" />
        </div>

        {/* Product Title */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-5 leading-snug">
          {item.title}
        </h3>

        {/* Product Description - Complete & Uncut */}
        <p className="text-sm text-slate-500 font-normal leading-relaxed mt-2.5">
          {item.description}
        </p>
      </div>

      {/* Action Link: "Explore Solutions ->" with Smooth Springy Arrow Animation */}
      <div className="mt-6 flex items-center">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group/link"
          style={{ color: item.accentColor }}
        >
          <span>Explore Solutions</span>
          <span className="inline-block transition-transform duration-300 ease-out transform group-hover/link:translate-x-2.5 group-hover:translate-x-2.5">
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </div>
  );
}
