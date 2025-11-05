

/** @format */
import Image from "next/image";
const Building4 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fmvi%2Fbuilding4.png";
const Building5 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fmvi%2Fbuilding5.png";
const Building6 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fmvi%2Fbuilding6.png";
const Building7 = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fmvi%2Fbuilding7.png";

export default function BuildingsShowcaseSection() {
  const buildings = [
    { image: Building4, alt: "High-rise office building" },
    { image: Building5, alt: "Modern apartment complex" },
    { image: Building6, alt: "Corporate glass headquarters" },
    { image: Building7, alt: "Residential townhouse community" },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-20 xl:py-22 2xl:py-24 3xl:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-gray-900 mb-4 xl:mb-5 2xl:mb-6">
            100+ Buildings and Growing
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-600 font-light leading-relaxed">
            From the Bronx to Miami, MVI is trusted where reliability matters
            most.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-14">
          {buildings.map((building, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={building.image}
                alt={building.alt}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 2xl:h-96 object-cover rounded-xl"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

