/** @format */

import ServicesSection from "@/components/services/ServicesGrid";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import LegacySystemsSection from "./_components/LegacySystemsSection";
import ServiceProcessSection from "./_components/ServiceProcessSection";
import PortalSection from "./_components/PortalSection";
import WhyIDRSection from "./_components/WhyIDRSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "24 7 Monitored Security Intrusion Alarm Systems - IDR",
  description:
    "Professional intrusion alarm system installation with monitoring services to detect unauthorized access and enhance property security.",
  alternates: {
    canonical: "/services/security-alarm",
  },
};

export default function Index() {
  return (
    <>
      {/* ================= WEBPAGE SCHEMA ================= */}
      <Script id="webpage-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://idrtechnologysolutions.com/services/security-alarm",
          "name": "24 7 Monitored Security Intrusion Alarm Systems - IDR",
          "description": "Professional intrusion alarm system installation with monitoring services to detect unauthorized access and enhance property security."
        })}
      </Script>

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
    </>
  );
}
