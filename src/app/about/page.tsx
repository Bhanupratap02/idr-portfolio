import FounderMessage from "@/components/about/FounderMessage";
import MissionValues from "@/components/about/MissionValues";
import OurStory from "@/components/about/OurStory";
import TeamSection from "@/components/about/TeamSection";




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
