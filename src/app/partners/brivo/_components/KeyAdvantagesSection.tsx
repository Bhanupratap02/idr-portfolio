/** @format */
import { AlertTriangle, Briefcase, Server, ShieldCheck } from "lucide-react";

const advantages = [
  {
    icon: Server,
    title: "Remote Distribution",
    description: "No need to print or deliver physical badges.",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    icon: Briefcase,
    title: "Easy Management",
    description: "Manage credentials directly in Brivo Access.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First",
    description:
      "Badges are stored securely on-device. Apple cannot track locations.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    icon: AlertTriangle,
    title: "Lost Device?",
    description:
      "Use Find My to lock, locate, or erase your device and badge instantly.",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
];

export default function KeyAdvantagesSection() {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-[110rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#2e2e2e]">
            Key Advantages
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-18">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-7 md:p-8 xl:p-10 shadow-sm hover:shadow-md transition-all duration-300 text-center sm:text-left"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6 ${advantage.bgColor}`}
              >
                <advantage.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${advantage.textColor}`}
                  aria-hidden
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl  font-medium text-[#2e2e2e] mb-2 sm:mb-3">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg xl:text-xl text-[#626262] leading-relaxed font-light">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
