/** @format */

import {
  Puzzle,
  Network,
  Palette,
  Maximize,
  Cloud,
  Shield,
} from "lucide-react";

export default function SmarterDesignSection() {
  const features = [
    {
      icon: Puzzle,
      title: "Modular Design",
      description:
        "Flexible configurations that fit small to large deployments, allowing you to scale as needed.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Network,
      title: "Open Architecture",
      description:
        "Seamlessly integrates with access control, video surveillance, and building management systems.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description:
        "Display property logos and custom welcome screens on tenant interfaces for a personalized experience.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Maximize,
      title: "Scalable",
      description:
        "Connect 100+ stations across multiple buildings with centralized management and monitoring.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Cloud,
      title: "Remote Management",
      description:
        "Manage your entire intercom system from anywhere using intuitive web-based tools.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced encryption and authentication protocols ensure your building access remains secure.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-800 mb-6">
            Smarter Design. Seamless Rollouts.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Partner with IDR to implement MVI&apos;s advanced intercom solutions with
            expert installation and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full ${feature.iconBgColor} mb-6`}
                >
                  <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {feature.title}
                </h3>
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
