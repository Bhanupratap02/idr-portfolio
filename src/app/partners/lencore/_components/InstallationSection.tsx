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
    <section className="bg-white py-12 sm:py-16 lg:py-[74px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-[281px] items-start">
          <div className="flex flex-col gap-5 sm:gap-7">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#2e2e2e] text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-9">
              Integrations & Add-Ons
            </h2>

            <div className="flex flex-col gap-4 sm:gap-6">
              {integrationItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <Image
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                    alt="Integration icon"
                    src={item.icon}
                  />
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#2e2e2e] text-sm sm:text-base leading-relaxed lg:leading-6">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-7">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-[#2e2e2e] text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-9">
              White Glove Installation
            </h2>

            <div className="flex flex-col gap-4">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#626262] text-base sm:text-lg leading-relaxed lg:leading-7">
                We don&apos;t just drop in emitters and leave. Every project
                includes:
              </p>

              <div className="flex flex-col gap-3 sm:gap-4">
                {installationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Image
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      alt="Check icon"
                      src={checkIcon}
                    />
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#626262] text-sm sm:text-base leading-relaxed lg:leading-6">
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
