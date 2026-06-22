/** @format */

import Image from "next/image";
const hero_image = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Fhero_img.png";
const cloud = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fcloud.png";
const door_control = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fdoor_control.png";
const mobile_first = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fmobile_support.png";
import Link from "next/link";
export default function HeroSection() {
  const features = [
    {
      title: "Cloud & On-Premise Systems",
      image: cloud,
      imageAlt: "Cloud & On-Premise Systems Icon",
      imageStyle: "w-10 h-8",
    },
    {
      title: "Single or Multi-Door Control",
      image: door_control,
      imageAlt: "Single or Multi-Door Control Icon",
      imageStyle: "w-9 h-8",
    },
    {
      title: "Mobile-First Support",
      image: mobile_first,
      imageAlt: "Mobile-First Support Icon",
      imageStyle: "w-6 h-8",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 2xl:py-24 3xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Main Title */}
              <h1 className="text-[#2E2E2E] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  font-medium leading-tight mb-4 sm:mb-6">
                Security Access Control Systems
              </h1>

              {/* Subtitle */}
              <h2 className="text-[#2E2E2E] text-xl sm:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium leading-relaxed mb-3 sm:mb-4">
                Access Control Services That Go Beyond Installation
              </h2>

              {/* Description */}
              <p className="text-[#4B5563] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
                At IDR Technology Solutions, we design, install and support security access control systems that secure your space without slowing you down.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 sm:mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 2xl:p-6 3xl:p-8 text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={40}
                        height={32}
                        className={feature.imageStyle}
                      />
                    </div>
                    <h3 className="text-[#2E2E2E] text-sm sm:text-base 2xl:text-lg 3xl:text-xl font-medium">
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={"/contact"} className="bg-[#FFD700] text-[#2E2E2E] rounded-md px-6 py-3 text-base sm:text-lg 2xl:px-10 2xl:py-5 2xl:text-xl 3xl:px-12 3xl:py-6 3xl:text-2xl font-medium shadow-md hover:bg-yellow-500 transition-colors cursor-pointer">
                Get a Free Consultation
              </Link>
            </div>

            {/* Right Hero Image */}
            <div className="w-full">
              <Image
                src={hero_image}
                alt="Access Control System Interface"
                width={950}
                height={700}
                className="w-full h-auto rounded-lg max-w-[500px] sm:max-w-[550px] lg:max-w-[700px] 2xl:max-w-[800px] 3xl:max-w-[950px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
