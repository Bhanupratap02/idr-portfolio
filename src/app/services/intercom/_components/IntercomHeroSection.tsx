/** @format */
import React from "react";

const hero = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fintercom%2Fhero.png";
import Image from "next/image";
import Link from "next/link";
export function IntercomHeroSection() {
  return (
    <section className="relative min-h-[83vh] sm:min-h-[85vh] lg:min-h-[90vh] xl:min-h-[88vh] 2xl:min-h-[90vh] 3xl:min-h-[88vh] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 overflow-hidden flex  items-start md:items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24 h-full flex  items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-36 items-center w-full h-full py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 ">
          {/* Left Content */}
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 2xl:space-y-12 ">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold leading-tight sm:leading-tight lg:leading-snug xl:leading-tight 2xl:leading-tight 3xl:leading-tight text-center lg:text-left">
                Smart Multifamily Intercom{" "}
                <span className=" inline lg:block ">Solutions</span>
              </h1>

              <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-2xl 3xl:leading-loose text-center lg:text-left">
                Smart intercom solutions for multifamily properties, condos, and
                mixed-use buildings. Secure, seamless, and future-ready
                communication systems.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center lg:justify-start">
                <Link href={"/contact"} className="group bg-white text-blue-600 px-6 sm:px-8 lg:px-10 2xl:px-12 py-3 sm:py-4  3xl:py-6 rounded-xl text-sm sm:text-base lg:text-lg  3xl:text-2xl  hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
                  Schedule Consultation
                </Link>

                <Link href={"/portfolio"}
                className="group border-2 border-white text-white 
                px-6 sm:px-8 lg:px-10 2xl:px-12 py-3 sm:py-4 lg:py-5 2xl:py-6 rounded-xl text-sm sm:text-base lg:text-lg  3xl:text-2xl  hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center backdrop-blur-sm cursor-pointer"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end  w-full">
            <div className="relative group w-full h-full">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-green-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-400 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>

              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl transform group-hover:scale-105 2xl:group-hover:scale-115 transition-transform duration-500 w-full">
                <Image
                  src={hero}
                  alt="Modern multifamily building with smart intercom system"
                  width={1920}
                  height={1080}
                  className="w-full max-w-full  lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl  h-auto object-cover   transition-transform duration-500"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
