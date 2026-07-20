/** @format */

import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import { CertifiedSupportSection } from "./_components/CertifiedSupportSection";
import { IntegratedIntelligenceSection } from "./_components/IntegratedIntelligenceSection";
import { IntercomCTASection } from "./_components/IntercomCTASection";
import { IntercomHeroSection } from "./_components/IntercomHeroSection";
import { IntercomTrackRecordSection } from "./_components/IntercomTrackRecordSection";
import { LegacySystemsSection } from "./_components/LegacySystemsSection";
import { ModernIntercomSection } from "./_components/ModernIntercomSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Intercom Systems Installation Services NYC - Intercom Solutions",
  description:
    "Intercom systems installation across NYC, New Jersey, and Florida providing clear communication, secure entry control, and dependable intercom solutions.",
  alternates: {
    canonical: "/services/intercom",
  },
};

export default function Intercom() {
  return (
    <>
      {/* ================= WEBPAGE SCHEMA ================= */}
      <Script id="webpage-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": "https://idrtechnologysolutions.com/services/intercom",
          "name": "Intercom Systems Installation Services NYC - Intercom Solutions",
          "description": "Intercom systems installation across NYC, New Jersey, and Florida providing clear communication, secure entry control, and dependable intercom solutions."
        })}
      </Script>

      <div className="min-h-screen bg-[#F7F6F2]">
      <IntercomHeroSection />
      <IntercomTrackRecordSection />
      <ModernIntercomSection />
      <LegacySystemsSection />
      <CertifiedSupportSection />
      <IntegratedIntelligenceSection />
      <TrustedIndustriesSection/>
      <IntercomCTASection />
      <ServicesGrid exclude={5}/>
    </div>
    </>
  );
}
