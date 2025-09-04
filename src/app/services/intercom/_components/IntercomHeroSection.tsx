/** @format */
import React from "react";

import hero from "@/assets/services/intercom/hero.png"
import Image from "next/image";
export function IntercomHeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] xl:min-h-[85vh] 2xl:min-h-[90vh] 3xl:min-h-[88vh] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 overflow-hidden flex  items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24 h-full flex  items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-36 items-center w-full h-full py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 ">
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-12">
         

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-snug xl:leading-tight 2xl:leading-tight 3xl:leading-tight">
                Multifamily Intercom
                <span className="block text-blue-200">Systems</span>
              </h1>

              <p className="text-blue-100 text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-2xl 3xl:leading-loose">
                Smart intercom solutions for multifamily properties, condos, and
                mixed-use buildings. Secure, seamless, and future-ready
                communication systems.
              </p>

           

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <button className="group bg-white text-blue-600 px-6 sm:px-8 lg:px-10 2xl:px-12 py-3 sm:py-4  3xl:py-6 rounded-xl text-sm sm:text-base lg:text-lg  3xl:text-2xl font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Schedule Consultation
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                <button className="group border-2 border-white text-white 
                px-6 sm:px-8 lg:px-10 2xl:px-12 py-3 sm:py-4 lg:py-5 2xl:py-6 rounded-xl text-sm sm:text-base lg:text-lg  3xl:text-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Portfolio
                </button>
              </div>

           
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last w-full">
            <div className="relative group w-full h-full">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>

              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl transform group-hover:scale-105 2xl:group-hover:scale-115 transition-transform duration-500 w-full">
                <Image
                  src={hero}
                  alt="Modern multifamily building with smart intercom system"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl  h-auto object-cover   transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-20 lg:h-24"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V96Z"
          />
        </svg>
      </div>
    </section>
  );
}
