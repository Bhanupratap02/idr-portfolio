/** @format */

import {
  Building,
  Building2,
  Shield,
  GraduationCap,
  Heart,
  Clock,
} from "lucide-react";

const useCases = [
  {
    icon: <Building className="w-6 h-6 text-white" />,
    title: "Residential Lobbies",
  },
  {
    icon: <Building2 className="w-6 h-6 text-white" />,
    title: "Commercial Front Desks",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Gated Communities",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: "Higher Ed & Campuses",
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Medical Offices",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "After-Hours Operations",
  },
];

const standoutFeatures = [
  {
    title: "Multi-Tenant Entry Points",
    description:
      "Visitors can call residents, building staff, or help lines from the same screen",
  },
  {
    title: "Remote Monitoring Hubs",
    description:
      "Manage visitor access across multiple properties from one central team",
  },
  {
    title: "QR Code Intercom",
    description: "No apps, no downloads — just scan and connect",
  },
  {
    title: "Hybrid Video Concierge",
    description: "Combine live staff with automated responses and scheduling",
  },
];

export default function TeleportivityUseCases() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
            Perfect For
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <div key={useCase.title} className="text-center">
              <div className="bg-[#052557] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                {useCase.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Standout Use Cases */}
        <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Standout Use Cases
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {standoutFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="bg-[#052557] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
