"use client";

import { SlidersHorizontal, LayoutGrid, List, ChevronDown, X, Search, RotateCcw } from "lucide-react";
import type { Project } from "@/constants/projects";

type TabId = "all" | "website" | "app" | "portfolio" | "saas";

const CATEGORY_TABS: { id: TabId; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Website" },
  { id: "app", label: "App" },
  { id: "portfolio", label: "Portfolio" },
  { id: "saas", label: "SaaS" },
];

interface ToolbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  categoryCounts: Record<string, number>;
  sortOption: "popular" | "newest";
  setSortOption: (opt: "popular" | "newest") => void;
  isSortOpen: boolean;
  setIsSortOpen: (v: boolean) => void;
  viewMode: "grid" | "list";
  setViewMode: (v: "grid" | "list") => void;
  isFilterDrawerOpen: boolean;
  setIsFilterDrawerOpen: (v: boolean) => void;
  hasActiveAdvancedFilters: boolean;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  allTechStacks: string[];
  selectedTech: string;
  setSelectedTech: (v: string) => void;
  handleResetFilters: () => void;
}

export function ProjectToolbar({
  activeTab,
  setActiveTab,
  categoryCounts,
  sortOption,
  setSortOption,
  isSortOpen,
  setIsSortOpen,
  viewMode,
  setViewMode,
  isFilterDrawerOpen,
  setIsFilterDrawerOpen,
  hasActiveAdvancedFilters,
  searchQuery,
  setSearchQuery,
  allTechStacks,
  selectedTech,
  setSelectedTech,
  handleResetFilters,
}: ToolbarProps) {
  return (
    <div className="mt-12 sm:mt-16 space-y-4">
      {/* Main toolbar bar */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-2 sm:p-2.5 shadow-sm flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
        {/* Left: Tabs + Advanced Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const count = categoryCounts[tab.id] ?? 0;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "border border-[#057A55] text-[#057A55] bg-white"
                      : "border border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <span>{tab.label}</span>
                  <span
                    className={[
                      "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold transition-colors",
                      isActive
                        ? "bg-[#057A55] text-white"
                        : "border border-slate-200 bg-white text-slate-400",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Advanced Filters button */}
          <button
            type="button"
            onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
            className={[
              "border border-[#057A55] text-[#057A55] rounded-xl px-4 py-2 font-semibold text-xs sm:text-sm inline-flex items-center gap-2 transition-all",
              isFilterDrawerOpen || hasActiveAdvancedFilters
                ? "bg-emerald-50"
                : "bg-[#F4FAF7] hover:bg-emerald-50/70",
            ].join(" ")}
          >
            <span>Advanced Filters</span>
            <SlidersHorizontal className="w-4 h-4" strokeWidth={2.2} />
          </button>
        </div>

        {/* Right: Sort + View mode */}
        <div className="flex items-center gap-3.5 justify-end px-2 py-1">
          {/* Sort By */}
          <div className="relative flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-slate-800">Sort By</span>
            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-700 font-semibold hover:bg-slate-100 transition-all text-xs"
            >
              <span>{sortOption === "popular" ? "Most Popular" : "Newest"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30">
                {(["popular", "newest"] as const).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => { setSortOption(opt); setIsSortOpen(false); }}
                    className={[
                      "w-full text-left px-4 py-2 text-xs font-semibold",
                      sortOption === opt ? "text-[#057A55] bg-emerald-50" : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {opt === "popular" ? "Most Popular" : "Newest"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1">
            {(["grid", "list"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                aria-label={mode === "grid" ? "Grid View" : "List View"}
                className={[
                  "p-2 rounded-xl transition-all",
                  viewMode === mode
                    ? "bg-emerald-50 text-[#057A55]"
                    : "text-slate-400 hover:text-slate-600 hover:bg-slate-50",
                ].join(" ")}
              >
                {mode === "grid"
                  ? <LayoutGrid className="w-4 h-4" strokeWidth={2.2} />
                  : <List className="w-4 h-4" strokeWidth={2.2} />
                }
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Advanced Filters panel */}
      {isFilterDrawerOpen && (
        <div className="p-5 sm:p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search */}
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

          {/* Tech filter chips */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-500 mb-2.5">Filter by Technology:</div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {["all", ...allTechStacks].map((tech) => (
                <button
                  key={tech}
                  type="button"
                  onClick={() =>
                    setSelectedTech(tech === "all" ? "all" : selectedTech === tech ? "all" : tech)
                  }
                  className={[
                    "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
                    selectedTech === tech
                      ? "bg-[#057A55] text-white"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/60",
                  ].join(" ")}
                >
                  {tech === "all" ? "All Tech" : tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
