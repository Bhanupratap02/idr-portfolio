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
    <section className="bg-[#F9FAFB] px-4 lg:px-28 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#2E2E2E] text-4xl font-medium mb-16">
          Service That Goes Beyond the Install
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#E5E7EB] transform -translate-y-1/2 hidden lg:block"></div>

          {/* Service Steps */}
          {serviceSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg p-6 text-center z-10"
            >
              <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                {step.icon}
              </div>
              <h3 className="text-[#2E2E2E] text-lg font-medium mb-2">
                {step.title}
                {step.subtitle && (
                  <>
                    <br />
                    {step.subtitle}
                  </>
                )}
              </h3>
              <p className="text-[#626262] text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Certified Badge */}
        <div className="bg-white rounded-lg shadow-lg p-6 inline-flex items-center gap-4 mt-16">
          <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
            ⭐
          </div>
          <span className="text-[#2E2E2E] text-lg font-medium">
            Certified IDR Techs — No Subcontractors
          </span>
        </div>
      </div>
    </section>
  );
}
