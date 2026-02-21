/** @format */

import WhyChooseSpeco from "./_components/WhyChooseSpeco";
import SpecoHeroSection from "./_components/SpecoHeroSection";
import CertifiedSection from "./_components/CertifiedSection";
import BuiltForEveryEnvironmentSection from "./_components/BuiltForEveryEnvironmentSection";
import SmartFeaturesSection from "./_components/SmartFeaturesSection";
import WhereWeWork from "./_components/WhereWeWork";
import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/partners/speco-technologies",
  },
};

export default function Speco() {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col [font-family:'Inter',Helvetica]">
      <SpecoHeroSection />
      <WhyChooseSpeco />
      <CertifiedSection />
      <BuiltForEveryEnvironmentSection />
      <SmartFeaturesSection />

      <WhereWeWork />
    </div>
  );
}
