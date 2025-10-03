/** @format */

import CheckImg from "@/assets/partners/vicon/check.png";
import CertifiedImg from "@/assets/partners/vicon/certified.png";
import SecureImg from "@/assets/partners/vicon/secure.png";
import Image from "next/image";
import cameraGroupImg from "@/assets/partners/vicon/camera-group.png";

const features = [
  {
    icon: CheckImg,
    title: "End-to-End Deployment",
    description: "From design to installation, programming and ongoing support",
  },
  {
    icon: CertifiedImg,
    title: "In-House Certified Experts",
    description: "Trained and certified Vicon + VAX specialists",
  },
  {
    icon: SecureImg,
    title: "Reliable Security",
    description:
      "Robust systems with redundant failsafes and emergency protocols",
  },
];

export default function BuildSpeedSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-30 bg-white">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
          {/* Features Content */}
          <div className="space-y-4  md:space-y-5 xl:space-y-6 2xl:space-y-7">
            <div className="text-left max-w-none">
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-3 sm:mb-4 md:mb-5 xl:mb-6 2xl:mb-7">
                Built for Speed. Trusted for Security.
              </h2>
              <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light">
                IDR delivers fully integrated video surveillance and access
                control for commercial, educational, and residential spaces.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2  md:gap-3   2xl:gap-3.5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 xl:space-x-5 2xl:space-x-6 p-3 sm:p-4  2xl:p-4.5  rounded-lg  hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="  flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-9 xl:h-9  group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl text-gray-900 mb-1  md:mb-1.5 xl:mb-2  ">
                      {feature.title}
                    </h4>
                    <p className="text-sm  md:text-base xl:text-lg 2xl:text-xl font-light text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src={cameraGroupImg}
                alt="Modern Security Access Control System"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
