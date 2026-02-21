import type { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import IDRPortalSection from "./_components/IDRPortalSection";
import IncludedSection from "./_components/IncludedSection";
import TrustedProductsSection from "./_components/TrustedProductsSection";
import WhyChooseCRSection from "./_components/WhyChooseCRSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/services/conference-room",
  },
};

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
