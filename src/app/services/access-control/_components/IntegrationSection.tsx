/** @format */
import Image from "next/image";
import integration from "@/assets/services/access-control/integration.png"
import camera from "@/assets/services/access-control/icons/camera.png";
import intercom from "@/assets/services/access-control/icons/intercom.png";
import access from "@/assets/services/access-control/icons/access.png";
import tenants from "@/assets/services/access-control/icons/tenants.png";
export default function IntegrationSection() {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] text-center">
        {/* Title */}
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 sm:mb-6">
          Designed to Work With Everything
        </h2>
        <p className="text-[#4B5563] text-base sm:text-lg lg:text-xl 2xl:text-2xl mb-10 sm:mb-16 max-w-2xl mx-auto">
          Interoperability through Open APIs and Proven Integrations
        </p>

        {/* Diagram */}
        <div className="mb-10 sm:mb-16 2xl:mb-20 3xl:mb-24">
          <Image
            src={integration}
            alt="Integration Diagram"
            className="w-full max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto h-auto rounded-lg "
          />
        </div>

        {/* Integration Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-10 3xl:gap-12">
          {[
            {
              img: camera,
              alt: "Camera Integration",
              title: "Surveillance",
              desc: "Rhombus, Vicon, Verkada",
            },
            {
              img: intercom,
              alt: "Intercom Integration",
              title: "Intercom & Visitor Entry",
              desc: "Seamless guest management",
            },
            {
              img: access,
              alt: "Access Control Integration",
              title: "Gym & Amenity Mgmt",
              desc: "Control facility access",
            },
            {
              img: tenants,
              alt: "Tenant Portals Integration",
              title: "Tenant Portals",
              desc: "Simplify resident experience",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-[#2E2E2E] text-lg sm:text-xl 2xl:text-2xl font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-sm sm:text-base 2xl:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
