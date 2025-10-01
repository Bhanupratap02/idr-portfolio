/** @format */


import type1Img from "@/assets/partners/alphatouch/type1.png"
import type2Img from "@/assets/partners/alphatouch/type2.png";
import type3Img from "@/assets/partners/alphatouch/type3.png";
import type4Img from "@/assets/partners/alphatouch/type4.png";
import type5Img from "@/assets/partners/alphatouch/type5.png";
import type6Img from "@/assets/partners/alphatouch/type6.png";
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
    <section className="bg-white py-16 sm:py-20 lg:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
            Ideal Property Types
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            AlphaTouch systems work perfectly across various building types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyTypes.map((property) => (
            <div
              key={property.title}
              className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${property.bgColor}`}
            >
              {/* Image positioned like in Figma */}
              <div className="rounded-xl overflow-hidden mb-4  h-56">
                <Image
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-medium text-white mb-2 leading-tight">
                  {property.title}
                </h3>
                <p className={`text-white leading-relaxed`}>
                  {property.description}
                </p>
              </div>
              {/* Text positioned absolutely at bottom like Figma */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
