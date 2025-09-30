import { HeroSection } from "./_components/HeroSection";
import { CompatibilitySection } from "./_components/CompatibilitySection";
import { ProductSuiteSection } from "./_components/ProductSuiteSection";
import { VisitorJourneySection } from "./_components/VisitorJourneySection";
import { VirtualKeySection } from "./_components/VirtualKeySection";
import { IntercomBoostSection } from "./_components/IntercomBoostSection";
import { IntercomLiteSection } from "./_components/IntercomLiteSection";
import { IntercomPlusSection } from "./_components/IntercomPlusSection";
import { FinalCTASection } from "./_components/FinalCTASection";
import { SmartSecureSection } from "./_components/SmartSecureSection";

export default function Amazon() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CompatibilitySection />
      <ProductSuiteSection />
      <VisitorJourneySection />
      <VirtualKeySection />
      <IntercomBoostSection />
      <IntercomLiteSection />
      <IntercomPlusSection />
      <FinalCTASection />
      <SmartSecureSection />
    </div>
  );
}