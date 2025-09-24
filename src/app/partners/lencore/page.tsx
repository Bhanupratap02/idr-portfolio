/** @format */

import CommonInstallTypesSection from "./_components/CommonInstallTypesSection";
import InstallationSection from "./_components/InstallationSection";
import LencoreBetterSpacesSection from "./_components/LencoreBetterSpacesSection";
import LencoreCTA from "./_components/LencoreCTA";
import LencoreHeroSection from "./_components/LencoreHeroSection";
import LencoreServiceSection from "./_components/LencoreServiceSection";
import WhyChooseLencoreSection from "./_components/WhyChooseLencoreSection";

export default function Lencore() {
  return (
    <div className="bg-white overflow-hidden w-full flex flex-col [font-family:'Inter',Helvetica]">
      <LencoreHeroSection />
      <WhyChooseLencoreSection />
      <CommonInstallTypesSection />
      <LencoreBetterSpacesSection />
      <InstallationSection />
      <LencoreServiceSection />
      <LencoreCTA />
    </div>
  );
}
