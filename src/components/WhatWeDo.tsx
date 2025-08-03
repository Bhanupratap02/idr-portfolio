/** @format */
"use client";
import { useState } from "react";
import Image from "next/image";
import img from "@/assets/image2.png"; // Default image
import img_1 from "@/assets/what_we_do/image_1.png";
import img_2 from "@/assets/what_we_do/image_2.png";
import img_3 from "@/assets/what_we_do/image_3.png";
import img_4 from "@/assets/what_we_do/image_4.png";
import img_5 from "@/assets/what_we_do/image_5.png";
import img_6 from "@/assets/what_we_do/image_6.png";
import img_7 from "@/assets/what_we_do/image_7.png";
import img_8 from "@/assets/what_we_do/image_8.png";

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);

  const services = [
    {
      title: "Access Control & Intercom Systems",
      image: img_1,
    },
    {
      title: "Surveillance Cameras & Security Alarms",
      image: img_2,
    },
    {
      title: "Audio/Visual Systems for Commercial & Education",
      image: img_3,
    },
    {
      title: "Structured Cabling & Fiber Optics",
      image: img_4,
    },
    {
      title: "IT Infrastructure & Wi-Fi",
      image: img_5,
    },
    {
      title: "Data Center Builds",
      image: img_6,
    },
    {
      title: "Smart Conference Rooms",
      image: img_7,
    },
    {
      title: "Sound Masking & Speaker Systems",
      image: img_1, // You can replace with img_8 if you have it
    },
  ];

  const currentImage =
    hoveredIndex !== null ? services[hoveredIndex].image : img;

  // Calculate scroll indicator position based on hovered item
  const getIndicatorPosition = () => {
    if (hoveredIndex === null) return 0;

    // Calculate position based on the number of items and current hovered index
    const totalHeight = services.length * 6; // 6 is roughly the height of each item in rem
    const itemHeight = 5.5; // Height per item in rem
    const indicatorHeight = 3; // Height of indicator in rem

    // Position indicator at the center of the hovered item
    const position =
      hoveredIndex * itemHeight + itemHeight / 2 - indicatorHeight / 2;
    return Math.max(0, Math.min(position, totalHeight - indicatorHeight));
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-[#3D3D3D] mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-[#333] leading-relaxed max-w-3xl mx-auto">
            We provide complete low-voltage design and installation services.
            Whether you need a single install or a full-building deployment, our
            team handles every detail — design, installation, documentation, and
            support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 xl:gap-32 items-center">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[330px] lg:h-[350px] xl:w-[400px] xl:h-[420px] 2xl:w-[460px] 2xl:h-[480px] 3xl:w-[520px] 3xl:h-[540px]">
            <div className="relative w-full h-0 pb-[100%] lg:pb-0 lg:h-full rounded-xl overflow-hidden">
              <Image
                src={currentImage}
                alt="Service Image"
                fill
                className="object-cover rounded-xl transition-all duration-500 ease-in-out"
                priority
              />
              {/* Overlay effect during transition */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredIndex !== null ? "opacity-0" : "opacity-0"
                }`}
              />
            </div>
          </div>

          {/* Services List */}
          <div className="relative">
            {/* Scroll Indicator */}
            <div className="absolute -left-4 sm:left-0 top-0 w-2 h-full hidden md:block">
              <div className="w-full h-full bg-[#DEDEDE] rounded-full" />
              <div
                className="w-2 h-12 bg-[#052557] rounded-full absolute transition-all duration-300 ease-in-out"
                style={{
                  top: `${getIndicatorPosition()}rem`,
                }}
              />
            </div>

            <div className="ml-6 sm:ml-8 space-y-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`flex items-center space-x-4 cursor-pointer transition-all duration-300 p-2 rounded-lg ${
                    hoveredIndex === i
                      ? "bg-[#052557]/5 transform translate-x-2"
                      : "hover:bg-[#052557]/5"
                  }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      hoveredIndex === i
                        ? "bg-[#052557] scale-110 shadow-lg"
                        : "bg-[#052557]"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className={`text-base sm:text-lg lg:text-xl 2xl:text-2xl capitalize transition-all duration-300 ${
                      hoveredIndex === i
                        ? "text-[#052557] font-semibold"
                        : "text-[#151515]"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
