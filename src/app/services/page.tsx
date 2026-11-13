/** @format */

import AVServicesGrid from "@/components/services/ServicesGrid";
import ServiceHeroSection from "./_components/ServiceHeroSection";
import HowIDRWorksSection from "./_components/HowIDRWorksSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Systems & IT Infrastructure Services | IDR",
  description: "IDR Technology Solutions provides comprehensive security and IT services, including video surveillance, access control, networking, and advanced system integration.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHeroSection />
      <AVServicesGrid title="We Always Provide The Best Service" />
      {/* <HowIDRWorksSection /> */}
    </div>
  );
}
