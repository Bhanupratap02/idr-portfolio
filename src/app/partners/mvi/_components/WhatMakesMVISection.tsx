/** @format */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import IntercomsImg from "@/assets/partners/mvi/intercoms.png";
import DoorImg from "@/assets/partners/mvi/door.png";
import AudioImg from "@/assets/partners/mvi/audio.png";
import AccessImg from "@/assets/partners/mvi/access.png";
import IntegrationImg from "@/assets/partners/mvi/integration.png";
import LoggingImg from "@/assets/partners/mvi/logging.png";
export default function WhatMakesMVISection() {
  const products = [
    {
      image: IntercomsImg,
      title: "IP Video Intercoms",
      description:
        'Sleek 7" and 10" touchscreen interfaces with intuitive controls for residents and visitors.',
    },
    {
      image: DoorImg,
      title: "HD Door Entry Panels",
      description:
        "Weatherproof entry stations with HD cameras, keypads, and digital directories.",
    },
    {
      image: AudioImg,
      title: "Two-Way Audio + Video",
      description:
        "Crystal-clear communication with visitors while maintaining security through one-way video.",
    },
    {
      image: AccessImg,
      title: "Mobile App Access",
      description:
        "Allow residents to answer calls and unlock doors from anywhere using their smartphones.",
    },
    {
      image: IntegrationImg,
      title: "System Integration",
      description:
        "SIP, alarm, and access control integration for a comprehensive building security solution.",
    },
    {
      image: LoggingImg,
      title: "Access Logging",
      description:
        "Comprehensive entry records and access logs for enhanced security and management.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-24 xl:mb-16 2xl:mb-18 3xl:mb-22">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-800 leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            What Makes MVI a Smarter Access Solution
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl shadow-md border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-64 2xl:h-72 3xl:h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.title} - Professional MVI access control solution`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, (max-width: 1536px) 33vw, 33vw"
                />
              </div>
              <div className="flex-1 flex flex-col p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10">
                <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl  font-semibold text-gray-800 leading-tight group-hover:translate-x-1 transition-all duration-300">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed line-clamp-4 font-light group-hover:translate-x-1 transition-all duration-300">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer font-medium text-sm  md:text-base lg:text-base xl:text-base 2xl:text-lg  group-hover:translate-x-1 transition-all duration-300 mt-2 md:mt-0">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
