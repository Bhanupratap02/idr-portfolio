import { ArrowUpRight } from "lucide-react";

export default function RelatedCaseStudies() {
  const caseStudies = [
    {
      title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
      description: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and......."
    },
    {
      title: "Modern Meets Legacy: How IDR Unified Cloud and 4....",
      description: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn. They wanted to modernize their building......."
    },
    {
      title: "No Reader, No Problem: Elevator Access Solved with....",
      description: "Robinhood Foundation was looking to secure elevator access in their NYC office — but faced a unique constraint. The building's elevator policy...."
    },
    {
      title: "One System, Many Doors: How IDR Unified Intercom.....",
      description: "Douglas Elliman approached IDR to design an intercom system that could handle a complex mix of access points..."
    },
    {
      title: "When Technology Moved Forward, So Did We: A Phased .....",
      description: "IDR had originally installed a cost-effective wireless solution for Central Queens Academy using Cisco Wireless N/AC access points, with......"
    },
    {
      title: "Upway Upgrading Loitering Deterrence with a Custom.....",
      description: "Upway installed a Rhombus camera system with security monitoring to keep their outdoor areas secure. But they ran into a snag....."
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 mb-16">
          <div className="bg-design-navy flex items-center justify-center min-h-[78px] px-8 py-4">
            <h2 className="font-zilla text-white text-4xl lg:text-5xl font-semibold text-center">
              Explore More Case Study
            </h2>
          </div>
          <p className="text-design-text-gray text-xl lg:text-2xl leading-relaxed flex-1">
            We analyzed user behavior, reviewed existing workflows, and conducted stakeholder interviews 
            to uncover the root challenges impacting the user experience.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="relative border border-design-text-dark rounded-[36px] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="space-y-7">
                <div className="space-y-4">
                  <h3 className="text-design-text-dark text-2xl lg:text-3xl font-semibold leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-design-text-gray text-xl lg:text-2xl leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="flex items-center space-x-5 cursor-pointer group">
                  <div className="w-14 h-14 bg-design-navy rounded-full flex items-center justify-center group-hover:bg-design-navy/90 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-design-text-dark text-2xl lg:text-3xl font-medium group-hover:text-design-navy transition-colors">
                    Read Case Study
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Vertical lines */}
            <div className="absolute left-1/3 top-8 bottom-8 w-px bg-design-text-dark hidden lg:block"></div>
            <div className="absolute left-2/3 top-8 bottom-8 w-px bg-design-text-dark hidden lg:block"></div>
            {/* Horizontal line */}
            <div className="absolute left-12 right-12 top-1/2 h-px bg-design-text-dark hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
