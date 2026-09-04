"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "What I Build", href: "#what-i-build" },
  { name: "Selected Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "How I Think", href: "#thinking" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 h-20 w-full pointer-events-none">
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center">
        <header
          className={`pointer-events-auto transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu ${
            isScrolled
              ? "w-[calc(100%-2rem)] lg:w-full max-w-6xl bg-white/70 backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/80 rounded-[2rem] translate-y-3"
              : "w-full max-w-full bg-white/95 backdrop-blur-md shadow-none border-b border-slate-200/50 rounded-none translate-y-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? 'h-[72px]' : 'h-20'}`}>
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-3.5 group transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative h-12 w-[60px] sm:h-[56px] sm:w-[72px] transition-all duration-300">
                    <Image
                      src="/logo.png"
                      alt="Masud Rana Logo"
                      fill
                      sizes="(max-width: 640px) 60px, 72px"
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl sm:text-[23px] font-black text-slate-900 leading-none tracking-tight">MASUD RANA</span>
                    <span className="text-[10px] sm:text-[11.5px] font-bold text-slate-500 uppercase tracking-[0.22em] mt-1 sm:mt-1.5">FULL STACK ENGINEER</span>
                  </div>
                </Link>
              </div>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
                {navItems.map((item) => {
                  const isActive = activeItem === item.name;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setActiveItem(item.name)}
                      className={`relative px-4 py-2 rounded-full text-[15px] transition-all duration-300 ${
                        isActive
                          ? "text-[#057A55] font-bold bg-[#E8F7F0]/80"
                          : "text-slate-600 font-medium hover:text-[#057A55] hover:bg-slate-50/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Action Area */}
              <div className="hidden sm:flex items-center gap-3.5">
                {/* Let's Build CTA Pill Button */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#057A55] hover:bg-[#046546] text-white text-sm font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(5,122,85,0.25)] hover:shadow-[0_6px_20px_rgba(5,122,85,0.35)] hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Let&apos;s Build</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex sm:hidden items-center gap-2">
                <Link
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-[#057A55] text-white text-xs font-semibold shadow-sm"
                >
                  Let&apos;s Build
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`absolute left-0 right-0 bg-white shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 ${
          isScrolled 
            ? 'top-[88px] mx-4 sm:mx-auto max-w-5xl rounded-2xl border border-slate-200' 
            : 'top-[80px] border-b border-slate-200'
        }`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FAF5] border border-emerald-100 text-xs font-medium text-[#057A55] mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#057A55]"></span>
            </span>
            <span>Available for Selected Projects</span>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#E8F7F0] text-[#057A55] font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#057A55] text-white text-sm font-semibold shadow-md shadow-emerald-700/20"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
