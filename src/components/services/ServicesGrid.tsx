/** @format */

import Image from "next/image";
const image1 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_1.png";
const image2 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_2.png";
const image3 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_3.png";
const image4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_4.png";
const image5 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_5.png";
const image6 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_6.png";
const image7 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_7.png";
const image8 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_8.png";
const image9 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fimg_9.png";
import Link from "next/link";

const services = [
  {
    id: 1,
    image: image1,
    title: "Access Control Systems",
    description:
      "At IDR Technology Solutions, we design, install, and support access control systems that secure your space without slowing you down. Whether you're managing a single door or hundreds.......",
    url: "/services/access-control",
  },
  {
    id: 2,
    image: image2,
    title: "Audio / Visual Systems",
    description:
      "At IDR Technology Solutions, A/V isn't just another service — it's the part of the job we genuinely love. From smart meeting and conference rooms to immersive speaker.......",
    url: "/services/audio-visual",
  },
  {
    id: 3,
    image: image3,
    title: "Conference Room Solutions",
    description:
      "A great meeting room isn't just about the table and chairs — it's about how well people can see, hear, and connect. At IDR Technology Solutions, we design, install, and support......",
    url: "/services/conference-room",
  },

  {
    id: 4,
    image: image4,
    title: "Data Center Infrastructure",
    description:
      "At IDR Technology Solutions, we design and build data center infrastructure that delivers power, performance, and uptime. Whether it's a dedicated server room, enterprise data hall.........",
    url: "/services/data-center",
  },
  {
    id: 5,
    image: image5,
    title: "Multifamily Dwelling Intercoms",
    description:
      "IDR Technology Solutions designs, installs, and supports smart intercom systems for multifamily properties, condos, and mixed-use buildings. Whether it's a new development or a retrofit.......",
    url: "/services/intercom",
  },
  {
    id: 6,
    image: image6,
    title: "Networks & IT Infrastructure",
    description:
      "Modern buildings demand modern infrastructure — and that starts with a rock-solid network. At IDR Technology Solutions, we design, install, and support IT networks that......",
    url: "/services/networks-it",
  },
  {
    id: 7,
    image: image7,
    title: "Security Alarm Systems",
    description:
      "At IDR Technology Solutions, we design, install, and support reliable intrusion alarm systems to protect your building, staff, and assets. Whether you're securing a retail space.........",
    url: "/services/security-alarm",
  },

  {
    id: 8,
    image: image8,
    title: "Structured Cabling",
    description:
      "Your network is only as strong as the cables behind the walls. At IDR Technology Solutions, we design and install structured cabling systems that deliver reliability, flexibilityt......",
    url: "/services/structured-cabling",
  },
  {
    id: 9,
    image: image9,
    title: "Surveillance Camera Systems",
    description:
      "At IDR Technology Solutions, we design, install, support, and service modern surveillance camera systems for commercial, multifamily, and industrial spaces.",
    url: "/services/surveillance-camera",
  },
];

type ServicesGridProps = {
  title?: string;
  exclude?: number | number[]; // accept single or multiple ids
};
export default function ServicesGrid({
  exclude,
  title = "Explore More Services",
}: ServicesGridProps) {
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40 bg-white">
      <div className="mx-auto max-w-[120rem]  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-28 3xl:px-34">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24">
          <div className="lg:w-1/2 xl:w-2/5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-900 leading-tight">
              {title}
            </h2>
          </div>
          <div className="lg:w-2/5 xl:w-2/5 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-semibold text-gray-900">
              Services
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg  xl:text-xl 3xl:text-2xl leading-relaxed">
              Our Service Agreements deliver unmatched quality, reliability, and
              peace of mind.
            </p>
          </div>
        </div>

        <hr className="border-gray-300 mb-10 sm:mb-12 2xl:mb-16" />
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-10 3xl:gap-12 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 3xl:mb-40">
          {filteredServices?.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-2xl xl:rounded-3xl 2xl:rounded-3xl 3xl:rounded-3xl hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 hover:border  hover:border-gray-200 p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10 flex flex-col h-full"
            >
              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-6 2xl:mb-8 3xl:mb-10">
                {/* <Image
                  src={service.image}
                  alt={service.title || "Service Image"}
                  className="w-full h-56 sm:h-64 lg:h-72 2xl:h-80 3xl:h-96 object-fill rounded-2xl"
                /> */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title || "Service Image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Image overlay for better visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="space-y-6 3xl:space-y-7">
                <div>
                  <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  font-semibold text-gray-900 mb-2 2xl:mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service?.url}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-3 xl:py-3.5 2xl:py-4 rounded-md text-sm  sm:text-base xl:text-lg 2xl:text-xl font-medium transition-colors border border-gray-400 text-gray-900 hover:bg-gray-800 hover:text-white cursor-pointer"
                >
                  Learn More <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={"/contact"}
            className="px-8 sm:px-12 2xl:px-16 3xl:px-20 py-4 sm:py-6 2xl:py-8 border border-gray-800 rounded-2xl sm:rounded-3xl text-base sm:text-lg  lg:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-gray-800 hover:bg-gray-800 hover:text-white transition-colors cursor-pointer"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
