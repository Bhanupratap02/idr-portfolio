import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
    description: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and.......",
    link: "#"
  },
  {
    title: "Modern Meets Legacy: How IDR Unified Cloud and 4....",
    description: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn. They wanted to modernize their building.......",
    link: "#"
  },
  {
    title: "No Reader, No Problem: Elevator Access Solved with....",
    description: "Robinhood Foundation was looking to secure elevator access in their NYC office — but faced a unique constraint. The building's elevator policy....",
    link: "#"
  },
  {
    title: "One System, Many Doors: How IDR Unified Intercom.....",
    description: "Douglas Elliman approached IDR to design an intercom system that could handle a complex mix of access points...",
    link: "#"
  },
  {
    title: "When Technology Moved Forward, So Did We: A Phased .....",
    description: "IDR had originally installed a cost-effective wireless solution for Central Queens Academy using Cisco Wireless N/AC access points, with......",
    link: "#"
  },
  {
    title: "Upway Upgrading Loitering Deterrence with a Custom.....",
    description: "Upway installed a Rhombus camera system with security monitoring to keep their outdoor areas secure. But they ran into a snag.....",
    link: "#"
  }
];

export default function CaseStudyCards() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid container with border */}
        <div className="relative border border-gray-text rounded-3xl overflow-hidden">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`p-8 lg:p-10 flex flex-col justify-between min-h-[400px] ${
                  // Add borders between cards
                  index < 3 ? 'border-b border-gray-text' : ''
                } ${
                  // Add vertical borders
                  (index % 3 !== 2 && index < 6) ? 'lg:border-r border-gray-text' : ''
                } ${
                  (index % 2 !== 1 && index < 4) ? 'md:border-r lg:border-r-0 border-gray-text' : ''
                } ${
                  (index % 3 === 1) ? 'lg:border-r border-gray-text' : ''
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-gray-text font-inter text-2xl lg:text-3xl font-semibold leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-medium font-inter text-lg lg:text-xl leading-relaxed">
                    {study.description}
                  </p>
                </div>
                
                <div className="pt-6">
                  <a 
                    href={study.link}
                    className="inline-flex items-center space-x-5 group hover:opacity-80 transition-opacity"
                  >
                    <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-text font-inter text-2xl lg:text-3xl">
                      Read Case Study
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Internal grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Vertical lines for desktop */}
            <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-text"></div>
            <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-text"></div>
            
            {/* Vertical line for tablet */}
            <div className="md:block lg:hidden absolute left-1/2 top-0 bottom-1/2 w-px bg-gray-text"></div>
            
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-text"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
