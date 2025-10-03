/** @format */

import React from "react";
import { Button } from "@/components/ui/button";
import lights from "@/assets/partners/speco/lights.png";
import Image from "next/image";
export default function WhereWeWork() {
  return (
    <section className="w-full bg-gray-900 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 3xl:py-36">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex flex-col gap-4 sm:gap-12 md:gap-14 xl:gap-16 2xl:gap-20">
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight">
          📍 Where We Work
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 xl:gap-14 2xl:gap-16">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={lights}
              alt="Service regions map showing coverage areas"
              className="object-cover rounded-2xl w-full h-full"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8">
            <div className="space-y-3 sm:space-y-4 xl:space-y-5 2xl:space-y-6">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-light leading-tight">
                Multi-site Support with Remote Configuration
              </h3>
              <p className="text-white text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-3xl  leading-relaxed font-light">
                Our team provides comprehensive installation and support
                services across multiple regions. With remote configuration
                capabilities, we can manage and maintain your security systems
                no matter where you&apos;re located.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-0 rounded-lg">
              <div className="p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-7.5 space-y-2 sm:space-y-3 md:space-y-4 xl:space-y-5 2xl:space-y-6">
                <h4 className="text-white text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-light leading-tight">
                  Ready to secure your property?
                </h4>

                <div className="text-white text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-light leading-relaxed">
                  <p>
                    Contact our team for a personalized consultation and quote
                    tailored to your security needs.
                  </p>
                </div>

                <Button className="w-full bg-[#3b4fd1] hover:bg-[#3b4fd1]/90 text-white font-light text-sm sm:text-base md:text-lg   2xl:text-xl h-10 sm:h-12 xl:h-14 2xl:h-16 rounded-md transition-all duration-300 hover:shadow-lg cursor-pointer ">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
