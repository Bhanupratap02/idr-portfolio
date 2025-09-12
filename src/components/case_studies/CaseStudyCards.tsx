import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  title: string;
  description: string;
  link: string;
}

interface CaseStudyCardsProps {
  cards?: CaseStudy[];
}

export default function CaseStudyCards({ cards }: CaseStudyCardsProps) {
  // Default case studies if none provided
  const caseStudies: CaseStudy[] = cards || [
    {
      title: "Fixing It Right: IDR Rebuilds Two Failed Surveillance Installs",
      description: "Fairstead reached out to IDR after experiencing persistent issues with surveillance systems at two residential properties in Virginia and.......",
      link: "/case-studies/fixing-failed-installs"
    },
    {
      title: "Modern Meets Legacy: How IDR Unified Cloud and 4....",
      description: "Fairstead approached IDR with a unique challenge at their Chocolate Factory property in Brooklyn. They wanted to modernize their building.......",
      link: "/case-studies/cloud-4-wire-intercoms"
    },
    {
      title: "No Reader, No Problem: Elevator Access Solved with....",
      description: "Robinhood Foundation was looking to secure elevator access in their NYC office — but faced a unique constraint. The building's elevator policy....",
      link: "/case-studies/kisi-elevator-access"
    },
    {
      title: "One System, Many Doors: How IDR Unified Intercom.....",
      description: "Douglas Elliman approached IDR to design an intercom system that could handle a complex mix of access points...",
      link: "/case-studies/unified-intercom-access"
    },
    {
      title: "When Technology Moved Forward, So Did We: A Phased .....",
      description: "IDR had originally installed a cost-effective wireless solution for Central Queens Academy using Cisco Wireless N/AC access points, with......",
      link: "/case-studies/phased-wifi-upgrade"
    },
    {
      title: "Upway Upgrading Loitering Deterrence with a Custom.....",
      description: "Upway installed a Rhombus camera system with security monitoring to keep their outdoor areas secure. But they ran into a snag.....",
      link: "/case-studies/custom-audio-deterrent"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <h2 className="text-4xl font-bold bg-primary text-white mt-5 p-4 lg:mb-0 lg:flex-shrink-0">
            Explore More Case Studies
          </h2>
          <p className="text-lg text-gray-600 lg:max-w-xl lg:pt-2">
            We analyzed user behavior, reviewed existing workflows, and conducted stakeholder interviews to uncover the root challenges impacting the user experience.
          </p>
        </div>

        {/* Grid container with border */}
        <div className="border-2 border-gray-900 rounded-2xl overflow-hidden bg-white">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 divide-gray-900">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className={`relative p-8 flex flex-col justify-between min-h-[320px] ${
                  // Add right borders for grid layout
                  index < 3 && (index + 1) % 3 !== 0 ? 'lg:border-r border-gray-900' : ''
                } ${
                  // Add right border for tablet layout (2 columns)
                  index < 4 && (index + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0 border-gray-900' : ''
                } ${
                  // Add bottom border for top row
                  index < 3 ? 'lg:border-b border-gray-900' : ''
                }`}
              >
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>
                
                {/* CTA Button */}
                <div className="pt-6">
                  <a 
                    href={study.link}
                    className="inline-flex items-center space-x-3 group hover:opacity-80 transition-opacity duration-200"
                  >
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium text-lg">
                      Read Case Study
                    </span>
                  </a>
                </div>

                {/* Grid lines - visual separators */}
                {index < 3 && (
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gray-900 lg:hidden"></div>
                )}
                {/* Vertical lines for desktop - columns 1 and 2 in both rows */}
                {((index + 1) % 3 !== 0) && (
                  <div className="absolute right-0 top-8 bottom-8 w-px bg-gray-900 hidden lg:block"></div>
                )}
                {/* Vertical lines for tablet - left column in each row */}
                {((index + 1) % 2 !== 0) && (
                  <div className="absolute right-0 top-8 bottom-8 w-px bg-gray-900 md:block lg:hidden"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Main horizontal divider between rows */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-900 transform -translate-y-px hidden lg:block pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}