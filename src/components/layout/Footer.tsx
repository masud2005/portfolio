"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#FAFCFB] border-t border-slate-200/80">
      {/* High-Impact Contact CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#065F46] via-[#057A55] to-[#034832] p-8 sm:p-14 lg:p-18 text-white shadow-2xl shadow-emerald-950/20 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-teal-400/15 rounded-full blur-3xl -z-0" />

          <div className="relative z-10 max-w-3xl space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-emerald-100 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Something Real</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14]">
              Have an idea worth building?
              <br />
              <span className="text-emerald-200">
                Let&apos;s turn it into a real product.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 font-normal leading-relaxed max-w-2xl">
              Whether you are looking to architect a scalable SaaS platform, build
              a robust backend system, or launch a production-grade web
              application from scratch, I&apos;m ready to help you execute.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="mailto:contact@masudrana.dev"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#057A55] font-bold text-sm sm:text-base hover:bg-emerald-50 transition-all shadow-lg active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Start a Conversation</span>
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center sm:justify-start gap-6 text-sm text-emerald-100 font-medium">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>

              <a
                href="mailto:contact@masudrana.dev"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Footer */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Identity */}
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <div className="relative h-9 w-36">
              <Image
                src="/logo.png"
                alt="Masud Rana Logo"
                fill
                sizes="144px"
                className="object-contain object-center md:object-left"
              />
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Executive Full Stack Developer & Digital Product Engineer. Building
              digital products from idea to production.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            <Link href="#hero" className="hover:text-[#057A55] transition-colors">
              Home
            </Link>
            <Link
              href="#what-i-build"
              className="hover:text-[#057A55] transition-colors"
            >
              What I Build
            </Link>
            <Link href="#work" className="hover:text-[#057A55] transition-colors">
              Selected Work
            </Link>
            <Link
              href="#experience"
              className="hover:text-[#057A55] transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#thinking"
              className="hover:text-[#057A55] transition-colors"
            >
              How I Think
            </Link>
            <Link
              href="#expertise"
              className="hover:text-[#057A55] transition-colors"
            >
              Technical Expertise
            </Link>
          </nav>

          {/* Status & Copyright */}
          <div className="space-y-1.5 flex flex-col items-center md:items-end text-xs text-slate-500">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#E8F7F0] border border-emerald-100 font-semibold text-[#057A55]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#057A55]" />
              </span>
              <span>Available for selected opportunities</span>
            </div>
            <p>© 2026 Masud Rana. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
