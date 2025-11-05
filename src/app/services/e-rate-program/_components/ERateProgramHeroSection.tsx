/** @format */

import { Button } from "@/components/ui/button";
import Image from "next/image";
const background = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2FBackground.png";
const hero = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2Fhero.png";
const arrow = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2Farrow.png";
const group = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fe-rate-program%2Fgroup.png";
import Link from "next/link";
export default function ERateProgramHeroSection() {
  return (
    <section className="w-full min-h-[90vh] sm:min-h-[95vh] md:min-h-[90vh] lg:min-h-[85vh] xl:min-h-[90vh] 2xl:min-h-[95vh] relative py-16 md:py-20 lg:py-24 2xl:py-28 flex md:items-center ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="E-Rate Program Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem]  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-20 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 xl:space-y-10 2xl:space-y-12">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 2xl:space-y-7 3xl:space-y-8">
              <p className="text-[#052557] text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-normal uppercase tracking-wide leading-relaxed ">
                Welcome to our E-rate program
              </p>

              <h1 className="text-[#2E2E2E] text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium leading-tight capitalize">
                E-Rate Program Eligible Services for K-12 School Districts
              </h1>

              <p className="text-[#626262] text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-normal leading-relaxed max-w-2xl">
                From the opening of the funding window to the closing deadline,
                IDR has you covered.
              </p>
            </div>
            <Link href={"/contact"}>
              <Button
                size="lg"
                className="inline-flex items-center justify-between gap-3 sm:gap-4 md:gap-6 px-6 sm:px-8 md:px-10 xl:px-12 2xl:px-14 py-3 sm:py-4 md:py-5 lg:py-6 2xl:py-8 3xl:py-10 bg-[#17254E] text-white rounded-full hover:bg-[#1F3061] hover:shadow-lg transform hover:scale-105 transition-all duration-300 group min-w-[170px] sm:min-w-[180px] md:min-w-[200px] 2xl:min-w-[240px] 3xl:min-w-[280px] relative mx-auto cursor-pointer"
              >
                <span className="text-sm sm:text-base  2xl:text-lg    ">
                  Contact Us
                </span>

                <Image
                  src={arrow}
                  alt="icon"
                  width={72}
                  height={72}
                  className=" absolute right-0 w-10 h-10     xl:w-12 xl:h-12 2xl:w-15 2xl:h-15 3xl:w-18 3xl:h-17  text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                />
              </Button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative ">
            <Image
              src={hero}
              alt="E-Rate Program Education"
              width={1200}
              height={800}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Stats Card */}
            <div className="absolute -bottom-18  md:-bottom-10 left-12 lg:-left-18 3xl:-left-28 bg-white rounded-lg p-6 md:p-8 lg:p-9 xl:p-10 2xl:p-12  shadow-xl border border-gray-100 max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-none hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-[#17254E] text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-normal mb-3 sm:mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <span className="text-[#704FE6] font-normal">200+</span>{" "}
                Instructor
              </h3>
              <Image
                src={group}
                alt="Partner logos"
                width={220}
                height={70}
                className="w-[130px] sm:w-[170px] 2xl:w-[220px]  h-[50px] 2xl:h-[60px] 3xl:h-[70px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
