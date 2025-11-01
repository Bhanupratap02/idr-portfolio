/** @format */

import Image from "next/image";
import kisi from "@/assets/butterfly/kisi.png";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#f9fafb] to-[#ffffff] min-h-[75vh]  md:min-h-[80vh] lg:min-h-0 xl:min-h-[87vh] 2xl:min-h-[85vh] 3xl:min-h-[60vh]  py-12 sm:py-16 md:py-20 xl:py-26 2xl:py-30 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 2xl:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-7 xl:space-y-8 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl font-bold leading-tight text-[#2e2e2e] max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              Smartest Cloud-Based Access Control – Powered by Kisi
            </h1>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light text-[#626262] leading-relaxed max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
              Installed & Supported by IDR Technology Solutions, Platinum Kisi
              Partner in Nationally
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                href={"/contact"}
                className="bg-[#052557] text-white px-6 sm:px-7 lg:px-8 xl:px-16 2xl:px-18 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-lg hover:bg-[#041b3f] transition-colors font-medium"
              >
                Get a Quote
              </Link>
              {/* <button className="border-2 border-[#052557] text-[#052557] px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-sm sm:text-base lg:text-lg rounded-lg hover:bg-[#052557] hover:text-white transition-colors font-medium">
                Watch How It Works
              </button> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full">
            <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={kisi}
                alt="Kisi Access Control System"
                className="w-full h-auto object-cover rounded-lg"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
