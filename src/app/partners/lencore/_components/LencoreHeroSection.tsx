/** @format */

import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "@/assets/partners/lencore/hero.png";
export default function LencoreHeroSection() {
  return (
    <section className="w-full min-h-[75vh]  md:min-h-[80vh] lg:min-h-0 xl:min-h-[87vh] 2xl:min-h-[94vh] py-12 sm:py-16 md:py-18 lg:py-18 2xl:py-18 3xl:py-20 bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-12 xl:px-24 2xl:px-26 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center">
        {/* Content */}
        <div className="flex flex-col items-start gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12 max-w-none lg:max-w-xl xl:max-w-2xl 2xl:max-w-[45rem] 3xl:max-w-4xl order-2 lg:order-1">
          <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 leading-tight">
              Lencore Sound Masking & Audio Solutions
            </h1>

            <div className="flex flex-col gap-2 sm:gap-3 xl:gap-4 2xl:gap-5">
              <h2 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 font-light leading-relaxed">
                Smarter Soundscapes for Better Productivity
              </h2>

              <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 font-light leading-relaxed">
                At IDR Technology Solutions, we specialize in deploying
                Lencore&apos;s cutting-edge sound masking and audio solutions
                for offices, healthcare, education, and secure government
                environments.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 w-full">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 2xl:py-5 text-sm sm:text-base md:text-lg  2xl:text-xl font-light h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Schedule Consultation
            </Button>

            <Button
              variant="outline"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-6 sm:px-7 md:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4  2xl:py-5 text-sm sm:text-base md:text-lg  2xl:text-xl  font-light h-auto hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-none lg:max-w-[604px] xl:max-w-2xl 2xl:max-w-3xl">
            <Image
              src={heroImg}
              alt="Lencore Sound Masking Solutions"
              className="w-full  h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
