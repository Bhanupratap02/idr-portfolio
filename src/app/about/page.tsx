
import FounderMessage from "@/components/about/FounderMessage";
import MissionValues from "@/components/about/MissionValues";
import OurStory from "@/components/about/OurStory";
import TeamSection from "@/components/about/TeamSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"About IDR Technologies",
  description:"Learn about IDR Technologies, our experience, team, and approach to security, networking, cabling, and technology infrastructure projects.",
  alternates: {
    canonical: "/about",
  },
};



export default function AboutUS() {
  return (
    <div className="min-h-screen bg-idr-cream">   

      {/* Our Story Section */}
      <OurStory />
      
      {/* Mission & Values Section */}
      <MissionValues />
      
      {/* Founder's Message Section */}
      <FounderMessage />
      
      {/* Team Section */}
      <TeamSection />
      
    </div>
  );
}

