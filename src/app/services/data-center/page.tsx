/** @format */

import DCHeroSection from "./_components/HeroSection";
import DCWhyWeDeliverSection from "./_components/DCWhatWeDeliverSection";
import DCRedundancySection from "./_components/DCRedundancySection";
import DCCertifiedSection from "./_components/DCCertifiedSection";
import DCIntegratedSection from "./_components/DCIntegratedSection";
import DCProcessSection from "./_components/DCProcessSection";
import DCPortalSection from "./_components/DCPortalSection";
import DCWhyTeamsSection from "./_components/DCWhyTeamsSection";
import DCReadySection from "./_components/DCReadySection";
import ServicesGrid from "@/components/services/ServicesGrid";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

export default function DataCenter() {
  return (
    <div className="min-h-screen bg-idr-cream">
      <DCHeroSection />
      <DCWhyWeDeliverSection />
      <DCRedundancySection />
      <DCCertifiedSection />
      <DCIntegratedSection />
      <DCProcessSection />
      <DCPortalSection />
      <DCWhyTeamsSection />
      <TrustedIndustriesSection/>
      <DCReadySection />
      <ServicesGrid exclude={4}/>
    </div>
  );
}
