import BuildingsShowcaseSection from "./_components/BuildingsShowcaseSection";
import EndToEndServiceSection from "./_components/EndToEndServiceSection";
import ModernIntercomsSection from "./_components/ModernIntercomsSection";
import MVIHeroSection from "./_components/MVIHeroSection";
import PowerfulToolsSection from "./_components/PowerfulToolsSection";
import SmarterDesignSection from "./_components/SmarterDesignSection";
import WhatMakesMVISection from "./_components/WhatMakesMVISection";




export default function MVISystems() {
  return (
    <div className="min-h-screen bg-white">
      <MVIHeroSection />
      <ModernIntercomsSection />
      <SmarterDesignSection />
      <WhatMakesMVISection />
      <PowerfulToolsSection />
      <EndToEndServiceSection />
      <BuildingsShowcaseSection />
    </div>
  );
}
