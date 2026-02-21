

import EagleEyeHeroSection from "./_components/HeroSection";
import WhyWeLove from "./_components/WhyWeLove";
import WhyEagleEye from "./_components/WhyEagleEye";
import HowIDRDelivers from "./_components/HowIDRDelivers";
import WhereEagleEyeExcels from "./_components/WhereEagleEyeExcels";
import IntegrationReady from "./_components/IntegrationReady";
import CTA from "./_components/CTA";
import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/partners/eagle-eye",
  },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <EagleEyeHeroSection/>

      {/* Why We Love Eagle Eye Networks */}
      <WhyWeLove/>

      {/* Why Eagle Eye Networks? - Feature Cards */}
      <WhyEagleEye/>

      {/* How IDR Delivers */}
      <HowIDRDelivers/>

      {/* Where Eagle Eye Excels */}
      <WhereEagleEyeExcels/>

      {/* Integration-Ready */}
     <IntegrationReady/>

      {/* CTA Section */}
      <CTA/>
    </div>
  );
}
