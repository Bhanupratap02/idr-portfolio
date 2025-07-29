/** @format */
// components/Hero.tsx
"use client";
import { useState, useEffect, useRef } from "react";
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
  const [secondsLeft, setSecondsLeft] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      const remainingTime = Math.ceil(video.duration - video.currentTime);
      setSecondsLeft(remainingTime > 0 ? remainingTime : 0);
    };
    const onEnded = () => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    };
    // Attach listeners
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    // Play video when loaded
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked (shouldn’t happen with muted)
      });
    }
    return () => {
      // Clean listeners
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [activeIndex]); // Trigger on video change
  const currentSlide = slides[activeIndex];
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-4 md:my-6">
      <section className="relative h-[450px] sm:h-[450px] md:h-[500px] lg:h-[590px] bg-[#202020] rounded-xl overflow-hidden ">
        <div className="w-full h-full relative z-10">
          {/* Carousel of 4 videos */}
          <video
            key={currentSlide.src} // force reload on slide change
            ref={videoRef}
            src={currentSlide.src}
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Text Overlay for 3rd and 4th slides */}
          {(activeIndex === 2 || activeIndex === 3) && (
            <div className="absolute top-2/5 md:top-1/2 left-4 sm:left-10 -translate-y-2/5 md:-translate-y-1/2 text-white p-4 sm:p-6 rounded-xl max-w-xs sm:max-w-lg lg:max-w-xl">
              <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-snug">
                {currentSlide.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mb-4 leading-relaxed">
                {currentSlide.text}
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

        {/* Slider Dots with Countdown */}
        <div className="absolute bottom-4 md:bottom-6 lg:bottom-10 max-sm:left-10 md:right-8 lg:right-10 z-20">
          <div className="flex md:flex-col items-center md:space-y-6 max-sm:space-x-6">
            {[0, 1, 2, 3].map((i) =>
              i === activeIndex ? (
                <div
                  key={i}
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs font-medium"
                >
                  {secondsLeft}
                </div>
              ) : (
                <div key={i} 
                className="w-2 h-2 rounded-full bg-gray-400"></div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Also, consider adding error handling for video loading issues.

