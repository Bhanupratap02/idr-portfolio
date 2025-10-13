/** @format */

import ServicesSection from "@/components/services/ServicesGrid";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import LegacySystemsSection from "./_components/LegacySystemsSection";
import ServiceProcessSection from "./_components/ServiceProcessSection";
import PortalSection from "./_components/PortalSection";
import WhyIDRSection from "./_components/WhyIDRSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <HeroSection />
      <FeaturesSection />
      <LegacySystemsSection />
      <ServiceProcessSection />
      <PortalSection />
      <WhyIDRSection />
      <TrustedIndustriesSection />
      <ServicesSection exclude={7} />
    </div>
  );
}
