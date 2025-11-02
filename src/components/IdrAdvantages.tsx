// /** @format */

// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { CheckCircle, Shield, ClipboardList, Users } from "lucide-react";
// import img1 from "@/assets/idr-advantage/Consultation.jpeg";
// import img2 from "@/assets/idr-advantage/Certified.jpeg";
// import img3 from "@/assets/idr-advantage/camera.jpeg";
// import img4 from "@/assets/idr-advantage/partnership.png";
// import logo from "@/assets/idr-advantage/High Res IDR Logo w Swoosh only red.png";

// export default function IdrAdvantage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.getElementById("idr-advantage");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   const advantages = [
//     {
//       title: "Consultation & Design",
//       description:
//         "Tailored security and technology plans built for your environment, goals, and budget.",
//       image: img1,
//       icon: CheckCircle,
//       button: true,
//       delay: 0,
//     },
//     {
//       title: "Certified Installation",
//       description:
//         "Clean, documented installs by manufacturer-certified technicians with no shortcuts.",
//       image: img2,
//       icon: Shield,
//       button: true,
//       delay: 100,
//     },
//     {
//       title: "Camera Monitoring",
//       description:
//         "24/7 proactive monitoring with human review, system alerts, and rapid response when it matters most.",
//       image: img3,
//       icon: ClipboardList,
//       button: true,
//       delay: 200,
//     },
//     {
//       title: "Ongoing Partnership",
//       description:
//         "Dedicated support, annual system health checks, and a long-term partner you can count on.",
//       image: img4,
//       icon: Users,
//       button: true,
//       delay: 300,
//     },
//   ];

//   return (
//     <section
//       id="idr-advantage"
//       className="bg-[#0B1218] text-white py-12 sm:py-16 md:py-20  xl:py-24 2xl:py-28 overflow-hidden"
//     >
//       <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
//         {/* Header */}
//         <div
//           className={`transition-all duration-1000  mb-6 sm:mb-8 md:mb-10 xl:mb-14 2xl:mb-16 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//           }`}
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
//             The{/* ← NO space here */}
//             <Image
//               src={logo}
//               alt="IDR Logo"
//               height={80}
//               className="h-[1.2em] sm:h-[1.2em] md:h-[1.2em] lg:h-[1.2em]  2xl:h-[1.3em] w-auto align-middle inline-block mx-2"
//             />
//             {/* ← NO space here */}
//             Advantage
//           </h2>

//           <p className="mt-2 md:mt-4 2xl:mt-6 text-slate-300 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed  font-light text-center max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl  mx-auto px-2 sm:px-0">
//             Premium service isn&apos;t just about technology — it&apos;s about
//             the partnership, process, and protection that only IDR delivers.
//           </p>
//         </div>

//         {/* Flex-grow cards */}
//         <div className=" flex flex-col md:flex-row  h-auto md:h-[450px]  xl:h-[500px] 2xl:h-[550px] gap-2 ">
//           {advantages.map((adv, idx) => {
//             const Icon = adv.icon;
//             const isFirst = idx === 0;
//             const isLast = idx === advantages.length - 1;
//             return (
//               <div
//                 key={idx}
//                 className={`
//                   relative group cursor-pointer overflow-hidden
//                   flex-1 transition-all duration-500 ease-in-out
//                   hover:flex-[2] md:hover:flex-[2.5] lg:hover:flex-[3]
//                   min-h-[300px] md:min-h-0
//                     ${
//                       isFirst
//                         ? "rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl"
//                         : ""
//                     }
//                   ${
//                     isLast
//                       ? "rounded-bl-2xl rounded-br-2xl md:rounded-bl-none md:rounded-tr-2xl"
//                       : ""
//                   }
//                   ${isVisible ? "opacity-100" : "opacity-0 translate-y-6"}
//                 `}
//                 style={{
//                   transitionDelay: isVisible ? `${adv.delay}ms` : "0ms",
//                   transitionDuration: "800ms",
//                 }}
//               >
//                 {/* Background Image */}
//                 <Image
//                   src={adv.image}
//                   alt={adv.title}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, (max-width: 1280px) 25vw, (max-width: 1536px) 25vw, 25vw"
//                 />

    
//                    {/* ✅ Updated Overlay: Only bottom part is dark */}
//                 <div
//                   className="
//                     absolute inset-0 
//                     bg-gradient-to-t 
//                     from-black/80 via-black/20 to-transparent 
//                     group-hover:from-black/90 group-hover:via-black/20 group-hover:to-transparent
//                     transition-all duration-500
//                   "
//                 ></div>
//                 {/* Content */}
//                 <div
//                   className={`
//                     absolute inset-0 flex flex-col items-center text-center px-4 sm:px-5 md:px-4 lg:px-6 xl:px-8 2xl:px-10
//                     transition-all duration-500
//                     group-hover:justify-end
//                    justify-end pb-6 sm:pb-7 md:pb-6 lg:pb-8 xl:pb-10 2xl:pb-12
//                   `}
//                 >
//                   {/* Icon */}
//                   <Icon className="w-10 h-10  md:w-10 md:h-10  xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 mb-2  md:mb-2 lg:mb-3  2xl:mb-4 transition-all duration-500 opacity-100 group-hover:mb-4 group-hover:md:mb-5  group-hover:xl:mb-6 group-hover:2xl:mb-7 drop-shadow-lg" />

