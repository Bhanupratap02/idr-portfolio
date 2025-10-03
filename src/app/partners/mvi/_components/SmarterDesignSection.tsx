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
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-28 2xl:py-32 3xl:py-40 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 mb-4 sm:mb-5 md:mb-6">
            Smarter Design. Seamless Rollouts.
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-600 leading-relaxed font-light max-w-2xl  2xl:max-w-3xl mx-auto">
            Partner with IDR to implement MVI&apos;s advanced intercom solutions
            with expert installation and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-14">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl 2xl:rounded-2xl p-6 sm:p-7 md:p-8 xl:p-10 2xl:p-12 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 sm:p-3.5 md:p-4 rounded-full ${feature.iconBgColor} mb-6`}
                >
                  <IconComponent
                    className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-9 xl:h-9 ${feature.iconColor}`}
                  />
                </div>
                <h3 className="text-base  sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-800 mb-2 md:mb-3 2xl:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-light">
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
