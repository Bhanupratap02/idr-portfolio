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

import Image, { StaticImageData } from "next/image";

const ClientLogos = ({
  logos,
  whiteTextLogos = [],
  direction = "left",
}: {
  logos: StaticImageData[];
  whiteTextLogos?: StaticImageData[];
  direction?: "left" | "right";
}) => {
  // Triple the logos array for seamless infinite scroll
  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-6 overflow-hidden">
      <div
        className={`flex ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        } space-x-10 sm:space-x-14 md:space-x-20`}
        style={{
          width: `${extendedLogos.length * 220}px`, // Adjusted per-logo spacing
        }}
      >
        {extendedLogos.map((img, idx) => {
          const isWhiteLogo = whiteTextLogos.includes(img);
          return (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center px-4 sm:px-6 md:px-8"
            >
              <div className="relative w-auto h-[40px] sm:h-[60px] md:h-[70px] xl:h-[75px] 2xl:h-[90px] flex items-center justify-center">
                <Image
                  src={img}
                  alt={`Client Logo ${idx + 1}`}
                  className={`object-contain w-auto h-full opacity-90 hover:opacity-100 transition-all duration-300 ${
                    isWhiteLogo ? "" : "filter brightness-0 invert"
                  }`}
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
