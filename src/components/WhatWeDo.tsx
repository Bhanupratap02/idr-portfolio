/** @format */
import Image from "next/image";
import img from "@/assets/image2.png"; // Replace with actual image

const WhatWeDo = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold text-[#3D3D3D] mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-[#333] leading-relaxed max-w-3xl mx-auto">
            We provide complete low-voltage design and installation services.
            Whether you need a single install or a full-building deployment, our
            team handles every detail — design, installation, documentation, and
            support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 xl:gap-32 items-center">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-[330px] lg:h-[350px] xl:w-[400px] xl:h-[420px] 2xl:w-[460px] 2xl:h-[480px] 3xl:w-[520px] 3xl:h-[540px]">
            <div className="relative w-full h-0 pb-[100%] lg:pb-0 lg:h-full rounded-xl overflow-hidden">
              <Image
                src={img}
                alt="Security Camera"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Services List */}
          <div className="relative">
            {/* Scroll Indicator */}
            <div className="absolute -left-4 sm:left-0 top-0 w-2 h-full hidden md:block">
              <div className="w-full h-full bg-[#DEDEDE]" />
              <div className="w-2 h-12 bg-[#052557] rounded-full absolute top-0" />
            </div>

            <div className="ml-6 sm:ml-8 space-y-6">
              {[
                "Access Control & Intercom Systems",
                "Surveillance Cameras & Security Alarms",
                "Audio/Visual Systems for Commercial & Education",
                "Structured Cabling & Fiber Optics",
                "IT Infrastructure & Wi-Fi",
                "Data Center Builds",
                "Smart Conference Rooms",
                "Sound Masking & Speaker Systems",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#052557] rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-[#151515] capitalize">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
