/** @format */
import Image from "next/image";
import LegacySystems from "@/assets/services/surveillance-camera/legacy_systems.png";
import camera_2 from "@/assets/services/surveillance-camera/camera_2.png";
import layers from "@/assets/services/surveillance-camera/layers.png";
import settings from "@/assets/services/surveillance-camera/settings.png";
const features = [
  {
    id: 1,
    icon: camera_2,
    title: "TVI and Analog Systems",
    desc: "Complete support for traditional surveillance infrastructure",
  },
  {
    id: 2,
    icon: settings,
    title: "Video Encoders & Converters",
    desc: "Media baluns and conversion equipment maintenance",
  },
  {
    id: 3,
    icon: layers,
    title: "Hybrid Environments",
    desc: "Seamlessly mixing old and new technology",
  },
];
export default function LegacySystemsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-32">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-stretch">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1 flex justify-center h-full ">
            {/* <Image
              src={LegacySystems}
              alt="Legacy Camera Systems"
              className="w-full h-full object-cover"
            /> */}
            <div className="w-full  rounded-xl overflow-hidden ">
              <Image
                src={LegacySystems}
                alt="Legacy Camera Systems - Traditional surveillance infrastructure support"
                className="w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className=" order-1 lg:order-2 space-y-4 sm:space-y-5 md:space-y-6 2xl:space-y-7 3xl:space-y-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E] leading-tight">
              Legacy Systems? We&apos;ve Got You Covered
            </h2>
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] leading-relaxed">
              While we love cutting-edge tech, we&apos;re also fully equipped to
              support traditional on-premises camera systems.
            </p>

            {/* Feature List */}
            <div className="space-y-4  md:space-y-5 2xl:space-y-6 3xl:space-y-8">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 sm:gap-4 md:gap-5 2xl:gap-6 3xl:gap-7 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1 sm:mt-1.5 md:mt-2">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-[#2E2E2E]  mb-1 3xl:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl text-[#626262] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
