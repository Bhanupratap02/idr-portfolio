/** @format */
import integrated from "@/assets/services/data-center/integrated.png";
import Image from "next/image";
export default function DCIntegratedSection() {
  const features = [
    "Separation of Power/Data",
    "Airflow & Containment",
    "Power provisioning",
    "Congestion-Free Patch Panels",
    "Expansion-ready rack design",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Cables Image */}
          <div>
            <Image
              src={integrated}
              alt="Colorful data center cables"
              className="w-full h-auto aspect-[4/3]"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-normal text-gray-800 mb-6">
              Integrated with Your Environment
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our infrastructure solutions are designed to work harmoniously
              with your existing environment while optimizing for performance,
              efficiency, and scalability.
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7047 3.29297C14.0953 3.68359 14.0953 4.31797 13.7047 4.70859L5.70469 12.7086C5.31406 13.0992 4.67969 13.0992 4.28906 12.7086L0.289062 8.70859C-0.101562 8.31797 -0.101562 7.68359 0.289062 7.29297C0.679688 6.90234 1.31406 6.90234 1.70469 7.29297L4.99844 10.5836L12.2922 3.29297C12.6828 2.90234 13.3172 2.90234 13.7078 3.29297H13.7047Z"
                        fill="#10B981"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-normal text-gray-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
