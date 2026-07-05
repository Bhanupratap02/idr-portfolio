/** @format */

import BenefitsSection from "./_components/BenefitsSection";
import BestOfBothWorlds from "./_components/BestOfBothWorlds";
import CallToAction from "./_components/CallToAction";
import ComparisonSection from "./_components/ComparisonSection";
import HeroSection from "./_components/HeroSection";
import IndustriesSection from "./_components/IndustriesSection";
import MainContent from "./_components/MainContent";
import WhyWorkWithUs from "./_components/WhyWorkWithUs";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:"Vivotek Vortex Surveillance | IDR Technologies",
  description:"Explore Vivotek Vortex cloud surveillance solutions designed to improve visibility and security management.",
  alternates: {
    canonical: "/partners/vivotek-vortex",
  },
};

export default function VivotekVortex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navigation Overlay */}

      <HeroSection />

      {/* Main Content Sections */}
      <MainContent />
      <ComparisonSection />
      <BestOfBothWorlds />
      <BenefitsSection />
      <IndustriesSection />
      <WhyWorkWithUs />
      <CallToAction />
    </div>
  );
}
