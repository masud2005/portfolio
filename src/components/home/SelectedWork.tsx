"use client";

import { useState, useMemo } from "react";
import { projectsData } from "@/constants/projects";
import { WorkHero } from "./selected-work/WorkHero";
import { ProjectToolbar } from "./selected-work/ProjectToolbar";
import { ProjectsDisplay } from "./selected-work/ProjectsDisplay";

export default function SelectedWork() {
  const [projects] = useState(projectsData);
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState<"popular" | "newest">("popular");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState("all");

  const allTechStacks = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [projects]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projects.length,
      website: 0,
      app: 0,
      portfolio: 0,
      saas: 0,
    };
    projects.forEach((p) => {
      if (counts[p.category] !== undefined) counts[p.category]++;
    });
    return counts;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((p) => {
        if (activeTab !== "all" && p.category !== activeTab) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matched =
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.techStack.some((t) => t.toLowerCase().includes(q));
          if (!matched) return false;
        }
        if (selectedTech !== "all" && !p.techStack.includes(selectedTech)) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortOption === "newest")
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
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
        <WorkHero />

        <ProjectToolbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          categoryCounts={categoryCounts}
          sortOption={sortOption}
          setSortOption={setSortOption}
          isSortOpen={isSortOpen}
          setIsSortOpen={setIsSortOpen}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isFilterDrawerOpen={isFilterDrawerOpen}
          setIsFilterDrawerOpen={setIsFilterDrawerOpen}
          hasActiveAdvancedFilters={hasActiveAdvancedFilters}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          allTechStacks={allTechStacks}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
          handleResetFilters={handleResetFilters}
        />

        <ProjectsDisplay projects={filteredProjects} viewMode={viewMode} />
      </div>
    </section>
  );
}
