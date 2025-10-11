/** @format */
import Image from "next/image";
import { BatteryCharging, Key, Zap } from "lucide-react";
import mainImg from "@/assets/brivo1.png";

const features = [
  {
    icon: Key,
    title: "Instant Access",
    description:
      "Unlock doors, elevators, turnstiles, and more by simply holding your device near a reader.",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    icon: BatteryCharging,
    title: "Power Reserve",
    description:
      "Even if your iPhone needs a charge, access continues for up to 5 hours.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    icon: Zap,
    title: "Express Mode",
    description: "No need to wake or unlock your device — just tap and go.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-26 3xl:py-10">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20">
        {/* Left Content */}
        <div className="flex-1 space-y-6 sm:space-y-7 md:space-y-8 xl:space-y-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#2e2e2e] leading-snug sm:leading-tight">
            Get In Faster, Stay Secure
          </h2>

          {/* Feature List (Loop) */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6 text-center sm:text-left"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 ${feature.bgColor}`}
                >
                  <feature.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.textColor}`}
                    aria-hidden
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl font-medium text-[#2e2e2e] mb-1.5 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg xl:text-xl text-[#626262] leading-relaxed font-light lg:max-w-xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Card */}
        <div className="flex-1 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none 2xl:max-w-4xl">
          <div className="relative bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
            <Image
              src={mainImg}
              alt="iPhone showing Apple Wallet badge"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-80 2xl:h-86 object-cover rounded-lg mb-4"
            />
            <div className="text-center space-y-1 sm:space-y-2">
              <h4 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium text-white">
                Your Badge Works Even When Phone Battery is Low
              </h4>
              <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl text-blue-100 font-light">
                Safe, secure, and always available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
