/** @format */

import { Palette, Zap, Settings, Headphones } from "lucide-react";

const features = [
  {
    icon: (
      <Palette className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
    ),
    title: "Custom Branding",
    description:
      "Custom-branded touchscreens and enclosures tailored to your property",
  },
  {
    icon: (
      <Zap className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
    ),
    title: "Smart Integration",
    description:
      "Seamless integration with access control, cameras, and building directories",
  },
  {
    icon: (
      <Settings className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
    ),
    title: "Professional Install",
    description: "Structured cabling and professional hardware mounting",
  },
  {
    icon: (
      <Headphones className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
    ),
    title: "Ongoing Support",
    description: "Ongoing support and cloud management included",
  },
];

export default function TeleportivityFeatures() {
  return (
    <section className="bg-white w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 xl:mb-20 2xl:mb-24  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5 xl:mb-6 2xl:mb-7">
            IDR + Teleportivity = The Future of Entry Systems
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light max-w-none sm:max-w-2xl md:max-w-3xl xl:max-w-4xl mx-auto">
            IDR deploys and supports Teleportivity systems across residential,
            commercial, and mixed-use properties, transforming outdated
            intercoms into sleek, cloud-based service hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-10 transition-all duration-300 hover:shadow-lg   group"
            >
              <div
                className={
                  "inline-flex p-2.5 sm:p-3 xl:p-3.5 2xl:p-4 rounded-lg bg-[#052557]  mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8 group-hover:scale-110 transition-transform duration-300"
                }
              >
                {feature.icon}
              </div>
              <h3 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-800 mb-3   2xl:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm  md:text-base lg:text-sm xl:text-base  2xl:text-lg text-gray-600 leading-relaxed font-light flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
