import type { Metadata } from "next";
import PartnersGrid from "./_components/PartnersGrid";
import SpotlightHero from "./_components/SpotlightHero";

export const metadata: Metadata = {
  alternates: {
    canonical: "/partners",
  },
};

export default function SpotlightPage() {
  return (
    <div className="min-h-screen bg-white">

      <SpotlightHero />
      <PartnersGrid /> 
      
    </div>
  );
}
