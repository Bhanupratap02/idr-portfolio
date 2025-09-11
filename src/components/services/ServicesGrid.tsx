/** @format */

import Image from "next/image";
import image1 from "@/assets/services/img_1.png";
import image2 from "@/assets/services/img_2.png";
import image3 from "@/assets/services/img_3.png";
import image4 from "@/assets/services/img_4.png";
import image5 from "@/assets/services/img_5.png";
import image6 from "@/assets/services/img_6.png";
import image7 from "@/assets/services/img_7.png";
import image8 from "@/assets/services/img_8.png";
import image9 from "@/assets/services/img_9.png";
 const services = [
   {
     id: 1,
     image:
       image1,
     title: "Access Control Systems",
     description:
       "At IDR Technology Solutions, we design, install, and support access control systems that secure your space without slowing you down. Whether you're managing a single door or hundreds.......",
   },
   {
     id: 2,
     image:
       image2,
     title: "Audio / Visual Systems",
     description:
       "At IDR Technology Solutions, A/V isn't just another service — it's the part of the job we genuinely love. From smart meeting and conference rooms to immersive speaker.......",
   },
   {
     id: 3,
     image:
       image3,
       title:"Conference Room Solutions",
     description:
       "A great meeting room isn't just about the table and chairs — it's about how well people can see, hear, and connect. At IDR Technology Solutions, we design, install, and support......",
   },

   {
     id: 4,
     image:
       image4,
     title: "Data Center Infrastructure",
     description:
       "At IDR Technology Solutions, we design and build data center infrastructure that delivers power, performance, and uptime. Whether it's a dedicated server room, enterprise data hall.........",
   },
   {
     id: 5,
     image:
       image5,
     title: "Multifamily Dwelling Intercoms",
     description:
       "IDR Technology Solutions designs, installs, and supports smart intercom systems for multifamily properties, condos, and mixed-use buildings. Whether it's a new development or a retrofit.......",
   },
   {
     id: 6,
     image:
       image6,
     title: "Networks & IT Infrastructure",
     description:
       "Modern buildings demand modern infrastructure — and that starts with a rock-solid network. At IDR Technology Solutions, we design, install, and support IT networks that......",
   },
   {
     id: 7,
     image:
       image7,
     title: "Security Alarm Systems",
     description:
       "At IDR Technology Solutions, we design, install, and support reliable intrusion alarm systems to protect your building, staff, and assets. Whether you're securing a retail space.........",
   },

   {
     id: 8,
     image:
      image8,
     title: "Structured Cabling",
     description:
       "Your network is only as strong as the cables behind the walls. At IDR Technology Solutions, we design and install structured cabling systems that deliver reliability, flexibilityt......",
   },
   {
     id: 9,
     image:
       image9,
     title: "Surveillance Camera Systems",
     description:
       "At IDR Technology Solutions, we design, install, support, and service modern surveillance camera systems for commercial, multifamily, and industrial spaces.",
   },
 ];

type ServicesGridProps = {
  exclude?: number | number[]; // accept single or multiple ids
};
export default function ServicesGrid({ exclude }: ServicesGridProps) {
  const ArrowIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
    >
      <path d="M13.87 12.07c.01.51.43.93.94.94.51.01.92-.4.91-.91l-.09-6.96a.92.92 0 0 0-.93-.93l-6.96-.09a.92.92 0 0 0-.93.93c.01.51.43.92.94.93l4.73.06-8.32 8.32a.92.92 0 1 0 1.3 1.3l8.32-8.32.06 4.73Z" />
    </svg>
  );
  // Normalize exclude into an array for easier filtering
  const excludeIds = Array.isArray(exclude)
    ? exclude
    : exclude
    ? [exclude]
    : [];

  const filteredServices = services.filter(
    (service) => !excludeIds.includes(service.id)
  );
  return (
    <section className="py-16 sm:py-20 2xl:py-24 3xl:py-32 bg-white">
      <div className="mx-auto max-w-6xl lg:max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[110rem]  px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 sm:mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[2.8rem] 2xl:text-[3.5rem] font-medium text-gray-900 mb-4 sm:mb-6">
              Explore More Services
            </h2>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-xl sm:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Services
            </h3>
            <p className="text-gray-600 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl">
              While we can customize your plan to suit your needs, most clients
              schedule regular services:
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-10 sm:mb-12" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredServices?.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl  hover:shadow-md transition p-4 2xl:p-6 3xl:p-8 flex flex-col"
            >
              <div className="mb-4">
                <Image
                  src={service.image}
                  alt={service.title || "Service Image"}
                  className="w-full h-56 sm:h-64 lg:h-72 2xl:h-80 3xl:h-96 object-fill rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg lg:text-xl 3xl:text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm 2xl:text-lg 3xl:text-xl font-medium transition-colors border border-gray-400 text-gray-900 hover:bg-gray-800 hover:text-white cursor-pointer">
                  Book Now <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 sm:px-12 2xl:px-16 3xl:px-20 py-4 sm:py-62xl:py-8 border border-gray-800 rounded-2xl sm:rounded-3xl text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
}
