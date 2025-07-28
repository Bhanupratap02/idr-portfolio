/** @format */
// components/Hero.tsx
"use client";
import { useState, useEffect } from "react";
const slides = [
  { src: "/videos/video_1.mp4", title: "", text: "" },
  { src: "/videos/video_2.mp4", title: "", text: "" },
  {
    src: "/videos/video_3.mp4",
    title: "Design. Installation.Support. One Trusted Partner.",
    text: "Founded in 2007, IDR Technology Solutions is a full-service systems integrator specializing in A/V, security, networking, and IT infrastructure. Our mission is simple: deliver high-quality technology solutions with expert execution, total transparency, and unmatched customer support — every step of the way.",
  },
  {
    src: "/videos/video_4.mp4",
    title: "Design. Installation.Support. One Trusted Partner.",
    text: "Founded in 2007, IDR Technology Solutions is a full-service systems integrator specializing in A/V, security, networking, and IT infrastructure. Our mission is simple: deliver high-quality technology solutions with expert execution, total transparency, and unmatched customer support — every step of the way.",
  },
];
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-4 md:my-6">
      <section className="relative h-[450px] sm:h-[450px] md:h-[500px] lg:h-[590px] bg-[#202020] rounded-xl overflow-hidden ">
        <div className="w-full h-full relative">
          {/* Carousel of 4 images */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
              {(i === 2 || i === 3) && (
                <div className="absolute top-2/5 md:top-1/2 left-4 sm:left-10 -translate-y-2/5 md:-translate-y-1/2 text-white p-4 sm:p-6 rounded-xl max-w-xs sm:max-w-lg lg:max-w-xl">
                  <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
                    {slide.text}
                  </p>
                  <div className="flex space-x-4">
                    <button className="bg-[#052557] text-white px-6 py-2 rounded-lg font-semibold text-sm lg:text-base">
                      Our Products
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-lg font-semibold text-sm lg:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Slider dots */}
        <div className="absolute  bottom-4 md:bottom-6 lg:bottom-10  max-sm:left-10 md:right-8 lg:right-10 z-10">
          <div className="flex md:flex-col items-center  md:space-y-6 lg:space-y-6 max-sm:space-x-6">
            <div className="relative">
              <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2  border-white bg-[#052557] flex items-center justify-center text-white text-xs">
                {1}
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
   {
       {
         /* <div className="w-8 h-8 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center">
                <span className="text-white text-xs font-bold bg-[#052557] w-6 h-6 rounded-full flex items-center justify-center">
                  1
                </span>
              </div> */
       }
     /* <div className="absolute bottom-4 right-4 z-20 flex flex-col items-center space-y-2">
          {slides.map((_, i) => (
            <div key={i} className="relative">
              {i === activeIndex ? (
                <div className="w-6 h-6 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs">
                  {i + 1}
                </div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              )}
            </div>
          ))}
        </div> */
   }