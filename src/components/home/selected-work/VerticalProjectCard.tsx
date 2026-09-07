import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/constants/projects";
import { MetaInfo } from "./MetaInfo";

interface VerticalProjectCardProps {
  project: Project;
}

export function VerticalProjectCard({ project }: VerticalProjectCardProps) {
  return (
    <div className="group relative h-full flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(5,122,85,0.08)] hover:border-emerald-200/70 transition-all duration-300 p-5 sm:p-6 overflow-visible">
      {/* Top: Image with floating arrow button */}
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
        <Link
          href={`/projects/${project.id}`}
          aria-label={`View ${project.title}`}
          className="absolute -bottom-5 right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-lg hover:bg-[#046546] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
        </Link>
      </div>

      {/* Bottom: Info */}
      <div className="pt-8 flex flex-col flex-1">
        <div className="space-y-2 flex-1">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#057A55] text-xs font-semibold inline-block">
            {project.categoryLabel}
          </span>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <MetaInfo platform={project.platform} duration={project.duration} />
        </div>
      </div>
    </div>
  );
}
