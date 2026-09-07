import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/constants/projects";
import { MetaInfo } from "./MetaInfo";

interface ListProjectCardProps {
  project: Project;
}

export function ListProjectCard({ project }: ListProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(5,122,85,0.09)] hover:border-emerald-200/70 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Left: Info */}
      <div className="w-full lg:w-[35%] flex flex-col justify-between p-6 sm:p-8">
        <div className="space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#057A55] text-xs font-semibold inline-block">
            {project.categoryLabel}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="py-4 border-y border-slate-100">
            <MetaInfo platform={project.platform} duration={project.duration} />
          </div>
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="group/btn mt-4 inline-flex items-center gap-3 w-fit"
        >
          <span className="text-sm font-bold text-slate-900 group-hover/btn:text-[#057A55] transition-colors">
            View Case Study
          </span>
          <div className="w-10 h-10 rounded-full bg-[#057A55] text-white flex items-center justify-center shadow-md group-hover/btn:bg-[#046546] group-hover/btn:scale-105 transition-all duration-200">
            <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
          </div>
        </Link>
      </div>

      {/* Right: Image */}
      <div className="w-full lg:w-[65%] relative min-h-[260px] sm:min-h-[340px] lg:min-h-0 bg-stone-50 overflow-hidden">
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
