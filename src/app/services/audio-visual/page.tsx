/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import ClearSoundSection from "./_components/ClearSoundSection";
import CommercialGradeSection from "./_components/CommercialGradeSection";
import HeroSection from "./_components/HeroSection";
import MeetingsSection from "./_components/MeetingsSection";
import TransformSpaceSection from "./_components/TransformSpaceSection";
import WhyChooseAVSection from "./_components/WhyChooseAVSection";
import TrustedIndustriesSection from "@/components/services/TrustedIndustriesSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Audio Visual (AV) Solutions NYC - IDR Technologies",
  description:
    "Commercial audio visual solutions for businesses and offices across NYC, New Jersey, and Florida including AV system design and installation.",
  alternates: {
    canonical: "/services/audio-visual",
  },
};

export default function AudioVisual() {
  return (
    <div className="min-h-screen bg-idr-cream">
      <HeroSection />
      <ClearSoundSection />
      <MeetingsSection />
      <CommercialGradeSection />
      <WhyChooseAVSection />
      <TrustedIndustriesSection/>
      <TransformSpaceSection />
      <ServicesGrid exclude={2}/>
    </div>
  );
}
