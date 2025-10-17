/** @format */

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CiscoHero() {
  return (
    <section className="bg-white border-0 border-[#E5E7EB] min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[83vh] xl:min-h-[87vh] 2xl:min-h-[94vh] py-12 sm:py-16 md:py-20 lg:py-16 xl:py-24 2xl:py-28 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center">
          {/* Content */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
            {/* Main Heading */}
            <h1 className="text-[#2E2E2E] text-2xl sm:text-3xl md:text-4xl  lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-snug">
              Cisco / Meraki Solutions by IDR Technology Solutions
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-2 sm:gap-3 xl:gap-4 2xl:gap-5">
              <p className="text-[#626262] text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-[1.7rem] 2xl:text-[2.2rem]  leading-relaxed font-light">
                Smarter networks. Stronger security. Seamless performance.
              </p>
              <p className="text-[#626262] text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-[1.7rem] 2xl:text-[2.2rem]  leading-relaxed font-light">
                At IDR, we&apos;re your trusted partner for Cisco and Meraki
                systems — delivering powerful cloud-managed infrastructure and
                reliable hardware.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
              <Link href={"/contact"}>
                <Button className="bg-[#4A90E2] text-white hover:bg-[#3A80D2] px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3  md:py-3.5  xl:py-4.5 2xl:py-5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light rounded-lg shadow-sm border-0 hover:shadow-lg transform hover:scale-105 transition-all duration-300 h-auto cursor-pointer">
                  Let&apos;s Talk →
                </Button>
              </Link>
              <Link href={"/portfolio"}>
         
                <Button
                  variant="outline"
                  className="border border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3  md:py-3.5  xl:py-4.5 2xl:py-5 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-light rounded-lg bg-transparent hover:shadow-lg transform hover:scale-105 transition-all duration-300 h-auto cursor-pointer"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <div className="w-full aspect-[4/3] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[604px] xl:max-w-2xl 2xl:max-w-3xl">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/95113f65b1b63a915fbe92887e6e0b66871063e3?width=1240"
                alt="Cisco Meraki Network Equipment"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
