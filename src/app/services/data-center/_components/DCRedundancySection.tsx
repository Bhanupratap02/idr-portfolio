/** @format */
import redundancy from "@/assets/services/data-center/redundancy.png"
import Image from "next/image";
export default function DCRedundancySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-normal mb-6 text-gray-800">
              Built with Redundancy in Mind
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our infrastructure designs prioritize uptime through multiple
              layers of redundancy, ensuring your critical systems remain
              operational even during component failures.
            </p>

            <h3 className="text-xl font-normal text-gray-800 mb-6">
              Designed with Resilience Across All Layers
            </h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
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
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">
                    Dual ISP uplinks
                  </h4>
                  <p className="text-gray-600 text-base">
                    Multiple internet service providers with automatic failover
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
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
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">
                    Redundant switches and firewalls
                  </h4>
                  <p className="text-gray-600 text-base">
                    High-availability network equipment configurations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
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
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">
                    A/B power feeds
                  </h4>
                  <p className="text-gray-600 text-base">
                    Dual power distribution paths to each rack
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
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
                <div>
                  <h4 className="text-lg font-normal text-gray-800 mb-2">
                    Separated routing paths
                  </h4>
                  <p className="text-gray-600 text-base">
                    Physical separation of critical infrastructure pathways
                  </p>
                </div>
              </div>
            </div>

            {/* Blue info box */}
            <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-md">
              <p className="text-gray-800 font-normal text-base mb-1">
                Supports both N+1 and 2N architectures
              </p>
              <p className="text-gray-600 text-sm">
                Flexible designs to meet your specific redundancy requirements
              </p>
            </div>
          </div>

          {/* Right Side - Network Diagram */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <Image
                src={redundancy}
                alt="Network Redundancy Diagram"
                className="w-full h-auto rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
