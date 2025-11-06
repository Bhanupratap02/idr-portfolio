/** @format */

import Image from "next/image";
import { BadgeCheck, PlayCircle, Wallet } from "lucide-react";
const heroImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fbrivo%2Fbrivo.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-[75vh]  md:min-h-[80vh] lg:min-h-0 xl:min-h-[87vh] 2xl:min-h-[86vh] 3xl:min-h-[65vh]  py-12 sm:py-16 md:py-20 xl:py-26  flex items-center">
      <div className="w-full max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 xl:gap-16  lg:flex-row">
          {/* Left Content */}
          <div className=" relative z-10 w-full  text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e6f3ff] text-[#0066cc] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-5 md:mb-6 lg:mb-8">
              <BadgeCheck
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066cc]"
                aria-hidden
              />
              Next-Gen Access & Visitor Management
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
              Access Your Corporate Spaces{" "}
              <span className="text-[#0066cc]">Smarter</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg  xl:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed sm:leading-normal mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-[45rem] mx-auto lg:mx-0 font-light">
              Employee Badge in Apple Wallet — Now Available from Brivo.
              Eliminate the need for physical badges with seamless workplace
              access using just your iPhone or Apple Watch.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 justify-center lg:justify-start">
              {/* Primary CTA */}
              {/* <button className="bg-[#0066cc] text-white font-medium text-sm sm:text-base md:text-lg rounded-lg px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 flex items-center justify-center gap-2 hover:bg-[#0055aa] transition-all duration-300 hover:shadow-md">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
                Add to Apple Wallet
              </button> */}

              {/* Secondary CTA */}
              <Link href={"/contact"} className="border-2 border-gray-300 text-gray-700 font-medium text-sm sm:text-base md:text-lg rounded-lg px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 flex items-center justify-center gap-2 hover:border-[#0066cc] hover:text-[#0066cc] transition-all duration-300">
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden />
                Watch Demo
              </Link>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative w-full  flex justify-center">
            <div className="relative w-[85%] sm:w-[75%] md:w-[65%] lg:w-full max-w-xl xl:max-w-2xl 2xl:max-w-5xl aspect-[4/3]">
              <Image
                src={heroImg}
                alt="Brivo Access Control"
                fill
                className="object-contain scale-105 md:scale-110 xl:scale-100"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
