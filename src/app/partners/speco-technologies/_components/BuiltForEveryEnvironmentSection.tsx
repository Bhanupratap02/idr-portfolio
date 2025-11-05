/** @format */

const school = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fschool.png";
const retail = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fretail.png";
const commercial = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fcommercial.png";
const home = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fhome.png";
const warehousing = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fwarehousing.png";
const solution = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Fspeco%2Fsolution.png";
import Image from "next/image";

export default function BuiltForEveryEnvironmentSection() {
  const environmentCards = [
    {
      icon: school,
      title: "Schools",
      description:
        "Public, Private & Charter Schools with complete campus coverage",
      bgColor: "bg-[#f8f8f8]",
      textColor: "text-[#2e2e2e]",
      descColor: "text-[#626262]",
    },
    {
      icon: retail,
      title: "Retail",
      description:
        "Retail Shops & Plazas with theft prevention and customer monitoring",
      bgColor: "bg-[#f8f8f8]",
      textColor: "text-[#2e2e2e]",
      descColor: "text-[#626262]",
    },
    {
      icon: commercial,
      title: "Commercial",
      description:
        "Small-Medium Commercial Buildings with access control integration",
      bgColor: "bg-[#f8f8f8]",
      textColor: "text-[#2e2e2e]",
      descColor: "text-[#626262]",
    },
    {
      icon: home,
      title: "Residential",
      description:
        "Residential Complexes with common area and perimeter security",
      bgColor: "bg-[#f8f8f8]",
      textColor: "text-[#2e2e2e]",
      descColor: "text-[#626262]",
    },
    {
      icon: warehousing,
      title: "Warehousing",
      description:
        "Light Industrial / Warehousing with inventory and loading dock monitoring",
      bgColor: "bg-[#f8f8f8]",
      textColor: "text-[#2e2e2e]",
      descColor: "text-[#626262]",
    },
    {
      icon: solution,
      title: "Custom Solutions",
      description:
        "Tailored security systems for unique environments and requirements",
      bgColor: "bg-[#3b4fd1]",
      textColor: "text-white",
      descColor: "text-white",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 xl:gap-16 2xl:gap-20">
          <h2 className="font-medium text-[#2e2e2e] text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-center leading-tight">
            🏢 Built for Every Environment
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10">
            {environmentCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-lg border-0 shadow-sm hover:shadow-md transition-all duration-300 min-h-[210px] sm:min-h-[230px] md:min-h-[280px] xl:min-h-[290px] 2xl:min-h-[320px]`}
              >
                <div className="flex flex-col items-center p-4 sm:p-5 md:p-5 lg:p-4 xl:p-5  2xl:p-7  h-full justify-center text-center">
                  <div className="mb-4 sm:mb-5 md:mb-6 xl:mb-7 2xl:mb-8">
                    <Image
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20"
                      alt={`${card.title} security solutions`}
                      src={card.icon}
                      priority={index < 3}
                    />
                  </div>

                  <h3
                    className={`font-medium ${card.textColor} text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl text-center leading-tight mb-2 sm:mb-3 md:mb-4 xl:mb-5 2xl:mb-6`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={` ${card.descColor} text-sm sm:text-base  xl:text-lg 2xl:text-xl text-center font-light leading-relaxed px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
