/** @format */

import {
  Users,
  Search,
  Wrench,
  Settings,
  Layers,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "System Design",
    description: "Complete system design and permitting services",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Search className="w-6 h-6 text-purple-600" />,
    title: "Legacy Evaluation",
    description: "Thorough assessment of existing systems",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Wrench className="w-6 h-6 text-green-600" />,
    title: "Professional Install",
    description: "Expert installation by certified technicians",
    bgColor: "bg-green-100",
  },
  {
    icon: <Settings className="w-6 h-6 text-orange-600" />,
    title: "Staff Training",
    description: "Directory configuration and team training",
    bgColor: "bg-orange-100",
  },
  {
    icon: <Layers className="w-6 h-6 text-red-600" />,
    title: "System Integration",
    description: "Integration with cameras and access control",
    bgColor: "bg-red-100",
  },
  {
    icon: <Headphones className="w-6 h-6 text-indigo-600" />,
    title: "Ongoing Support",
    description: "Continuous service and technical support",
    bgColor: "bg-indigo-100",
  },
];

export default function AlphaTouchIntegration() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
            Total Integration, Total Support
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            IDR handles everything from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="text-center group">
              <div
                className={`${service.bgColor} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
