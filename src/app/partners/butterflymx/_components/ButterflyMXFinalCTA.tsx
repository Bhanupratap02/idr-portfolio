/** @format */

import Link from "next/link";

export function ButterflyMXFinalCTA() {
  return (
    <section className="bg-gradient-to-r from-[#2563eb] to-[#9333ea] w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32">
      <div className="mx-auto max-w-[1600px] flex flex-col items-center text-center">
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl font-semibold sm:font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10">
          Let&apos;s Upgrade Your Entry System
        </h2>

        {/* Subtext */}
        <p className="max-w-[850px] text-base sm:text-lg md:text-xl l xl:text-2xl 2xl:text-3xl text-blue-100 font-light leading-relaxed sm:leading-normal mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 ">
          We&apos;ll design, install, and support a modern, app-powered intercom
          system that residents and property managers love.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          {/* Primary CTA */}
          <Link href={"/contact"}>
            <button className="flex items-center justify-center h-12 sm:h-14 md:h-16 lg:h-16 xl:h-18 2xl:h-20 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 rounded-full bg-white text-blue-700 text-sm sm:text-base md:text-lg 2xl:text-xl  font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              Talk to an Access Control Specialist
            </button>
          </Link>

          {/* Secondary CTA */}
          <Link href={"/contact"}>
            <button className="flex items-center justify-center h-12 sm:h-14 md:h-16 lg:h-16 xl:h-18 2xl:h-20 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 rounded-full border-2 border-white text-white text-sm sm:text-base md:text-lg 2xl:text-xl  font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer">
              Get a Custom Design
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
