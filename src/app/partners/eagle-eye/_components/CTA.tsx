/** @format */

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="w-full bg-[#2563EB] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium text-white leading-tight mb-6 sm:mb-8">
          Get Started With Eagle Eye + IDR
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-blue-100 leading-relaxed mb-10 sm:mb-12 max-w-4xl mx-auto font-light">
          Whether you&apos;re upgrading an outdated system or building something
          new, Eagle Eye&apos;s flexibility and intelligence make it a standout
          choice. Let IDR design a system that works for your building, your
          budget, and your team.
        </p>

        {/* Button */}
        <Link href={"/contact"}>
          <Button
            size="lg"
            className="bg-white text-[#2563EB] hover:bg-blue-50 transition-all duration-300 px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-8 text-base sm:text-lg md:text-xl font-light  rounded-xl shadow-md hover:shadow-lg cursor-pointer"
          >
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
