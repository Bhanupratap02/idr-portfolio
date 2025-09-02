/** @format */
import expert from "@/assets/services/access-control/icons/expert.png";
import designs from "@/assets/services/access-control/icons/designs.png";
import manager from "@/assets/services/access-control/icons/manager.png";
import technicians from "@/assets/services/access-control/icons/technicians.png";
import docs from "@/assets/services/access-control/icons/docs.png";
import assistance from "@/assets/services/access-control/icons/assistance.png";
import certified from "@/assets/services/access-control/icons/certified.png";
import Image from "next/image";
export default function ServiceBeyondInstall() {
  const serviceSteps = [
    {
      icon: expert,
      title: "Expert",
      subtitle: "Consulting",
      desc: "Tailored solutions for your needs",
    },
    {
      icon: designs,
      title: "Custom",
      subtitle: "Designs",
      desc: "Blueprints for your specific space",
    },
    {
      icon: manager,
      title: "Project",
      subtitle: "Manager",
      desc: "Dedicated oversight from start to finish",
    },
    {
      icon: technicians,
      title: "Professional",
      subtitle: "Installation",
      desc: "Expert technicians, quality work",
    },
    {
      icon: docs,
      title: "Documentation",
      subtitle: "",
      desc: "Complete system records",
    },
    {
      icon: assistance,
      title: "Training +",
      subtitle: "Support",
      desc: "Ongoing assistance when you need it",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto text-center">
        {/* Title */}
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-medium mb-10 sm:mb-16">
          Service That Goes Beyond the Install
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 2xl:gap-10 3xl:gap-12 relative">
          {/* Horizontal timeline for large screens */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#E5E7EB] transform -translate-y-1/2 hidden xl:block"></div>

          {serviceSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6 text-center z-10"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 2xl:w-16 2xl:h-16 3xl:w-20 3xl:h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl">
                {/* {step.icon} */}
                <Image
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#2E2E2E]  text-base sm:text-lg 2xl:text-xl 3xl:text-2xl font-medium mb-2">
                {step.title}
                {step.subtitle && (
                  <>
                    <br />
                    {step.subtitle}
                  </>
                )}
              </h3>
              <p className="text-[#626262] text-sm sm:text-base 2xl:text-lg">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certified Badge */}
        <div className="bg-white rounded-lg shadow-md px-4 sm:px-6 py-4 sm:py-6 inline-flex items-center gap-3 sm:gap-4 mt-10 sm:mt-16 2xl:mt-20 3xl:mt-24 max-w-full">
          <Image
            src={certified}
            alt="Certified IDR Techs"
            className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12"
          />
          <span className="text-[#2E2E2E] text-sm sm:text-base lg:text-lg 2xl:text-xl font-medium text-left">
            Certified IDR Techs — No Subcontractors
          </span>
        </div>
      </div>
    </section>
  );
}
