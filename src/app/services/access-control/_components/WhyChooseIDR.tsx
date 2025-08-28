/** @format */

export default function WhyChooseIDR() {
  const features = [
    {
      icon: "☁️",
      title: "Cloud + On-Prem Support",
      desc: "Flexible deployment options to fit your infrastructure",
    },
    {
      icon: "⭐",
      title: "Certified Techs",
      desc: "Factory-trained experts who know their systems",
    },
    {
      icon: "📋",
      title: "Full Documentation",
      desc: "Complete records of your installation",
    },
    {
      icon: "🏢",
      title: "Multi-Tenant Ready",
      desc: "Solutions designed for complex properties",
    },
    {
      icon: "📞",
      title: "In-House Support",
      desc: "Direct access to our expert team",
    },
    {
      icon: "📊",
      title: "Portal Access for All",
      desc: "Transparent system management",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl font-medium mb-10 sm:mb-14 lg:mb-16">
          Why Teams Choose IDR
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md sm:shadow-lg p-6 sm:p-8 text-center"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFD700] rounded flex items-center justify-center text-lg sm:text-xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-lg sm:text-xl font-medium mb-2 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-[#626262] text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="bg-white rounded-lg shadow-md sm:shadow-lg px-4 sm:px-6 py-4 sm:py-6 inline-flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FFD700] rounded flex items-center justify-center text-lg">
            🛡️
          </div>
          <span className="text-[#2E2E2E] text-base sm:text-lg lg:text-xl font-medium">
            Trusted by 500+ Properties
          </span>
        </div>
      </div>
    </section>
  );
}
