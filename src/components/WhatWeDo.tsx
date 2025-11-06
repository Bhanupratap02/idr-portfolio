"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Access Control & Intercom Systems",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/AccessControlIntercoms.jpg",
      classes: "object-cover scale-y-85 scale-x-[0.78] -rotate-8",
    },
    {
      title: "Surveillance Cameras & Security Alarms",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/Surveillance.jpg",
      classes: "object-cover scale-y-85 scale-x-[0.78] -rotate-8",
    },
    {
      title: "Audio/Visual Systems for Commercial & Education",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/AudioVisual.jpeg",
      classes: "object-cover scale-y-85 scale-x-[0.78] -rotate-8",
    },
    {
      title: "Structured Cabling & Fiber Optics",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/image_4.png",
      classes: "object-contain",
    },
    {
      title: "IT Infrastructure & Wi-Fi",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/ITInfrastructure.jpg",
      classes: "object-cover scale-y-85 scale-x-[0.78] -rotate-8",
    },
    {
      title: "Data Center Builds",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/image_6.png",
      classes: "object-contain",
    },
    {
      title: "Smart Conference Rooms",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/SmartConferenceRooms.jpg",
      classes: "object-cover scale-y-85 scale-x-[0.78] -rotate-8",
    },
    {
      title: "Sound Masking & Speaker Systems",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/what_we_do/image_11.png",
      classes: "object-contain",
    },
  ];

  // Auto-switch image every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [services.length]);

  // Scroll indicator position logic
  const getIndicatorStyle = () => {
    const itemHeight = 100 / services.length;
    const indicatorHeight = 12;
    const top = activeIndex * itemHeight + itemHeight / 2 - indicatorHeight / 2;
    return {
      height: `${indicatorHeight}%`,
      top: `${Math.max(0, Math.min(top, 100 - indicatorHeight))}%`,
    };
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 2xl:py-24 bg-gray-50">
      <div className="container mx-auto max-w-[82rem] 2xlmax-w-[90rem] 3xl:max-w-[100rem]">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-14 2xl:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-primary font-bold mb-2 md:mb-6 xl:mb-8">
            What We Do
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-[#333333] max-w-4xl 2xl:max-w-5xl mx-auto font-light">
            We provide complete low-voltage design and installation services.
            Whether you need a single install or a full-building deployment, our
            team handles every detail — design, installation, documentation, and
            support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] 2xl:grid-cols-[40%_60%] gap-12 xl:gap-16 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[400px] xl:h-[420px] 2xl:h-[460px] 3xl:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              fill
              className={`${services[activeIndex].classes} rounded-xl transition-all duration-700 ease-in-out`}
              priority
            />
          </div>

          {/* Right Text List */}
          <div className="relative flex items-start">
            {/* Indicator Track */}
            <div
              className="absolute left-0 top-0 w-1 bg-[#DEDEDE] rounded-full hidden md:block"
              style={{ height: "100%" }}
            >
              <div
                className="absolute -left-1 w-3 bg-[#052557] rounded-full transition-all duration-500 ease-in-out shadow-md"
                style={getIndicatorStyle()}
              />
            </div>

            {/* Text List */}
            <div className="flex flex-col justify-between space-y-2 sm:space-y-2 2xl:space-y-3 md:ml-12 w-full">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`flex items-center space-x-4 cursor-pointer transition-all duration-300 p-2 3xl:p-2.5 rounded-md ${
                    activeIndex === i
                      ? "bg-[#052557]/10 translate-x-2"
                      : "hover:bg-[#052557]/5"
                  }`}
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-full flex items-center justify-center transition-all duration-300 bg-[#052557]`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
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
                    className={`text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-[28px] 3xl:text-3xl text-[#052557] transition-all duration-300 ${
                      activeIndex === i
                        ? "font-semibold text-gray-900"
                        : "font-light text-[#151515]"
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
