import { HeroSection } from "./_components/HeroSection";
import { WhyChooseKisiSection } from "./_components/WhyChooseKisiSection";
import { WhyWorkWithIDRSection } from "./_components/WhyWorkWithIDRSection";
import { IndustriesSection } from "./_components/IndustriesSection";
import { IntegrationsSection } from "./_components/IntegrationsSection";
import { LocationsSection } from "./_components/LocationsSection";
import { ContactSection } from "./_components/ContactSection";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:"Kisi Access Control Solutions | IDR Technologies",
  description:"Discover Kisi mobile-first access control solutions designed and installed by IDR Technologies.",
  alternates: {
    canonical: "/partners/kisi",
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseKisiSection />
      <WhyWorkWithIDRSection />
      <IndustriesSection />
      <IntegrationsSection />
      <LocationsSection />
      <ContactSection />
    </div>
  );
}