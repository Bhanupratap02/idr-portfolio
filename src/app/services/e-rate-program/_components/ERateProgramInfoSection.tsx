/** @format */

import { GraduationCap, Globe, Users } from "lucide-react";
import Image from "next/image";
import E_Rate_Meeting from "@/assets/services/e-rate-program/meeting.png";
export default function ERateProgramInfoSection() {
  const process = [
    {
      id: 1,
      title: "Bidding Process",
    },
    {
      id: 2,
      title: "Expert Guidance",
    },
    {
      id: 3,
      title: "Training & Support",
    },
  ];
  const features = [
    {
      id: 1,
      icon: (
        <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-white" />
      ),
      desc: "The E-Rate Program is a federal program that provides discounts to assist eligible schools and libraries in the United States to obtain affordable telecommunications and internet access. It is one of four universal service programs funded through the Universal Service Fund.",
    },
    {
      id: 2,
      icon: (
        <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-white" />
      ),
      desc: "Schools and libraries may request funding in two categories of service: Category One (Data Transmission Services and Internet Access) and Category Two (Internal Connections, Managed Internal Broadband Services, and Basic Maintenance of Internal Connections).",
    },
    {
      id: 3,
      icon: (
        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-white" />
      ),
      desc: "Our team provides comprehensive guidance on the E-Rate program, including bidding, application process, and post-approval support to ensure you maximize your funding opportunities.",
    },
  ];
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32 bg-[#F7F6F2]">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28 3xl:gap-32 items-center">
          {/* Left Content */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[328px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[480px] 3xl:max-w-[560px]">
              {/* <div className="w-[328px] h-[328px] relative mx-auto"> */}
              <div className="relative aspect-square">
                <Image
                  src={E_Rate_Meeting}
                  alt="E-Rate Program"
                  className="w-full h-full object-cover rounded-lg "
                />
                {/* Info Card */}
                <div className="absolute -top-8 sm:-top-12 md:-top-16 lg:-top-14 xl:-top-16 2xl:-top-20 3xl:-top-24 -right-2 sm:-right-4 md:-right-6 lg:-right-2 xl:-right-4 2xl:-right-6 3xl:-right-8 bg-white rounded-lg p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 2xl:p-5 3xl:p-6 shadow-lg border border-gray-100 w-24 sm:w-28 md:w-32 lg:w-28 xl:w-36 2xl:w-38 3xl:w-40 z-10">
                  <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-2 xl:space-y-3 2xl:space-y-4 3xl:space-y-5">
                    {process.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-1 sm:gap-2"
                      >
                        <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 bg-[#DBEAFE] rounded-full flex items-center justify-center">
                          <span className="text-[#004AAD] text-[8px] sm:text-xs 2xl:text-sm font-medium">
                            {item.id}
                          </span>
                        </div>
                        <span className="text-black text-[8px] sm:text-xs 2xl:text-sm font-medium">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 lg:-bottom-20 xl:-bottom-24 2xl:-bottom-28 3xl:-bottom-32 -left-12 sm:-left-16 md:-left-20 lg:-left-16 xl:-left-20 2xl:-left-24 3xl:-left-28 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 3xl:w-72 3xl:h-72 bg-[#FFD25D] rounded-full border-4 sm:border-[5px] md:border-[6px] lg:border-[5px] xl:border-[6px] 2xl:border-[8px] 3xl:border-[10px] border-white flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="text-[#2E2E2E] text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold leading-tight mb-1 sm:mb-2 md:mb-3 lg:mb-2 xl:mb-3 2xl:mb-4 3xl:mb-6">
                    8+
                  </div>
                  <div className="text-[#2E2E2E] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-normal leading-tight mb-0 sm:mb-1 md:mb-2 lg:mb-1 xl:mb-2 2xl:mb-3 3xl:mb-3">
                    Years Of
                  </div>
                  <div className="text-[#2E2E2E] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl font-normal leading-tight">
                    Experiences
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium leading-tight">
              What is the E-Rate Program?
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-16">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6 2xl:gap-8 3xl:gap-10"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 bg-[#17254E] rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-[#374151] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
