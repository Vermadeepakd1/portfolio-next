"use client";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="relative w-full">
        <HeroSection />
        <BentoGrid />
        <ProjectGallery />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
