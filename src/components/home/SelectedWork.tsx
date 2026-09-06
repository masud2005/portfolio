"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  SlidersHorizontal,
  LayoutGrid,
  List,
  ChevronDown,
  ArrowUpRight,
  X,
  Search,
  SearchX,
  RotateCcw,
} from "lucide-react";
import { Project, projectsData } from "@/constants/projects";

export type { Project };

export interface SelectedWorkProps {
  initialProjects?: Project[];
}

// Exact Category Filter Tab definitions matching reference screenshots
const CATEGORY_TABS: { id: "all" | "website" | "app" | "portfolio" | "saas"; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Website" },
  { id: "app", label: "App" },
  { id: "portfolio", label: "Portfolio" },
  { id: "saas", label: "SaaS" },
];

export default function SelectedWork({ initialProjects }: SelectedWorkProps) {
  const [projects] = useState<Project[]>(initialProjects || projectsData);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [sortOption, setSortOption] = useState<"popular" | "newest">("popular");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("all");

  // Extract all unique technologies from project tech stacks
  const allTechStacks = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [projects]);

  // Dynamically calculate category counts from data
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projects.length,
      website: 0,
      app: 0,
      portfolio: 0,
      saas: 0,
    };
    projects.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, [projects]);

  // Filtered & Sorted Projects list
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        // Tab filter
        if (activeTab !== "all" && project.category !== activeTab) {
          return false;
        }
        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchTitle = project.title.toLowerCase().includes(query);
          const matchDesc = project.description.toLowerCase().includes(query);
          const matchTech = project.techStack.some((t) => t.toLowerCase().includes(query));
          if (!matchTitle && !matchDesc && !matchTech) return false;
        }
        // Technology filter
        if (selectedTech !== "all" && !project.techStack.includes(selectedTech)) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortOption === "newest") {
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        }
        return (b.viewsCount || 0) - (a.viewsCount || 0) || a.sortOrder - b.sortOrder;
      });
  }, [projects, activeTab, sortOption, searchQuery, selectedTech]);

  const hasActiveAdvancedFilters = searchQuery.trim() !== "" || selectedTech !== "all";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedTech("all");
    setActiveTab("all");
  };

  return (
    <section id="work" className="py-12 sm:py-16 lg:py-20 bg-[#FAFCFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===================================================================
            TOP HERO / HEADER: Exact Match with Reference Screenshot
            Left: Breadcrumbs + Heading "Our Work. Real Impact." + Subtitle + 3 Stats
            Right: Angled 4-Panel Devices Showcase Mockup Banner
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Stats */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Breadcrumbs (Home / Portfolio) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
              >
                <Home className="w-3.5 h-3.5 text-slate-400" />
                <span>Home</span>
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-800 font-semibold">Portfolio</span>
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.08]">
              Our Work.<br />
              <span className="text-[#057A55]">Real Impact.</span>
            </h1>

            {/* Subheading / Value Statement */}
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-lg">
              Success stories from diverse industries and sectors. Each project
              is a reflection of our commitment to excellence, innovation and
              measurable results.
            </p>

            {/* Key Metrics Stats Row with 3D Icons */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-2 sm:pt-4">
              {/* Stat 1: Projects Completed */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex-shrink-0">
                  <Image
                    src="/projects/stat_icon_projects.png"
                    alt="Projects Completed"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                    120+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Stat 2: Industries Served */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex-shrink-0">
                  <Image
                    src="/projects/stat_icon_industries.png"
                    alt="Industries Served"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                    Industries Served
                  </div>
                </div>
              </div>

              {/* Stat 3: Client Satisfaction */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex-shrink-0">
                  <Image
                    src="/projects/stat_icon_satisfaction.png"
                    alt="Client Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                    98%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Angled 4-Panel Devices Showcase Mockup Banner */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-3xl select-none">
              <Image
                src="/projects/hero_devices_wave_ribbon.jpg"
                alt="Digital Products and Web Applications Showcase"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-contain lg:object-right object-center"
              />
            </div>
          </div>

        </div>

        {/* ===================================================================
            TOOLBAR: Exact Match with Reference Screenshot 1 & 4
            Separated into 3 floating cards/containers:
            1. Left: Category Pills Container
            2. Middle: Advanced Filters Button
            3. Right: Sort By + View Mode Toggle Container
           =================================================================== */}
        <div className="mt-12 sm:mt-16">
          <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4">
            
            {/* Left & Middle Controls */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Box 1: Category Filter Pills Container */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-wrap items-center gap-1">
                {CATEGORY_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const count = categoryCounts[tab.id] ?? 0;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#057A55] text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-100/70 border border-transparent"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold ${
                          isActive
                            ? "bg-white/25 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Box 2: Advanced Filters Standalone Button */}
              <button
                type="button"
                onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                className={`bg-white border border-[#057A55] text-[#057A55] rounded-2xl px-5 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] font-semibold text-xs sm:text-sm inline-flex items-center gap-2 hover:bg-emerald-50/40 transition-all ${
                  isFilterDrawerOpen || hasActiveAdvancedFilters
                    ? "bg-emerald-50/70"
                    : ""
                }`}
              >
                <span>Advanced Filters</span>
                <SlidersHorizontal className="w-4 h-4 text-[#057A55] stroke-[2.2]" />
              </button>

            </div>

            {/* Box 3: Right Sort By & View Mode Container */}
            <div className="bg-white rounded-2xl border border-slate-200/80 px-4 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-3.5 justify-end self-end xl:self-auto">
              
              {/* Sort By Dropdown */}
              <div className="relative flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Sort By
                </span>
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 font-semibold hover:bg-slate-100 transition-all text-xs"
                >
                  <span>{sortOption === "popular" ? "Most Popular" : "Newest"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {/* Sort Menu Dropdown */}
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-36 bg-white border border-slate-200 rounded-2xl shadow-xl py-1 z-30 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        setSortOption("popular");
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold ${
                        sortOption === "popular"
                          ? "text-[#057A55] bg-emerald-50"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      Most Popular
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSortOption("newest");
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold ${
                        sortOption === "newest"
                          ? "text-[#057A55] bg-emerald-50"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      Newest
                    </button>
                  </div>
                )}
              </div>

              {/* View Switcher: Grid View & List View */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid View"
                  className={`p-2 rounded-xl transition-all ${
                    viewMode === "grid"
                      ? "bg-[#E8F7F0] text-[#057A55]"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 stroke-[2.2]" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  aria-label="List View"
                  className={`p-2 rounded-xl transition-all ${
                    viewMode === "list"
                      ? "bg-[#E8F7F0] text-[#057A55]"
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <List className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>

            </div>

          </div>

          {/* ===================================================================
              EXPANDABLE ADVANCED FILTERS PANEL
             =================================================================== */}
          {isFilterDrawerOpen && (
            <div className="mt-4 p-5 sm:p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm animate-in fade-in slide-in-from-top-3 duration-200 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by project name, tech, or keywords..."
                    className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-[#057A55] focus:outline-none transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Reset Filters CTA */}
                {hasActiveAdvancedFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-500 hover:text-[#057A55] hover:bg-emerald-50 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All Filters</span>
                  </button>
                )}
              </div>

              {/* Technology Filter Chips */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-800 mb-2.5">
                  Filter by Technology:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTech("all")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      selectedTech === "all"
                        ? "bg-[#057A55] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    All Tech
                  </button>
                  {allTechStacks.map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => setSelectedTech(tech)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        selectedTech === tech
                          ? "bg-[#057A55] text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ===================================================================
            PROJECTS DISPLAY: GRID OR LIST MODE OR EMPTY STATE
           =================================================================== */}
        {filteredProjects.length === 0 ? (
          /* EMPTY STATE: 100% Exact Match with Screenshot 4 */
          <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center p-8 sm:p-12 text-center shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#E8F7F0] text-[#057A55] flex items-center justify-center mx-auto mb-3">
              <SearchX className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
              No projects match these filters
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mt-2 leading-relaxed">
              Try changing your advanced filters to discover more projects.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          /* ASYMMETRIC GRID VIEW: 100% Exact Match with Screenshot 1 */
          <div className="mt-8 space-y-6 sm:space-y-8">
            {Array.from({ length: Math.ceil(filteredProjects.length / 2) }).map(
              (_, rowIndex) => {
                const item1 = filteredProjects[rowIndex * 2];
                const item2 = filteredProjects[rowIndex * 2 + 1];

                return (
                  <div
                    key={rowIndex}
                    className="flex flex-col lg:flex-row gap-6 sm:gap-7 items-stretch"
                  >
                    {/* Item 1: Wide Horizontal Card (Left, ~58% Desktop Width) */}
                    {item1 && (
                      <div
                        className={
                          item2
                            ? "w-full lg:w-[58%] xl:w-[59%] flex flex-col"
                            : "w-full flex flex-col"
                        }
                      >
                        <WideProjectCard project={item1} />
                      </div>
                    )}

                    {/* Item 2: Vertical Stack Card (Right, ~42% Desktop Width) */}
                    {item2 && (
                      <div className="w-full lg:w-[42%] xl:w-[41%] flex flex-col">
                        <VerticalProjectCard project={item2} />
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        ) : (
          /* LIST VIEW: 100% Exact Match with Screenshot 3 */
          <div className="mt-8 space-y-6">
            {filteredProjects.map((project) => (
              <ListProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CRISP 3D VECTOR ICONS (Matching Screenshot 1 Pixel-Perfect)
// ---------------------------------------------------------------------------
function Platform3DIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 flex-shrink-0"
    >
      {/* Top Isometric Cube */}
      <path d="M12 2L15.5 4L12 6L8.5 4L12 2Z" fill="#34D399" />
      <path d="M8.5 4L12 6V9.8L8.5 7.8V4Z" fill="#057A55" />
      <path d="M12 6L15.5 4V7.8L12 9.8V6Z" fill="#046546" />
      {/* Bottom Left Cube */}
      <path d="M7 10L10.5 12L7 14L3.5 12L7 10Z" fill="#6EE7B7" />
      <path d="M3.5 12L7 14V17.8L3.5 15.8V12Z" fill="#057A55" />
      <path d="M7 14L10.5 12V15.8L7 17.8V14Z" fill="#046546" />
      {/* Bottom Right Cube */}
      <path d="M17 10L20.5 12L17 14L13.5 12L17 10Z" fill="#34D399" />
      <path d="M13.5 12L17 14V17.8L13.5 15.8V12Z" fill="#057A55" />
      <path d="M17 14L20.5 12V15.8L17 17.8V14Z" fill="#046546" />
    </svg>
  );
}

function Duration3DIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 flex-shrink-0"
    >
      {/* Winding green roadmap path */}
      <path
        d="M5 19C8.5 19 9.5 15 12.5 15C15.5 15 16.5 9 19 7"
        stroke="#057A55"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Starting point */}
      <circle cx="5" cy="19" r="2.5" fill="#34D399" stroke="#057A55" strokeWidth="1.2" />
      {/* Mid waypoint */}
      <circle cx="12.5" cy="15" r="2" fill="#6EE7B7" stroke="#057A55" strokeWidth="1.2" />
      {/* Goal flag pole */}
      <path d="M19 7V3" stroke="#057A55" strokeWidth="1.8" strokeLinecap="round" />
      {/* Goal Flag */}
      <path d="M19 3L23 5L19 7V3Z" fill="#057A55" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// SUB-COMPONENT: Wide Horizontal Split Card (Screenshot 1 - Left Column)
// ---------------------------------------------------------------------------
interface CardProps {
  project: Project;
}

function WideProjectCard({ project }: CardProps) {
  return (
    <div className="group relative h-full flex flex-col lg:flex-row justify-between bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.09)] hover:border-emerald-200/70 transition-all duration-300 p-6 sm:p-8 gap-6 sm:gap-7 overflow-hidden">
      
      {/* Left Info Area */}
      <div className="w-full lg:w-[40%] flex flex-col justify-between py-1">
        <div>
          {/* Category Badge */}
          <span className="px-3.5 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold inline-block">
            {project.categoryLabel}
          </span>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 sm:mt-4 tracking-tight leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2 line-clamp-3">
            {project.description}
          </p>

          {/* Meta Info: Platform & Duration */}
          <div className="my-5 py-4 border-y border-slate-100 grid grid-cols-2 gap-4">
            {/* Platform */}
            <div className="flex items-center gap-2.5">
              <Platform3DIcon />
              <div>
                <div className="text-xs font-bold text-slate-900 leading-none">
                  Platform
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                  {project.platform}
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2.5">
              <Duration3DIcon />
              <div>
                <div className="text-xs font-bold text-slate-900 leading-none">
                  Duration
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                  {project.duration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link: ONLY THIS IS CLICKABLE (Navigates to /projects/[id]) */}
        <div className="flex items-center pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-3 group/btn"
          >
            <span className="text-sm font-bold text-[#057A55] group-hover/btn:underline transition-all">
              View Case Study
            </span>
            <div className="w-11 h-11 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover/btn:bg-[#046546] group-hover/btn:scale-105 transition-all duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Right Mockup Image Area */}
      <div className="w-full lg:w-[60%] relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] bg-stone-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 650px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-COMPONENT: Vertical Stack Card (Screenshot 1 - Right Column)
// ---------------------------------------------------------------------------
function VerticalProjectCard({ project }: CardProps) {
  return (
    <div className="group relative h-full flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.09)] hover:border-emerald-200/70 transition-all duration-300 p-5 sm:p-6 overflow-visible">
      
      {/* Top Image Section with Floating Circular Arrow Button */}
      <div className="relative w-full">
        {/* Inner rounded image wrapper */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 450px"
            className="object-cover object-center"
          />
        </div>

        {/* Floating Green Circle Arrow Button: ONLY THIS IS CLICKABLE (Navigates to /projects/[id]) */}
        <Link
          href={`/projects/${project.id}`}
          aria-label={`View ${project.title}`}
          className="absolute -bottom-5 right-4 z-20 w-12 h-12 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-lg shadow-emerald-800/30 hover:bg-[#046546] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </Link>
      </div>

      {/* Bottom Info Section */}
      <div className="pt-8 flex flex-col justify-between flex-1">
        <div>
          {/* Category Badge */}
          <span className="px-3.5 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold inline-block">
            {project.categoryLabel}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mt-2.5 tracking-tight leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Meta Info: Platform & Duration */}
        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
          {/* Platform */}
          <div className="flex items-center gap-2.5">
            <Platform3DIcon />
            <div>
              <div className="text-xs font-bold text-slate-900 leading-none">
                Platform
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                {project.platform}
              </div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2.5">
            <Duration3DIcon />
            <div>
              <div className="text-xs font-bold text-slate-900 leading-none">
                Duration
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                {project.duration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-COMPONENT: List View Project Card (Screenshot 3 - Wide Full Width)
// ---------------------------------------------------------------------------
function ListProjectCard({ project }: CardProps) {
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(5,122,85,0.09)] hover:border-emerald-200/70 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-stretch">
      
      {/* Left Info Column */}
      <div className="w-full lg:w-[35%] flex flex-col justify-between p-6 sm:p-8">
        <div>
          {/* Category Badge */}
          <span className="px-3.5 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold inline-block">
            {project.categoryLabel}
          </span>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 tracking-tight leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2 line-clamp-3">
            {project.description}
          </p>

          {/* Meta Info: Platform & Duration */}
          <div className="mt-5 pt-4 pb-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            {/* Platform */}
            <div className="flex items-center gap-2.5">
              <Platform3DIcon />
              <div>
                <div className="text-xs font-bold text-slate-900 leading-none">
                  Platform
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                  {project.platform}
                </div>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2.5">
              <Duration3DIcon />
              <div>
                <div className="text-xs font-bold text-slate-900 leading-none">
                  Duration
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">
                  {project.duration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Link: ONLY THIS IS CLICKABLE (Navigates to /projects/[id]) */}
        <div className="flex items-center pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-3 group/btn"
          >
            <span className="text-sm font-bold text-[#057A55] group-hover/btn:underline transition-all">
              View Case Study
            </span>
            <div className="w-11 h-11 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-800/25 group-hover/btn:bg-[#046546] group-hover/btn:scale-105 active:scale-95 transition-all duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Right Wide Mockup Image Area — flush to card edge, no padding */}
      <div className="w-full lg:w-[65%] relative min-h-[260px] sm:min-h-[320px] lg:min-h-0 bg-stone-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
