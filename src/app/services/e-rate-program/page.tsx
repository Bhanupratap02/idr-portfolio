/** @format */



import ERateProgramHeroSection from "./_components/ERateProgramHeroSection";
import ERateProgramInfoSection from "./_components/ERateProgramInfoSection";
// import QuickAccessResourcesSection from "./_components/QuickAccessResourcesSection";

import CallToActionSection from "./_components/CallToActionSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:"E-Rate Program Technology Solutions | IDR Technologies",
  description:"Support learning with E-Rate technology solutions, including network infrastructure, Wi-Fi, cabling, and security systems.",
  alternates: {
    canonical: "/services/e-rate-program",
  },
};


export default function ERateProgram() {
  return (
    <>
      {/* ================= WEBPAGE SCHEMA ================= */}
      <Script id="webpage-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://idrtechnologysolutions.com/services/e-rate-program",
          "name": "E-Rate Program Technology Solutions | IDR Technologies",
          "description": "Support learning with E-Rate technology solutions, including network infrastructure, Wi-Fi, cabling, and security systems."
        })}
      </Script>

      <div className="min-h-screen bg-[#F7F6F2]">
     
     
        <ERateProgramHeroSection />
        <ERateProgramInfoSection />
        {/* <QuickAccessResourcesSection /> */}
        <TrustedIndustriesSection/>
        <CallToActionSection />
        <ServicesGrid/>

    
    </div>
    </>
  );
}
