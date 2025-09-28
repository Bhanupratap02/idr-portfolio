/** @format */

import {
  Layers,
  Network,
  Settings,
  Music,
  Shield,
  Headphones,
} from "lucide-react";

export default function WhyChooseLencoreSection() {
  const features = [
    {
      icon: Layers,
      title: "Scalable Zoning",
      description:
        "From open offices to private suites — zone sound masking independently for full control.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Network,
      title: "Networked or Standalone",
      description: "Choose from IP-based solutions or traditional systems.",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Settings,
      title: "Superior Tuning",
      description:
        "Our certified techs calibrate each zone to your exact noise curve specs.",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Music,
      title: "Multi-Use Audio",
      description:
        "Integrate paging, background music, and emergency announcements.",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Compliance Support",
      description:
        "HIPAA, GLBA, and other privacy requirements? We've got you covered.",
      iconBgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Headphones,
      title: "Professional Installation",
      description:
        "Expert deployment with comprehensive testing and documentation.",
      iconBgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 bg-white">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 xl:mb-20 2xl:mb-24 max-w-none sm:max-w-2xl md:max-w-3xl xl:max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 mb-3 sm:mb-4 md:mb-5 xl:mb-6 2xl:mb-7">
            Why Choose Lencore with IDR
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light">
            We&apos;ve designed and installed Lencore systems across New York,
            New Jersey, and Florida, including in law firms, clinics, corporate
            offices, and multi-tenant buildings.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10 hover:bg-gray-100 hover:shadow-md transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-2.5 sm:p-3 xl:p-3.5 2xl:p-4 rounded-lg ${feature.iconBgColor} mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent
                    className={`w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 ${feature.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-800 mb-3   2xl:mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm  md:text-base xl:text-lg 2xl:text-2xl text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
