/** @format */
import Image from "next/image";
const warning = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Ficons%2Fwarning.png";
const certified = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fnetworks-it%2Fcertified.png";
const certifications = [
  // { icon: warning },
  { name: "HPE / Aruba" },
  { name: "Cisco / Meraki" },
  { name: "Ubiquiti" },
  { name: "Fortinet" },
  { name: "Sophos" },
];

const features = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.59503 0.228425C6.40753 0.0315502 6.12628 -0.0434498 5.86378 0.0253002C5.60128 0.0940502 5.39815 0.303425 5.3294 0.565925L4.83565 2.51905L2.89815 1.97218C2.63565 1.89718 2.3544 1.97218 2.16378 2.1628C1.97315 2.35343 1.89815 2.63468 1.97315 2.89718L2.52003 4.83468L0.566902 5.33155C0.304402 5.39718 0.0981518 5.60343 0.0262768 5.86593C-0.0455982 6.12843 0.0325268 6.40655 0.229402 6.59405L1.67315 8.0003L0.229402 9.40655C0.0325268 9.59405 -0.0424732 9.8753 0.0262768 10.1378C0.0950268 10.4003 0.304402 10.6034 0.566902 10.6722L2.52003 11.1659L1.97315 13.1034C1.89815 13.3659 1.97315 13.6472 2.16378 13.8378C2.3544 14.0284 2.63565 14.1034 2.89815 14.0284L4.83565 13.4816L5.3294 15.4347C5.39503 15.6972 5.60128 15.9034 5.86378 15.9753C6.12628 16.0472 6.4044 15.9691 6.59503 15.7753L8.00128 14.3316L9.40753 15.7753C9.59815 15.9691 9.87628 16.0472 10.1388 15.9753C10.4013 15.9034 10.6044 15.6972 10.6732 15.4347L11.1669 13.4816L13.1044 14.0284C13.3669 14.1034 13.6482 14.0284 13.8388 13.8378C14.0294 13.6472 14.1044 13.3659 14.0294 13.1034L13.4825 11.1659L15.4357 10.6722C15.6982 10.6066 15.9044 10.4003 15.9763 10.1378C16.0482 9.8753 15.97 9.59718 15.7763 9.40655L14.3325 8.0003L15.7763 6.59405C15.97 6.40343 16.0482 6.1253 15.9763 5.8628C15.9044 5.6003 15.6982 5.39718 15.4357 5.32843L13.4825 4.83468L14.0294 2.89718C14.1044 2.63468 14.0294 2.35343 13.8388 2.1628C13.6482 1.97218 13.3669 1.89718 13.1044 1.97218L11.1669 2.51905L10.67 0.565925C10.6044 0.303425 10.3982 0.0971752 10.1357 0.0253002C9.87315 -0.0465748 9.59503 0.0315502 9.40753 0.228425L8.00128 1.67218L6.59503 0.228425Z"
          fill="#0057B8"
        />
      </svg>
    ),
    title: "Cisco Select Certified Partner",
    description: "Specialized expertise in Cisco networking solutions",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.59503 0.228425C6.40753 0.0315502 6.12628 -0.0434498 5.86378 0.0253002C5.60128 0.0940502 5.39815 0.303425 5.3294 0.565925L4.83565 2.51905L2.89815 1.97218C2.63565 1.89718 2.3544 1.97218 2.16378 2.1628C1.97315 2.35343 1.89815 2.63468 1.97315 2.89718L2.52003 4.83468L0.566902 5.33155C0.304402 5.39718 0.0981518 5.60343 0.0262768 5.86593C-0.0455982 6.12843 0.0325268 6.40655 0.229402 6.59405L1.67315 8.0003L0.229402 9.40655C0.0325268 9.59405 -0.0424732 9.8753 0.0262768 10.1378C0.0950268 10.4003 0.304402 10.6034 0.566902 10.6722L2.52003 11.1659L1.97315 13.1034C1.89815 13.3659 1.97315 13.6472 2.16378 13.8378C2.3544 14.0284 2.63565 14.1034 2.89815 14.0284L4.83565 13.4816L5.3294 15.4347C5.39503 15.6972 5.60128 15.9034 5.86378 15.9753C6.12628 16.0472 6.4044 15.9691 6.59503 15.7753L8.00128 14.3316L9.40753 15.7753C9.59815 15.9691 9.87628 16.0472 10.1388 15.9753C10.4013 15.9034 10.6044 15.6972 10.6732 15.4347L11.1669 13.4816L13.1044 14.0284C13.3669 14.1034 13.6482 14.0284 13.8388 13.8378C14.0294 13.6472 14.1044 13.3659 14.0294 13.1034L13.4825 11.1659L15.4357 10.6722C15.6982 10.6066 15.9044 10.4003 15.9763 10.1378C16.0482 9.8753 15.97 9.59718 15.7763 9.40655L14.3325 8.0003L15.7763 6.59405C15.97 6.40343 16.0482 6.1253 15.9763 5.8628C15.9044 5.6003 15.6982 5.39718 15.4357 5.32843L13.4825 4.83468L14.0294 2.89718C14.1044 2.63468 14.0294 2.35343 13.8388 2.1628C13.6482 1.97218 13.3669 1.89718 13.1044 1.97218L11.1669 2.51905L10.67 0.565925C10.6044 0.303425 10.3982 0.0971752 10.1357 0.0253002C9.87315 -0.0465748 9.59503 0.0315502 9.40753 0.228425L8.00128 1.67218L6.59503 0.228425Z"
          fill="#0057B8"
        />
      </svg>
    ),
    title: "CCNA Certified Engineers",
    description: "Industry-standard networking expertise",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.59503 0.228425C6.40753 0.0315502 6.12628 -0.0434498 5.86378 0.0253002C5.60128 0.0940502 5.39815 0.303425 5.3294 0.565925L4.83565 2.51905L2.89815 1.97218C2.63565 1.89718 2.3544 1.97218 2.16378 2.1628C1.97315 2.35343 1.89815 2.63468 1.97315 2.89718L2.52003 4.83468L0.566902 5.33155C0.304402 5.39718 0.0981518 5.60343 0.0262768 5.86593C-0.0455982 6.12843 0.0325268 6.40655 0.229402 6.59405L1.67315 8.0003L0.229402 9.40655C0.0325268 9.59405 -0.0424732 9.8753 0.0262768 10.1378C0.0950268 10.4003 0.304402 10.6034 0.566902 10.6722L2.52003 11.1659L1.97315 13.1034C1.89815 13.3659 1.97315 13.6472 2.16378 13.8378C2.3544 14.0284 2.63565 14.1034 2.89815 14.0284L4.83565 13.4816L5.3294 15.4347C5.39503 15.6972 5.60128 15.9034 5.86378 15.9753C6.12628 16.0472 6.4044 15.9691 6.59503 15.7753L8.00128 14.3316L9.40753 15.7753C9.59815 15.9691 9.87628 16.0472 10.1388 15.9753C10.4013 15.9034 10.6044 15.6972 10.6732 15.4347L11.1669 13.4816L13.1044 14.0284C13.3669 14.1034 13.6482 14.0284 13.8388 13.8378C14.0294 13.6472 14.1044 13.3659 14.0294 13.1034L13.4825 11.1659L15.4357 10.6722C15.6982 10.6066 15.9044 10.4003 15.9763 10.1378C16.0482 9.8753 15.97 9.59718 15.7763 9.40655L14.3325 8.0003L15.7763 6.59405C15.97 6.40343 16.0482 6.1253 15.9763 5.8628C15.9044 5.6003 15.6982 5.39718 15.4357 5.32843L13.4825 4.83468L14.0294 2.89718C14.1044 2.63468 14.0294 2.35343 13.8388 2.1628C13.6482 1.97218 13.3669 1.89718 13.1044 1.97218L11.1669 2.51905L10.67 0.565925C10.6044 0.303425 10.3982 0.0971752 10.1357 0.0253002C9.87315 -0.0465748 9.59503 0.0315502 9.40753 0.228425L8.00128 1.67218L6.59503 0.228425Z"
          fill="#0057B8"
        />
      </svg>
    ),
    title: "Network Security Specialists",
    description: "Dedicated to implementing secure infrastructure",
  },
];
export default function NITCertifiedSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 bg-gray-50">
      {/* <div className="container mx-auto px-6 lg:px-8"> */}
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-gray-800 mb-4">
            Certified. Experienced. Ready for Scale.
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our team holds industry-leading certifications and partnerships to
            deliver enterprise-grade solutions for businesses of all sizes.
          </p>
        </div>

        {/* Certification badges */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center xl:justify-between gap-8 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-center justify-center min-w-[144px] h-24"
              >
                <div className="text-center">
                  {/* {cert?.icon && (
                    <Image
                      src={cert.icon}
                      alt={cert.name || "Certification Badge"}
                      width={48}
                      height={48}
                      className="mx-auto mb-2"
                    />
                  )} */}
                  {cert?.name && (
                    <span className="font-medium text-gray-700 text-base md:text-lg 2xl:text-xl">
                      {cert.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch h-full">
          {/* Left Image */}
          <div className="relative h-full">
            <Image
              src={certified}
              width={1200} // ✅ Add a width (Next.js requires this)
              height={800} // ✅ Add a height (keeps correct aspect ratio)
              alt="Certified Network Engineers"
              className="w-full md:h-[20rem] lg:h-[25rem]  3xl:h-[32rem] rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 h-full flex flex-col 3xl:justify-evenly">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6  shadow-sm border-l-4 border-blue-600 "
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg 2xl:text-xl 3xl:text-2xl font-medium text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
