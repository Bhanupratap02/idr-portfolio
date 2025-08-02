/** @format */
// og
import Image from "next/image";
import caseStudy1 from "@/assets/case_study_1.png";
import caseStudy2 from "@/assets/case_study_2.png";
import caseStudy3 from "@/assets/case_study_3.png";
const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "How IDR Eliminated Unauthorized Building Access for Fairstead.",
      desc: "Fairstead, a leading national property management firm, partnered with IDR to address a widespread security concern across.......",
      image: caseStudy1,
    },
    {
      id: 2,
      title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
      desc: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and Florida..",
      image: caseStudy2,
    },
    {
      id: 3,
      title:
        "Modern Meets Legacy: How IDR Unified Cloud and 4-Wire Intercoms at The........",
      desc: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn......",
      image: caseStudy3,
    },
    // {
    //   id: 4,
    //   title:
    //     "No Reader, No Problem: Elevator Access Solved with Kisi Mobile Control",
    //   desc: "Robinhood Foundation was looking to secure elevator access in their NYC office — but faced a unique constraint......",
    //   image: caseStudy1,
    // },
    // {
    //   id: 5,
    //   title:
    //     "One System, Many Doors: How IDR Unified Intercom Access for Douglas Elliman",
    //   desc: "Douglas Elliman approached IDR to design an intercom system that could handle a complex mix of access points.......",
    //   image: caseStudy2,
    // },
    // {
    //   id: 6,
    //   title: "When Technology Moved Forward, So Did We: A Phased Wi-Fi Upgrade",
    //   desc: "IDR had originally installed a cost-effective wireless solution for Central Queens Academy using Cisco Wireless N/AC access points, with....",
    //   image: caseStudy3,
    // },
    // {
    //   id: 7,
    //   title:
    //     "Upway Upgrading Loitering Deterrence with a Custom Outdoor Annunciator",
    //   desc: "Upway installed a Rhombus camera system with security monitoring to keep their outdoor areas secure. But they ran into a snag........",
    //   image: caseStudy1,
    // },
    // {
    //   id: 8,
    //   title:
    //     "A Smarter Training Room: Custom Teams Integration for MTF Biologics",
    //   desc: "Create a seamless Microsoft Teams-based hybrid training room with distributed AV, zone-based audio, and advanced control — all.....",
    //   image: caseStudy2,
    // },
    // {
    //   id: 9,
    //   title:
    //     "Enterprise-Grade Cleanups: How IDR Took Over Cabling for Oppenheimer Funds",
    //   desc: "Full infrastructure overhaul with ongoing overnight cutovers and enterprise-grade upgrades Oppenheimer Funds approached IDR...",
    //   image: caseStudy3,
    // },
    // {
    //   id: 10,
    //   title: "Burns Engineering",
    //   desc: "Relationship Scope: Nationwide low voltage partnership across 7+ locations Services: Kisi access control, structured cabling, technical.......",
    //   image: caseStudy1,
    // },
    // {
    //   id: 11,
    //   title: "Scaling Security with Fairstead",
    //   desc: "As a national real estate investment firm with a wide range of properties — from landmark Harlem developments to multi-building Florida....",
    //   image: caseStudy2,
    // },
    // {
    //   id: 12,
    //   title: "Peninsula Preparatory Academy",
    //   desc: "Peninsula Preparatory Academy Charter School (PPA) is a K-5 school in Far Rockaway, NY focused on academic excellence and whole......",
    //   image: caseStudy3,
    // },
    // {
    //   id: 13,
    //   title:
    //     "Securing Lauderhill Point Apartments – A Resilient Security Overhaul for Fairstead",
    //   desc: "Fairstead is a national real estate developer and operator with a focus on sustainability, safety, and community-driven housing.......",
    //   image: caseStudy1,
    // },

  ];

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[100rem] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl 3xl:text-7xl font-medium text-[#3D3D3D] text-center mb-12">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 3xl:gap-12 mb-10">
          {caseStudies.map((item, idx) => (
            <div key={idx}>
              <div className="group">
                <div className="relative rounded-3xl overflow-hidden h-64 mb-4">
                  <Image
                    src={item.image}
                    alt={`Case Study ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    quality={100}
                    className="object-fill group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> */}
                </div>
                <h3 className="text-lg font-semibold text-[#111D15] mb-4 leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-base text-[#666] mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <button className="group flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#2E2E2E] hover:text-white transition-colors">
                <span
                  className="text-[#2E2E2E] 
                group-hover:text-white
                "
                >
                  Read More
                </span>
                <svg
                  className="w-5 h-5 text-[#2E2E2E] group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center space-x-2">
          <div className="w-8 h-2 bg-[#3D5AF1] rounded-full"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#E1E1E1] rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