//                   {/* Title */}
//                   <h3 className="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold drop-shadow-lg">
//                     {adv.title}
//                   </h3>

//                   {/* Description + Button (only on hover) */}
//                   {adv.description && (
//                     <p className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-lg 2xl:text-xl  font-light text-gray-200 mt-3 sm:mt-4 md:mt-3 lg:mt-4  2xl:mt-5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 leading-relaxed max-w-xl">
//                       {adv.description}
//                     </p>
//                   )}

//                   {adv.button && (
//                     <button className="mt-3 sm:mt-4 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 px-4 sm:px-5 md:px-4 lg:px-6 xl:px-7 2xl:px-8 py-2 sm:py-2.5 md:py-2 lg:py-2.5 xl:py-3 2xl:py-3.5 border-2 border-white text-white rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 hover:bg-white hover:text-[#0B1218] text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium cursor-pointer">
//                       Learn More
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Shield, ClipboardList, Users } from "lucide-react";
import img1 from "@/assets/idr-advantage/Consultation.jpeg";
import img2 from "@/assets/idr-advantage/Certified.jpeg";
import img3 from "@/assets/idr-advantage/camera.jpeg";
import img4 from "@/assets/idr-advantage/partnership.png";
import logo from "@/assets/idr-advantage/High Res IDR Logo w Swoosh only red.png";
import Link from "next/link";

export default function IdrAdvantage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect if the device is touch-capable
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("idr-advantage");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      title: "Consultation & Design",
      description:
        "Tailored security and technology plans built for your environment, goals, and budget.",
      image: img1,
      icon: CheckCircle,
      delay: 0,
      url: "/consultation",
    },
    {
      title: "Certified Installation",
      description:
        "Clean, documented installs by manufacturer-certified technicians with no shortcuts.",
      image: img2,
      icon: Shield,
      delay: 100,
      url: "/certified-installation",
    },
    {
      title: "Camera Monitoring",
      description:
        "24/7 proactive monitoring with human review, system alerts, and rapid response when it matters most.",
      image: img3,
      icon: ClipboardList,
      delay: 200,
      url: "/camera-monitoring",
    },
    {
      title: "Ongoing Partnership",
      description:
        "Dedicated support, annual system health checks, and a long-term partner you can count on.",
      image: img4,
      icon: Users,
      delay: 300,
      url: "/ongoing-partnership",
    },
  ];

  return (
    <section
      id="idr-advantage"
      className="bg-[#0B1218] text-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28">
        {/* Header */}
        <div
          className={`transition-all duration-1000 mb-6 sm:mb-8 md:mb-10 xl:mb-14 2xl:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            The
            <Image
              src={logo}
              alt="IDR Logo"
              height={80}
              className="h-[1.2em] w-auto align-middle inline-block mx-2"
            />
            Advantage
          </h2>
          <p className="mt-2 md:mt-4 2xl:mt-6 text-slate-300 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl leading-relaxed font-light text-center max-w-4xl mx-auto">
            Premium service isn&apos;t just about technology — it&apos;s about
            the partnership, process, and protection that only IDR delivers.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row h-auto md:h-[450px] xl:h-[500px] 2xl:h-[550px] gap-2">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            const isExpanded =
              (!isTouch && false) || (isTouch && activeCard === idx);

            return (
              <div
                key={idx}
                onClick={() => {
                  if (isTouch) {
                    setActiveCard(activeCard === idx ? null : idx);
                  }
                }}
                className={`relative group cursor-pointer overflow-hidden flex-1 transition-all duration-700 ease-in-out
                  ${
                    !isTouch
                      ? "hover:flex-[2.5] lg:hover:flex-[3]"
                      : activeCard === idx
                      ? "flex-[2.5]"
                      : "flex-1"
                  }
                  ${isVisible ? "opacity-100" : "opacity-0 translate-y-6"}
                  rounded-2xl min-h-[320px] sm:min-h-[380px] md:min-h-[420px]
                `}
                style={{
                  transitionDelay: isVisible ? `${adv.delay}ms` : "0ms",
                }}
              >
                {/* Background Image */}
                <Image
                  src={adv.image}
                  alt={adv.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 ${
                    isExpanded ? "from-black/90 via-black/30" : ""
                  }`}
                ></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center text-center justify-end px-4 sm:px-6 pb-6 sm:pb-8 transition-all duration-500">
                  <Icon className="w-10 h-10 xl:w-12 2xl:w-14 mb-2 drop-shadow-lg" />
                  <h3 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-semibold drop-shadow-lg">
                    {adv.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-sm xl:text-lg 2xl:text-xl font-light text-gray-200 mt-3 leading-relaxed max-w-xl transition-all duration-500
                      ${
                        // Desktop hover logic
                        !isTouch
                          ? "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"
                          : // Touch logic — only visible when expanded
                            activeCard === idx
                          ? "opacity-100 max-h-40"
                          : "opacity-0 max-h-0"
                      }
                    `}
                  >
                    {adv.description}
                  </p>

                  {/* Button */}
                  <Link href={adv.url}
                    className={`mt-4 px-6 py-2 border-2 border-white rounded-full text-white transition-all duration-500 hover:bg-white hover:text-[#0B1218] text-sm xl:text-base 2xl:text-lg font-medium
                      ${
                        // Desktop hover logic
                        !isTouch
                          ? "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                          : // Touch logic — only visible when expanded
                            activeCard === idx
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }
                    `}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


