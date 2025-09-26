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
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-medium text-gray-800 mb-6">
            End-to-End Service from Certified Experts
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            IDR Technology Solutions provides comprehensive support for your MVI
            Systems implementation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full ${service.iconBgColor} mb-6`}
                >
                  <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
