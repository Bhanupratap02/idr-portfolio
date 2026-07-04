/** @format */

import CertificationCards from "./_components/CertificationCards";
import CiscoHero from "./_components/CiscoHero";
import CTASection from "./_components/CTASection";
import ProductOfferings from "./_components/ProductOfferings";
import WhyCiscoMeraki from "./_components/WhyCiscoMeraki";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:"Cisco Meraki Network Solutions | IDR Technologies",
  description:"Explore Cisco Meraki networking, Wi-Fi, and cloud-managed infrastructure solutions from IDR Technologies.",
  alternates: {
    canonical: "/partners/cisco-meraki",
  },
};





export default function VivotekVortex() {
  return (
    <div className="min-h-screen bg-white">
      <CiscoHero />

      <CertificationCards />
      <ProductOfferings />
      <WhyCiscoMeraki />
      <CTASection />
      
  
    </div>
  );
}
