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
    <div className="px-6 lg:px-8 my-6">
      <section className="relative h-96 lg:h-[590px] bg-[#202020] rounded-xl overflow-hidden ">
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
                <div className="absolute top-1/2 -translate-y-1/2 left-10 text-white p-6 rounded-xl max-w-xl">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base lg:text-lg mb-6 leading-relaxed">
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
        <div className="absolute bottom-6 right-6 z-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center">
                <span className="text-white text-xs font-bold bg-[#052557] w-6 h-6 rounded-full flex items-center justify-center">
                   1
                </span>
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
