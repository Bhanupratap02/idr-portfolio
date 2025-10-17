/** @format */

"use client";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import WhyChooseUsFeatures from "@/components/WhyChooseUsFeatures";

interface Tab {
  id: number;
  title: string;
  heading: string;
  description: string;
  points: string[];
  video: string;
}
const tabs: Tab[] = [
  {
    id: 1,
    title: "01 – Integrated Security Expertise",
    heading: "Integrated Security Expertise",
    description:
      "Unified Security, Real-Time Response AI-powered cameras, sensors, and alerts working together for faster detection and action.",
    points: [
      "Intelligent search by clothing, color, or behavior",
      "Automated alerts sent directly to radios and devices",
      "Seamless integration of video, access, and sensors",
    ],
    video: "/videos/integrated_security.mp4",
  },
  {
    id: 2,
    title: "02 – Smart Consultative Design",
    heading: "Smart Consultative Design",
    description:
      "Purpose-Built Planning, Guided by Experience Every IDR system starts with careful consultation, aligning design with your site’s real-world needs.",
    points: [
      "Collaborative project planning and review",
      "Expert recommendations based on proven field experience",
      "Designs reviewed and supported by IDR’s engineering staff",
      "Scalable designs built for future growth",
    ],
    video: "/videos/smart_consultative.mp4",
  },
  {
    id: 3,
    title: "03 – Camera Monitoring and Response",
    heading: "Camera Monitoring and Response",
    description:
      "Proactive Monitoring. Coordinated Action.AI-powered alerts, instant lockdowns, and live monitoring keep your sites secure and teams informed.",
    points: [
      "Continuous monitoring with real-time event detection",
      "Rapid alerting, lockdown, and dispatch coordination with local authorities",
      "Seamless communication across cameras, access control, and security personnel",
    ],
    video: "/videos/camera_monitoring.mp4",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Play/pause only active video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeTab) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented
          });
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeTab]);

  // Track progress + auto-advance on ended
  useEffect(() => {
    const video = videoRefs.current[activeTab];
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      setProgress(0);
      setActiveTab((prev) => (prev + 1) % tabs.length);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [activeTab]);

  // Robust centering calculation using getBoundingClientRect()
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container || !container.children[activeTab]) return;

      const activeCard = container.children[activeTab] as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const cardRect = activeCard.getBoundingClientRect();

      const cardLeftRelativeToScroll =
        cardRect.left - containerRect.left + container.scrollLeft;
      const targetScroll =
        cardLeftRelativeToScroll - containerRect.width / 2 + cardRect.width / 2;

      const maxScroll = container.scrollWidth - containerRect.width;
      const offset = Math.max(0, Math.min(targetScroll, maxScroll));

      container.scrollTo({ left: offset, behavior: "smooth" });
    }, 80);

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Ensure first card is centered on initial load (in case it renders before layout)

  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container || !container.children[0]) return;

      const firstCard = container.children[0] as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const cardRect = firstCard.getBoundingClientRect();
      const leftRelative =
        cardRect.left - containerRect.left + container.scrollLeft;
      const target =
        leftRelative - containerRect.width / 2 + cardRect.width / 2;
      const maxScroll = container.scrollWidth - containerRect.width;
      const offset = Math.max(0, Math.min(target, maxScroll));
      container.scrollTo({ left: offset, behavior: "auto" });
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => setIsMuted((v) => !v);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.muted = isMuted;
    });
  }, [isMuted]);

  return (
    <section className="w-full bg-white text-gray-900 py-10 sm:pt-12 sm:pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-12 xl:pt-24 xl:pb-16 2xl:pt-28 2xl:pb-16 3xl:pb-18 px-4 md:px-10 xl:px-12 2xl:px-20 3xl:px-32 overflow-hidden">
      <div className="w-full max-w-[200rem] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-12 xl:mb-14 ">
          Why Choose Us
        </h2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center md:justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 pb-3 sm:pb-4 md:pb-4 lg:pb-5 mb-8  md:mb-10   2xl:mb-14 relative border-b border-gray-200 max-w-7xl mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(index);
                setProgress(0);
              }}
              className={`relative text-sm md:text-base 2xl:text-lg font-medium pb-2  md:pb-2.5 2xl:pb-3 transition-all duration-300 ${
                activeTab === index
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.title}
              {activeTab === index && (
                <span
                  className="absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Carousel Section
            NOTE: removed `justify-center` so scroll math is consistent.
        */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`snap-center flex-shrink-0 transition-all duration-700 ${
                index === activeTab
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-50"
              }
              w-[95%] md:w-[85%] xl:w-[90%] 2xl:w-[75%] 3xl:w-[60%]
              bg-gray-50 rounded-2xl shadow-md flex flex-col lg:flex-row items-stretch overflow-hidden`}
            >
              {/* Text Section */}
              <div className="flex-[45%] order-2 lg:order-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12  py-6 sm:py-8 md:py-10 lg:py-10 xl:py-12 2xl:py-14 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-5 xl:space-y-6 2xl:space-y-8">
                <div className="mx-auto max-w-full md:max-w-full xl:max-w-[95%] 2xl:max-w-[90%] 3xl:max-w-[70%]">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-tight text-gray-900">
                    {tab.heading}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl leading-relaxed mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-5 2xl:mt-6">
                    {tab.description}
                  </p>
                  <ul className="mt-3 sm:mt-4 md:mt-5 lg:mt-5 xl:mt-6 2xl:mt-8 space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-3 xl:space-y-4 2xl:space-y-4.5">
                    {tab.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4 text-gray-700 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl leading-relaxed"
                      >
                        <span className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl flex-shrink-0 -mt-0.5">
                          •
                        </span>{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Section */}
              <div className="relative flex-[55%] order-1 lg:order-2 w-full h-[500px] md:h-[550px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[700px]">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={tab.video}
                  muted={isMuted}
                  playsInline
                  loop={false}
                  className="w-full h-full object-fill"
                />
                {index === activeTab && (
                  <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white text-xs md:text-sm  px-2 sm:px-3 md:px-3 lg:px-4 xl:px-5 2xl:px-6 py-1 sm:py-1.5 md:py-2 lg:py-2.5 2xl:py-3  rounded-full hover:bg-black/70 backdrop-blur-sm"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX
                          size={16}
                          className="sm:w-2 sm:h-2 md:w-4.5 md:h-4.5  2xl:w-5 2xl:h-5"
                        />{" "}
                        <span>Click for sound</span>
                      </>
                    ) : (
                      <>
                        <Volume2 size={16} /> <span>Mute sound</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <WhyChooseUsFeatures />
      </div>
    </section>
  );
}
