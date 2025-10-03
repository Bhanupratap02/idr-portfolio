/** @format */

import heroImg from "@/assets/partners/teleportivity/heroImg.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function TeleportivityHero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 w-full min-h-[75vh]  md:min-h-[80vh] lg:min-h-0 xl:min-h-[87vh] 2xl:min-h-[94vh] py-12 sm:py-16 md:py-18 lg:py-18 2xl:py-18 3xl:py-20 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-26">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-14 2xl:gap-20 items-center">
          {/* Content */}
          <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12 order-2 lg:order-1">
            <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 leading-tight">
                Virtual Front Desk & Smart Intercom Tech
              </h1>
              <div className="flex flex-col gap-2 sm:gap-3 xl:gap-4 2xl:gap-5 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed">
                <p className="font-light">
                  Live Video Help, QR Access, and Touchscreen Communication –
                  All from One Platform
                </p>
                <p className="font-light">
                  Teleportivity lets you modernize your building&apos;s entry
                  experience with cloud-connected touchscreens, QR codes, live
                  video assistance, and smart integrations — all without needing
                  someone physically on-site.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 w-full">
              <Button className="bg-[#052557] hover:bg-[#041e45] text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 2xl:py-5 text-sm sm:text-base md:text-lg  2xl:text-xl font-light h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
                Schedule Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#052557] text-[#052557] hover:bg-[#052557] hover:text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4  2xl:py-5 text-sm sm:text-base md:text-lg  2xl:text-xl  font-light h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-none lg:max-w-[604px] xl:max-w-2xl 2xl:max-w-3xl">
              <Image
                src={heroImg}
                alt="Teleportivity Smart Intercom Interface"
                className="w-full  h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
