/** @format */
import Image from "next/image";
import integration from "@/assets/services/surveillance-camera/integration.png";
import cloud from "@/assets/services/surveillance-camera/cloud.png";
import brain from "@/assets/services/surveillance-camera/brain.png";
import bell from "@/assets/services/surveillance-camera/bell.png";
const features = [
  {
    id: 1,
    image: cloud,
    title: "Cloud Access & Storage",
    desc: "Skip the NVR and access your video from anywhere with secure cloud storage and real-time monitoring.",
  },
  {
    id: 2,
    image: brain,
    title: "AI-Powered Detection",
    desc: "Advanced motion detection, facial recognition, and tracking capabilities powered by artificial intelligence.",
  },
  {
    id: 3,
    image: bell,
    title: "Real-Time Alerts",
    desc: "Instant notifications with live video feeds and less than 1 second latency for immediate response.",
  },
];
const capabilities = [
  "Access control systems like Kisi",
  "Building management systems",
  "Tenant and property apps",
  "Intercom systems",
];
export default function SmarterSurveillanceSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16  2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl  font-medium text-[#2E2E2E] leading-tight mb-3 sm:mb-4 xl:mb-6 3xl:mb-8">
            Smarter Surveillance, Built Around You
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] leading-relaxed max-w-2xl sm:max-w-3xl md:max-w-4xl 2xl:max-w-[5xl]  3xl:max-w-6xl mx-auto">
            We specialize in cloud-driven, AI-enabled camera systems from
            top-tier manufacturers like Avigilon, Eagle Eye Networks, Rhombus,
            Verkada, and Vivotek.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid  lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12 mb-12 sm:mb-14 md:mb-16 2xl:mb-20 3xl:mb-24">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 sm:p-7 md:p-8 xl:p-10 3xl:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={`${item.title} icon`}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24  mb-6"
              />

              <h3 className="text-lg sm:text-xl lg:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E] mb-4">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-base  2xl:text-lg 3xl:text-2xl text-[#626262] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Integration Section */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 3xl:p-20">
              <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium text-[#2E2E2E] leading-snug mb-6">
                Deep Integration Capabilities
              </h3>
              <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262] leading-relaxed mb-4 sm:mb-5 md:mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12">
                Our systems are fully integratable with other platforms using
                APIs — from access control and tenant apps to gym software and
                building management systems.
              </p>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 2xl:space-y-5.5 3xl:space-y-8">
                {capabilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 sm:gap-4 2xl:gap-5 3xl:gap-6"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1_11766)">
                          <path
                            d="M8.5 16C10.7543 16 12.9163 15.1571 14.5104 13.6569C16.1045 12.1566 17 10.1217 17 8C17 5.87827 16.1045 3.84344 14.5104 2.34315C12.9163 0.842855 10.7543 0 8.5 0C6.24566 0 4.08365 0.842855 2.48959 2.34315C0.895533 3.84344 0 5.87827 0 8C0 10.1217 0.895533 12.1566 2.48959 13.6569C4.08365 15.1571 6.24566 16 8.5 16ZM12.252 6.53125L8.00195 10.5312C7.68984 10.825 7.18516 10.825 6.87637 10.5312L4.75137 8.53125C4.43926 8.2375 4.43926 7.7625 4.75137 7.47188C5.06348 7.18125 5.56816 7.17813 5.87695 7.47188L7.4375 8.94063L11.123 5.46875C11.4352 5.175 11.9398 5.175 12.2486 5.46875C12.5574 5.7625 12.5607 6.2375 12.2486 6.52812L12.252 6.53125Z"
                            fill="#16A34A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_11766">
                            <path d="M0 0H16V16H0V0Z" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#2E2E2E] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content - Image */}
            <div className="flex items-center justify-center ">
              <Image
                src={integration}
                alt="System Integration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
