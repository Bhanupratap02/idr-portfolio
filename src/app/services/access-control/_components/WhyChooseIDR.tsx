/** @format */
const cloud = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fcloud.png";
const certified = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fcertified.png";
const records = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Frecords.png";
const multi_tenants = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fmulti_tenants.png";
const support = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fsupport.png";
const portal_access = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fportal_access.png";
const trust = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Ftrust.png";
import Image from "next/image";
export default function WhyChooseIDR() {
  const features = [
    {
      icon: cloud,
      title: "Cloud + On-Prem Support",
      desc: "Flexible deployment options to fit your infrastructure",
    },
    {
      icon: certified,
      title: "Certified Techs",
      desc: "Factory-trained experts who know their systems",
    },
    {
      icon: records,
      title: "Full Documentation",
      desc: "Complete records of your installation",
    },
    {
      icon: multi_tenants,
      title: "Multi-Tenant Ready",
      desc: "Solutions designed for complex properties",
    },
    {
      icon: support,
      title: "In-House Support",
      desc: "Direct access to our expert team",
    },
    {
      icon: portal_access,
      title: "Portal Access for All",
      desc: "Transparent system management",
    },
  ];

  return (
    <section
      className="bg-[#F9FAFB] px-4 sm:px-8 lg:px-16 xl:px-28  py-12 sm:py-16 lg:py-20 2xl:py-24 3xl:py-28
"
    >
      <div
        className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem]
        mx-auto text-center"
      >
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-10 sm:mb-14 lg:mb-16">
          Why Teams Choose IDR
        </h2>
     <p className="text-[#626262] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl mb-10 sm:mb-16 max-w-3xl mx-auto">
         Teams choose IDR for expertly designed security access control systems that protect people, property, and data without disrupting daily operations. We deliver reliable access control services, including professional access control systems installation NYC businesses trust for scalable and secure entry management.
        From system design to long-term support, our access control system NYC solutions are built for performance, flexibility and seamless integration with your existing infrastructure.
        </p>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10 3xl:gap-12 mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md sm:shadow-lg p-6 sm:p-8 text-center"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 object-contain"
                />
              </div>
              <h3 className="text-[#2E2E2E] text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl font-medium mb-2 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-[#626262] text-sm sm:text-base 2xl:text-lg 3xl:text-xl leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="bg-white rounded-lg shadow-md sm:shadow-lg px-4 sm:px-6 py-4 sm:py-6 inline-flex items-center gap-3 sm:gap-4">
          <Image
            src={trust}
            alt="Trusted by 500+ Properties"
            width={56}
            height={56}
            className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 object-contain"
          />

          <span className="text-[#2E2E2E] text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-medium">
            Trusted by 500+ Properties
          </span>
        </div>
      </div>
    </section>
  );
}
