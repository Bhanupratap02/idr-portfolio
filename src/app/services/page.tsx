/** @format */

import AVServicesGrid from "@/components/services/ServicesGrid";
import ServiceHeroSection from "./_components/ServiceHeroSection";
import HowIDRWorksSection from "./_components/HowIDRWorksSection";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHeroSection />
      <AVServicesGrid />
      <HowIDRWorksSection />
    </div>
  );
}
