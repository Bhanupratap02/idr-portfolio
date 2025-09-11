/** @format */
import redundancy from "@/assets/services/data-center/redundancy.png";
import Image from "next/image";
export default function DCRedundancySection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12   ">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium  mb-6 text-gray-800 text-center lg:text-left">
              Built with Redundancy in Mind
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg  2xl:text-xl 3xl:text-2xl 2xl:leading-relaxed mb-4 xl:mb-5 2xl:mb-6 3x:mb-8 text-center lg:text-left">
              Our infrastructure designs prioritize uptime through multiple
              layers of redundancy, ensuring your critical systems remain
              operational even during component failures.
            </p>

            <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-normal text-gray-800 mb-6 3xl:mb-8 ">
              Designed with Resilience Across All Layers
            </h3>

            <div className="space-y-4 md:space-y-5 3xl:space-y-7">
              {[
                {
                  title: "Dual ISP uplinks",
                  desc: "Multiple internet service providers with automatic failover",
                },
                {
                  title: "Redundant switches and firewalls",
                  desc: "High-availability network equipment configurations",
                },
                {
                  title: "A/B power feeds",
                  desc: "Dual power distribution paths to each rack",
                },
                {
                  title: "Separated routing paths",
                  desc: "Physical separation of critical infrastructure pathways",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 ">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0 ">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7047 3.29297C14.0953 3.68359 14.0953 4.31797 13.7047 4.70859L5.70469 12.7086C5.31406 13.0992 4.67969 13.0992 4.28906 12.7086L0.289062 8.70859C-0.101562 8.31797 -0.101562 7.68359 0.289062 7.29297C0.679688 6.90234 1.31406 6.90234 1.70469 7.29297L4.99844 10.5836L12.2922 3.29297C12.6828 2.90234 13.3172 2.90234 13.7078 3.29297H13.7047Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg xl:text-xl 3xl:text-2xl font-medium text-gray-800 mb-1 3xl:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Blue info box */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 3xl:p-8 rounded-r-md">
              <p className="text-gray-800 font-normal text-base 3xl:text-lg mb-1">
                Supports both N+1 and 2N architectures
              </p>
              <p className="text-gray-600 text-sm 3xl:text-base">
                Flexible designs to meet your specific redundancy requirements
              </p>
            </div>
          </div>

          {/* Right Side - Network Diagram */}
          <div className="lg:justify-self-end h-full">
            {/* <Image
                src={redundancy}
                alt="Network Redundancy Diagram"
                className="w-full h-full rounded-lg "
              /> */}
            <Image
              src={redundancy}
              alt="Network Redundancy Diagram"
              className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[600px] xl:max-w-[730px] 3xl:max-w-[800px] h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
