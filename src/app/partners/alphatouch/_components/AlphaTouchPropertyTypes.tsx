/** @format */

const type1Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Ftype1.png";
const type2Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Ftype2.png";
const type3Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Ftype3.png";
const type4Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Ftype4.png";
const type5Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Ftype5.png";
const type6Img = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Falphatouch%2Ftype6.png";
import Image from "next/image";

const propertyTypes = [
  {
    image: type1Img,
    title: "Affordable Housing / Senior Living",
    description: "Accessible technology for all residents",
    bgColor: "bg-gradient-to-b from-[#2563EB] to-[#1E40AF]",
  },
  {
    image: type2Img,
    title: "NYC Multi-Family Buildings",
    description: "Perfect for urban residential properties",
    bgColor: "bg-gradient-to-b from-[#9333EA] to-[#6B21A8]",
  },
  {
    image: type3Img,
    title: "Condo & Co-op Developments",
    description: "Enhanced security for premium properties",
    bgColor: "bg-gradient-to-b from-[#16A34A] to-[#166534]",
  },
  {
    image: type4Img,
    title: "Mixed-Use Properties",
    description: "Flexible solutions for diverse buildings",
    bgColor: "bg-gradient-to-b from-[#EA580C] to-[#9A3412]",
  },
  {
    image: type5Img,
    title: "Office & Commercial",
    description: "Professional access control solutions",
    bgColor: "bg-gradient-to-b from-[#DC2626] to-[#991B1B]",
  },
  {
    image: type6Img,
    title: "Healthcare Facilities",
    description: "Secure, reliable communication systems",
    bgColor: "bg-gradient-to-b from-[#4F46E5] to-[#3730A3]",
  },
];

export default function AlphaTouchPropertyTypes() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 ">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-14 2xl:mb-18 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 leading-tight mb-4  md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-7">
            Ideal Property Types
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed px-2 sm:px-0 font-light">
            AlphaTouch systems work perfectly across various building types
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 3xl:gap-16">
          {propertyTypes.map((property) => (
            <div
              key={property.title}
              className={`relative group rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl 2xl:rounded-2xl 3xl:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-5  md:p-6 lg:p-6 xl:px-8  2xl:p-8.5 hover:-translate-y-2 ${property.bgColor}`}
            >
              {/* Image positioned like in Figma */}
              <div className="rounded-xl overflow-hidden mb-2  md:mb-4   2xl:mb-5.5 transition-all duration-300 group-hover:scale-105">
                <Image
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-1 md:py-2 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl   text-white mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-3.5 2xl:mb-4 leading-tight">
                  {property.title}
                </h3>
                <p
                  className={`text-white leading-relaxed text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl font-extralight `}
                >
                  {property.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
