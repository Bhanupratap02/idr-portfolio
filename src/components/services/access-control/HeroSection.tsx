/** @format */

import Image from "next/image";
import hero_image from "@/assets/services/access-control/hero_img.png";
import cloud from "@/assets/services/access-control/icons/cloud.png";
import door_control from "@/assets/services/access-control/icons/door_control.png";
import mobile_first from "@/assets/services/access-control/icons/mobile_support.png";
export default function HeroSection() {
  const features = [
    {
      title: "Cloud & On-Premise Systems",
      image: cloud,
      imageAlt: "Cloud & On-Premise Systems Icon",
      imageStyle: "w-10 h-8",
    },
    {
      title: "Single or Multi-Door Control",
      image: door_control,
      imageAlt: "Single or Multi-Door Control Icon",
      imageStyle: "w-9 h-8",
    },
    {
      title: "Mobile-First Support",
      image: mobile_first,
      imageAlt: "Mobile-First Support Icon",
      imageStyle: "w-6 h-8",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-4 lg:px-28 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[#2E2E2E] text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6">
                Access Control Systems
              </h1>

              <h2 className="text-[#2E2E2E] text-2xl lg:text-2xl 2xl:text-3xl font-medium leading-relaxed mb-2 xl:mb-4">
                Smarter Entry, Stronger Security
              </h2>

              <p className="text-[#4B5563] text-lg leading-relaxed mb-10">
                At IDR Technology Solutions, we design, install, and support
                access control systems that secure your space without slowing
                you down.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-4 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        className={feature.imageStyle}
                      />
                    </div>
                    <h3 className="text-[#2E2E2E] text-base font-medium text-center">
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>

              <button className="bg-[#FFD700] text-[#2E2E2E] rounded-md px-6 py-3 text-base font-medium shadow-lg hover:bg-yellow-500 transition-colors">
                Get a Free Consultation
              </button>
            </div>

            <div>
              <Image
                src={hero_image}
                alt="Access Control System Interface"
                className="w-full h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
