import type { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import CTASection from "./_components/CTASection";
import HeroSection from "./_components/HeroSection";
import IDRPortalSection from "./_components/IDRPortalSection";
import IncludedSection from "./_components/IncludedSection";
import TrustedProductsSection from "./_components/TrustedProductsSection";
import WhyChooseCRSection from "./_components/WhyChooseCRSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Conference Room Technology Solutions | IDR Technologies",
  description: "Upgrade your meeting spaces with conference room technology solutions, video conferencing, AV systems, and room controls.",
  alternates: {
    canonical: "/services/conference-room",
  },
};

export default function ConferenceRoom() {
  return (
    <>
      {/* ================= WEBPAGE SCHEMA ================= */}
      <Script id="webpage-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://idrtechnologysolutions.com/services/conference-room",
          "name": "Conference Room Technology Solutions | IDR Technologies",
          "description": "Upgrade your meeting spaces with conference room technology solutions, video conferencing, AV systems, and room controls."
        })}
      </Script>
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
    </>
  );
}
