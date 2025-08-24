/** @format */

import { CertifiedSupportSection } from "./_components/CertifiedSupportSection";
import { IntegratedIntelligenceSection } from "./_components/IntegratedIntelligenceSection";
import { IntercomCTASection } from "./_components/IntercomCTASection";
import { IntercomHeroSection } from "./_components/IntercomHeroSection";
import { IntercomTrackRecordSection } from "./_components/IntercomTrackRecordSection";
import { LegacySystemsSection } from "./_components/LegacySystemsSection";
import { ModernIntercomSection } from "./_components/ModernIntercomSection";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function Intercom() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <IntercomHeroSection />
      <IntercomTrackRecordSection />
      <ModernIntercomSection />
      <LegacySystemsSection />
      <CertifiedSupportSection />
      <IntegratedIntelligenceSection />
      <IntercomCTASection />
      <ServicesGrid />
    </div>
  );
}
