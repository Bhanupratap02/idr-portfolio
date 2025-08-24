/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import IDRPortal from "./_components/IDRPortal";
import IntegrationSection from "./_components/IntegrationSection";
import ServiceBeyondInstall from "./_components/ServiceBeyondInstall";
import TrustedTechnology from "./_components/TrustedTechnology";
import WhyChooseIDR from "./_components/WhyChooseIDR";


export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <HeroSection />
      <TrustedTechnology />
      <IntegrationSection />
      <ServiceBeyondInstall />
      <IDRPortal />
      <WhyChooseIDR />
      <CTASection />
      <ServicesGrid />
    </div>
  );
}
