import Image from "next/image";
import Link from "next/link";
import { Home, Code2, Users, Star } from "lucide-react";

const STATS = [
  {
    icon: Code2,
    value: "30+",
    label: "Projects Shipped",
  },
  {
    icon: Users,
    value: "15+",
    label: "Industries Served",
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
  },
];

export function WorkHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

      {/* Left: Heading + Description + Stats */}
      <div className="lg:col-span-6 space-y-6 sm:space-y-7">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-slate-800 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold">Selected Work</span>
        </nav>

        {/* Label pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#057A55] text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#057A55] animate-pulse" />
          Full Stack Engineer · Masud Rana
        </div>

        {/* Main Heading */}
        <div className="space-y-1">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.08]">
            Real Products.
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-[#057A55] leading-[1.08]">
            Real Impact.
          </h1>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
          From multi-vendor e-commerce platforms and SaaS dashboards to
          AI-powered applications and real-time systems — every project is
          engineered end-to-end with Next.js, NestJS, and scalable backend
          architecture.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-5 sm:gap-8 pt-1">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5 text-[#057A55]" strokeWidth={2} />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                  {value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1 whitespace-nowrap">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Right: Device mockup image */}
      <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
        <div className="relative w-full max-w-[620px] aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-3xl select-none bg-stone-50">
          <Image
            src="/projects/hero_devices_wave_ribbon.jpg"
            alt="Masud Rana – Full Stack Projects Showcase"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover lg:object-right object-center"
          />
        </div>
      </div>

    </div>
  );
}
