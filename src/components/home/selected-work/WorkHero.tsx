import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export function WorkHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left: Heading + Stats */}
      <div className="lg:col-span-6 space-y-6 sm:space-y-7">
        {/* Breadcrumb */}
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

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-slate-900 leading-[1.08]">
          Our Work.<br />
          <span className="text-[#057A55]">Real Impact.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
          Success stories from diverse industries and sectors. Each project is a
          reflection of our commitment to excellence, innovation and measurable results.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-2">
          {[
            { src: "/projects/stat_icon_projects.png", value: "120+", label: "Projects Completed" },
            { src: "/projects/stat_icon_industries.png", value: "15+", label: "Industries Served" },
            { src: "/projects/stat_icon_satisfaction.png", value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 relative flex-shrink-0">
                <Image src={stat.src} alt={stat.label} fill className="object-contain" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Device mockup image */}
      <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
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
  );
}
