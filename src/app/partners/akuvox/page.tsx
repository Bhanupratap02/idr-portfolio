/** @format */

import AkuvoxHeroSection from "./_components/AkuvoxHeroSection";
import GreenSecure from "./_components/GreenSecure";
import ServiceAreasSection from "./_components/ServiceAreasSection";
import UpgradeIntercomCTASection from "./_components/UpgradeIntercomCTASection";
import WhereAkuvoxShinesSection from "./_components/WhereAkuvoxShinesSection";
import WhyAkuvoxSection from "./_components/WhyAkuvoxSection";
import WhyWorkWithIDRSection from "./_components/WhyWorkWithIDRSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  alternates: {
    canonical: "/partners/akuvox",
  },
};


export default function VivotekVortex() {
  return (
    <div className="min-h-screen bg-white">
      
      <AkuvoxHeroSection />
   
        <WhyAkuvoxSection />
        <GreenSecure/>
        <WhyWorkWithIDRSection />
        <WhereAkuvoxShinesSection />
        <ServiceAreasSection/>
        <UpgradeIntercomCTASection />
      
    
    
    </div>
  );
}
