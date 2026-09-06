"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#0B2A20] via-[#0A2419] to-[#071B12] text-white overflow-hidden"
    >
      {/* Ambient glow, consistent with the brand's green identity */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-20 pb-10">
        {/* Top grid: brand column + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand / About */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              {/* Replace /logo.png with your actual logo asset */}
              <div className="relative h-9 w-9 shrink-0">
                <Image src="/logo.png" alt="Masud Rana" fill sizes="36px" className="object-contain" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-lg tracking-tight">Masud Rana</p>
                <p className="text-[11px] text-emerald-300/80 font-medium tracking-wide">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/70 leading-relaxed max-w-xs">
              Building scalable SaaS platforms, robust backend systems, and
              production-grade web applications from idea to launch.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {/* Swap these hrefs for your real profile links */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                {/* <Github className="w-4 h-4" /> */}
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                {/* <Linkedin className="w-4 h-4" /> */}
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-emerald-100/70">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#what-i-build" className="hover:text-white transition-colors">What I Build</Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-white transition-colors">Selected Work</Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-bold text-sm mb-4">More</h3>
            <ul className="space-y-3 text-sm text-emerald-100/70">
              <li>
                <Link href="#thinking" className="hover:text-white transition-colors">How I Think</Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">Technical Expertise</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services — inferred from your hero copy; edit freely */}
          <div>
            <h3 className="font-bold text-sm mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-emerald-100/70">
              <li className="hover:text-white transition-colors">SaaS Platforms</li>
              <li className="hover:text-white transition-colors">Backend Systems</li>
              <li className="hover:text-white transition-colors">Web Applications</li>
            </ul>
          </div>
        </div>

        {/* Contact info pill card */}
        <div className="mt-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm px-6 sm:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
              <Mail className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs text-emerald-200/70 font-semibold">Email</p>
              <a href="mailto:contact@masudrana.dev" className="text-sm font-medium hover:text-emerald-200 transition-colors">
                contact@masudrana.dev
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
              <Phone className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs text-emerald-200/70 font-semibold">Phone</p>
              {/* Add your real number here */}
              <a href="tel:+8800000000000" className="text-sm font-medium hover:text-emerald-200 transition-colors">
                +880 XXXX XXXXXX
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
              <MapPin className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs text-emerald-200/70 font-semibold">Location</p>
              <p className="text-sm font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p>© 2026 Masud Rana. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {/* Point these to real pages once you have them */}
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}