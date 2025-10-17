/** @format */

import Image from "next/image";
import imgDemo from "@/assets/partners/avigilon/avigilon.png";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-30 3xl:py-40  ">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 2xl:px-28">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24  items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-6 xl:space-y-8 2xl:space-y-10  order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-medium">
              <span className="text-[#2e2e2e]">
                One platform. Every access point.
              </span>
              <span className="text-blue-500"> Smarter response.</span>
            </h1>

            {/* Main Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light">
              Unify access control, video, and site automation — on-prem or in
              the cloud — for real-time visibility and faster incident response.
            </p>

            {/* Secondary Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  text-gray-600 leading-relaxed font-light">
              Avigilon Unity Access and Avigilon Alta bring together
              browser-based access management, scenes-driven maps, and
              cloud-native monitoring so security teams can act faster with
              fewer tools.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-8 3xl:gap-10 pt-4 sm:pt-5 md:pt-6 lg:pt-6 xl:pt-8 2xl:pt-10 3xl:pt-12">
              <Link
                href={"/contact"}
                className="group flex items-center justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4  px-6 sm:px-7 md:px-8 lg:px-7 xl:px-8 2xl:px-10  py-3 sm:py-4 md:py-5 lg:py-4 xl:py-5 2xl:py-6  bg-[#052557] hover:bg-[#041e44] active:bg-[#031633] text-white rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl  transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  w-full sm:w-auto min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[200px] xl:min-w-[220px] 2xl:min-w-[240px] cursor-pointer font-light"
              >
                Request a Demo
              </Link>

              {/* <button className="group flex items-center justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4  px-6 sm:px-7 md:px-8 lg:px-7 xl:px-8 2xl:px-10  py-3 sm:py-4 md:py-5 lg:py-4 xl:py-5 2xl:py-6  border-2 border-slate-800 hover:border-slate-900 text-slate-800 hover:text-slate-900 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl  hover:bg-slate-50 active:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl   w-full sm:w-auto min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[200px] xl:min-w-[220px] 2xl:min-w-[240px] font-light">
                Compare Editions
              </button> */}
            </div>

            {/* Info Text */}
            <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg  text-gray-500 pt-2 sm:pt-3 md:pt-4 lg:pt-2 xl:pt-3 2xl:pt-4 font-light">
              Demo includes guided Systems overview and tailored scale
              recommendations.
            </p>
          </div>

          {/* Right Content - Image/Video Preview */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="w-full rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-3xl 3xl:rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 relative group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[1/0.85] 2xl:aspect-[1/0.8]">
                <Image
                  src={imgDemo}
                  alt="Avigilon Unity Access and Alta unified security platform demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
