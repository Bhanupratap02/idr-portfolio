/** @format */
import deliver1 from "@/assets/services/data-center/icons/deliver_1.png";
import deliver2 from "@/assets/services/data-center/icons/deliver_2.png";
import deliver3 from "@/assets/services/data-center/icons/deliver_3.png";
import deliver4 from "@/assets/services/data-center/icons/deliver_4.png";
import deliver5 from "@/assets/services/data-center/icons/deliver_5.png";
import deliver6 from "@/assets/services/data-center/icons/deliver_6.png";
import Image from "next/image";

export  default function DCWhatWeDeliverSection() {
  const features = [
    {
      icon: "🔧",
      title: "Fiber and Copper Installs",
      description:
        "OM3/OM4 fiber and Cat6a/Cat7 copper installations with precision testing",
    },
    {
      icon: "⚡",
      title: "Patch Panel + Switch Setup",
      description:
        "Organized, labeled, and future-ready panel installations with switch coordination.",
    },
    {
      icon: "🛡️",
      title: "PDUs, Power & UPS",
      description:
        "Redundant power distribution and backup systems for critical environments.",
    },
    {
      icon: "📊",
      title: "Cold/Hot Aisle Containment",
      description:
        "Optimized airflow management for thermal efficiency and equipment longevity.",
    },
    {
      icon: "💰",
      title: "Cable Tray & Ladder Racks",
      description:
        "Structured cable management systems for overhead and under-floor routing.",
    },
    {
      icon: "🔄",
      title: "Labeling & Rack Elevations",
      description:
        "Detailed documentation and labeling for simplified management and troubleshooting.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive infrastructure solutions designed for reliability,
            scalability, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
