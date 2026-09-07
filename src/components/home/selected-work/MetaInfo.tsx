import { Monitor, Clock } from "lucide-react";
import type { Project } from "@/constants/projects";

interface MetaInfoProps {
  platform: Project["platform"];
  duration: Project["duration"];
}

export function MetaInfo({ platform, duration }: MetaInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <Monitor className="w-4 h-4 text-[#057A55]" strokeWidth={2} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 leading-none">Platform</div>
          <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">{platform}</div>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <Clock className="w-4 h-4 text-[#057A55]" strokeWidth={2} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 leading-none">Duration</div>
          <div className="text-[11px] text-slate-400 font-medium mt-1 leading-none">{duration}</div>
        </div>
      </div>
    </div>
  );
}
