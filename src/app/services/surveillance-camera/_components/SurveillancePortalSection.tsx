/** @format */

import { Button } from "@/components/ui/button";
import Image from "next/image";
import portal from "@/assets/services/surveillance-camera/portal.png";
const features = [
  {
    id: 1,
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_11856)">
          <path
            d="M2.34375 2.34375L1.28125 1.28125C0.809375 0.809375 0 1.14375 0 1.80938V5.25C0 5.66563 0.334375 6 0.75 6H4.19063C4.85938 6 5.19375 5.19063 4.72188 4.71875L3.75938 3.75625C4.84375 2.67188 6.34375 2 8 2C11.3125 2 14 4.6875 14 8C14 11.3125 11.3125 14 8 14C6.725 14 5.54375 13.6031 4.57188 12.925C4.11875 12.6094 3.49687 12.7188 3.17812 13.1719C2.85938 13.625 2.97187 14.2469 3.425 14.5656C4.725 15.4688 6.30312 16 8 16C12.4187 16 16 12.4187 16 8C16 3.58125 12.4187 0 8 0C5.79063 0 3.79063 0.896875 2.34375 2.34375ZM8 4C7.58437 4 7.25 4.33437 7.25 4.75V8C7.25 8.2 7.32812 8.39062 7.46875 8.53125L9.71875 10.7812C10.0125 11.075 10.4875 11.075 10.7781 10.7812C11.0687 10.4875 11.0719 10.0125 10.7781 9.72188L8.74687 7.69063V4.75C8.74687 4.33437 8.4125 4 7.99687 4H8Z"
            fill="#2563EB"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_11856">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "View service history with photos and videos",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_11861)">
          <path
            d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z"
            fill="#2563EB"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_11861">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Access equipment details and warranty status",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 4C0 2.89688 0.896875 2 2 2H16C17.1031 2 18 2.89688 18 4V6C18 6.275 17.7687 6.49063 17.5094 6.58125C16.9219 6.78438 16.5 7.34375 16.5 8C16.5 8.65625 16.9219 9.21562 17.5094 9.41875C17.7687 9.50937 18 9.725 18 10V12C18 13.1031 17.1031 14 16 14H2C0.896875 14 0 13.1031 0 12V10C0 9.725 0.23125 9.50937 0.490625 9.41875C1.07812 9.21562 1.5 8.65625 1.5 8C1.5 7.34375 1.07812 6.78438 0.490625 6.58125C0.23125 6.49063 0 6.275 0 6V4Z"
          fill="#2563EB"
        />
      </svg>
    ),
    title: "Submit service requests and track updates",
  },
];
export default function SurveillancePortalSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-36">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-28 3xl:px-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-stretch">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 2xl:space-y-7 3xl:space-y-12">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#2E2E2E] leading-snug">
              The IDR Portal: Everything, All in One Place
            </h2>
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl   text-[#626262] leading-relaxed">
              Every IDR customer gets access to the IDR Portal, our secure
              client platform. It&apos;s your window into everything we&apos;ve
              done — and everything your system needs.
            </p>

            {/* Feature List */}
            <div className="space-y-4  md:space-y-5 2xl:space-y-6 3xl:space-y-8">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 sm:gap-4 md:gap-5 2xl:gap-6 3xl:gap-7 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 3xl:w-8 3xl:h-8 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-base sm:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-[#626262] leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-6 2xl:px-9 3xl:px-12 2xl:py-7 3xl:py-8 text-base rounded-lg h-12 3xl:text-lg cursor-pointer"
            >
              Access Portal
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center h-full rounded-xl shadow-xl overflow-hidden">
            <Image
              src={portal}
              alt="IDR Portal Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
