/** @format */

import { Check } from "lucide-react";
const idrImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fbutterfly%2Fwhy_work.png";
import Image from "next/image";

export function ButterflyMXIDR() {
  const benefits = [
    "Certified ButterflyMX Installer",
    "In-house wiring, mounting, and configuration",
    "Integration with legacy access systems",
    "Multi-tenant and mixed-use deployments",
    "Trusted across NYC, NJ, and FL",
  ];

  return (
    <section className="bg-blue-600 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 lg:flex-row">
          {/* Text Content */}
          <div className="flex w-full flex-col gap-5 sm:gap-6 md:gap-8 xl:gap-10 2xl:gap-12 lg:w-1/2">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
              Why Work with IDR?
            </h2>

            <div className="flex flex-col gap-3 sm:gap-4 xl:gap-5 2xl:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 group"
                >
                  <div className="flex size-5 sm:size-6 xl:size-7 2xl:size-8 shrink-0 items-center justify-center bg-green-400 rounded-full">
                    <Check className="size-2 sm:size-3 xl:size-4 2xl:size-5 group-hover:scale-110 transition-transform duration-300 text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-white font-light">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-white pl-4 sm:pl-5 md:pl-7 xl:pl-8 2xl:pl-10 py-2 sm:py-3 xl:py-4 2xl:py-5">
              <p className="text-base italic leading-relaxed text-white sm:text-lg md:text-xl xl:text-xl 2xl:text-2xl font-light">
                ButterflyMX makes access easier. We make installation and
                support effortless.
              </p>
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <Image
                src={idrImg}
                alt="IDR Technology professional installing ButterflyMX system - Expert installation and support"
                width={1920}
                height={1080}
                className="h-auto w-full object-cover"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
