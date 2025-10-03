/** @format */

import TeleportivityCapabilities from "./_components/TeleportivityCapabilities";
import TeleportivityCoverage from "./_components/TeleportivityCoverage";
import TeleportivityCTA from "./_components/TeleportivityCTA";
import TeleportivityFeatures from "./_components/TeleportivityFeatures";
import TeleportivityHero from "./_components/TeleportivityHero";
import TeleportivityUseCases from "./_components/TeleportivityUseCases";



export default function TeleportivityPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'Inter',Helvetica]">
      <TeleportivityHero />
      <TeleportivityFeatures />
      <TeleportivityCapabilities />
      <TeleportivityUseCases />
      <TeleportivityCoverage />
      <TeleportivityCTA />
    </div>
  );
}
