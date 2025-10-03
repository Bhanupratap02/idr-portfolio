/** @format */

import {  PhoneIcon,Mail } from "lucide-react";
import React from "react";

import Link from "next/link";

export default function LencoreCTA() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-24 2xl:py-28 bg-[#052557] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white mb-8 sm:mb-8 md:mb-10 2xl:mb-14 3xl:mb-16 max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto">
          Ready to Improve Your Acoustics?
        </h2>

        <p className="text-base sm:text-lg md:text-xl xl:text-xl lg:text-lg 2xl:text-2xl text-blue-100 max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 font-light">
          Let&apos;s talk about how Lencore can enhance your space.
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-blue-100 max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 font-light">
          Call us or submit the form — all inquiries go straight to our
          engineering and sales team. No spam. No delays. Just answers.
        </p>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Link
            href="tel:"
            className="flex items-center gap-2 bg-white text-blue-600  px-6 md:px-8 py-3 md:py-4 xl:px-10 xl:py-5 rounded-lg shadow hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light w-full sm:w-auto justify-center"
          >
            <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 fill-blue-600 text-white" />
            Call Now
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 border border-white px-6 md:px-8 py-3 md:py-4 xl:px-10 xl:py-4.5 rounded-lg  hover:bg-white hover:text-blue-600 transition-colors duration-200 font-light text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl w-full sm:w-auto justify-center text-white"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" />
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
