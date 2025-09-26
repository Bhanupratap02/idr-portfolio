/** @format */

import { Users, CheckCircle, Building } from "lucide-react";
import CoverageImg from "@/assets/partners/vicon/coverage.png";
import Image from "next/image";

const partnerFeatures = [
  {
    icon: Users,
    title: "Certified Partners",
    description:
      "All partners are trained and certified on Vicon + VAX systems",
  },
  {
    icon: CheckCircle,
    title: "Consistent Standards",
    description: "Uniform installation practices and quality control",
  },
  {
    icon: Building,
    title: "Enterprise Support",
    description:
      "Ideal for multi-location businesses requiring unified security",
  },
];

export default function CoverageSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 bg-white">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-17 max-w-xs sm:max-w-2xl md:max-w-4xl  xl:max-w-5xl 2xl:max-w-6xl  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Service Coverage & Partner Network
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-600 leading-relaxed px-2 sm:px-0 font-light">
            Direct service in key regions with nationwide support through our
            certified partner network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-22 2xl:gap-24 items-stretch">
          {/* Map Section */}

          <div className="relative  rounded-xl overflow-hidden  ">
            <Image
              src={CoverageImg}
              alt="United States Network Coverage Map"
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Partner Network Info */}
          <div className="space-y-6 h-full flex flex-col justify-center">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-gray-900 mb-3">
                Nationwide Partner Network
              </h3>
              <p className="text-gray-600 font-light text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed mb-6">
                Beyond our direct service areas, IDR&apos;s certified partner
                network ensures consistent quality and support for
                multi-location deployments across the United States.
              </p>
            </div>

            <div className="space-y-4">
              {partnerFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-50 p-2 rounded-full flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#006CCA]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base md:text-lg 2xl:text-xl">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg 2xl:text-xl text-gray-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4 ">
              <p className="text-[#006cca]  mb-3 text-sm sm:text-base md:text-lg 2xl:text-xl font-light">
                Contact us about multi-location deployments
              </p>
              <button className="bg-[#006cca] text-white px-4 py-2 md:px-6 md:py-3 text-sm  md:text-base 2xl:text-lg rounded-md font-light hover:bg-[#0056a3] transition-colors duration-200">
                Contact
              </button>
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
