import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import IDRPortalSection from "./_components/IDRPortalSection";
import IncludedSection from "./_components/IncludedSection";
import TrustedIndustriesSection from "./_components/TrustedIndustriesSection";
import TrustedProductsSection from "./_components/TrustedProductsSection";
import WhyChooseCRSection from "./_components/WhyChooseCRSection";


export default function ConferenceRoom() {
  return (
    <div className="min-h-screen bg-idr-cream">
      <HeroSection />
      <WhyChooseCRSection />
      <IncludedSection />
      <TrustedProductsSection />
      <IDRPortalSection />
      <TrustedIndustriesSection />
      <CTASection />
      <ServicesGrid exclude={3} />
    </div>
  );
}
