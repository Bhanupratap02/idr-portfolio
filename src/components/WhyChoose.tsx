"use client";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const tabs = [
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
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  // Play/pause only active video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeTab) {
        // try/catch for autoplay policies in some browsers
        const p = video.play();
        if (p && typeof p.then === "function") p.catch(() => {});
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
      const activeCard = container?.children[activeTab];
      if (!container || !activeCard) return;

      const containerRect = container.getBoundingClientRect();
      const cardRect = activeCard.getBoundingClientRect();

      // distance from container left edge to the card's left edge (relative to scroll)
      const cardLeftRelativeToScroll =
        cardRect.left - containerRect.left + container.scrollLeft;
      const targetScroll =
        cardLeftRelativeToScroll - containerRect.width / 2 + cardRect.width / 2;

      // clamp
      const maxScroll = container.scrollWidth - containerRect.width;
      let offset = Math.max(0, Math.min(targetScroll, maxScroll));

      container.scrollTo({ left: offset, behavior: "smooth" });
    }, 80); // slight delay to let layout/styling settle

    return () => clearTimeout(timer);
  }, [activeTab]);

  // Ensure first card is centered on initial load (in case it renders before layout)
  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      const firstCard = container?.children[0];
      if (!container || !firstCard) return;
      const containerRect = container.getBoundingClientRect();
      const cardRect = firstCard.getBoundingClientRect();
      const leftRelative = cardRect.left - containerRect.left + container.scrollLeft;
      const target = leftRelative - containerRect.width / 2 + cardRect.width / 2;
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
    <section className="w-full bg-white text-gray-900 py-16 px-4 md:px-10 xl:px-12 2xl:px-20 3xl:px-32 overflow-hidden">
      <div className="w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 pb-4 mb-10 relative border-b border-gray-200 max-w-7xl mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(index);
                setProgress(0);
              }}
              className={`relative text-sm md:text-base font-medium pb-2 transition-all duration-300 ${
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
                index === activeTab ? "scale-100 opacity-100" : "scale-95 opacity-50"
              }
              w-[95%] md:w-[85%] xl:w-[90%] 2xl:w-[75%] 3xl:w-[60%]
              bg-gray-50 rounded-2xl shadow-md flex flex-col lg:flex-row items-stretch overflow-hidden`}
            >
              {/* Text Section */}
              <div className="flex-[45%] order-2 lg:order-1 flex flex-col justify-center px-6 md:px-8 py-8 space-y-4">
                <div className="mx-auto max-w-[95%] md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] 3xl:max-w-[60%]">
                  <h3 className="text-xl md:text-3xl font-semibold">{tab.heading}</h3>
                  <p className="text-gray-600 text-sm md:text-base mt-2">{tab.description}</p>
                  <ul className="mt-4 space-y-2">
                    {tab.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                        <span className="text-blue-600 font-semibold">•</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Section */}
              <div className="relative flex-[55%] order-1 lg:order-2 w-full h-[500px] md:h-[550px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[700px]">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={tab.video}
                  muted={isMuted}
                  playsInline
                  loop={false}
                  className="w-full h-full object-fill"
                />
                {index === activeTab && (
                  <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white text-xs md:text-sm px-3 py-1.5 rounded-full hover:bg-black/70 backdrop-blur-sm"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX size={16} /> <span>Click for sound</span>
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
      </div>
    </section>
  );
}
