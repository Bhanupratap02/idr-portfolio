import { ButterflyMXAbout } from "./_components/ButterflyMXAbout";
import { ButterflyMXFeatures } from "./_components/ButterflyMXFeatures";
import { ButterflyMXFinalCTA } from "./_components/ButterflyMXFinalCTA";
import { ButterflyMXHero } from "./_components/ButterflyMXHero";
import { ButterflyMXIDR } from "./_components/ButterflyMXIDR";
import ButterflyMXProvides from "./_components/ButterflyMXProvides";
import { ButterflyMXServiceAreas } from "./_components/ButterflyMXServiceAreas";
import { ButterflyMXSmartFeatures } from "./_components/ButterflyMXSmartFeatures";
import { ButterflyMXUseCases } from "./_components/ButterflyMXUseCases";




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