"use client";

import { useEffect, useRef, useState } from "react";
import VideoProgressDot from "./VideoProgressDot";

const videos = [
  { src: "/videos/video1.mp4", heading: "Design. Installation.", sub: "Support. One Trusted Partner." },
  { src: "/videos/video2.mp4", heading: "Surveillance", sub: "Reliable security you can trust." },
  // add more
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const duration = 12; // seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [current]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <video
        key={current}
        ref={videoRef}
        src={videos[current].src}
        autoPlay
        muted
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-20 text-white bg-gradient-to-r from-black/60 to-transparent">
        <h1 className="text-5xl font-bold mb-4">{videos[current].heading}</h1>
        <p className="text-lg mb-6">{videos[current].sub}</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 px-6 py-2 rounded">Our Products</button>
          <button className="border border-white px-6 py-2 rounded">Learn More</button>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
        {videos.map((_, index) => (
          <VideoProgressDot
            key={index}
            active={index === current}
            duration={duration}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
}
