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
    icon: <Users className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-blue-600" />,
    title: "System Design",
    description: "Complete system design and permitting services",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Search className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-purple-600" />,
    title: "Legacy Evaluation",
    description: "Thorough assessment of existing systems",
    bgColor: "bg-purple-100",
  },
  {
    icon: <Wrench className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-green-600" />,
    title: "Professional Install",
    description: "Expert installation by certified technicians",
    bgColor: "bg-green-100",
  },
  {
    icon: <Settings className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-orange-600" />,
    title: "Staff Training",
    description: "Directory configuration and team training",
    bgColor: "bg-orange-100",
  },
  {
    icon: <Layers className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-red-600" />,
    title: "System Integration",
    description: "Integration with cameras and access control",
    bgColor: "bg-red-100",
  },
  {
    icon: <Headphones className="w-4 h-4 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-indigo-600" />,
    title: "Ongoing Support",
    description: "Continuous service and technical support",
    bgColor: "bg-indigo-100",
  },
];

export default function AlphaTouchIntegration() {
  return (
    <section className="bg-white  py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-14 2xl:mb-18 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 leading-tight mb-4  md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-7">
            Total Integration, Total Support
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed px-2 sm:px-0 font-light">
            IDR handles everything from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-16">
          {services.map((service) => (
            <div key={service.title} className="text-center group">
              <div
                className={`${service.bgColor} rounded-full w-14 h-14  md:w-20 md:h-20   xl:w-22 xl:h-22 2xl:w-24 2xl:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-3.5 2xl:mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
