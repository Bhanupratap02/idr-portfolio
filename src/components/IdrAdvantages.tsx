"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle, Shield, ClipboardList, Users } from "lucide-react";
import img1 from "@/assets/idr-advantage/Consultation.jpeg";
import img2 from "@/assets/idr-advantage/Certified.jpeg";
import img3 from "@/assets/idr-advantage/camera.jpeg";
import logo from "@/assets/idr-advantage/High Res IDR Logo w Swoosh only red.png";

export default function IdrAdvantage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
      description: "Tailored security and technology plans built for your environment, goals, and budget.",
      image: img1,
      icon: CheckCircle,
      button: true,
      delay: 0,
    },
    {
      title: "Certified Installation",
      description:
        "Clean, documented installs by manufacturer-certified technicians with no shortcuts.",
      image: img2,
      icon: Shield,
      button: true,
      delay: 100,
    },
    {
      title: "Camera Monitoring",
      description: "24/7 proactive monitoring with human review, system alerts, and rapid response when it matters most.",
      image: img3,
      icon: ClipboardList,
      button: true,
      delay: 200,
    },
    {
      title: "Ongoing Partnership",
      description:
        "Dedicated support, annual system health checks, and a long-term partner you can count on.",
      image: img1,
      icon: Users,
      button: true,
      delay: 300,
    },
  ];

  return (
    <section
      id="idr-advantage"
      className="bg-[#0B1218] text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
<h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
  The{/* ← NO space here */}
  <Image
    src={logo}
    alt="IDR Logo"
    height={80}
    className="h-[1.2em] w-auto align-middle inline-block"
  />{/* ← NO space here */}
  Advantage
</h2>


          <p className="mt-4 md:mt-6 text-slate-300 text-base md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
            Premium service isn&apos;t just about technology — it&apos;s about the
            partnership, process, and protection that only IDR delivers.
          </p>
        </div>

        {/* Flex-grow cards */}
        <div className="mt-12 flex h-[400px] gap-2">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className={`
                  relative group cursor-pointer overflow-hidden
                  flex-1 transition-all duration-500 ease-in-out
                  hover:flex-[2]
                  ${isVisible ? "opacity-100" : "opacity-0 translate-y-6"}
                `}
                style={{
                  transitionDelay: isVisible ? `${adv.delay}ms` : "0ms",
                  transitionDuration: "800ms",
                }}
              >
                {/* Background Image */}
                <Image
                  src={adv.image}
                  alt={adv.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-500"></div>

                {/* Content */}
                <div
                  className={`
                    absolute inset-0 flex flex-col items-center text-center px-6
                    transition-all duration-500
                    group-hover:justify-center
                    justify-end pb-6
                  `}
                >
                  {/* Icon */}
                  <Icon
                    className="w-12 h-12 mb-2 transition-all duration-500 opacity-100 group-hover:mb-4"
                  />

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{adv.title}</h3>

                  {/* Description + Button (only on hover) */}
                  {adv.description && (
                    <p className="text-sm text-gray-300 mt-4 opacity-0 group-hover:opacity-100 transition duration-500">
                      {adv.description}
                    </p>
                  )}
                  {adv.button && (
                    <button className="mt-4 px-4 py-2 border border-white rounded-full opacity-0 group-hover:opacity-100 transition duration-500">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
