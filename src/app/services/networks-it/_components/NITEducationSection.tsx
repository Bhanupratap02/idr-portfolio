/** @format */
import Image from "next/image";
const education = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fnetworks-it%2Feducation.png";
import Link from "next/link";
const educationFeatures = [
  {
    icon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.69356 6.34062C3.84981 4.27187 6.77481 3 9.99981 3C13.2248 3 16.1498 4.27187 18.3061 6.34062C18.7061 6.72187 19.3373 6.70937 19.7186 6.3125C20.0998 5.91563 20.0873 5.28125 19.6904 4.9C17.1779 2.48438 13.7623 1 9.99981 1C6.23731 1 2.82168 2.48438 0.306058 4.89687C-0.0908168 5.28125 -0.103317 5.9125 0.277933 6.3125C0.659183 6.7125 1.29356 6.725 1.69043 6.34062H1.69356ZM9.99981 8C11.7748 8 13.3936 8.65938 14.6311 9.75C15.0467 10.1156 15.6779 10.075 16.0436 9.6625C16.4092 9.25 16.3686 8.61562 15.9561 8.25C14.3686 6.85 12.2811 6 9.99981 6C7.71856 6 5.63106 6.85 4.04668 8.25C3.63106 8.61562 3.59356 9.24688 3.95918 9.6625C4.32481 10.0781 4.95606 10.1156 5.37168 9.75C6.60606 8.65938 8.22481 8 10.0029 8H9.99981ZM11.9998 13C11.9998 12.4696 11.7891 11.9609 11.414 11.5858C11.0389 11.2107 10.5302 11 9.99981 11C9.46938 11 8.96067 11.2107 8.5856 11.5858C8.21052 11.9609 7.99981 12.4696 7.99981 13C7.99981 13.5304 8.21052 14.0391 8.5856 14.4142C8.96067 14.7893 9.46938 15 9.99981 15C10.5302 15 11.0389 14.7893 11.414 14.4142C11.7891 14.0391 11.9998 13.5304 11.9998 13Z"
          fill="white"
        />
      </svg>
    ),
    title: "Campus-Wide Wi-Fi Coverage",
    description:
      "Seamless connectivity throughout classrooms, common areas, and administrative spaces with high-density support.",
  },
  {
    icon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 1C2.89687 1 2 1.89688 2 3V11H4V3H16V11H18V3C18 1.89688 17.1031 1 16 1H4ZM0.6 12C0.26875 12 0 12.2688 0 12.6C0 13.925 1.075 15 2.4 15H17.6C18.925 15 20 13.925 20 12.6C20 12.2688 19.7312 12 19.4 12H0.6Z"
          fill="white"
        />
      </svg>
    ),
    title: "Chromebook & Endpoint Support",
    description:
      "Device management, deployment, and support for student and faculty devices.",
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
          d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z"
          fill="white"
        />
      </svg>
    ),
    title: "Segmented Networks & Security",
    description:
      "CIPA-compliant filtering, separate staff/student networks, and robust security protocols.",
  },
  {
    icon: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 1C1.89688 1 1 1.89688 1 3V12H3V3H15V12H17V3C17 1.89688 16.1031 1 15 1H3ZM7 12V13H1C0.446875 13 0 13.4469 0 14C0 14.5531 0.446875 15 1 15H17C17.5531 15 18 14.5531 18 14C18 13.4469 17.5531 13 17 13H13V12C13 11.4469 12.5531 11 12 11H8C7.44688 11 7 11.4469 7 12Z"
          fill="white"
        />
      </svg>
    ),
    title: "Interactive Classroom Technology",
    description:
      "Support for digital displays, projectors, and interactive learning tools.",
  },
];
export default function NITEducationSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 bg-white">
      <div className="max-w-[85rem] 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-gray-800 mb-4">
            Empowering Education Through Seamless IT
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-12 items-center">
          {/* Left Image */}
          <div className="relative ">
            <Image
              src={education}
              alt="Education Technology Classroom"
              className="w-full md:h-[20rem] lg:h-[28rem] 2xl:h-[32rem]   rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl xl:text-2xl 2xl:text-[1.6rem] 3xl:text-4xl font-medium text-gray-900 mb-6">
              Specialized Solutions for Educational Institutions
            </h3>

            <div className="space-y-4 2xl:space-y-6 3xl:space-y-8">
              {educationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg 3xl:text-xl font-medium text-gray-900 mb-2 3xl:mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm xl:text-base 2xl:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={"/services/e-rate-program"}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-normal hover:bg-blue-700 transition-colors text-sm md:text-base 3xl:text-base cursor-pointer"
              >
                Explore Education Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
