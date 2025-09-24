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
    <section className="flex flex-col bg-gray-50 w-full relative py-12 sm:py-16 lg:py-[71.6px] px-4 sm:px-6 lg:px-8">
      <h2 className="max-w-4xl mx-auto [font-family:'Inter',Helvetica] font-medium text-[#2e2e2e] text-2xl sm:text-3xl lg:text-4xl text-center tracking-[0] leading-tight lg:leading-10">
        Serving NY, NJ, and FL — and Beyond
      </h2>

      <p className="max-w-4xl mx-auto mt-4 sm:mt-6 lg:mt-[19.4px] [font-family:'Inter',Helvetica] font-normal text-[#626262] text-lg sm:text-xl text-center tracking-[0] leading-relaxed lg:leading-[30px]">
        IDR has deployed sound masking systems in over 100 buildings. Whether
        it&apos;s a single suite or a full campus, we make sound masking simple
        and scalable.
      </p>

      <div className="flex flex-col sm:flex-row max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-[59px] items-center justify-center gap-8 sm:gap-12 lg:gap-[179px]">
        {statisticsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 sm:gap-3 relative min-w-0 flex-1"
          >
            <div className="[font-family:'Inter',Helvetica] font-semibold text-blue-600 text-3xl sm:text-4xl text-center tracking-[0] leading-[normal]">
              {stat.number}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-normal text-[#626262] text-base sm:text-lg lg:text-xl text-center tracking-[0] leading-tight lg:leading-6">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
