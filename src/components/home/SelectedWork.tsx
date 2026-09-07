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
            TOOLBAR: Exact Match with Reference Screenshot
            Single cohesive rounded container with filter tabs, advanced filters, sort, and view toggle
           =================================================================== */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-2 sm:p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3 sm:gap-4">
            
            {/* Left & Middle Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
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
                          ? "border border-[#057A55] text-[#057A55] bg-white shadow-xs"
                          : "border border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold transition-colors ${
                          isActive
                            ? "bg-[#057A55] text-white"
                            : "border border-slate-200/80 bg-white text-slate-400"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Advanced Filters Standalone Button */}
              <button
                type="button"
                onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                className={`border border-[#057A55] text-[#057A55] rounded-xl px-4 py-2 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-all ${
                  isFilterDrawerOpen || hasActiveAdvancedFilters
                    ? "bg-emerald-50 text-[#046546]"
                    : "bg-[#F4FAF7] hover:bg-emerald-50/70"
                }`}
              >
                <span>Advanced Filters</span>
                <SlidersHorizontal className="w-4 h-4 text-[#057A55] stroke-[2.2]" />
              </button>

            </div>

            {/* Right: Sort By & View Mode Container */}
            <div className="flex items-center gap-3.5 justify-end self-end xl:self-auto px-2 py-1">
              
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

                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
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
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Reset Filters Action */}
                {hasActiveAdvancedFilters && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors self-end sm:self-center"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>

              {/* Technologies Filter Row */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 mb-2.5">
                  Filter by Technology:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTech("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedTech === "all"
                        ? "bg-[#057A55] text-white shadow-xs"
                        : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/60"
                    }`}
                  >
                    All Tech
                  </button>
                  {allTechStacks.map((tech) => {
                    const isSelected = selectedTech === tech;
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => setSelectedTech(isSelected ? "all" : tech)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isSelected
                            ? "bg-[#057A55] text-white shadow-xs"
                            : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/60"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ===================================================================
            PROJECTS DISPLAY: GRID OR LIST MODE OR EMPTY STATE
           =================================================================== */}
        {filteredProjects.length === 0 ? (
          /* EMPTY STATE */
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
          /* 3-COLUMN ASYMMETRIC GRID VIEW: Card 1 = 2 columns, Card 2 = 1 column */
          <div className="mt-8 space-y-6 sm:space-y-8">
            {Array.from({ length: Math.ceil(filteredProjects.length / 2) }).map(
              (_, rowIndex) => {
                const item1 = filteredProjects[rowIndex * 2];
                const item2 = filteredProjects[rowIndex * 2 + 1];

                return (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
                  >
                    {/* Item 1: Wide Horizontal Card (Left, takes 2 columns out of 3) */}
                    {item1 && (
                      <div
                        className={
                          item2
                            ? "lg:col-span-2 h-full flex flex-col"
                            : "lg:col-span-3 h-full flex flex-col"
                        }
                      >
                        <WideProjectCard project={item1} />
                      </div>
                    )}

                    {/* Item 2: Vertical Stack Card (Right, takes 1 column out of 3) */}
                    {item2 && (
                      <div className="lg:col-span-1 h-full flex flex-col">
                        <VerticalProjectCard project={item2} />
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        ) : (
          /* LIST VIEW */
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
// CRISP 3D ICONS (Exact Match with Reference Screenshot)
// ---------------------------------------------------------------------------
function PlatformIcon() {
  return (
    <div className="w-[22px] h-[22px] relative flex-shrink-0">
      <Image
        src="/projects/icon_platform_exact.png"
        alt="Platform"
        width={22}
        height={22}
        className="object-contain"
      />
    </div>
  );
}

function DurationIcon() {
  return (
    <div className="w-[22px] h-[22px] relative flex-shrink-0">
      <Image
        src="/projects/icon_duration_exact.png"
        alt="Duration"
        width={22}
        height={22}
        className="object-contain"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-COMPONENT: Wide Horizontal Split Card (Takes 2 columns in 3-column grid)
// ---------------------------------------------------------------------------
interface CardProps {
  project: Project;
}

function WideProjectCard({ project }: CardProps) {
  return (
    <div className="group relative h-full flex flex-col lg:flex-row justify-between bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.08)] hover:border-emerald-200/70 transition-all duration-300 p-6 sm:p-7 lg:p-8 gap-6 sm:gap-7 overflow-hidden">
      
      {/* Left Info Area */}
      <div className="w-full lg:w-[40%] xl:w-[38%] flex flex-col justify-between py-1">
        <div>
          {/* Category Badge */}
          <span className="px-3.5 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold inline-block">
            {project.categoryLabel}
          </span>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-3 sm:mt-3.5 tracking-tight leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-2.5 line-clamp-3">
            {project.description}
          </p>

          {/* Meta Info: Platform & Duration */}
          <div className="mt-5 mb-5 pb-5 border-b border-slate-100/80 grid grid-cols-2 gap-4">
            {/* Platform */}
            <div className="flex items-center gap-2.5">
              <PlatformIcon />
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
              <DurationIcon />
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

        {/* View Case Study CTA Button */}
        <div className="pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="group/btn inline-flex items-center gap-3 w-fit"
          >
            <span className="text-sm sm:text-base font-bold text-slate-900 group-hover/btn:text-[#057A55] transition-colors">
              View Case Study
            </span>
            <div className="w-11 h-11 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover/btn:bg-[#046546] group-hover/btn:scale-105 active:scale-95 transition-all duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Right Mockup Image Area */}
      <div className="w-full lg:w-[60%] xl:w-[62%] relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[340px] lg:min-h-0 bg-stone-50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 750px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SUB-COMPONENT: Vertical Stack Card (Takes 1 column in 3-column grid)
// ---------------------------------------------------------------------------
function VerticalProjectCard({ project }: CardProps) {
  return (
    <div className="group relative h-full flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.08)] hover:border-emerald-200/70 transition-all duration-300 p-5 sm:p-6 overflow-visible">
      
      {/* Top Image Section with Floating Circular Arrow Button */}
      <div className="relative w-full">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-stone-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover object-center"
          />
        </div>

        {/* Floating Green Circle Arrow Button: Centered on bottom-right of image */}
        <Link
          href={`/projects/${project.id}`}
          aria-label={`View ${project.title}`}
          className="absolute -bottom-5 right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-lg shadow-emerald-950/20 hover:bg-[#046546] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
        </Link>
      </div>

      {/* Bottom Info Section */}
      <div className="pt-7 sm:pt-8 flex flex-col justify-between flex-1">
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
        <div className="mt-5 pt-4 border-t border-slate-100/80 grid grid-cols-2 gap-3">
          {/* Platform */}
          <div className="flex items-center gap-2.5">
            <PlatformIcon />
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
            <DurationIcon />
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
              <PlatformIcon />
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
              <DurationIcon />
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

        {/* View Case Study CTA Button */}
        <div className="pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="group/btn inline-flex items-center gap-3 w-fit"
          >
            <span className="text-sm sm:text-base font-bold text-slate-900 group-hover/btn:text-[#057A55] transition-colors">
              View Case Study
            </span>
            <div className="w-11 h-11 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover/btn:bg-[#046546] group-hover/btn:scale-105 transition-all duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </div>

      {/* Right Mockup Image Area */}
      <div className="w-full lg:w-[65%] relative min-h-[280px] sm:min-h-[340px] lg:min-h-0 bg-stone-50 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
