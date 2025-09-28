/** @format */

import { Palette, Zap, Settings, Headphones } from "lucide-react";

const features = [
  {
    icon: <Palette className="w-6 h-6 text-white" />,
    title: "Custom Branding",
    description:
      "Custom-branded touchscreens and enclosures tailored to your property",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Smart Integration",
    description:
      "Seamless integration with access control, cameras, and building directories",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Professional Install",
    description: "Structured cabling and professional hardware mounting",
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: "Ongoing Support",
    description: "Ongoing support and cloud management included",
  },
];

export default function TeleportivityFeatures() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            IDR + Teleportivity = The Future of Entry Systems
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            IDR deploys and supports Teleportivity systems across residential,
            commercial, and mixed-use properties, transforming outdated
            intercoms into sleek, cloud-based service hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:shadow-lg h-[220px] flex flex-col"
            >
              <div className="bg-[#052557] rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
