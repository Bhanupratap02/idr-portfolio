/** @format */

import { Cpu, Video, Link } from "lucide-react";

export default function BestOfBothWorlds() {
  const features = [
    {
      title: "Vivotek AI recorders",
      icon: (
        <Cpu className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#2563EB]" />
      ),
    },
    {
      title: "Compatible Vivotek cameras",
      icon: (
        <Video className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#2563EB]" />
      ),
    },
    {
      title: "Vortex Connect licensing",
      icon: (
        <Link className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#2563EB]" />
      ),
    },
  ];
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-[#2E2E2E] mb-3 sm:mb-4 xl:mb-6 2xl:mb-8">
            The Best of Both Worlds
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#626262] font-light">
            Bridge your existing system to the cloud
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12  items-center">
          {/* Left Content */}
          <div>
            {/* Main Description */}
            <div className="mb-6 sm:mb-7 md:mb-8 xl:mb-10 2xl:mb-12">
              <h3 className="text-lg sm:text-xl  md:text-2xl xl:text-[1.65rem] 2xl:text-3xl 3xl:text-4xl text-[#2E2E2E] mb-3 sm:mb-4 xl:mb-5 2xl:mb-6">
                Already running Vivotek on-prem? No problem!
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-[1.35rem]  2xl:text-2xl 3xl:text-3xl text-[#626262] mb-6 sm:mb-7 md:mb-8 xl:mb-10 2xl:mb-12 font-light leading-relaxed max-w-3xl 3xl:max-w-4xl">
                We can bridge your system to the cloud using our hybrid approach
                that lets you keep your existing investment while adding smart
                cloud functionality.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4 2xl:space-y-5 3xl:space-y-6 mb-6 sm:mb-7 md:mb-8  2xl:mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 bg-[#EFF6FF] p-4 rounded-lg"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="text-base md:text-lg 2xl:text-xl   text-[#2E2E2E]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-8">
              <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#166534]">
                No need to rip and replace — just evolve your system
                intelligently.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/384101a41bfcb7f8be58bf7aef44763f78c0b825?width=1184"
                  alt="Hybrid System Diagram"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
