import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import image1 from "@/assets/case_study/case-study-card1.png"
import image2 from "@/assets/case_study/case-study-card2.png"
import image3 from "@/assets/case_study/case-study-card3.png"
import image4 from "@/assets/case_study/case-study-card4.png"
import image5 from "@/assets/case_study/case-study-card5.png"
import image6 from "@/assets/case_study/case-study-card6.png"
import image7 from "@/assets/case_study/case-study-card7.png"
import image8 from "@/assets/case_study/case-study-card8.png"
import image9 from "@/assets/case_study/case-study-card9.png"
import floatingimage1 from "@/assets/case_study/floating-img-1.png"
import floatingimage2 from "@/assets/case_study/floating-img-2.png"
import floatingimage3 from "@/assets/case_study/floating-img-3.png"

const caseStudies = [
  {
    id: 1,
    image: image1,
    title: "How IDR Eliminated Unauthorized Building Access for Fairstead.",
    description: "Fairstead, a leading national property management firm, partnered with IDR to address a widespread security concern across......."
  },
  {
    id: 2,
    image: image2,
    title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
    description: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and Florida.."
  },
  {
    id: 3,
    image: image3,
    title: "Modern Meets Legacy: How IDR Unified Cloud and 4-Wire Intercoms at The........",
    description: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn......"
  },
  {
    id: 4,
    image: image4,
    title: "No Reader, No Problem: Elevator Access Solved with Kisi Mobile Control",
    description: "Robinhood Foundation was looking to secure elevator access in their NYC office — but faced a unique constraint......"
  },
  {
    id: 5,
    image: image5,
    title: "One System, Many Doors: How IDR Unified Intercom Access for Douglas Elliman",
    description: "Douglas Elliman approached IDR to design an intercom system that could handle a complex mix of access points......."
  },
  {
    id: 6,
    image: image6,
    title: "When Technology Moved Forward, So Did We: A Phased Wi-Fi Upgrade",
    description: "IDR had originally installed a cost-effective wireless solution for Central Queens Academy using Cisco Wireless N/AC access points, with...."
  },
  {
    id: 7,
    image: image7,
    title: "Upway Upgrading Loitering Deterrence with a Custom Outdoor Annunciator",
    description: "Upway installed a Rhombus camera system with security monitoring to keep their outdoor areas secure. But they ran into a snag......."
  },
  {
    id: 8,
    image: image8,
    title: "A Smarter Training Room: Custom Teams Integration for MTF Biologics",
    description: "Create a seamless Microsoft Teams-based hybrid training room with distributed AV, zone-based audio, and advanced control — all....."
  },
  {
    id: 9,
    image: image9,
    title: "Enterprise-Grade Cleanups: How IDR Took Over Cabling for Oppenheimer Funds",
    description: "Full infrastructure overhaul with ongoing overnight cutovers and enterprise-grade upgrades Oppenheimer Funds approached IDR..."
  },
  {
    id: 10,
    image: image7,
    title: "Burns Engineering",
    description: "Relationship Scope: Nationwide low voltage partnership across 7+ locations Services: Kisi access control, structured cabling, technical......."
  },
  {
    id: 11,
    image: image8,
    title: "Scaling Security with Fairstead",
    description: "As a national real estate investment firm with a wide range of properties — from landmark Harlem developments to multi-building Florida...."
  },
  {
    id: 12,
    image: image9,
    title: "Peninsula Preparatory Academy",
    description: "Peninsula Preparatory Academy Charter School (PPA) is a K-5 school in Far Rockaway, NY focused on academic excellence and whole......"
  },
  {
    id: 13,
    image: image7,
    title: "Securing Lauderhill Point Apartments – A Resilient Security Overhaul for Fairstead",
    description: "Fairstead is a national real estate developer and operator with a focus on sustainability, safety, and community-driven housing......."
  },
  {
    id: 14,
    image: image8,
    title: "Stopping Break-Ins with Smarter Entry Design",
    description: "Phipps Houses is one of New York City's largest and oldest not-for-profit housing developers, known for providing quality affordable......."
  },
  {
    id: 15,
    image: image9,
    title: "Building a Long-Term Technology Partnership with Advance Local",
    description: "Advance Local is one of the largest media groups in the U.S., with newsrooms and offices across the country. Their Staten Island location..."
  }
];

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[600px] lg:min-h-[731px] flex items-center" 
             style={{backgroundImage: `url("case-study.png")`}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Proven Results. Real Impact.
            </h1>
            <p className="text-lg text-[#B4B4B4] leading-relaxed max-w-2xl">
              Explore how our tailored solutions have transformed businesses across industries.
              <br/>
              Each case study highlights our process, challenges we tackled, and the measurable outcomes we delivered — showing our commitment to precision, partnership, and performance.
            </p>
            <Button className="bg-[#191919] hover:bg-black text-white px-8 py-6 text-base rounded-md">
              Get Start Now
            </Button>
          </div>
          
          {/* Floating Images */}
          <div className="hidden lg:block relative h-96">
            <Image 
              src={floatingimage1}
              alt="Technology 1"
              width={208}
              height={208}
              className="absolute top-20 left-0 w-52 h-52 rounded-2xl object-cover"
            />
            <Image 
              src={floatingimage2}
              alt="Technology 2"
              width={208}
              height={208}
              className="absolute top-36 right-8 w-52 h-52 rounded-2xl object-cover"
            />
            <Image 
              src={floatingimage3}
              alt="Technology 3"
              width={256}
              height={256}
              className="absolute top-0 left-40 w-64 h-64 rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-64">
        <Image 
          src={study.image}
          alt={study.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#111D15] leading-snug line-clamp-2">
            {study.title}
          </h3>
          <p className="text-[#666] leading-relaxed line-clamp-3">
            {study.description}
          </p>
        </div>
        <Button variant="outline" className="border-[#2E2E2E] text-[#2E2E2E] hover:bg-[#2E2E2E] hover:text-white group">
          Read More
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl lg:text-5xl font-medium text-[#111D15] leading-tight">
            Proven Results. Real Impact.
          </h2>
          <p className="text-xl text-[#666] leading-relaxed">
            Each case study highlights our process, challenges we tackled, and the measurable outcomes we delivered — showing our commitment to precision, partnership, and performance.
          </p>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-[#2E2E2E] mb-16"></div>
        
        {/* Case Studies Grid */}
        <div className="space-y-16">
          {/* First 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          
          {/* Second 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(3, 6).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          
          {/* Third 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(6, 9).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          
          {/* Fourth 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(9, 12).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          
          {/* Last 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(12, 15).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <Button 
        size="lg" 
        className="bg-transparent border border-black text-[#2E2E2E] hover:bg-black hover:text-white text-xl px-12 py-6 rounded-full font-medium"
      >
        Contact us now
      </Button>
    </section>
  );
};

export default function Index() {
  return (
    <div className="bg-[#F7F6F2] min-h-screen">
      <HeroSection />
      <CaseStudiesSection />
      <ContactSection />
    </div>
  );
}