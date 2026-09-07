import { SearchX } from "lucide-react";

export function EmptyState() {
  return (
    <div className="mt-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 min-h-[380px] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#057A55] flex items-center justify-center mx-auto mb-3">
        <SearchX className="w-5 h-5" strokeWidth={2.2} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-2">
        No projects match these filters
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 max-w-sm mt-2 leading-relaxed">
        Try changing your advanced filters to discover more projects.
      </p>
    </div>
  );
}
