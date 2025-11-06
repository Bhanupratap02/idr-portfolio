/** @format */
const CameraImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fcamera.png";
const PhoneImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fphone.png";
const MonitorImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fmonitor.png";
const CertificationImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fcertification.png";
const CloudImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fcloud.png";
const SettingsImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fsettings.png";
import Image from "next/image";
const imgViconVax = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fvicon%2Fvicon-info.png";
import ViconVaxCard from "./ViconVaxCard";

const features = [
  {
    icon: CameraImg,
    title: "Vicon Cameras",
    description: "Commercial-grade hardware, ONVIF compliant, hybrid-ready",
  },
  {
    icon: PhoneImg,
    title: "Vax Access Control",
    description: "Browser-based, clean UI, scalable architecture",
  },
  {
    icon: MonitorImg,
    title: "Multiple Credential Support",
    description: "Show messages, directories, maps, videos, and alerts",
  },
  {
    icon: CertificationImg,
    title: "Certified Platform",
    description: "Deployed and supported by licensed, trained professionals",
  },
  {
    icon: CloudImg,
    title: "No Per-Reader Licensing",
    description: "Cost-effective for multi-door environments",
  },
  {
    icon: SettingsImg,
    title: "Flexible Schedules & Access Levels",
    description: "Tailor control to zones, roles, and timeframes",
  },
  {
    icon: SettingsImg,
    title: "Remote Management",
    description: "Manage from any browser without installing software",
  },
];

export default function ViconVaxSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24  2xl:py-28 3xl:py-30 bg-gray-50">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-8 sm:mb-9 md:mb-10 lg:mb-11 xl:mb-12 2xl:mb-16 3xl:mb-18 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-8 3xl:mb-10">
            Why Vicon + VAX?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl  font-light text-gray-600 leading-relaxed px-2 sm:px-0">
            Think of it like a virtual front desk that&apos;s always available —
            and never calls out sick.
          </p>
        </div>

        {/* Infographic */}
        <div className="flex justify-center mb-4 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 2xl:mb-12 3xl:mb-13">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl">
            <Image
              src={imgViconVax}
              alt="Professional Security Technology and Surveillance Cameras"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8 ">
          {features.map((feature, index) => (
            <div key={index}>
              <ViconVaxCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
