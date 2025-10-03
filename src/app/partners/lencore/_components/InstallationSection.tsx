/** @format */



import emergencyIcon from "@/assets/partners/lencore/emergency.png";
import bgmIcon from "@/assets/partners/lencore/bgm.png";
import buildingIcon from "@/assets/partners/lencore/building.png";
import pagingIcon from "@/assets/partners/lencore/paging.png";
import checkIcon from "@/assets/partners/lencore/check.png";
import Image from "next/image";
export default function InstallationSection() {
  const integrationItems = [
    {
      icon: emergencyIcon,
      text: "Emergency Notification Integration",
    },
    {
      icon: bgmIcon,
      text: "BGM (Background Music) Audio Channels",
    },
    {
      icon: buildingIcon,
      text: "Smart Building Management Tie-Ins",
    },
    {
      icon: pagingIcon,
      text: "Paging Systems with Priority Overrides",
    },
  ];

  const installationFeatures = [
    "Full as-built documentation",
    "System tuning & commissioning",
    "User training and system walkthrough",
    "Ongoing support from our in-house team",
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 w-full ">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center justify-center mx-auto">
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-6 xl:gap-7 2xl:gap-8  lg:mx-auto">
            <h2 className="font-medium text-[#2e2e2e] text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl  leading-tight">
              Integrations & Add-Ons
            </h2>

            <div className="flex flex-col gap-1  md:gap-2  xl:gap-2.5 2xl:gap-3.5 ">
              {integrationItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8 p-2 md:p-2.5  xl:p-3.5 2xl:p-4  rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl  hover:bg-blue-50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10  flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      alt={`${item.text} integration icon`}
                      src={item.icon}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 24px, (max-width: 768px) 32px, (max-width: 1024px) 28px, (max-width: 1280px) 32px, (max-width: 1536px) 40px, 48px"
                    />
                  </div>
                  <div className="font-medium text-[#2e2e2e] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  leading-relaxed group-hover:text-blue-600 transition-colors duration-300">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6 lg:mx-auto">
            <h2 className="font-medium text-[#2e2e2e] text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl  leading-tight">
              White Glove Installation
            </h2>

            <div className="flex flex-col gap-2  md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4 ">
              <p className="font-light text-[#626262] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl  leading-relaxed">
                We don&apos;t just drop in emitters and leave. Every project
                includes:
              </p>

              <div className="flex flex-col gap-1  md:gap-2  xl:gap-2.5 2xl:gap-3.5">
                {installationFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6  p-2 md:p-2.5  xl:p-3 2xl:p-3.5 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-lg xl:rounded-xl 2xl:rounded-xl  hover:bg-green-50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7  flex-shrink-0 mt-0.5 sm:mt-1 md:mt-1 lg:mt-0.5 xl:mt-1 2xl:mt-1  group-hover:scale-110 transition-transform duration-300">
                      <Image
                        alt="Check mark icon"
                        src={checkIcon}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 16px, (max-width: 768px) 24px, (max-width: 1024px) 20px, (max-width: 1280px) 24px, (max-width: 1536px) 28px, 32px"
                      />
                    </div>
                    <div className=" text-[#626262] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl  leading-relaxed group-hover:text-green-700 transition-colors duration-300 font-light">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
