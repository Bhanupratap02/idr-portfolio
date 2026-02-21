import { HeroSection } from "./_components/HeroSection";
import { TrustSection } from "./_components/TrustSection";
import { WhyChooseSection } from "./_components/WhyChooseSection";
import { ScenesSection } from "./_components/ScenesSection";
import { SecurityFeaturesSection } from "./_components/SecurityFeaturesSection";
import { ApplicationsSection } from "./_components/ApplicationsSection";
import { PricingSection } from "./_components/PricingSection";
import { IntegrationsSection } from "./_components/IntegrationsSection";
import { CTASection } from "./_components/CTASection";
import AvigilonGallery from "./_components/AvigilonGallery";
// import { PartnersCarousel } from "./components/PartnersCarousel";
import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/partners/avigilon",
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <TrustSection />
      <WhyChooseSection />
      <ScenesSection />
      <SecurityFeaturesSection />
      <AvigilonGallery/>
      <ApplicationsSection />
      <PricingSection />
      <IntegrationsSection />
      <CTASection />
    </div>
  );
}
