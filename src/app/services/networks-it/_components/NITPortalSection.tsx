/** @format */
import Image from "next/image";
import portal from "@/assets/services/networks-it/portal.png";  
const portalFeatures = [
    {
      icon: (
        <svg
          width="13"
          height="16"
          viewBox="0 0 13 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.20312 0C4.89687 0 3.78437 0.834375 3.375 2H2.20312C1.1 2 0.203125 2.89687 0.203125 4V14C0.203125 15.1031 1.1 16 2.20312 16H10.2031C11.3062 16 12.2031 15.1031 12.2031 14V4C12.2031 2.89687 11.3062 2 10.2031 2H9.03125C8.62187 0.834375 7.50938 0 6.20312 0ZM6.20312 2C6.46834 2 6.7227 2.10536 6.91023 2.29289C7.09777 2.48043 7.20312 2.73478 7.20312 3C7.20312 3.26522 7.09777 3.51957 6.91023 3.70711C6.7227 3.89464 6.46834 4 6.20312 4C5.93791 4 5.68355 3.89464 5.49602 3.70711C5.30848 3.51957 5.20312 3.26522 5.20312 3C5.20312 2.73478 5.30848 2.48043 5.49602 2.29289C5.68355 2.10536 5.93791 2 6.20312 2ZM2.45312 8.5C2.45312 8.30109 2.53214 8.11032 2.67279 7.96967C2.81345 7.82902 3.00421 7.75 3.20312 7.75C3.40204 7.75 3.5928 7.82902 3.73346 7.96967C3.87411 8.11032 3.95312 8.30109 3.95312 8.5C3.95312 8.69891 3.87411 8.88968 3.73346 9.03033C3.5928 9.17098 3.40204 9.25 3.20312 9.25C3.00421 9.25 2.81345 9.17098 2.67279 9.03033C2.53214 8.88968 2.45312 8.69891 2.45312 8.5ZM5.70312 8H9.70312C9.97812 8 10.2031 8.225 10.2031 8.5C10.2031 8.775 9.97812 9 9.70312 9H5.70312C5.42812 9 5.20312 8.775 5.20312 8.5C5.20312 8.225 5.42812 8 5.70312 8ZM2.45312 11.5C2.45312 11.3011 2.53214 11.1103 2.67279 10.9697C2.81345 10.829 3.00421 10.75 3.20312 10.75C3.40204 10.75 3.5928 10.829 3.73346 10.9697C3.87411 11.1103 3.95312 11.3011 3.95312 11.5C3.95312 11.6989 3.87411 11.8897 3.73346 12.0303C3.5928 12.171 3.40204 12.25 3.20312 12.25C3.00421 12.25 2.81345 12.171 2.67279 12.0303C2.53214 11.8897 2.45312 11.6989 2.45312 11.5ZM5.20312 11.5C5.20312 11.225 5.42812 11 5.70312 11H9.70312C9.97812 11 10.2031 11.225 10.2031 11.5C10.2031 11.775 9.97812 12 9.70312 12H5.70312C5.42812 12 5.20312 11.775 5.20312 11.5Z"
            fill="#0057B8"
          />
        </svg>
      ),
      title: "Service Logs",
      description:
        "View complete history of all maintenance and service activities.",
    },
    {
      icon: (
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.17812 6.99375L0.40625 11.7437V3C0.40625 1.89688 1.30313 1 2.40625 1H6.07812C6.60938 1 7.11875 1.20938 7.49375 1.58438L8.32188 2.4125C8.69687 2.7875 9.20625 2.99688 9.7375 2.99688H13.4062C14.5094 2.99688 15.4062 3.89375 15.4062 4.99687V5.99687H4.90625C4.19375 5.99687 3.5375 6.375 3.17812 6.99062V6.99375ZM4.04063 7.49687C4.22188 7.1875 4.55 7 4.90625 7H17.4062C17.7656 7 18.0938 7.19063 18.2719 7.50313C18.45 7.81563 18.45 8.19688 18.2687 8.50625L14.7688 14.5063C14.5906 14.8125 14.2625 15 13.9062 15H1.40625C1.04688 15 0.71875 14.8094 0.540625 14.4969C0.3625 14.1844 0.3625 13.8031 0.54375 13.4937L4.04375 7.49375L4.04063 7.49687Z"
            fill="#0057B8"
          />
        </svg>
      ),
      title: "Documentation Access",
      description:
        "Secure access to your network maps, IP schemes, and credentials.",
    },
    {
      icon: (
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.625 2C1.52188 2 0.625 2.89688 0.625 4V6C0.625 6.275 0.85625 6.49063 1.11562 6.58125C1.70312 6.78438 2.125 7.34375 2.125 8C2.125 8.65625 1.70312 9.21562 1.11562 9.41875C0.85625 9.50937 0.625 9.725 0.625 10V12C0.625 13.1031 1.52188 14 2.625 14H16.625C17.7281 14 18.625 13.1031 18.625 12V10C18.625 9.725 18.3937 9.50937 18.1344 9.41875C17.5469 9.21562 17.125 8.65625 17.125 8C17.125 7.34375 17.5469 6.78438 18.1344 6.58125C18.3937 6.49063 18.625 6.275 18.625 6V4C18.625 2.89688 17.7281 2 16.625 2H2.625ZM4.625 5.5V10.5C4.625 10.775 4.85 11 5.125 11H14.125C14.4 11 14.625 10.775 14.625 10.5V5.5C14.625 5.225 14.4 5 14.125 5H5.125C4.85 5 4.625 5.225 4.625 5.5ZM3.625 5C3.625 4.44688 4.07188 4 4.625 4H14.625C15.1781 4 15.625 4.44688 15.625 5V11C15.625 11.5531 15.1781 12 14.625 12H4.625C4.07188 12 3.625 11.5531 3.625 11V5Z"
            fill="#0057B8"
          />
        </svg>
      ),
      title: "Ticket Management",
      description: "Submit and track support requests with real-time updates.",
    },
    {
      icon: (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.82753 0C7.2744 0 6.82753 0.446875 6.82753 1V1.6C4.54628 2.0625 2.82753 4.08125 2.82753 6.5V7.0875C2.82753 8.55625 2.2869 9.975 1.3119 11.075L1.08065 11.3344C0.818152 11.6281 0.755652 12.05 0.915027 12.4094C1.0744 12.7688 1.43378 13 1.82753 13H13.8275C14.2213 13 14.5775 12.7688 14.74 12.4094C14.9025 12.05 14.8369 11.6281 14.5744 11.3344L14.3432 11.075C13.3682 9.975 12.8275 8.55937 12.8275 7.0875V6.5C12.8275 4.08125 11.1088 2.0625 8.82753 1.6V1C8.82753 0.446875 8.38065 0 7.82753 0ZM9.24315 15.4156C9.61815 15.0406 9.82753 14.5312 9.82753 14H7.82753H5.82753C5.82753 14.5312 6.0369 15.0406 6.4119 15.4156C6.7869 15.7906 7.29628 16 7.82753 16C8.35878 16 8.86815 15.7906 9.24315 15.4156Z"
            fill="#0057B8"
          />
        </svg>
      ),
      title: "Alerts & Updates",
      description:
        "Receive notifications about firmware updates and security alerts.",
    },
  ];
export default function NITPortalSection() {


  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-20"> */}
      <div className="max-w-[85rem] 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-gray-800 mb-4">
            The IDR Portal: Network Insight, Simplified
          </h2>
          <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access your network information, documentation, and support
            resources through our secure client portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-12 3xl:gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <Image
              src={portal}
              alt="IDR Portal Dashboard interface showing analytics and service logs"
              // className="w-full h-auto rounded-lg"
              className="w-full h-auto md:h-[22rem] lg:h-[26rem] xl:h-[28rem] 2xl:h-[31rem] 3xl:h-[34rem] rounded-lg  "
            />
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 xl:p-10 shadow-lg flex flex-col justify-between">
            <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-gray-900 mb-8">
              Portal Features
            </h3>

            <div className="space-y-6">
              {portalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base xl:text-lg 3xl:text-xl font-medium text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm 2xl:text-base 3xl:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 3xl:px-8 3xl:py-4 rounded-lg font-normal hover:bg-blue-700 transition-colors cursor-pointer">
                Request Portal Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
