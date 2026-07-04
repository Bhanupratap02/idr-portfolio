/** @format */



import ERateProgramHeroSection from "./_components/ERateProgramHeroSection";
import ERateProgramInfoSection from "./_components/ERateProgramInfoSection";
// import QuickAccessResourcesSection from "./_components/QuickAccessResourcesSection";

import CallToActionSection from "./_components/CallToActionSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"E-Rate Program Technology Solutions | IDR Technologies",
  description:"Support learning with E-Rate technology solutions, including network infrastructure, Wi-Fi, cabling, and security systems.",
  alternates: {
    canonical: "/services/e-rate-program",
  },
};


export default function ERateProgram() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
     
     
        <ERateProgramHeroSection />
        <ERateProgramInfoSection />
        {/* <QuickAccessResourcesSection /> */}
        <TrustedIndustriesSection/>
        <CallToActionSection />
        <ServicesGrid/>

    
    </div>
  );
}
