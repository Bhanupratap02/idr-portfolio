/** @format */

export default function ServicesGrid() {
  const services = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ac2110e85eea287f13eccf6a245e9eca57c8e44e?width=740",
      title: "Conference Room Solutions",
      description:
        "A great meeting room isn't just about the table and chairs — it's about how well people can see, hear, and connect. At IDR Technology Solutions, we design, install, and support......",
      buttonStyle: "outline",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/390d2d71c14c885f4d1f74dab75c084439fc602f?width=740",
      title: "Multifamily Dwelling Intercoms",
      description:
        "IDR Technology Solutions designs, installs, and supports smart intercom systems for multifamily properties, condos, and mixed-use buildings. Whether it's a new development or a retrofit.......",
      buttonStyle: "filled",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bc0f89cc376f73f0feef370af8b10c2a1a8ffd3f?width=740",
      title: "Access Control Systems",
      description:
        "At IDR Technology Solutions, we design, install, and support access control systems that secure your space without slowing you down. Whether you're managing a single door or hundreds.......",
      buttonStyle: "outline",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4c1ebf8077af23c9d19e3ed2d55ccad8d868316e?width=740",
      title: "Security Alarm Systems",
      description:
        "At IDR Technology Solutions, we design, install, and support reliable intrusion alarm systems to protect your building, staff, and assets. Whether you're securing a retail space.........",
      buttonStyle: "outline",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/b476ebe98b50a796290506b4138c46c8a67d0682?width=740",
      title: "Networks & IT Infrastructure",
      description:
        "Modern buildings demand modern infrastructure — and that starts with a rock-solid network. At IDR Technology Solutions, we design, install, and support IT networks that......",
      buttonStyle: "filled",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/10888e000d2d431c6384c0d4c4d07a3e07988ff4?width=740",
      title: "Audio / Visual Systems",
      description:
        "At IDR Technology Solutions, A/V isn't just another service — it's the part of the job we genuinely love. From smart meeting and conference rooms to immersive speaker.......",
      buttonStyle: "outline",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c7ea7c0bf3b90bf520fc00aa1b51af27149437ba?width=740",
      title: "Data Center Infrastructure",
      description:
        "At IDR Technology Solutions, we design and build data center infrastructure that delivers power, performance, and uptime. Whether it's a dedicated server room, enterprise data hall.........",
      buttonStyle: "outline",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/d49f181949c7e259601f057d8f596f1915e54c43?width=740",
      title: "Structured Cabling",
      description:
        "Your network is only as strong as the cables behind the walls. At IDR Technology Solutions, we design and install structured cabling systems that deliver reliability, flexibilityt......",
      buttonStyle: "filled",
    },
  ];

  return (
    <section className="bg-[#F7F6F2] px-4 lg:px-28 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <h2 className="text-[#111D15] text-5xl font-medium mb-8 lg:mb-0 max-w-lg">
            Explore More services
          </h2>
          <div className="max-w-lg">
            <h3 className="text-[#111D15] text-3xl font-semibold mb-3">
              Services
            </h3>
            <p className="text-[#666] text-xl leading-relaxed">
              While we can customize your cleaning plan to suit your needs, most
              clients schedule regular cleaning services:
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#2E2E2E] mb-12"></div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-[#111D15] text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-[#666] text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.buttonStyle === "filled" ? (
                  <button className="bg-[#2E2E2E] rounded-md px-5 py-3 text-white font-normal hover:bg-gray-800 transition-colors flex items-center gap-2">
                    Book Now
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M13.8717 12.0727L15.7173 12.0967L15.6269 5.13663L7.73203 4.11147L6.82122 5.02227L7.75599 5.95704L12.4883 6.0185L4.16793 14.3388L5.48989 15.6608L13.8102 7.34046L13.8717 12.0727Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                ) : (
                  <button className="border border-[#666] rounded-md px-5 py-3 text-[#111D15] font-normal hover:bg-gray-50 transition-colors flex items-center gap-2">
                    Book Now
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M13.8717 12.0727L15.7173 12.0967L15.6269 5.13663L7.73203 4.11147L6.82122 5.02227L7.75599 5.95704L12.4883 6.0185L4.16793 14.3388L5.48989 15.6608L13.8102 7.34046L13.8717 12.0727Z"
                        fill="#9D9D9D"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-black rounded-full px-14 py-6 text-[#2E2E2E] text-2xl font-medium hover:bg-black hover:text-white transition-colors">
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
}
