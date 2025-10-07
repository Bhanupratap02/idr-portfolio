/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import CablingHeroSection from "./_components/CablingHeroSection";
import CallToActionSection from "./_components/CallToActionSection";
import IDRPortalSection from "./_components/IDRPortalSection";
import IntegrationSection from "./_components/IntegrationSection";
import ProcessSection from "./_components/ProcessSection";
import ProfessionalCablingSection from "./_components/ProfessionalCablingSection";
import QualityStandardsSection from "./_components/QualityStandardsSection";
import WhyChooseIDRSection from "./_components/WhyChooseIDRSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

export default function StructuredCabling() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <main>
        <CablingHeroSection />
        <ProfessionalCablingSection />
        <QualityStandardsSection />
        <IntegrationSection />
        <ProcessSection />
        <IDRPortalSection />
        <WhyChooseIDRSection />
        <TrustedIndustriesSection/>
        <CallToActionSection />
        <ServicesGrid exclude={8} />
      </main>
    </div>
  );
}
