/** @format */
import { Building, CheckCircle, Server, Star } from "lucide-react";

const editions = [
  {
    title: "Standard Edition",
    subtitle: "Core Security Tools",
    icon: Server,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    borderColor: "border-gray-200",
    button: {
      label: "Learn More",
      style: "border-2 border-gray-300 text-[#626262]",
    },
    features: [
      "Event tracking & user management",
      "Credential administration",
      "Facility lockdown features",
      "Integrated video surveillance",
    ],
  },
  {
    title: "Professional Edition",
    subtitle: "Enhanced Intelligence",
    icon: Star,
    iconBg: "bg-[#e6f3ff]",
    iconColor: "text-[#0066cc]",
    borderColor: "border-[#0066cc]",
    popular: true,
    button: {
      label: "Get Started",
      style: "bg-[#0066cc] text-white",
    },
    features: [
      "Reader commands & occupancy tracking",
      "Trend analysis & enhanced access tools",
      "Brivo Snapshot and more",
      "All Standard features",
    ],
  },
  {
    title: "Enterprise Edition",
    subtitle: "Scaled for Complexity",
    icon: Building,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    borderColor: "border-gray-200",
    button: {
      label: "Contact Sales",
      style: "border-2 border-gray-300 text-[#626262]",
    },
    features: [
      "Data Explorer & Anomaly Detection",
      "Incident Management",
      "Advanced video capabilities",
      "All Professional features",
    ],
  },
];

export default function SecuritySuiteSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-[100rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#2e2e2e] mb-4">
            Brivo Security Suite Editions
          </h2>
          <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#626262] leading-relaxed max-w-2xl mx-auto font-light">
            Unify Access Control, Video Intelligence, Visitor Management, and
            Intrusion Detection
          </p>
        </div>

        {/* Editions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {editions.map((edition, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-md p-6 sm:p-7 md:p-8 xl:p-10 border-2 ${edition.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              {/* Popular Tag */}
              {edition.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0066cc] text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${edition.iconBg}`}
                >
                  <edition.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${edition.iconColor}`}
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#2e2e2e] mb-2">
                  {edition.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#626262] font-light">
                  {edition.subtitle}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {edition.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-green-500 flex-shrink-0"
                      aria-hidden
                    />
                    <span className="text-sm sm:text-base md:text-lg font-light text-[#626262] leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              {/* <button
                className={`w-full py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base ${edition.button.style} flex items-center justify-center`}
              >
                {edition.button.label}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
