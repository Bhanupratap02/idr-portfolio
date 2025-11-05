/** @format */

import { Check } from "lucide-react";
const sipImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Fsip.png";
import Image from "next/image";

const benefits = [
  {
    title: "Building Retrofits",
    description: "Upgrade without major construction work",
  },
  {
    title: "Budget-Conscious Upgrades",
    description: "Maximize ROI with existing infrastructure",
  },
  {
    title: "Occupied Properties",
    description: "Minimal disruption during installation",
  },
];

export default function AlphaTouchSIPRelay() {
  return (
    <section className="bg-blue-50 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1  space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-5  2xl:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl  font-medium text-gray-900 leading-tight px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-6">
              Patented SIP Relay Technology
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl  text-gray-600 leading-relaxed font-light px-2 sm:px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-6">
              Already have a legacy 3-wire or 4-wire system? AlphaTouch&apos;s
              SIP relay modules allow you to keep the cabling, but replace the
              hardware — saving money and disruption.
            </p>

            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6  p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-6  rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl 3xl:rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-md"
                >
                  <div className="bg-green-500 rounded-full w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8  xl:w-9 xl:h-9 2xl:w-10.5 2xl:h-10.5 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-2 h-2  md:w-4 md:h-4  xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5  text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  mb-1  2xl:mb-1.5  group-hover:text-green-700 transition-colors duration-300">
                      {benefit.title}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm xl:text-lg 2xl:text-xl  leading-relaxed group-hover:text-gray-700 transition-colors duration-300 font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl overflow-hidden">
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={sipImg}
                  alt="AlphaTouch SIP Relay Technology - Professional intercom system"
                  fill
                  className="object-fill"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
