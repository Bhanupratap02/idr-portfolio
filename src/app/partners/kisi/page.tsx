import { HeroSection } from "./_components/HeroSection";
import { WhyChooseKisiSection } from "./_components/WhyChooseKisiSection";
import { WhyWorkWithIDRSection } from "./_components/WhyWorkWithIDRSection";
import { IndustriesSection } from "./_components/IndustriesSection";
import { IntegrationsSection } from "./_components/IntegrationsSection";
import { LocationsSection } from "./_components/LocationsSection";
import { ContactSection } from "./_components/ContactSection";

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