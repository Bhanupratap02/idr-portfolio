/** @format */

// /** @format */

// import Image, { StaticImageData } from "next/image";

// const ClientLogos = ({
//   logos,
//   whiteTextLogos = [],
//   direction = "left",
// }: {
//   logos: StaticImageData[];
//   whiteTextLogos?: StaticImageData[];
//   direction?: "left" | "right";
// }) => {
//   // Triple the logos array to ensure smooth infinite scroll bg-[#052557]
//   // This ensures we always have enough logos to fill the screen plus seamless transition
//   const extendedLogos = [...logos, ...logos, ...logos];

//   return (
//     <div className="w-full py-4 overflow-hidden mb-2">
//       <div
//         className={`flex animate-scroll space-x-8 sm:space-x-12 2xl:space-x-16
//         ${
//           direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
//         }`}
//         style={{
//           // Set a consistent width to ensure proper animation
//           width: `${extendedLogos.length * 200}px`, // Approximate width per logo
//         }}
//       >
//         {extendedLogos.map((img, idx) => {
//           const isWhiteLogo = whiteTextLogos.includes(img);
//           return (
//             <div
//               key={idx}
//               className="flex-shrink-0 h-6 md:h-10 2xl:h-12 flex items-center justify-center px-3 sm:px-4 md:px-6 2xl:px-8"
//             >
//               <Image
//                 src={img}
//                 alt={`Partner Logo ${idx + 1}`}
//                 className={`w-full h-auto object-contain max-w-[120px] sm:max-w-[150px] md:max-w-[180px] 2xl:max-w-[220px] max-h-[180px] opacity-80 hover:opacity-100 transition-opacity duration-300 ${
//                   isWhiteLogo ? "" : "filter brightness-0 invert"
//                 }`}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;
/** @format */

import Image  from "next/image";

const ClientLogos = ({
  logos,
  direction = "left",
}: {
  logos: string[];
  whiteTextLogos?: string[];
  direction?: "left" | "right";
}) => {
  // Triple the logos array for seamless infinite scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-6 overflow-hidden">
      <div
        className={`flex items-center justify-center ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        } space-x-10  `}
        style={{
          width: `${extendedLogos.length * 220}px`, // Adjusted per-logo spacing
        }}
      >
        {extendedLogos.map((img, idx) => {
      
          return (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center px-0"
            >
              {/* <div className="relative w-auto h-[40px] sm:h-[60px] md:h-[70px] xl:h-[75px] 2xl:h-[90px] flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Client Logo ${idx + 1}`}
                  className={`object-contain w-auto h-full opacity-90 hover:opacity-100 transition-all duration-300 ${
                    isWhiteLogo ? "" : "filter brightness-0 invert"
                  }`}
                  quality={95}
                />
              </div> */}
              {/* Fixed container with consistent dimensions for all logos */}
              <div className="relative w-[120px] h-[50px] sm:w-[150px] sm:h-[60px] md:w-[180px] md:h-[70px] xl:w-[200px] xl:h-[80px] 2xl:w-[220px] 2xl:h-[90px] flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Client Logo ${idx + 1}`}
                  fill
                  className={`object-contain opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 `}
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, (max-width: 1536px) 200px, 220px"
                  quality={95}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientLogos;

/** @format */

// "use client";

// import Image, { StaticImageData } from "next/image";
// import { useState, useEffect } from "react";

// const ClientLogos = ({
//   logos,
//   whiteTextLogos = [],
//   direction = "left",
// }: {
//   logos: StaticImageData[];
//   whiteTextLogos?: StaticImageData[];
//   direction?: "left" | "right";
// }) => {
//   // Triple the logos array for seamless infinite scroll
//   const extendedLogos = [...logos, ...logos, ...logos];
//   const [logoScales, setLogoScales] = useState<Map<number, number>>(new Map());

//   // Automatically calculate scale factor for each logo based on its actual dimensions
//   useEffect(() => {
//     const scales = new Map<number, number>();

//     // Target visual area that all logos should approximately occupy
//     // Increased from 10000 to 14000 to make small logos bigger
//     const targetArea = 14000; // pixels² - adjust this for overall size preference

//     logos.forEach((img, idx) => {
//       const width = img.width;
//       const height = img.height;

//       if (width && height) {
//         // Calculate current area
//         const currentArea = width * height;

//         // Calculate scale factor needed to reach target area
//         // Small logos will get scale > 1 (enlarged)
//         // Large logos will get scale < 1 (shrunk)
//         const idealScale = Math.sqrt(targetArea / currentArea);

//         // More aggressive scaling for better consistency
//         // Min 0.5 = logos can be 50% smaller, Max 2.0 = logos can be 100% larger
//         const clampedScale = Math.max(0.5, Math.min(2.0, idealScale));

//         scales.set(idx, clampedScale);
//       } else {
//         // Fallback if dimensions aren't available
//         scales.set(idx, 1);
//       }
//     });

//     setLogoScales(scales);
//   }, [logos]);

//   return (
//     <div className="w-full py-6 overflow-hidden">
//       <div
//         className={`flex items-center ${
//           direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
//         } gap-5 md:gap-8 lg:gap-10 xl:gap-12`}
//       >
//         {extendedLogos.map((img, idx) => {
//           const isWhiteLogo = whiteTextLogos.includes(img);
//           const originalIdx = idx % logos.length;
//           const scale = logoScales.get(originalIdx) || 1;

//           return (
//             <div
//               key={idx}
//               className="flex-shrink-0 flex items-center justify-center"
//             >
//               {/* Fixed outer container for consistent spacing */}
//               <div className="relative w-[110px] h-[55px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px] xl:w-[190px] xl:h-[95px] 2xl:w-[210px] 2xl:h-[105px] flex items-center justify-center">
//                 {/* Inner container that scales based on logo dimensions */}
//                 <div
//                   className="relative transition-transform duration-300 hover:scale-105"
//                   style={{
//                     width: `${90 * scale}%`,
//                     height: `${90 * scale}%`,
//                     minWidth: "75%",
//                     minHeight: "75%",
//                   }}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Client Logo ${idx + 1}`}
//                     fill
//                     className={`object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 ${
//                       isWhiteLogo ? "" : "filter brightness-0 invert"
//                     }`}
//                     sizes="(max-width: 640px) 110px, (max-width: 768px) 130px, (max-width: 1024px) 150px, (max-width: 1280px) 170px, (max-width: 1536px) 190px, 210px"
//                     quality={95}
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;
