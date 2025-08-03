
/** @format */
// components/Hero.tsx
"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  { src: "/videos/video_1.mov", title: "", text: "" },
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

export default function Hero2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset loading state for new video
    setIsLoading(true);
    setHasError(false);

    const onTimeUpdate = () => {
      const remainingTime = Math.ceil(video.duration - video.currentTime);
      setSecondsLeft(remainingTime > 0 ? remainingTime : 0);
    };

    const onEnded = () => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const onLoadedData = () => {
      setIsLoading(false);
    };

    const onCanPlay = () => {
      setIsLoading(false);
    };

    const onError = () => {
      setIsLoading(false);
      setHasError(true);
      console.error('Video failed to load:', currentSlide.src);
    };

    // Attach listeners
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);

    // Play video when loaded
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Video play failed:', error);
          setIsLoading(false);
          setHasError(true);
        });
    }

    return () => {
      // Clean listeners
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    <section className="relative w-full bg-[#202020] overflow-hidden">
      {/* Use aspect ratio container for consistent video display with increased height for ultrawide */}
      <div className="relative w-full aspect-[9/16] sm:aspect-[16/9] overflow-hidden">
        {/* Video Container */}
        <div className="absolute inset-0 w-full h-full">
          <video
            key={currentSlide.src} // force reload on slide change
            ref={videoRef}
            src={currentSlide.src}
            muted
            playsInline
            autoPlay
            className="w-full h-full object-cover xl:object-fill "
          />

          {/* Loading State - only show when actually loading */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#202020] flex items-center justify-center">
              {/* <div className="text-white opacity-50">Loading...</div> */}
            </div>
          )}

          {/* Error State - show if video fails to load */}
          {hasError && (
            <div className="absolute inset-0 bg-[#202020] flex items-center justify-center">
              <div className="text-red-400 opacity-75">
                Failed to load video
              </div>
            </div>
          )}
        </div>

        {/* Text Overlay for 3rd and 4th slides */}
        {(activeIndex === 2 || activeIndex === 3) && (
          <div className="absolute inset-0 top-[10%] md:top-0 flex items-start md:items-center  justify-start">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              {/* Left-aligned container with max width to prevent centering */}
              <div className="max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                <div className="rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 text-white">
                  <h2 className="text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-4 xl:mb-4 2xl:mb-8 leading-tight">
                    {currentSlide.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-2xl mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 leading-relaxed opacity-90 max-w-3xl xl:max-w-4xl">
                    {currentSlide.text}
                  </p>
                  <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                    <button className="bg-[#052557] hover:bg-[#052557]/90 text-white px-6 lg:px-8 xl:px-8 2xl:px-12 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl transition-colors">
                      Our Products
                    </button>
                    <button className="border border-white hover:bg-white hover:text-black text-white px-6 lg:px-8 xl:px-8 2xl:px-12 py-2 lg:py-3 xl:py-4 2xl:py-5 rounded-lg font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slider Dots with Countdown - Responsive positioning */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-[15%] xl:bottom-[15%] 2xl:bottom-[40%] left-4 sm:left-6 lg:left-8 xl:left-10 sm:right-4  lg:right-8 xl:right-10 z-20">
          <div className="flex sm:hidden items-center justify-start space-x-4">
            {/* Mobile: Horizontal dots at bottom left */}
            {[0, 1, 2, 3].map((i) =>
              i === activeIndex ? (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs font-medium shadow-lg"
                >
                  {secondsLeft}
                </div>
              ) : (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="w-2 h-2 rounded-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
                ></div>
              )
            )}
          </div>

          <div className="hidden sm:flex sm:absolute sm:bottom-0  sm:right-0 flex-col items-center space-y-4 lg:space-y-6">
            {/* Desktop: Vertical dots at bottom right */}
            {[0, 1, 2, 3].map((i) =>
              i === activeIndex ? (
                <div
                  key={i}
                  className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white bg-[#052557] flex items-center justify-center text-white text-xs lg:text-sm font-medium shadow-lg"
                >
                  {secondsLeft}
                </div>
              ) : (
                <div
                  key={i}
                  className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-white/60 hover:bg-white/80 transition-colors cursor-pointer"
                  onClick={() => setActiveIndex(i)}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}