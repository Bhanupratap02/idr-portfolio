/** @format */
import Image from "next/image";
import integration from "@/assets/services/access-control/integration.png"
export default function IntegrationSection() {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6">
          Designed to Work With Everything
        </h2>
        <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl mb-10 sm:mb-16 max-w-2xl mx-auto">
          Interoperability through Open APIs and Proven Integrations
        </p>

        {/* Diagram */}
        <div className="mb-10 sm:mb-16">
          <Image
            src={integration}
            alt="Integration Diagram"
            className="w-full max-w-4xl mx-auto h-auto rounded-lg "
          />
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-[#FFD700] rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 34 31" fill="none">
                  <path
                    d="M0 8.25C0 6.182 1.682 4.5 3.75 4.5H18.75C20.818 4.5 22.5 6.182 22.5 8.25V23.25C22.5 25.318 20.818 27 18.75 27H3.75C1.682 27 0 25.318 0 23.25V8.25Z"
                    fill="#2E2E2E"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-[#2E2E2E] text-lg sm:text-xl font-medium mb-2">
              Surveillance
            </h3>
            <p className="text-[#4B5563] text-sm sm:text-base">
              Rhombus, Vicon, Verkada
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-[#FFD700] rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 30 31" fill="none">
                  <path
                    d="M9.662 2.192C9.211 1.102 8.021.522 6.885.832L1.729 2.239C.709 2.52 0 3.446 0 4.5 0 19 11.754 30.75 26.25 30.75c1.055 0 1.98-.709 2.262-1.729l1.406-5.156c.311-1.137-.27-2.326-1.359-2.777l-5.625-2.344c-.955-.398-2.062-.123-2.713.68l-2.367 2.889c-4.125-1.951-7.465-5.291-9.416-9.416l2.889-2.361c.803-.656 1.078-1.758.68-2.713L9.662 2.192Z"
                    fill="#2E2E2E"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-[#2E2E2E] text-lg sm:text-xl font-medium mb-2">
              Intercom & Visitor Entry
            </h3>
            <p className="text-[#4B5563] text-sm sm:text-base">
              Seamless guest management
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-[#FFD700] rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 38 31" fill="none">
                  <path
                    d="M5.625 4.5C5.625 3.463 6.463 2.625 7.5 2.625h1.875C10.412 2.625 11.25 3.463 11.25 4.5V27c0 1.037-.838 1.875-1.875 1.875H7.5A1.875 1.875 0 0 1 5.625 27v-3.75H3.75C2.713 23.25 1.875 22.412 1.875 21.375v-5.625C.838 15.75 0 14.913 0 13.875c0-1.037.838-1.875 1.875-1.875V10.125C1.875 9.088 2.713 8.25 3.75 8.25h1.875V4.5Z"
                    fill="#2E2E2E"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-[#2E2E2E] text-lg sm:text-xl font-medium mb-2">
              Gym & Amenity Mgmt
            </h3>
            <p className="text-[#4B5563] text-sm sm:text-base">
              Control facility access
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 bg-[#FFD700] rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 38 31" fill="none">
                  <path
                    d="M2.813.75C1.26.75 0 2.01 0 3.562v24.375C0 29.49 1.26 30.75 2.813 30.75h5.624v-4.688c0-1.553 1.26-2.813 2.813-2.813s2.813 1.26 2.813 2.813v4.688h5.268A3.751 3.751 0 0 1 18.75 28.693c0-2.748 1.512-5.145 3.75-6.398V3.562C22.5 2.01 21.24.75 19.688.75H2.813Z"
                    fill="#2E2E2E"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-[#2E2E2E] text-lg sm:text-xl font-medium mb-2">
              Tenant Portals
            </h3>
            <p className="text-[#4B5563] text-sm sm:text-base">
              Simplify resident experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
