/** @format */


import AVServicesGrid from "@/components/services/ServicesGrid";
import NITHeroSection from "./_components/NITHeroSection";
import NITServicesSection from "./_components/NITServicesSection";
import NITCertifiedSection from "./_components/NITCertifiedSection";
import NITEducationSection from "./_components/NITEducationSection";
import NITIntegrationsSection from "./_components/NITIntegrationsSection";
import NITTimelineSection from "./_components/NITTimelineSection";
import NITPortalSection from "./_components/NITPortalSection";
import NITWhyChooseSection from "./_components/NITWhyChooseSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Managed Networks & IT Services | IDR Technologies",
  description:"Keep your business connected with managed networks, IT support, cybersecurity, infrastructure management, and monitoring.",
  alternates: {
    canonical: "/services/networks-it",
  },
};

export default function NetworksIT() {
  return (
    <div className="min-h-screen bg-idr-cream">
      <NITHeroSection />
      <NITServicesSection />
      <NITCertifiedSection />
      <NITEducationSection />
      <NITIntegrationsSection />
      <NITTimelineSection />
      <NITPortalSection />
      <TrustedIndustriesSection/>
      <NITWhyChooseSection />
      <AVServicesGrid exclude={6} />
    </div>
  );
}
