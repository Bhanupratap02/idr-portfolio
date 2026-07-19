/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import CablingHeroSection from "./_components/CablingHeroSection";
import CallToActionSection from "./_components/CallToActionSection";
import IDRPortalSection from "./_components/IDRPortalSection";
import IntegrationSection from "./_components/IntegrationSection";
import ProcessSection from "./_components/ProcessSection";
import ProfessionalCablingSection from "./_components/ProfessionalCablingSection";
import QualityStandardsSection from "./_components/QualityStandardsSection";
import WhyChooseIDRSection from "./_components/WhyChooseIDRSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Structured Cabling Services NYC - IDR Technologies",
  description:
    "Improve business connectivity with structured cabling services, delivering voice, data, and security networks across NYC, New Jersey, and Florida.",
  alternates: {
    canonical: "/services/structured-cabling",
  },
};

export default function StructuredCabling() {
  return (
    <>
      {/* ================= WEBPAGE SCHEMA ================= */}
      <Script id="webpage-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://idrtechnologysolutions.com/services/structured-cabling",
          "name": "Structured Cabling Services NYC - IDR Technologies",
          "description": "Improve business connectivity with structured cabling services, delivering voice, data, and security networks across NYC, New Jersey, and Florida."
        })}
      </Script>

      <div className="min-h-screen bg-[#F7F6F2]">
      <main>
        <CablingHeroSection />
        <ProfessionalCablingSection />
        <QualityStandardsSection />
        <IntegrationSection />
        <ProcessSection />
        <IDRPortalSection />
        <WhyChooseIDRSection />
        <TrustedIndustriesSection/>
        <CallToActionSection />
        <ServicesGrid exclude={8} />
      </main>
    </div>
    </>
  );
}
