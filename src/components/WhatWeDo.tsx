// // /** @format */
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import img from "@/assets/image2.png"; // Default image
// import img_1 from "@/assets/what_we_do/image_11.png";
// import img_2 from "@/assets/what_we_do/image_2.png";
// import img_3 from "@/assets/what_we_do/image_3.png";
// import img_4 from "@/assets/what_we_do/image_4.png";
// import img_5 from "@/assets/what_we_do/image_5.png";
// import img_6 from "@/assets/what_we_do/image_6.png";
// import img_7 from "@/assets/what_we_do/image_7.png";
// import img_8 from "@/assets/what_we_do/image_8.png";

// const WhatWeDo = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number|null>(null);
  

//   const services = [
//     {
//       title: "Access Control & Intercom Systems",
//       image: img_1,
//     },
//     {
//       title: "Surveillance Cameras & Security Alarms",
//       image: img_2,
//     },
//     {
//       title: "Audio/Visual Systems for Commercial & Education",
//       image: img_3,
//     },
//     {
//       title: "Structured Cabling & Fiber Optics",
//       image: img_4,
//     },
//     {
//       title: "IT Infrastructure & Wi-Fi",
//       image: img_5,
//     },
//     {
//       title: "Data Center Builds",
//       image: img_6,
//     },
//     {
//       title: "Smart Conference Rooms",
//       image: img_7,
//     },
//     {
//       title: "Sound Masking & Speaker Systems",
//       image: img_8, // You can replace with img_8 if you have it
//     },
//   ];

//   const currentImage =
//     hoveredIndex !== null ? services[hoveredIndex].image : img_1;

//   // Calculate scroll indicator position based on hovered item
//   const getIndicatorPosition = () => {
//     if (hoveredIndex === null) return 0;

//     // Calculate position based on the number of items and current hovered index
//     const totalHeight = services.length * 6; // 6 is roughly the height of each item in rem
//     const itemHeight = 5.5; // Height per item in rem
//     const indicatorHeight = 3; // Height of indicator in rem

//     // Position indicator at the center of the hovered item
//     const position =
//       hoveredIndex * itemHeight + itemHeight / 2 - indicatorHeight / 2;
//     return Math.max(0, Math.min(position, totalHeight - indicatorHeight));
//   };

//   return (
//     <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//       <div className="container">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-[#3D3D3D] mb-4">
//             What We Do
//           </h2>
//           <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-[#333] leading-relaxed max-w-3xl mx-auto">
//             We provide complete low-voltage design and installation services.
//             Whether you need a single install or a full-building deployment, our
//             team handles every detail — design, installation, documentation, and
//             support.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 xl:gap-32 items-center">
//           {/* Image */}
//           <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[330px] lg:h-[350px] xl:w-[400px] xl:h-[420px] 2xl:w-[460px] 2xl:h-[480px] 3xl:w-[520px] 3xl:h-[540px]">
//             <div className="relative w-full h-0 pb-[100%] lg:pb-0 lg:h-full rounded-xl overflow-hidden">
//               <Image
//                 src={currentImage}
//                 alt="Service Image"
//                 fill
//                 className="object-cover rounded-xl transition-all duration-500 ease-in-out"
//                 priority
//               />
//               {/* Overlay effect during transition */}
//               <div
//                 className={`absolute inset-0 bg-black transition-opacity duration-300 ${
//                   hoveredIndex !== null ? "opacity-0" : "opacity-0"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Services List */}
//           <div className="relative">
//             {/* Scroll Indicator */}
//             <div className="absolute -left-4 sm:left-0 top-0 w-2 h-full hidden md:block">
//               <div className="w-full h-full bg-[#DEDEDE] rounded-full" />
//               <div
//                 className="w-2 h-12 bg-[#052557] rounded-full absolute transition-all duration-300 ease-in-out"
//                 style={{
//                   top: `${getIndicatorPosition()}rem`,
//                 }}
//               />
//             </div>

//             <div className="ml-6 sm:ml-8 space-y-6">
//               {services.map((service, i) => (
//                 <div
//                   key={i}
//                   className={`flex items-center space-x-4 cursor-pointer transition-all duration-300 p-2 rounded-lg ${
//                     hoveredIndex === i
//                       ? "bg-[#052557]/5 transform translate-x-2"
//                       : "hover:bg-[#052557]/5"
//                   }`}
//                   onMouseEnter={() => setHoveredIndex(i)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <div
//                     className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
//                       hoveredIndex === i
//                         ? "bg-[#052557] scale-110 shadow-lg"
//                         : "bg-[#052557]"
//                     }`}
//                   >
//                     <svg
//                       className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span
//                     className={`text-base sm:text-lg lg:text-xl 2xl:text-2xl capitalize transition-all duration-300 ${
//                       hoveredIndex === i
//                         ? "text-[#052557] font-semibold"
//                         : "text-[#151515]"
//                     }`}
//                   >
//                     {service.title}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img_1 from "@/assets/what_we_do/image_11.png";
import img_2 from "@/assets/what_we_do/image_2.png";
import img_3 from "@/assets/what_we_do/image_3.png";
import img_4 from "@/assets/what_we_do/image_4.png";
import img_5 from "@/assets/what_we_do/image_5.png";
import img_6 from "@/assets/what_we_do/image_6.png";
import img_7 from "@/assets/what_we_do/image_7.png";
import img_8 from "@/assets/what_we_do/image_8.png";

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    { title: "Access Control & Intercom Systems", image: img_1 },
    { title: "Surveillance Cameras & Security Alarms", image: img_2 },
    { title: "Audio/Visual Systems for Commercial & Education", image: img_3 },
    { title: "Structured Cabling & Fiber Optics", image: img_4 },
    { title: "IT Infrastructure & Wi-Fi", image: img_5 },
    { title: "Data Center Builds", image: img_6 },
    { title: "Smart Conference Rooms", image: img_7 },
    { title: "Sound Masking & Speaker Systems", image: img_8 },
  ];

  // Auto-switch image every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  // Fixed indicator height (in pixels) - much more visible
  const getIndicatorStyle = () => {
    // Each item takes approximately equal space in the container
    const itemHeight = 100 / services.length; // percentage per item
    const indicatorHeight = 12; // Fixed height in percentage (covers ~1.5 items worth of space)
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  text-primary font-bold mb-2 md:mb-6 xl:mb-8">
            What We Do
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl  leading-relaxed text-[#333333]  max-w-4xl 2xl:max-w-5xl  mx-auto font-light">
            We provide complete low-voltage design and installation services.
            Whether you need a single install or a full-building deployment, our
            team handles every detail — design, installation, documentation, and
            support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]  2xl:grid-cols-[40%_60%] gap-12 xl:gap-16 items-center">
          {/* Left Image */}
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[400px] xl:h-[420px] 2xl:h-[460px] 3xl:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              fill
              className="object-contain transition-all duration-700 ease-in-out"
              priority
            />
          </div>

          {/* Right Text List with Scroll Indicator */}
          <div className="relative flex items-start">
            {/* Indicator Track - Fixed position */}
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
            <div className="flex flex-col justify-between space-y-2 sm:space-y-2 2xl:space-y-3  md:ml-12 w-full">
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
                    className={`w-9 h-9 sm:w-10 sm:h-10 2xl:w-11 2xl:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === i ? "bg-[#052557]" : "bg-[#052557]"
                    }`}
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
                      activeIndex === i ? "font-semibold text-gray-900" : "font-light text-[#151515]"
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


