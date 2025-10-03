/** @format */

import React from "react";

const statisticsData = [
  {
    number: "100+",
    description: "Buildings Deployed",
    width: "w-[181px]",
  },
  {
    number: "3",
    description: "States Covered",
    width: "w-[146px]",
  },
  {
    number: "24/7",
    description: "Support Available",
    width: "w-[166px]",
  },
];

export default function LencoreServiceSection() {
  return (
    <section className="flex flex-col bg-gray-50 w-full relative py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-18 xl:mb-18 2xl:mb-20  max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-5xl 2xl:max-w-6xl  mx-auto">
          <h2 className="font-medium text-[#2e2e2e] text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl   text-center leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Serving NY, NJ, and FL — and Beyond
          </h2>

          <p className="font-light text-[#626262] text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-center leading-relaxed px-2 sm:px-0">
            IDR has deployed sound masking systems in over 100 buildings.
            Whether it&apos;s a single suite or a full campus, we make sound
            masking simple and scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-6 relative  rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10   hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Display */}
              <div className="font-bold text-blue-600 text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl  text-center leading-tight group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300">
                {stat.number}
              </div>

              {/* Description */}
              <div className="font-light text-[#626262] text-sm sm:text-base  lg:text-base xl:text-lg 2xl:text-xl  text-center leading-tight group-hover:text-gray-800 transition-colors duration-300">
                {stat.description}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
