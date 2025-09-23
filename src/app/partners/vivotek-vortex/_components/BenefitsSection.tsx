/** @format */

import {
  Shield,
  HelpCircle,
  Brain,
  Settings,
  Wrench,
  Puzzle,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Gold Partner Status",
      description: "Extended 5-year warranty for on-prem systems",
      color: "text-[#FACC15]",
    },
    {
      icon: HelpCircle,
      title: "Extended Cloud Warranty",
      description: "10-year warranty for Vortex cloud deployments",
      color: "text-[#60A5FA]",
    },
    {
      icon: Brain,
      title: "AI-driven Analytics",
      description: "Real-time detection and intelligent monitoring",
      color: "text-[#C084FC]",
    },
    {
      icon: Settings,
      title: "Flexible System Design",
      description: "Tailored based on your specific requirements",
      color: "text-[#4ADE80]",
    },
    {
      icon: Wrench,
      title: "End-to-end Installs",
      description: "From cabling to cloud migration",
      color: "text-[#FB923C]",
    },
    {
      icon: Puzzle,
      title: "Smart Integrations",
      description: "Connect with access control and alarm systems",
      color: "text-[#F87171]",
    },
  ];

  return (
    <section className="bg-[#111827] py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24  2xl:py-28 3xl:py-32">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16  xl:mb-18 2xl:mb-22 3xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white leadingtight">
            Why Choose Vivotek / Vortex with IDR?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  lg:gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#1F2937] hover:bg-[#263041] transition-all duration-300 rounded-xl p-4 md:p-6 2xl:p-8 3xl:p-10 text-center hover:shadow-lg hover:scale-[1.02] hover:border-[#1F2937] border border-transparent "
              >
                <div className="flex justify-center mb-2 lg:mb-3 2xl:mb-4">
                  <IconComponent
                    className={`w-6 h-6 md:w-9 md:h-9 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 ${benefit.color}`}
                  />
                </div>
                <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl  text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl  text-[#D1D5DB] leading-normal font-light">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
