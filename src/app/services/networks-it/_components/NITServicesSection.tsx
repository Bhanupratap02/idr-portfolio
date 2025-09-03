/** @format */
import Image from "next/image";
import cables from "@/assets/services/networks-it/cables.png";
const services = [
  {
    title: "Network Design & Planning",
    desc: "Comprehensive network planning with heat mapping, capacity planning, and redundancy strategies.",
    icon: (
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 2H12V4H8V2ZM7.5 0C6.67188 0 6 0.671875 6 1.5V4.5C6 5.32812 6.67188 6 7.5 6H9V7H1C0.446875 7 0 7.44688 0 8C0 8.55313 0.446875 9 1 9H4V10H2.5C1.67188 10 1 10.6719 1 11.5V14.5C1 15.3281 1.67188 16 2.5 16H7.5C8.32812 16 9 15.3281 9 14.5V11.5C9 10.6719 8.32812 10 7.5 10H6V9H14V10H12.5C11.6719 10 11 10.6719 11 11.5V14.5C11 15.3281 11.6719 16 12.5 16H17.5C18.3281 16 19 15.3281 19 14.5V11.5C19 10.6719 18.3281 10 17.5 10H16V9H19C19.5531 9 20 8.55313 20 8C20 7.44688 19.5531 7 19 7H11V6H12.5C13.3281 6 14 5.32812 14 4.5V1.5C14 0.671875 13.3281 0 12.5 0H7.5ZM3 14V12H7V14H3ZM13 12H17V14H13V12Z"
          fill="#0057B8"
        />
      </svg>
    ),
  },
  {
    title: "Cable & Fiber Infrastructure",
    desc: "Professional installation of Cat6/6A cabling, fiber optics, and structured cabling systems.",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 7V13C0 13.5531 0.446875 14 1 14H3V10.5C3 10.225 3.225 10 3.5 10C3.775 10 4 10.225 4 10.5V14H6V10.5C6 10.225 6.225 10 6.5 10C6.775 10 7 10.225 7 10.5V14H9V10.5C9 10.225 9.225 10 9.5 10C9.775 10 10 10.225 10 10.5V14H12V10.5C12 10.225 12.225 10 12.5 10C12.775 10 13 10.225 13 10.5V14H15C15.5531 14 16 13.5531 16 13V7C16 6.44688 15.5531 6 15 6H14V5C14 4.44688 13.5531 4 13 4H12V3C12 2.44687 11.5531 2 11 2H5C4.44688 2 4 2.44687 4 3V4H3C2.44688 4 2 4.44688 2 5V6H1C0.446875 6 0 6.44688 0 7Z"
          fill="#0057B8"
        />
      </svg>
    ),
  },
  {
    title: "Wireless Solutions",
    desc: "Enterprise Wi-Fi deployment with seamless roaming, guest networks, and high-density coverage.",
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
          fill="#0057B8"
        />
      </svg>
    ),
  },
  {
    title: "Server & Storage Solutions",
    desc: "On-premises and hybrid cloud solutions for data storage, backup, and application hosting.",
    icon: (
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2.5V4C14 5.38125 10.8656 6.5 7 6.5C3.13438 6.5 0 5.38125 0 4V2.5C0 1.11875 3.13438 0 7 0C10.8656 0 14 1.11875 14 2.5ZM12.2875 6.70937C12.9375 6.47813 13.5344 6.18125 14 5.81563V9C14 10.3813 10.8656 11.5 7 11.5C3.13438 11.5 0 10.3813 0 9V5.81563C0.465625 6.18438 1.0625 6.47813 1.7125 6.70937C3.11562 7.20937 4.98438 7.5 7 7.5C9.01562 7.5 10.8844 7.20937 12.2875 6.70937ZM0 10.8156C0.465625 11.1844 1.0625 11.4781 1.7125 11.7094C3.11562 12.2094 4.98438 12.5 7 12.5C9.01562 12.5 10.8844 12.2094 12.2875 11.7094C12.9375 11.4781 13.5344 11.1813 14 10.8156V13.5C14 14.8813 10.8656 16 7 16C3.13438 16 0 14.8813 0 13.5V10.8156Z"
          fill="#0057B8"
        />
      </svg>
    ),
  },
  {
    title: "Power & UPS Systems",
    desc: "Redundant power solutions with battery backup and power conditioning for critical infrastructure.",
    icon: (
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.92 1.39403C11.1044 0.965908 10.9669 0.465908 10.5888 0.190908C10.2107 -0.0840923 9.69504 -0.0590923 9.34192 0.247158L1.34192 7.24716C1.02942 7.52216 0.91692 7.96278 1.0638 8.35028C1.21067 8.73778 1.58567 9.00028 2.0013 9.00028H5.48567L3.08255 14.6065C2.89817 15.0347 3.03567 15.5347 3.4138 15.8097C3.79192 16.0847 4.30755 16.0597 4.66067 15.7534L12.6607 8.75341C12.9732 8.47841 13.0857 8.03778 12.9388 7.65028C12.7919 7.26278 12.42 7.00341 12.0013 7.00341H8.51692L10.92 1.39403Z"
          fill="#0057B8"
        />
      </svg>
    ),
  },
  {
    title: "Network Security",
    desc: "Firewall implementation, VPN solutions, and network segmentation to protect your data.",
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
          fill="#0057B8"
        />
      </svg>
    ),
  },
];
export default function NITServicesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 bg-gray-50">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="container mx-auto px-6 lg:px-8"> */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold text-gray-800">
            From the Rack to the Rooftop
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 2xl:gap-16 items-stretch">
              {/* Left side - Large card */}
              <div className="w-full h-full">
                <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col">
                  {/* <img
                    src={cables.src}
                    alt="Enterprise Infrastructure"
                    className="w-full h-full object-cover rounded-xl mb-6"
                  /> */}
                  <img
                    src={cables.src}
                    alt="Enterprise Infrastructure"
                    className="w-full h-64 md:h-88 lg:h-[32rem] 2xl:h-[34rem] 
                    3xl:h-[44rem] object-cover rounded-xl mb-6"
                  />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 1C0.896875 1 0 1.89688 0 3V5C0 6.10313 0.896875 7 2 7H14C15.1031 7 16 6.10313 16 5V3C16 1.89688 15.1031 1 14 1H2ZM10.75 3.25C10.9489 3.25 11.1397 3.32902 11.2803 3.46967C11.421 3.61032 11.5 3.80109 11.5 4C11.5 4.19891 11.421 4.38968 11.2803 4.53033C11.1397 4.67098 10.9489 4.75 10.75 4.75C10.5511 4.75 10.3603 4.67098 10.2197 4.53033C10.079 4.38968 10 4.19891 10 4C10 3.80109 10.079 3.61032 10.2197 3.46967C10.3603 3.32902 10.5511 3.25 10.75 3.25ZM12.25 4C12.25 3.80109 12.329 3.61032 12.4697 3.46967C12.6103 3.32902 12.8011 3.25 13 3.25C13.1989 3.25 13.3897 3.32902 13.5303 3.46967C13.671 3.61032 13.75 3.80109 13.75 4C13.75 4.19891 13.671 4.38968 13.5303 4.53033C13.3897 4.67098 13.1989 4.75 13 4.75C12.8011 4.75 12.6103 4.67098 12.4697 4.53033C12.329 4.38968 12.25 4.19891 12.25 4ZM2 9C0.896875 9 0 9.89688 0 11V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V11C16 9.89688 15.1031 9 14 9H2ZM10.75 11.25C10.9489 11.25 11.1397 11.329 11.2803 11.4697C11.421 11.6103 11.5 11.8011 11.5 12C11.5 12.1989 11.421 12.3897 11.2803 12.5303C11.1397 12.671 10.9489 12.75 10.75 12.75C10.5511 12.75 10.3603 12.671 10.2197 12.5303C10.079 12.3897 10 12.1989 10 12C10 11.8011 10.079 11.6103 10.2197 11.4697C10.3603 11.329 10.5511 11.25 10.75 11.25ZM12.5 12C12.5 11.8011 12.579 11.6103 12.7197 11.4697C12.8603 11.329 13.0511 11.25 13.25 11.25C13.4489 11.25 13.6397 11.329 13.7803 11.4697C13.921 11.6103 14 11.8011 14 12C14 12.1989 13.921 12.3897 13.7803 12.5303C13.6397 12.671 13.4489 12.75 13.25 12.75C13.0511 12.75 12.8603 12.671 12.7197 12.5303C12.579 12.3897 12.5 12.1989 12.5 12Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl 2xl:text-2xl font-medium text-gray-800">
                      Enterprise-Grade Infrastructure
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base 2xl:text-xl">
                    Our infrastructure solutions are built with quality
                    components and expert installation techniques to ensure
                    reliability and performance.
                  </p>
                </div>
              </div>

              {/* Right side - Grid of smaller cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-4 h-full">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 lg:p-6 2xl:p-8 3xl:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-200 flex flex-col"
                  >
                    <div className="w-10 h-10 3xl:w-12 3xl:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 3xl:mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg 2xl:text-xl font-medium text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base 3xl:text-lg text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
