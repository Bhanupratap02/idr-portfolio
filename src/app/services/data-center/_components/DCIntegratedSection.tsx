/** @format */
const integrated = "https://idr-portfolio-storage.s3.amazonaws.com/assets/services/data-center/integrated.png";

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
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 3xl:py-32 bg-white">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 2xl:gap-16 items-stretch 3xl:items-center">
          {/* Left Side - Cables Image */}
          <div className="flex justify-center ">
        
            <div className="relative w-full max-w-[750px] aspect-[4/3] rounded-lg shadow-lg">
              <Image
                src={integrated}
                alt="Colorful data center cables"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
       

          {/* Right Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl  2xl:text-5xl 3xl:text-6xl font-medium text-gray-800 mb-6 ">
              Integrated with Your Environment
            </h2>
            <p className="text-sm sm:text-base md:text-lg   2xl:text-xl 3xl:text-2xl  2xl:leading-relaxed text-gray-600 mb-4 xl:mb-5 2xl:mb-6 3x:mb-8 leading-relaxed mx-auto">
              Our infrastructure solutions are designed to work harmoniously
              with your existing environment while optimizing for performance,
              efficiency, and scalability.
            </p>

            <div className="space-y-4 md:space-y-5 3xl:space-y-7">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                  <span className="text-sm sm:text-base md:text-lg   2xl:text-xl 3xl:text-2xl   font-normal text-gray-800">
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
