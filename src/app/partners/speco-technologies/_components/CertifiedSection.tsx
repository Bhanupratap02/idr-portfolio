/** @format */

import { CheckIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
const certifiedImage = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fcamera-installing.png";
const checkImage = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fcheck.png";
const reviewImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Freview-img.png";
export default function CertifiedSection() {
  const features = [
    "NYS Licensed & Insured",
    "Deep knowledge of SecureGuard®, Connect & Legacy",
    "Full-service installation & post-support",
    "End-to-end Integration with Access, Alarms & Intercom",
  ];

  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 ">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 3xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-6 xl:gap-12 2xl:gap-16 3xl:gap-18 items-end">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 xl:space-y-7 2xl:space-y-8 3xl:space-y-9">
            <div className="inline-flex items-center bg-white text-[#3b4fd1] hover:bg-white/90 px-3 sm:px-4 xl:px-5 2xl:px-6 py-2 sm:py-2.5 xl:py-3 2xl:py-3.5 text-xs sm:text-sm md:text-base xl:text-base 2xl:text-lg 3xl:text-xl font-light  rounded-full transition-colors duration-300 cursor-pointer">
              Official Certified Speco Installer
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.5rem]  text-white leading-tight">
              🛠 Certified by Experience – Why IDR?
            </h2>

            <div className="space-y-2 sm:space-y-3 xl:space-y-4 2xl:space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 sm:gap-3 xl:gap-4 2xl:gap-5"
                >
                  <Image
                    src={checkImage}
                    alt="check Icon"
                    className="w-3 h-3 sm:w-4 sm:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:h-7 text-white mt-0.5 sm:mt-1 flex-shrink-0"
                  />
                  <span className="text-white text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-light leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border-l-4 border-l-[#3b4fd1] rounded-lg backdrop-blur-sm">
              <div className="p-4 sm:p-5 md:p-6  2xl:p-7 space-y-3 sm:space-y-4 xl:space-y-5 2xl:space-y-6">
                <blockquote className="text-white text-base 2xl:text-lg 3xl:text-xl font-light leading-normal">
                  We&apos;ve used Speco to protect schools, apartments, retail
                  spaces, and industrial properties — it&apos;s consistent,
                  affordable, and built to last.
                </blockquote>

                <div className="flex items-center gap-2 sm:gap-3 xl:gap-4 2xl:gap-5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    <Image
                      src={reviewImg}
                      alt="Reviewer Image"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-white text-sm sm:text-base md:text-lg  2xl:text-xl 3xl:text-2xl leading-tight font-light">
                      Michael Rodriguez
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm md:text-base  2xl:text-lg 3xl:text-xl font-light leading-tight">
                      Security Director, NYC Schools
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Fixed */}
          <div className="order-first lg:order-last flex items-center lg:items-end">
            <div className="w-full relative overflow-hidden">
              <Image
                src={certifiedImage}
                alt="Speco certified installer installing a surveillance camera"
                className="w-full h-auto max-h-none sm:max-h-[420px] md:max-h-[480px] lg:max-h-[500px] xl:max-h-[500px] 2xl:max-h-[600px] xl:object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
