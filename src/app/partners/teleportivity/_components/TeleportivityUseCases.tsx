/** @format */

import {
  Building,
  Building2,
  Shield,
  GraduationCap,
  Heart,
  Clock,
} from "lucide-react";

const useCases = [
  {
    icon: (
      <Building className="w-4 h-4 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
    ),
    title: "Residential Lobbies",
  },
  {
    icon: (
      <Building2 className="w-4 h-4 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
    ),
    title: "Commercial Front Desks",
  },
  {
    icon: (
      <Shield className="w-4 h-4 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
    ),
    title: "Gated Communities",
  },
  {
    icon: (
      <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
    ),
    title: "Higher Ed & Campuses",
  },
  {
    icon: (
      <Heart className="w-4 h-4 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
    ),
    title: "Medical Offices",
  },
  {
    icon: (
      <Clock className="w-4 h-4 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-white" />
    ),
    title: "After-Hours Operations",
  },
];

const standoutFeatures = [
  {
    title: "Multi-Tenant Entry Points",
    description:
      "Visitors can call residents, building staff, or help lines from the same screen",
  },
  {
    title: "Remote Monitoring Hubs",
    description:
      "Manage visitor access across multiple properties from one central team",
  },
  {
    title: "QR Code Intercom",
    description: "No apps, no downloads — just scan and connect",
  },
  {
    title: "Hybrid Video Concierge",
    description: "Combine live staff with automated responses and scheduling",
  },
];

export default function TeleportivityUseCases() {
  return (
    <section className="bg-white w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 xl:mb-20 2xl:mb-24  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800">
            Perfect For
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12 mb-4 sm:mb-6 md:mb-7 xl:mb-10 2xl:mb-12">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="text-center group">
              <div
                className={
                  "inline-flex p-5 sm:p-8 xl:p-9 2xl:p-11 rounded-full bg-[#052557]  mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8 group-hover:scale-110 transition-transform duration-300"
                }
              >
                {useCase.icon}
              </div>
              <h3 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-800">
                {useCase.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Standout Use Cases */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-14 xl:p-18 2xl:p-24">
          <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl  font-semibold text-gray-900 mb-5 md:mb-8 xl:mb-10 2xl:mb-12">
            Standout Use Cases
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12">
            {standoutFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-3 md:gap-4 2xl:gap-5">
                <div className="bg-[#052557] rounded-full w-4 h-4 md:w-8 md:h-8 2xl:w-9 2xl:h-9 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-1 h-1 md:w-2 md:h-2 2xl:w-3 2xl:h-3 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-2 md:mb-3   2xl:mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed text-base  md:text-lg xl:text-xl 2xl:text-2xl ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
