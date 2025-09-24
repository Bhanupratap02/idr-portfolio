/** @format */

import AkuvoxHeroSection from "./_components/AkuvoxHeroSection";
import ServiceAreasSection from "./_components/ServiceAreasSection";
import UpgradeIntercomCTASection from "./_components/UpgradeIntercomCTASection";
import WhereAkuvoxShinesSection from "./_components/WhereAkuvoxShinesSection";
import WhyAkuvoxSection from "./_components/WhyAkuvoxSection";
import WhyWorkWithIDRSection from "./_components/WhyWorkWithIDRSection";



export default function VivotekVortex() {
  return (
    <div className="min-h-screen bg-white">
      
      <AkuvoxHeroSection />
   
        <WhyAkuvoxSection />
        <WhyWorkWithIDRSection />
        <WhereAkuvoxShinesSection />
        <ServiceAreasSection/>
        <UpgradeIntercomCTASection />
      
    
    
    </div>
  );
}
