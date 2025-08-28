/** @format */

import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ac2110e85eea287f13eccf6a245e9eca57c8e44e?width=740",
      title: "Conference Room Solutions",
      description:
        "A great meeting room isn't just about the table and chairs — it's about how well people can see, hear, and connect. At IDR Technology Solutions, we design, install, and support......",
    },
    {
      id: 2,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/390d2d71c14c885f4d1f74dab75c084439fc602f?width=740",
      title: "Multifamily Dwelling Intercoms",
      description:
        "IDR Technology Solutions designs, installs, and supports smart intercom systems for multifamily properties, condos, and mixed-use buildings. Whether it's a new development or a retrofit.......",
    },
    {
      id: 3,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bc0f89cc376f73f0feef370af8b10c2a1a8ffd3f?width=740",
      title: "Access Control Systems",
      description:
        "At IDR Technology Solutions, we design, install, and support access control systems that secure your space without slowing you down. Whether you're managing a single door or hundreds.......",
    },
    {
      id: 4,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4c1ebf8077af23c9d19e3ed2d55ccad8d868316e?width=740",
      title: "Security Alarm Systems",
      description:
        "At IDR Technology Solutions, we design, install, and support reliable intrusion alarm systems to protect your building, staff, and assets. Whether you're securing a retail space.........",
    },
    {
      id: 5,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b476ebe98b50a796290506b4138c46c8a67d0682?width=740",
      title: "Networks & IT Infrastructure",
      description:
        "Modern buildings demand modern infrastructure — and that starts with a rock-solid network. At IDR Technology Solutions, we design, install, and support IT networks that......",
    },
    {
      id: 6,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/10888e000d2d431c6384c0d4c4d07a3e07988ff4?width=740",
      title: "Audio / Visual Systems",
      description:
        "At IDR Technology Solutions, A/V isn't just another service — it's the part of the job we genuinely love. From smart meeting and conference rooms to immersive speaker.......",
    },
    {
      id: 7,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c7ea7c0bf3b90bf520fc00aa1b51af27149437ba?width=740",
      title: "Data Center Infrastructure",
      description:
        "At IDR Technology Solutions, we design and build data center infrastructure that delivers power, performance, and uptime. Whether it's a dedicated server room, enterprise data hall.........",
    },
    {
      id: 8,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d49f181949c7e259601f057d8f596f1915e54c43?width=740",
      title: "Structured Cabling",
      description:
        "Your network is only as strong as the cables behind the walls. At IDR Technology Solutions, we design and install structured cabling systems that deliver reliability, flexibilityt......",
    },
    {
      id: 9,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6986d75a34ecb7f4f9bd43e3a71de1fc73249106?width=740",
      title: "Surveillance Camera Systems",
      description:
        "At IDR Technology Solutions, we design, install, support, and service modern surveillance camera systems for commercial, multifamily, and industrial spaces.",
    },
  ];
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

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl lg:max-w-7xl 2xl:max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 sm:mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Explore More Services
            </h2>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
              Services
            </h3>
            <p className="text-gray-600 text-base sm:text-lg">
              While we can customize your plan to suit your needs, most clients
              schedule regular services:
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-10 sm:mb-12" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl  hover:shadow-md transition p-4 flex flex-col"
            >
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-colors border border-gray-400 text-gray-900 hover:bg-gray-800 hover:text-white">
                  Book Now <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 sm:px-12 py-4 sm:py-6 border border-gray-800 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
}
