/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import IDRPortal from "./_components/IDRPortal";
import IntegrationSection from "./_components/IntegrationSection";
import ServiceBeyondInstall from "./_components/ServiceBeyondInstall";
import TrustedTechnology from "./_components/TrustedTechnology";
import WhyChooseIDR from "./_components/WhyChooseIDR";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Access Control Systems Services NYC - IDR",
  description:
    "IDR Technology Solutions delivers security access control services across NYC, New Jersey and Florida, including access control system design and installation.",
  alternates: {
    canonical: "/services/access-control",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <HeroSection />
      <TrustedTechnology />
      <IntegrationSection />
      <ServiceBeyondInstall />
      <IDRPortal />
      <WhyChooseIDR />
      <TrustedIndustriesSection/>
      <CTASection />
      <ServicesGrid exclude={1} />
    </div>
  );
}
