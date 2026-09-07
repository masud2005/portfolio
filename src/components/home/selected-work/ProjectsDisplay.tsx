import type { Project } from "@/constants/projects";
import { WideProjectCard } from "./WideProjectCard";
import { VerticalProjectCard } from "./VerticalProjectCard";
import { ListProjectCard } from "./ListProjectCard";
import { EmptyState } from "./EmptyState";

interface ProjectsDisplayProps {
  projects: Project[];
  viewMode: "grid" | "list";
}

export function ProjectsDisplay({ projects, viewMode }: ProjectsDisplayProps) {
  if (projects.length === 0) return <EmptyState />;

  if (viewMode === "list") {
    return (
      <div className="mt-8 space-y-6">
        {projects.map((project) => (
          <ListProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  }

  // Grid: 2-column wide + 1-column vertical, per row
  const rows = Array.from({ length: Math.ceil(projects.length / 2) });

  return (
    <div className="mt-8 space-y-6 sm:space-y-8">
      {rows.map((_, rowIndex) => {
        const wide = projects[rowIndex * 2];
        const vertical = projects[rowIndex * 2 + 1];
        return (
          <div
            key={rowIndex}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
          >
            <div className={vertical ? "lg:col-span-2 h-full" : "lg:col-span-3 h-full"}>
              <WideProjectCard project={wide} />
            </div>
            {vertical && (
              <div className="lg:col-span-1 h-full">
                <VerticalProjectCard project={vertical} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
