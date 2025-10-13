/** @format */

import { Button } from "@/components/ui/button";
import hero from "@/assets/services/surveillance-camera/hero.png";
import Image from "next/image";
import Link from "next/link";
export default function SurveillanceHeroSection() {
  return (
    <section className="w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-[90vh] xl:min-h-[85vh] 2xl:min-h-[90vh] 3xl:min-h-[88vh] bg-gradient-to-r from-[#1E3A8A] via-[#1E40AF] to-[#1D4ED8] relative overflow-hidden flex  items-center">
      <div className="absolute inset-0 bg-black/30 sm:bg-black/25 lg:bg-black/20"></div>

      <div className="relative  max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24  h-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-4  2xl:gap-20 items-center h-full pb-8 sm:pb-12">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 xl:space-y-10 2xl:space-y-12 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-white leading-tight sm:leading-tight lg:leading-snug xl:leading-relaxed text-center lg:text-left">
              Next-Generation
              <br />
              Camera Systems
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl 3xl:leading-relaxed w-full max-w-none md:max-w-md 2xl:max-w-lg 3xl:max-w-2xl  text-[#DBEAFE] text-center lg:text-left max-md:mx-auto">
              AI-driven analytics, real-time alerting, and enterprise-grade
              scalability for unmatched protection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
              <Link
                href={"/contact"}
                className="bg-white text-[#1E3A8A] hover:bg-gray-100 hover:scale-105 px-6 sm:px-8 lg:px-10 2xl:px-12 py-3 sm:py-4  3xl:py-6 text-sm sm:text-base lg:text-lg  3xl:text-2xl font-semibold rounded-lg shadow-xl transition-all duration-200 group w-full sm:w-auto cursor-pointer text-center my-auto"
              >
                Get Started
              </Link>
              <Link
                href={"/portfolio"}
                className="border-2 border-white text-white bg-transparent hover:scale-105 px-6 sm:px-8 lg:px-10 2xl:px-12 py-3 sm:py-4 lg:py-5 2xl:py-6 text-sm sm:text-base lg:text-lg  3xl:text-2xl font-semibold hover:bg-white/90 hover:text-[#1E3A8A] rounded-lg backdrop-blur-sm transition-all duration-200 group w-full sm:w-auto cursor-pointer text-center my-auto"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>

            <div className=" relative w-full  lg:max-w-[550px] xl:max-w-[550px] 2xl:max-w-[700px] 3xl:max-w-[750px]  h-[300px] md:h-[384px] xl:h-[450px] 2xl:h-[500px] 3xl:h-[590px]  rounded-xl  overflow-hidden">
              <Image
                src={hero}
                alt="Surveillance Camera Systems"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
