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
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-7">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-800 mb-5">
            Why Choose Lencore with IDR
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We&apos;ve designed and installed Lencore systems across New York,
            New Jersey, and Florida, including in law firms, clinics, corporate
            offices, and multi-tenant buildings.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-lg ${feature.iconBgColor} mb-6`}
                >
                  <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
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
