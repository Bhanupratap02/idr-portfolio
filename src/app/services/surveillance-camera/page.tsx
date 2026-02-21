/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import CertifiedSupportSection from "./_components/CertifiedSupportSection";
import CompleteSurveillanceSection from "./_components/CompleteSurveillanceSection";
import LegacySystemsSection from "./_components/LegacySystemsSection";
import SmarterSurveillanceSection from "./_components/SmarterSurveillanceSection";
import SurveillanceCallToActionSection from "./_components/SurveillanceCallToActionSection";
import SurveillanceHeroSection from "./_components/SurveillanceHeroSection";
import SurveillancePortalSection from "./_components/SurveillancePortalSection";
import WhyChooseSurveillanceSection from "./_components/WhyChooseSurveillanceSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Commercial Surveillance Security Camera Installation Services - IDR",
  description:
    "Commercial security camera system installation with reliable surveillance camera services by IDR Technology Solutions to protect businesses with real time monitoring.",
  alternates: {
    canonical: "/services/surveillance-camera",
  },
};

export default function SurveillanceCamera() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <main>
        <SurveillanceHeroSection />
        <CompleteSurveillanceSection />
        <SmarterSurveillanceSection />
        <LegacySystemsSection />
        <CertifiedSupportSection />
        <SurveillancePortalSection />
        <WhyChooseSurveillanceSection />
        <TrustedIndustriesSection/>
        <SurveillanceCallToActionSection />
        <ServicesGrid exclude={9}/>
      </main>
    </div>
  );
}
