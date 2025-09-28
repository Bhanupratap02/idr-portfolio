/** @format */


import { Users, Video, Monitor, QrCode, Cloud, Zap } from "lucide-react";

const capabilities = [
  {
    icon: <Users className="w-6 h-6 text-[#052557]" />,
    title: "Virtual Concierge",
    description:
      "Visitors scan a QR code or press a button and instantly connect to live staff",
  },
  {
    icon: <Video className="w-6 h-6 text-[#052557]" />,
    title: "Smart Video Intercom",
    description:
      "Two-way video/audio calls to any remote user (staff, concierge, property manager, etc.)",
  },
  {
    icon: <Monitor className="w-6 h-6 text-[#052557]" />,
    title: "Digital Signage",
    description: "Show messages, directories, maps, videos, and alerts",
  },
  {
    icon: <QrCode className="w-6 h-6 text-[#052557]" />,
    title: "QR Code Access",
    description: "Fully contactless and accessible from any smartphone",
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#052557]" />,
    title: "Cloud Dashboard",
    description: "Manage devices, users, and content from anywhere",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#052557]" />,
    title: "API Integration",
    description:
      "API-level connections to your existing intercom or property management system",
  },
];

export default function TeleportivityCapabilities() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
      
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            What Teleportivity Can Do
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Think of it like a virtual front desk that&apos;s always available — and
            never calls out sick.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {capabilities.slice(0, 3).map((capability) => (
            <div
              key={capability.title}
         
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 min-h-[268px]"
            >
              <div className="bg-blue-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">
          {capabilities.slice(3).map((capability, index) => (
            <div
              key={capability.title}
       
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 min-h-[244px]"
            >
              <div className="bg-blue-50 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                {capability.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
