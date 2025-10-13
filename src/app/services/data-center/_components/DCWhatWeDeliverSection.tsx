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
      icon: deliver1,
      title: "Fiber and Copper Installs",
      description:
        "Multimode / Single mode fiber and Cat6a/Cat7 copper installations with precision testing",
    },
    {
      icon: deliver2,
      title: "Patch Panel + Switch Setup",
      description:
        "Organized, labeled, and future-ready panel installations with switch coordination.",
    },
    {
      icon: deliver3,
      title: "PDUs, Power & UPS",
      description:
        "Redundant power distribution and backup systems for critical environments.",
    },
    {
      icon: deliver4,
      title: "Cold/Hot Aisle Containment",
      description:
        "Optimized airflow management for thermal efficiency and equipment longevity.",
    },
    {
      icon: deliver5,
      title: "Cable Tray & Ladder Racks",
      description:
        "Structured cable management systems for overhead and under-floor routing.",
    },
    {
      icon: deliver6,
      title: "Labeling & Rack Elevations",
      description:
        "Detailed documentation and labeling for simplified management and troubleshooting.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-4">
            What We Deliver
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl  text-gray-600 max-w-4xl  mx-auto">
            Comprehensive infrastructure solutions designed for reliability,
            scalability, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 2xl:p-10 3xl:p-14 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl 2xl:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
