/** @format */

import {
  Smartphone,
  Monitor,
  Cloud,
  Settings,
  Zap,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Modern Touchscreen Panels",
    description:
      "Video calling & directories with intuitive touchscreen interface",
    bgColor: "bg-blue-600",
    hoverColor: "group-hover:bg-blue-700",
  },
  {
    icon: Smartphone,
    title: "Resident Mobile App",
    description:
      "Answer calls, unlock doors, and review activity from anywhere",
    bgColor: "bg-purple-600",
    hoverColor: "group-hover:bg-purple-700",
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description: "Complete control portal for property management teams",
    bgColor: "bg-green-600",
    hoverColor: "group-hover:bg-green-700",
  },
  {
    icon: Settings,
    title: "SIP Trunk Relays",
    description: "Works with existing 3-wire or 4-wire intercom cabling",
    bgColor: "bg-orange-600",
    hoverColor: "group-hover:bg-orange-700",
  },
  {
    icon: Zap,
    title: "Fast Retrofit",
    description: "No need to open walls or rewire the building",
    bgColor: "bg-red-600",
    hoverColor: "group-hover:bg-red-700",
  },
  {
    icon: Shield,
    title: "Secure Communication",
    description: "Reliable, encrypted SIP communication protocols",
    bgColor: "bg-indigo-600",
    hoverColor: "group-hover:bg-indigo-700",
  },
];

export default function AlphaTouchFeatures() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-14 2xl:mb-18  max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-900 leading-tight mb-4  md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-7 ">
            Why AlphaTouch with IDR
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl  text-gray-600 leading-relaxed px-2 sm:px-0 font-light">
            We&apos;ve successfully deployed AlphaTouch systems in dozens of
            retrofits and new developments across NY, NJ, and FL
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-16">
          {features.map((feature, index) => {
              const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 2xl:p-10  h-full flex flex-col"
              >
                {/* Icon Container */}
                <div
                  className={`${feature.bgColor} ${feature.hoverColor} rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl  w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20  flex items-center justify-center mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-6 2xl:mb-8  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-9 2xl:h-9  text-white" />
                </div>
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl  font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 2xl:mb-5 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            );})}
        </div>
      </div>
    </section>
  );
}
