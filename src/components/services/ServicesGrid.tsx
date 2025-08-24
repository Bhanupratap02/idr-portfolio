/** @format */

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
      className="fill-[#9D9D9D] hover:fill-white transition-colors"
    >
      <path
        d="M13.8717 12.0727C13.8783 12.5824 14.2968 13.0009 14.8065 13.0075C15.3161 13.0141 15.7239 12.6063 15.7173 12.0967L15.6269 5.13663C15.6203 4.62699 15.2017 4.20847 14.6921 4.20186L7.73203 4.11147C7.22238 4.10485 6.8146 4.51263 6.82122 5.02227C6.82784 5.53191 7.24635 5.95042 7.75599 5.95704L12.4883 6.0185L4.16793 14.3388C3.81224 14.6945 3.81982 15.2788 4.18487 15.6439C4.54993 16.0089 5.1342 16.0165 5.48989 15.6608L13.8102 7.34046L13.8717 12.0727Z"
        fill=""
      />
    </svg>
  );

  return (
    <section className="py-20 bg-idr-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Explore More services
            </h2>
          </div>
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Services
            </h3>
            <p className="text-gray-600 text-lg">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>
        </div>

        <hr className="border-gray-800 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 6).map((service, index) => (
            <div key={index} className="group">
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-3xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-colors border border-gray-400 text-gray-900 hover:border-0 hover:bg-gray-800 hover:text-white $`}
                >
                  Book Now <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(6).map((service, index) => (
            <div key={index + 6} className="group">
              <div className="mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-3xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium transition-colors border border-gray-400 text-gray-900 hover:border-0 hover:bg-gray-800 hover:text-white $`}
                >
                  Book Now
                  <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-12 py-6 border border-gray-800 rounded-3xl text-xl font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
}
