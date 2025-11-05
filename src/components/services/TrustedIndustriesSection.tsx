/** @format */
const building = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Ficons%2Fbuilding.png";
const degree = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Ficons%2Fdegree.png";
const medical = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Ficons%2Fmedical.png";
const centers = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Ficons%2Fcenters.png";
const house = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Ficons%2Fhouse.png";
import Image from "next/image";
export default function TrustedIndustriesSection() {
  const industries = [
    {
      name: "Office Buildings",
      icon: building,
    },
    {
      name: "Schools & Colleges",
      icon: degree,
    },
    {
      name: "Medical Offices",
      icon: medical,
    },
    {
      name: "Wellness Centers",
      icon: centers,
    },
    {
      name: "Fund Managers",
      icon: house,
    },
  ];

  return (
    <section className="py-16 sm:py-18 xl:py-20 2xl:py-24 3xl:py-28 bg-white">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl  font-medium text-gray-900 mb-4">
            Trusted by Diverse Industries
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            From single-room installations to full-scale standardization, we
            serve clients of every size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
          {industries?.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 lg:p-8 2xl:p-10 text-center"
            >
              <div className="flex justify-center items-center mb-6">
               
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 sm:w-16 sm:h-16 2xl:w-20 2xl:h-20"
                  />

              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
