
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import ActivationSection from "./_components/ActivationSection";
import KeyAdvantagesSection from "./_components/KeyAdvantagesSection";
import VisitorManagementSection from "./_components/VisitorManagementSection";
import SecuritySuiteSection from "./_components/SecuritySuiteSection";
import CallToActionSection from "./_components/CallToActionSection";
import ImagesSection from "./_components/ImagesSection";

import { Metadata } from "next";
export const metadata: Metadata = {
    title:"Brivo Access Control Solutions | IDR Technologies",
  description:"Learn how IDR Technologies delivers Brivo cloud-based access control solutions for secure and flexible property access.",
  alternates: {
    canonical: "/partners/brivo",
  },
};


export default function Brivo() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <ActivationSection />
      <KeyAdvantagesSection />

      <VisitorManagementSection />
      <ImagesSection />
      <SecuritySuiteSection />
      <CallToActionSection />
    </div>
  );
}
