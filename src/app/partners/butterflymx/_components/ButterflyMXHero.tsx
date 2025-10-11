/** @format */

import heroImg from "@/assets/butterfly/butterfly.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButterflyMXHero() {
  return (
    <section className="relative bg-white min-h-[75vh]  md:min-h-[80vh] lg:min-h-0 xl:min-h-[87vh] 2xl:min-h-[86vh] 3xl:min-h-[68vh]  py-12 sm:py-16 md:py-20 xl:py-26 2xl:py-30 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 lg:flex-row">
          {/* Text Content */}
          <div className="flex w-full flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 lg:w-1/2">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 xl:gap-6 2xl:gap-7">
              <h1 className="text-2xl font-bold leading-tight text-[#2e2e2e] sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl">
                ButterflyMX Spotlight Smart Video Intercoms
              </h1>
              <p className="text-base leading-relaxed text-[#626262] sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
                For Apartments, Offices & Mixed-Use Spaces | Installed and
                Supported by IDR Technology Solutions
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 xl:gap-5 2xl:gap-6">
              <Link href={"/contact"}>
                <Button className="h-12 sm:h-13 md:h-14 xl:h-16 2xl:h-18 rounded-md bg-[#0056b3] px-6 md:px-8 xl:px-10 2xl:px-12 text-sm sm:text-base md:text-lg 2xl:text-xl font-medium text-white transition-all hover:bg-[#004494] hover:shadow-lg transform hover:scale-105 duration-300 cursor-pointer">
                  Request a Demo
                </Button>
              </Link>
              <Link href={"/portfolio"}>
                <Button
                  variant="outline"
                  className="h-12 sm:h-13 md:h-14 xl:h-16 2xl:h-18 rounded-md border-2 border-[#0056b3] bg-white px-6 md:px-8 xl:px-10 2xl:px-12 text-sm sm:text-base md:text-lg 2xl:text-xl font-medium text-[#0056b3] transition-all hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 duration-300 cursor-pointer"
                >
                  See Product in Action
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-lg lg:w-1/2 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={heroImg}
              alt="ButterflyMX Smart Video Intercom - Modern property access control system"
              className="h-auto w-full object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
