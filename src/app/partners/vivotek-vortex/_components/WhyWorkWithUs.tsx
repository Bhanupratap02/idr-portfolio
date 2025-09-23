/** @format */

import { Award, HandHeart, Puzzle } from "lucide-react";

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: Award,
      title: "Proven Experience",
      description:
        "IDR has installed Vivotek systems in over 100 buildings across the U.S., including multi-family housing, commercial sites, and mission-critical environments.",
    },
    {
      icon: HandHeart,
      title: "White-Glove Service",
      description:
        "As a Vivotek Gold Partner, we provide direct support, project consulting, and post-install documentation with expert setup and responsive technical help.",
    },
    {
      icon: Puzzle,
      title: "Custom Solutions",
      description:
        "Whether you're starting from scratch or upgrading a legacy system, we'll design a solution that fits your budget, bandwidth, and building layout.",
    },
  ];

  return (
    <section className="bg-[#1E3A8A] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-38">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12  items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="mb-8 sm:mb-8 md:mb-10 2xl:mb-14 3xl:mb-16 ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white mb-3 sm:mb-4 xl:mb-6 2xl:mb-8 ">
                Why Work With IDR?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[1.35rem]  2xl:text-3xl 3xl:text-4xl text-[#DBEAFE] leading-relaxed font-light">
                We don&apos;t just install cameras — we design full surveillance
                ecosystems.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 2xl:space-y-6 3xl:space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 "
                  >
                    <div className="flex-shrink-0 mt-2">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#FACC15]" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-lg xl:text-[1.35rem] 2xl:text-2xl 3xl:text-3xl  text-white mb-2 md:mb-3 2xl:mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#DBEAFE]  font-light 2xl:leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3]  w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/37413baae6c8bb8157ee8e9f4a7f5231ccfce78f?width=1184"
                  alt="IDR Team at Work"
                  className="w-full h-full max-xl:object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
