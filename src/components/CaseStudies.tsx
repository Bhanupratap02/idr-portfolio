/** @format */

import Image from "next/image";
import caseStudy1 from "@/assets/case_study_1.png";
import caseStudy2 from "@/assets/case_study_2.png";
import caseStudy3 from "@/assets/case_study_3.png";
const CaseStudies = () => {
  const caseStudies = [
    {
      title: "How IDR Eliminated Unauthorized Building Access for Fairstead.",
      desc: "Fairstead, a leading national property management firm, partnered with IDR to address a widespread security concern across.......",
      image: caseStudy1,
    },
    {
      title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
      desc: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and Florida..",
      image: caseStudy2,
    },
    {
      title:
        "Modern Meets Legacy: How IDR Unified Cloud and 4-Wire Intercoms at The........",
      desc: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn......",
      image: caseStudy3,
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-[#3D3D3D] text-center mb-12">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {caseStudies.map((item, idx) => (
            <div className="" key={idx}>
              <div className="relative rounded-3xl overflow-hidden h-64 mb-4">
                <Image
                  src={item.image}
                  alt={`Case Study ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={100}                  
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#111D15] mb-4 leading-relaxed">
                {item.title}
              </h3>
              <p className="text-base text-[#666] mb-6 leading-relaxed">
                {item.desc}
              </p>
              <button className="group flex items-center space-x-2 px-5 py-3 border border-[#2E2E2E] rounded-md hover:bg-[#2E2E2E] hover:text-white transition-colors">
                <span className="text-[#2E2E2E] 
                group-hover:text-white
                ">
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
