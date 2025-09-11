/** @format */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import hero_bg from "@/assets/services/security-alarm/hero_bg.png"
import hero_main from "@/assets/services/security-alarm/hero_main.png";
export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] xl:min-h-[88vh] 2xl:min-h-[90vh]  bg-gradient-to-r from-[#111827] to-[#1F2937] flex items-start md:items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 lg:opacity-30"
        style={{
          backgroundImage:
            `url(${hero_bg.src})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-6 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24 py-16 sm:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-14 lg:gap-14 2xl:gap-16 3xl:gap-42 items-center ">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-12">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-snug xl:leading-tight 2xl:leading-tight 3xl:leading-tight text-center lg:text-left">
            Security Alarm Systems
          </h1>

          <h2 className="text-white text-lg  sm:text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium leading-relaxed text-center lg:text-left">
            Proactive Protection, Professionally Managed
          </h2>

          <p className="text-white text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-2xl 3xl:max-w-[45rem] 3xl:leading-loose text-center  lg:text-left">
            At IDR Technology Solutions, we design, install, and support
            reliable intrusion alarm systems to protect your building, staff,
            and assets.
          </p>

          <button className="bg-[#0056B3] hover:bg-[#0056B3]/90 text-white px-12 md:px-8 py-4 md:py-5 lg:px-12 3xl:px-12 2xl:py-6  text-base md:text-lg 3xl:text-xl flex items-center gap-3 rounded-lg max-lg:mx-auto cursor-pointer">
            Get a Free Site Assessment
            <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 3xl:w-6 3xl:h-6" />
          </button>
        </div>

        {/* Right Content - Security Device Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={hero_main}
            alt="Security alarm system device"
            className="w-full max-w-sm sm:max-w-sm md:max-w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-5xl  h-auto object-cover   transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
