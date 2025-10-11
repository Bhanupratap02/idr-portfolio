/** @format */

import { CheckIcon } from "lucide-react";
import feature1 from "@/assets/partners/speco/feature-1.png";
import feature2 from "@/assets/partners/speco/feature-2.png";
import feature3 from "@/assets/partners/speco/feature-3.png";
import feature4 from "@/assets/partners/speco/feature-4.png";
import Image from "next/image";
export default function SmartFeaturesSection() {
  const features = [
    {
      image: feature1,
      title: "Audio Alerts & Communication",
      scale: "scale-155",
      description:
        "Enhance your security with two-way audio communication, pre-recorded messages, and real-time talk-down capabilities.",
      bulletPoints: [
        "Talk-Down / Tone / Pre-recorded Messages",
        "Integrated Microphones & Speakers",
        "Audio-Triggered Recording",
      ],
    },
    {
      image: feature2,
      title: "SecureGuard® VMS",
      scale: "scale-130",
      description:
        "Access your security system from anywhere with our powerful video management software.",
      bulletPoints: [
        "Live & Playback from Any Device",
        "Secure Remote Access",
        "Multi-Site Management",
      ],
    },
    {
      image: feature3,
      title: "License Plate Recognition (LPR)",
      scale: "scale-160 bg-black",
      description:
        "Automatically identify and track vehicles entering and exiting your property.",
      bulletPoints: [
        "High-Accuracy Plate Reading",
        "Database Integration",
        "Automated Alerts for Watchlist Matches",
      ],
    },
    {
      image: feature4,
      title: "Access Control Integration",
      scale: "scale-x-155 scale-y-115",
      description:
        "Synchronize your video surveillance with door access for complete security coverage.",
      bulletPoints: [
        "Door + Video Event Sync",
        "Cloud Backup for Redundancy",
        "Alarm System Integration",
      ],
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 w-full">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#2e2e2e] mb-10 sm:mb-12 md:mb-14 xl:mb-16 2xl:mb-20 ">
          Smart Features & Integrations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_12px_rgba(0,0,0,0.15),0px_4px_8px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <div className="p-0 flex flex-col ">
                <div
                  className={`relative w-full h-36 sm:h-40 md:h-48 xl:h-56 2xl:h-64  ${feature.scale} overflow-clip  `}
                >
                  <Image
                    className="w-full h-full object-contain"
                    alt={`${feature.title} - Smart security feature illustration `}
                    src={feature.image}
                    fill
                    priority={index < 2}
                  />
                </div>
              
                <div className="border-t border-gray-200 p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-9 flex flex-col min-h-[220px] sm:min-h-[240px] md:min-h-[260px] xl:min-h-[300px] 2xl:min-h-[320px] overflow-hidden z-20 bg-white">
                  <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#2e2e2e] mb-3 sm:mb-4 xl:mb-5 2xl:mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  text-[#626262] leading-relaxed mb-4 sm:mb-5 xl:mb-6  flex-grow font-light">
                    {feature.description}
                  </p>

                  <div className="flex flex-col gap-2 sm:gap-2.5 xl:gap-3 2xl:gap-3.5">
                    {feature.bulletPoints.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start gap-2 sm:gap-3 xl:gap-3.5 2xl:gap-4"
                      >
                        <CheckIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 mt-0.5 sm:mt-1 text-blue-800 flex-shrink-0 " />
                        <span className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg  2xl:text-xl  text-[#626262] leading-relaxed font-light">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
