/** @format */

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[89vh] 2xl:min-h-[94vh] 3xl:min-h-[95vh] flex items-center justify-center bg-gray-100">
      {/* Background Image Container */}
      <div className="absolute inset-0 ">
        {/* Replace this div with Next.js Image component when you have the local image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 "
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/1c12d15c9f908c6f6a052fd926be93d46ffbcd76?width=2880')",
          }}
        />
        {/* 
        Uncomment and use this when you have the local image:
        <Image
          src={heroBg}
          alt="Vivotek and Vortex surveillance technology background"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
        */}
      </div>
      {/* Enhanced Overlay System */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/35 to-purple-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16 3xl:space-y-20">
          {/* Main Heading */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-medium leading-tight max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl">
              <span className="text-white drop-shadow-lg">
                Vivotek & Vortex
              </span>
              <br />
              <span className="text-primary drop-shadow-md">
                Surveillance Solutions
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-blue-100 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-light leading-relaxed max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl drop-shadow-md">
            AI-powered security, built for today — and ready for tomorrow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-8 3xl:gap-10 items-center pt-4 sm:pt-6 md:pt-8 lg:pt-8 xl:pt-10 2xl:pt-12 3xl:pt-16 max-sm:w-[90%]">
            <Link href={"/contact"}>
              <Button
                size={"lg"}
                className="group bg-[#2563EB] hover:bg-[#1d4ed8] active:bg-[#1e40af] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium   px-6 sm:px-7 md:px-8 lg:px-8 xl:px-8 2xl:px-10 3xl:px-12 py-3 sm:py-4 md:py-5 lg:py-5 xl:py-5 2xl:py-6 3xl:py-8 w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[240px] xl:min-w-[260px] 2xl:min-w-[280px] 3xl:min-w-[320px] cursor-pointer h-12 sm:h-14 md:h-16 2xl:h-18 3xl:h-20"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link href={"/contact"}>
     
              <Button
                size={"lg"}
                variant="outline"
                className="group border-2 border-white/80 hover:border-white text-white bg-white/10 hover:bg-white hover:text-[#2563EB] backdrop-blur-sm active:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl  font-medium px-6 sm:px-7 md:px-8 lg:px-8 xl:px-8 2xl:px-10 3xl:px-12 py-3 sm:py-4 md:py-5 lg:py-5 xl:py-5 2xl:py-6 3xl:py-8 w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[250px] lg:min-w-[240px] xl:min-w-[260px] 2xl:min-w-[280px] 3xl:min-w-[320px] cursor-pointer  h-12 sm:h-14 md:h-16 2xl:h-18 3xl:h-20"
              >
                View Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
