import AnavioReaderSection from "./_components/AnavioReaderSection";
import BuildSpeedSection from "./_components/BuildSpeedSection";
import CoverageSection from "./_components/CoverageSection";
import EnvironmentsSection from "./_components/EnvironmentsSection";
import IntegrationsSection from "./_components/IntegrationsSection";
import TrustSection from "./_components/TrustSection";
import ViconHeroSection from "./_components/ViconHeroSection";
import ViconVaxSection from "./_components/ViconVaxSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/partners/vicon",
  },
};

export default function Vicon() {
  return (
    <div className="min-h-screen bg-white">
      <ViconHeroSection />
      <BuildSpeedSection />
      <ViconVaxSection />
      <AnavioReaderSection/>
      <TrustSection />
      <EnvironmentsSection />
      <IntegrationsSection />
      <CoverageSection />
    </div>
  );
}
