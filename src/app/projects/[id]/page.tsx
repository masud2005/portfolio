import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projectsData } from "@/constants/projects";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ArrowUpRight,
  Home,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB]">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-slate-400" />
              <span>Home</span>
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href="/#work"
              className="hover:text-slate-800 transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-semibold truncate max-w-xs">
              {project.title}
            </span>
          </nav>

          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 text-slate-700 hover:text-[#057A55] hover:border-emerald-200 text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Project Header Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="px-3.5 py-1 rounded-full bg-[#E8F7F0] text-[#057A55] text-xs font-semibold">
                {project.categoryLabel}
              </span>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Layers className="w-4 h-4 text-[#057A55]" />
                  <span>{project.platform}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Calendar className="w-4 h-4 text-[#057A55]" />
                  <span>{project.duration}</span>
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#057A55] mt-2">
                Role: {project.role}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl">
              {project.description}
            </p>

            {/* Showcase Mockup Banner */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center"
              />
            </div>

            {/* Full Project Description / Overview */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#057A55]" />
                <span>Project Overview & Architecture</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                Key Technical Deliverables & Features:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#057A55] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                Core Technologies & Tools:
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#057A55] hover:bg-[#046546] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#057A55] hover:bg-[#046546] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Discuss Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}

              <Link
                href="/#work"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                ← Return to Portfolio
              </Link>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
