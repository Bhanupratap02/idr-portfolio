import Kisi1Img from "@/assets/partners/kisi/kisi-1.png"
import Kisi2Img from "@/assets/partners/kisi/kisi-2.png"
import Kisi3Img from "@/assets/partners/kisi/kisi-3.png"
import {
  Smartphone,
  Cloud,
  QrCode,
  Shield,
  Building2,
  MapPin,
  Calendar,
  BarChart3
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: "Mobile Unlock",
    description: "Unlock doors with your smartphone, badge, or PIN",
  },
  {
    icon: <Cloud className="w-8 h-6 text-blue-600" />,
    title: "Cloud Native",
    description: "Control from anywhere with real-time monitoring",
  },
  {
    icon: <QrCode className="w-5 h-6 text-blue-600" />,
    title: "QR Visitor Entry",
    description: "Seamless visitor access with Terminal Pro",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Instant Lockdown",
    description: "Emergency lockdown from your mobile app",
  },
  {
    icon: <Building2 className="w-5 h-6 text-blue-600" />,
    title: "Multi-Site Management",
    description: "Manage multiple locations from one dashboard",
  },
  {
    icon: <MapPin className="w-5 h-6 text-blue-600" />,
    title: "Geo-Verification",
    description: "Remote unlock with location verification",
  },
  {
    icon: <Calendar className="w-5 h-6 text-blue-600" />,
    title: "Visitor Scheduling",
    description: "Pre-schedule visitor access with time limits",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
    title: "Analytics",
    description: "Detailed access logs and usage insights",
  },
];
const kisiImages = [
  { src: Kisi1Img, alt: "Kisi device 1" },
  { src: Kisi2Img, alt: "Kisi device 2" },
  { src: Kisi3Img, alt: "Kisi device 3" },
];
export function WhyChooseKisiSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16  text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl  leading-tight font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6  ">
            Why Choose Kisi?
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl  font-light">
            Modern access control that adapts to your needs
          </p>
        </div>

        {/* 🔹 Kisi Images Section */}
        <div className="flex justify-center items-center gap-8 md:gap-10 2xl:gap-12  mb-14 sm:mb-16 md:mb-20">
          {kisiImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-square transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 30vw, 33vw"
                priority={index === 0} // optimize first image
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg group">
              <div className="bg-blue-50 rounded-full size-10 sm:size-11 md:size-12 xl:size-14 2xl:size-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
