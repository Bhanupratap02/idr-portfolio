/** @format */

import ServicesGrid from "@/components/services/ServicesGrid";
import ClearSoundSection from "./_components/ClearSoundSection";
import CommercialGradeSection from "./_components/CommercialGradeSection";
import HeroSection from "./_components/HeroSection";
import MeetingsSection from "./_components/MeetingsSection";
import TransformSpaceSection from "./_components/TransformSpaceSection";
import WhyChooseAVSection from "./_components/WhyChooseAVSection";


export default function AudioVisual() {
  return (
    <div className="min-h-screen bg-idr-cream">
      <HeroSection />
      <ClearSoundSection />
      <MeetingsSection />
      <CommercialGradeSection />
      <WhyChooseAVSection />
      <TransformSpaceSection />
      <ServicesGrid />
    </div>
  );
}
