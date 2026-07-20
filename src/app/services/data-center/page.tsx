/** @format */

import DCHeroSection from "./_components/HeroSection";
import DCWhyWeDeliverSection from "./_components/DCWhatWeDeliverSection";
import DCRedundancySection from "./_components/DCRedundancySection";
import DCCertifiedSection from "./_components/DCCertifiedSection";
import DCIntegratedSection from "./_components/DCIntegratedSection";
import DCProcessSection from "./_components/DCProcessSection";
import DCPortalSection from "./_components/DCPortalSection";
import DCWhyTeamsSection from "./_components/DCWhyTeamsSection";
import DCReadySection from "./_components/DCReadySection";
import ServicesGrid from "@/components/services/ServicesGrid";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:"Data Center Infrastructure & Support Services | IDR Technologies",
description:"Build a reliable IT foundation with data center infrastructure, cabling, equipment deployment, maintenance, and support.",
  alternates: {
    canonical: "/services/data-center",
  },
};

export default function DataCenter() {
  return (
    <>
      {/* ================= WEBPAGE SCHEMA ================= */}
      <Script id="webpage-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://idrtechnologysolutions.com/services/data-center",
          "name": "Data Center Infrastructure & Support Services | IDR Technologies",
          "description": "Build a reliable IT foundation with data center infrastructure, cabling, equipment deployment, maintenance, and support."
        })}
      </Script>

      <div className="min-h-screen bg-idr-cream">
      <DCHeroSection />
      <DCWhyWeDeliverSection />
      <DCRedundancySection />
      <DCCertifiedSection />
      <DCIntegratedSection />
      <DCProcessSection />
      <DCPortalSection />
      <DCWhyTeamsSection />
      <TrustedIndustriesSection/>
      <DCReadySection />
      <ServicesGrid exclude={4}/>
    </div>
    </>
  );
}
