/** @format */
"use client"
import Image from "next/image";
import hero from "@/assets/services/hero.png";
import heroCamera1 from "@/assets/services/hero_camera_1.png";
import heroCamera2 from "@/assets/services/hero_camera_2.png";
import heroCamera3 from "@/assets/services/hero_camera_3.png";
export default function ServiceHeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[88vh] xl:min-h-[90vh] 2xl:min-h-[92vh] 3xl:min-h-[95vh] bg-gray-900 overflow-hidden flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src={hero}
          alt="Security Background"
          fill
          className="object-cover object-center scale-110"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Enhanced overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div> */}
      </div>

      {/* Floating Security Camera Images with Animation */}
      {/* Camera 1 - Top Right */}
      <div className="absolute hidden lg:block z-10 animate-float-slow top-[45%] left-[55%] lg:top-[48%] lg:left-[58%] xl:top-[46%] xl:left-[59%] 2xl:top-[48%] 2xl:left-[60%] 3xl:top-[44%] 3xl:left-[62%]">
        <div className="relative w-[120px] lg:w-[180px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[280px] aspect-square">
          <Image
            src={heroCamera1}
            alt="Security camera system 1"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 180px, (max-width: 1536px) 200px, (max-width: 1920px) 230px, 280px"
          />
        </div>
      </div>

      {/* Camera 2 - Center Right (Main) */}
      <div className="absolute hidden lg:block z-20 animate-float-medium top-[30%] left-[63%] lg:top-[32%] lg:left-[63%] xl:top-[30%] xl:left-[64%] 2xl:top-[30%] 2xl:left-[65%] 3xl:top-[28%] 3xl:left-[66%]">
        <div className="relative w-[180px] lg:w-[280px] xl:w-[320px] 2xl:w-[350px] 3xl:w-[420px] aspect-square">
          <Image
            src={heroCamera2}
            alt="Advanced security camera system 2"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 280px, (max-width: 1536px) 320px, (max-width: 1920px) 350px, 420px"
          />
        </div>
      </div>

      {/* Camera 3 - Bottom Right */}
      <div className="absolute hidden lg:block z-10 animate-float-fast top-[52%] left-[72%] lg:top-[48%] lg:left-[73%] xl:top-[50%] xl:left-[74%] 2xl:top-[48%] 2xl:left-[75%] 3xl:top-[44%] 3xl:left-[76%]">
        <div className="relative w-[120px] lg:w-[180px] xl:w-[200px] 2xl:w-[230px] 3xl:w-[280px] aspect-square">
          <Image
            src={heroCamera3}
            alt="Professional security camera system 3"
            fill
            className="object-contain drop-shadow-2xl"
            sizes="(max-width: 1024px) 0px, (max-width: 1280px) 180px, (max-width: 1536px) 200px, (max-width: 1920px) 230px, 280px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-[125rem]  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 2xl:px-24 3xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
        <div className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-16">
          {/* Subtitle */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-light drop-shadow-lg">
            Quality Service at a fair price.
          </p>
          {/* Main Title */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-medium leading-tight drop-shadow-lg">
            Specialized, efficient,
            <br className="hidden sm:block" />
            and thorough security
            <br className="hidden sm:block" />
            services
          </h1>
          {/* Description */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-full sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl drop-shadow-md">
            We provide best Performing security cameras using the least amount
            of time, energy, and money.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-10 3xl:pt-12">
            <button className="group bg-[#191919] hover:bg-gray-700 active:bg-gray-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium px-5 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-10 3xl:px-12 py-2.5 sm:py-3 md:py-4 lg:py-4 xl:py-4 2xl:py-5 3xl:py-6 cursor-pointer flex items-center justify-center gap-2">
              Get Start Now
            </button>
            <button className="group border-2 border-gray-400 hover:border-white text-white hover:bg-white hover:text-gray-900 active:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-xl xl:rounded-xl 2xl:rounded-2xl 3xl:rounded-2xl text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium px-5 sm:px-6 md:px-8 lg:px-8 xl:px-8 2xl:px-10 3xl:px-12 py-2.5 sm:py-3 md:py-4 lg:py-4 xl:py-4 2xl:py-5 3xl:py-6 cursor-pointer flex items-center justify-center gap-2">
              View all Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




