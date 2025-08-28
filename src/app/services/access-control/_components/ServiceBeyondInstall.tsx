/** @format */

export default function ServiceBeyondInstall() {
  const serviceSteps = [
    {
      icon: "📋",
      title: "Expert",
      subtitle: "Consulting",
      desc: "Tailored solutions for your needs",
    },
    {
      icon: "🔧",
      title: "Custom",
      subtitle: "Designs",
      desc: "Blueprints for your specific space",
    },
    {
      icon: "👤",
      title: "Project",
      subtitle: "Manager",
      desc: "Dedicated oversight from start to finish",
    },
    {
      icon: "🔨",
      title: "Professional",
      subtitle: "Installation",
      desc: "Expert technicians, quality work",
    },
    {
      icon: "📄",
      title: "Documentation",
      subtitle: "",
      desc: "Complete system records",
    },
    {
      icon: "🎧",
      title: "Training +",
      subtitle: "Support",
      desc: "Ongoing assistance when you need it",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl font-medium mb-10 sm:mb-16">
          Service That Goes Beyond the Install
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          {/* Horizontal timeline for large screens */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#E5E7EB] transform -translate-y-1/2 hidden xl:block"></div>

          {serviceSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md p-6 text-center z-10"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl">
                {step.icon}
              </div>
              <h3 className="text-[#2E2E2E] text-base sm:text-lg font-medium mb-2">
                {step.title}
                {step.subtitle && (
                  <>
                    <br />
                    {step.subtitle}
                  </>
                )}
              </h3>
              <p className="text-[#626262] text-sm sm:text-base">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Certified Badge */}
        <div className="bg-white rounded-lg shadow-md px-4 sm:px-6 py-4 sm:py-6 inline-flex items-center gap-3 sm:gap-4 mt-10 sm:mt-16 max-w-full">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-lg sm:text-xl">
            ⭐
          </div>
          <span className="text-[#2E2E2E] text-sm sm:text-base lg:text-lg font-medium text-left">
            Certified IDR Techs — No Subcontractors
          </span>
        </div>
      </div>
    </section>
  );
}
