"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Shield, ClipboardList, Users } from "lucide-react";

export default function IdrAdvantage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
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
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/idr-advantage/Consultation.jpeg",
      icon: CheckCircle,
      delay: 0,
      url: "/consultation",
    },
    {
      title: "Certified Installation",
      description:
        "Clean, documented installs by manufacturer-certified technicians with no shortcuts.",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/idr-advantage/Certified.jpeg",
      icon: Shield,
      delay: 100,
      url: "/certified-installation",
    },
    {
      title: "Camera Monitoring",
      description:
        "24/7 proactive monitoring with human review, system alerts, and rapid response when it matters most.",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/idr-advantage/camera.jpeg",
      icon: ClipboardList,
      delay: 200,
      url: "/camera-monitoring",
    },
    {
      title: "Ongoing Partnership",
      description:
        "Dedicated support, annual system health checks, and a long-term partner you can count on.",
      image:
        "https://idr-portfolio-storage.s3.amazonaws.com/assets/idr-advantage/partnership.png",
      icon: Users,
      delay: 300,
      url: "/ongoing-partnership",
    },
  ];

  const logo =
    "https://idr-portfolio-storage.s3.amazonaws.com/assets/idr-advantage/High%20Res%20IDR%20Logo%20w%20Swoosh%20only%20red.png";

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
              width={200}
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

                  <p
                    className={`text-xs sm:text-sm xl:text-lg 2xl:text-xl font-light text-gray-200 mt-3 leading-relaxed max-w-xl transition-all duration-500
                      ${
                        !isTouch
                          ? "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"
                          : activeCard === idx
                          ? "opacity-100 max-h-40"
                          : "opacity-0 max-h-0"
                      }
                    `}
                  >
                    {adv.description}
                  </p>

                  <Link
                    href={adv.url}
                    className={`mt-4 px-6 py-2 border-2 border-white rounded-full text-white transition-all duration-500 hover:bg-white hover:text-[#0B1218] text-sm xl:text-base 2xl:text-lg font-medium
                      ${
                        !isTouch
                          ? "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                          : activeCard === idx
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
