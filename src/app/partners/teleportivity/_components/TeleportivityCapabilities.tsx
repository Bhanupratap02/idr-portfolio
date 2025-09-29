/** @format */


import { Users, Video, Monitor, QrCode, Cloud, Zap } from "lucide-react";

const capabilities = [
  {
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#052557]" />,
    title: "Virtual Concierge",
    description:
      "Visitors scan a QR code or press a button and instantly connect to live staff",
  },
  {
    icon: <Video className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#052557]" />,
    title: "Smart Video Intercom",
    description:
      "Two-way video/audio calls to any remote user (staff, concierge, property manager, etc.)",
  },
  {
    icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#052557]" />,
    title: "Digital Signage",
    description: "Show messages, directories, maps, videos, and alerts",
  },
  {
    icon: <QrCode className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#052557]" />,
    title: "QR Code Access",
    description: "Fully contactless and accessible from any smartphone",
  },
  {
    icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#052557]" />,
    title: "Cloud Dashboard",
    description: "Manage devices, users, and content from anywhere",
  },
  {
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-[#052557]" />,
    title: "API Integration",
    description:
      "API-level connections to your existing intercom or property management system",
  },
];

export default function TeleportivityCapabilities() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 xl:mb-20 2xl:mb-24  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5 xl:mb-6 2xl:mb-7">
            What Teleportivity Can Do
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed font-light max-w-none sm:max-w-2xl md:max-w-3xl xl:max-w-4xl mx-auto">
            Think of it like a virtual front desk that&apos;s always available —
            and never calls out sick.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-white rounded-xl p-6 sm:p-7 md:p-8 xl:p-9 2xl:p-12  hover:shadow-lg transition-all duration-300 group"
            >
              <div
                // className="bg-blue-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6"
                className={
                  "inline-flex p-2.5 sm:p-3 xl:p-3.5 2xl:p-4 rounded-lg bg-blue-50   mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8 group-hover:scale-110 transition-transform duration-300"
                }
              >
                {capability.icon}
              </div>
              <h3 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-gray-800 mb-3   2xl:mb-4">
                {capability.title}
              </h3>
              <p className="text-sm  md:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-light">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
