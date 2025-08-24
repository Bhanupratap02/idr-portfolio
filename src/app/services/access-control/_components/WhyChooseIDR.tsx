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
    <section className="bg-[#F9FAFB] px-4 lg:px-28 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#2E2E2E] text-4xl font-medium mb-16">
          Why Teams Choose IDR
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-center mb-4">
                <div className="w-8 h-8 bg-[#FFD700] rounded flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-xl font-medium mb-4">
                {feature.title}
              </h3>
              <p className="text-[#626262] text-base">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="bg-white rounded-lg shadow-lg p-6 inline-flex items-center gap-4">
          <div className="w-9 h-8 bg-[#FFD700] rounded flex items-center justify-center">
            🛡️
          </div>
          <span className="text-[#2E2E2E] text-lg font-medium">
            Trusted by 500+ Properties
          </span>
        </div>
      </div>
    </section>
  );
}
