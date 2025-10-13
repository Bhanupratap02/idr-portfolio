/** @format */

import AVServicesGrid from "@/components/services/ServicesGrid";
import NITHeroSection from "./_components/NITHeroSection";
import NITServicesSection from "./_components/NITServicesSection";
import NITCertifiedSection from "./_components/NITCertifiedSection";
import NITEducationSection from "./_components/NITEducationSection";
import NITIntegrationsSection from "./_components/NITIntegrationsSection";
import NITTimelineSection from "./_components/NITTimelineSection";
import NITPortalSection from "./_components/NITPortalSection";
import NITWhyChooseSection from "./_components/NITWhyChooseSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

export default function NetworksIT() {
  return (
    <div className="min-h-screen bg-idr-cream">
      <NITHeroSection />
      <NITServicesSection />
      <NITCertifiedSection />
      <NITEducationSection />
      <NITIntegrationsSection />
      <NITTimelineSection />
      <NITPortalSection />
      <TrustedIndustriesSection/>
      <NITWhyChooseSection />
      <AVServicesGrid exclude={6} />
    </div>
  );
}
