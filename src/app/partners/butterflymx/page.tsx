import { ButterflyMXAbout } from "./_components/ButterflyMXAbout";
import { ButterflyMXFeatures } from "./_components/ButterflyMXFeatures";
import { ButterflyMXFinalCTA } from "./_components/ButterflyMXFinalCTA";
import { ButterflyMXHero } from "./_components/ButterflyMXHero";
import { ButterflyMXIDR } from "./_components/ButterflyMXIDR";
import ButterflyMXProvides from "./_components/ButterflyMXProvides";
import { ButterflyMXServiceAreas } from "./_components/ButterflyMXServiceAreas";
import { ButterflyMXSmartFeatures } from "./_components/ButterflyMXSmartFeatures";
import { ButterflyMXUseCases } from "./_components/ButterflyMXUseCases";

import { Metadata } from "next";
export const metadata: Metadata = {
    title:"ButterflyMX Intercom Solutions | IDR Technologies",
  description:"Learn how ButterflyMX smart intercom systems improve property access, convenience, and security.",
  alternates: {
    canonical: "/partners/butterflymx",
  },
};



export default function ButterflyMXPage() {
  return (
    <div className="min-h-screen bg-white">
      <ButterflyMXHero />
      <ButterflyMXAbout />
      <ButterflyMXFeatures />
      <ButterflyMXProvides/>
      <ButterflyMXIDR />
      <ButterflyMXUseCases />
      <ButterflyMXSmartFeatures />
      <ButterflyMXServiceAreas />
      <ButterflyMXFinalCTA />
    </div>
  );
}