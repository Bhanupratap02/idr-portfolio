/** @format */

import {
  Eye,
  Wrench,
  BookOpen,
  Headphones,
  RotateCcw,
  Clock,
} from "lucide-react";

export default function EndToEndServiceSection() {
  const services = [
    {
      icon: Eye,
      title: "Expert System Design",
      description:
        "Custom-designed intercom solutions tailored to your property's specific needs and infrastructure.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Wrench,
      title: "Certified Installation",
      description:
        "Professional installation and testing by certified technicians with years of experience.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: BookOpen,
      title: "Documentation & Training",
      description:
        "Comprehensive documentation and hands-on training for property management teams.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description:
        "Dedicated support team available for troubleshooting and remote assistance when needed.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: RotateCcw,
      title: "Retrofit Solutions",
      description:
        "Specialized expertise in upgrading existing buildings with minimal disruption to residents.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Clock,
      title: "Preventative Maintenance",
      description:
        "Regular system checks and maintenance to ensure optimal performance and longevity.",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-28 2xl:py-32 3xl:py-40 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 mb-4 sm:mb-5 md:mb-6">
            End-to-End Service from Certified Experts
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl  text-gray-600 leading-relaxed font-light max-w-2xl  2xl:max-w-3xl mx-auto">
            IDR Technology Solutions provides comprehensive support for your MVI
            Systems implementation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-14">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl 2xl:rounded-2xl p-6 sm:p-7 md:p-8 xl:p-10 2xl:p-12 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 sm:p-3.5 md:p-4 rounded-full ${service.iconBgColor} mb-6`}
                >
                  <IconComponent
                    className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-9 xl:h-9 ${service.iconColor}`}
                  />
                </div>
                <h3 className="text-base  sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-800 mb-2 md:mb-3 2xl:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
