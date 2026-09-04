import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import WhatIBuild from "@/components/home/WhatIBuild";
import SelectedWork from "@/components/home/SelectedWork";
import Experience from "@/components/home/Experience";
import HowIThink from "@/components/home/HowIThink";
import TechStack from "@/components/home/TechStack";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFB]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatIBuild />
        <SelectedWork />
        <Experience />
        <HowIThink />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}

