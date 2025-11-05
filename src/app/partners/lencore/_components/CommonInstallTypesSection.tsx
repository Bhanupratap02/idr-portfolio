/** @format */
import Image from "next/image";
const install1 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flencore%2Finstall1.png";
const install2 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flencore%2Finstall2.png";
const install3 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flencore%2Finstall3.png";
const install4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flencore%2Finstall4.png";
const install5 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flencore%2Finstall5.png";
export default function CommonInstallTypesSection() {
  const installTypes = [
    {
      title: "Law Offices & Financial Institutions",
      image: install1,
    },
    {
      title: "Hospitals & Healthcare Facilities",
      image: install2,
    },
    {
      title: "Call Centers & Tech Hubs",
      image: install3,
    },
    {
      title: "Government & Military Sites",
      image: install4,
    },
    {
      title: "Education & Testing Centers",
      image: install5,
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28 bg-gray-50">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center text-gray-800 mb-10 sm:mb-12 md:mb-16 xl:mb-20 2xl:mb-24">
          Common Install Types
        </h2>

        {/* Install Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 xl:gap-10 2xl:gap-12">
          {installTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-8 group hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden mb-3 sm:mb-4 md:mb-5 xl:mb-6 2xl:mb-7 rounded-lg">
                <Image
                  src={type.image}
                  alt={`${type.title} - Lencore sound masking installation example`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
              </div>

              {/* Title */}
              <div className="px-1 sm:px-2">
                <h3 className="text-base  md:text-lg xl:text-xl 2xl:text-2xl font-medium text-gray-800 text-left leading-tight">
                  {type.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
