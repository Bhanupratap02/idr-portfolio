/** @format */
import Image from "next/image";
import CompleteSurveillance from "@/assets/services/surveillance-camera/complete_surveillance.png";
import camera from "@/assets/services/surveillance-camera/camera.png";
import support from "@/assets/services/surveillance-camera/support.png";
export default function CompleteSurveillanceSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-medium text-[#2E2E2E] leading-[111.111%]">
              Complete Surveillance Solutions
            </h2>
            <p className="text-xl text-[#626262] leading-[150%]">
              At IDR Technology Solutions, we design, install, support, and
              service modern surveillance camera systems for commercial,
              multifamily, and industrial spaces. Whether you're securing a
              single office or hundreds of units across multiple properties, we
              bring the expertise and tools to keep your site covered —
              literally.
            </p>

            {/* Features */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-3">
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_11586)">
                      <path
                        d="M0.5 6C0.5 4.34531 1.84531 3 3.5 3H15.5C17.1547 3 18.5 4.34531 18.5 6V18C18.5 19.6547 17.1547 21 15.5 21H3.5C1.84531 21 0.5 19.6547 0.5 18V6ZM26.7078 4.67813C27.1953 4.94063 27.5 5.44688 27.5 6V18C27.5 18.5531 27.1953 19.0594 26.7078 19.3219C26.2203 19.5844 25.6297 19.5562 25.1656 19.2469L20.6656 16.2469L20 15.8016V15V9V8.19844L20.6656 7.75312L25.1656 4.75313C25.625 4.44844 26.2156 4.41563 26.7078 4.67813Z"
                        fill="#2563EB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_11586">
                        <path d="M0.5 0H27.5V24H0.5V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-base font-medium text-[#2E2E2E] mb-0">
                  Design & Install
                </h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center mb-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_11593)">
                      <path
                        d="M3.68375 0.233962C3.23844 -0.112913 2.60563 -0.0707256 2.2025 0.327712L0.3275 2.20271C-0.0709373 2.60115 -0.113125 3.23396 0.229063 3.68396L3.97906 8.55896C4.19 8.83552 4.52281 8.99959 4.86969 8.99959H7.40563L12.515 14.109C11.8259 15.4683 12.0463 17.1746 13.1853 18.309L18.4353 23.559C19.0212 24.1449 19.9728 24.1449 20.5588 23.559L23.5588 20.559C24.1447 19.973 24.1447 19.0215 23.5588 18.4355L18.3088 13.1855C17.1744 12.0511 15.4681 11.8261 14.1088 12.5152L8.99938 7.40584V4.87459C8.99938 4.52302 8.83531 4.1949 8.55875 3.98396L3.68375 0.233962ZM0.932188 18.5668C0.336875 19.1621 -0.000624785 19.973 -0.000624785 20.8168C-0.000624785 22.5746 1.42438 23.9996 3.18219 23.9996C4.02594 23.9996 4.83687 23.6621 5.43219 23.0668L10.9541 17.5449C10.5884 16.5652 10.5322 15.5012 10.7853 14.4933L7.89312 11.6011L0.932188 18.5668ZM23.9994 6.74959C23.9994 6.2574 23.9478 5.77927 23.8494 5.3199C23.7369 4.7949 23.0947 4.65896 22.715 5.03865L19.7197 8.03396C19.5791 8.17459 19.3869 8.25427 19.19 8.25427H16.4994C16.0869 8.25427 15.7494 7.91677 15.7494 7.50427V4.80896C15.7494 4.61209 15.8291 4.4199 15.9697 4.27927L18.965 1.28396C19.3447 0.904274 19.2088 0.262087 18.6838 0.149587C18.2197 0.0511494 17.7416 -0.000413072 17.2494 -0.000413072C13.5228 -0.000413072 10.4994 3.02302 10.4994 6.74959V6.78709L14.4978 10.7855C16.1853 10.359 18.0509 10.809 19.3728 12.1308L20.1088 12.8668C22.4056 11.7886 23.9994 9.45427 23.9994 6.74959ZM2.62438 20.2496C2.62438 19.9512 2.7429 19.6651 2.95388 19.4541C3.16486 19.2431 3.45101 19.1246 3.74938 19.1246C4.04774 19.1246 4.33389 19.2431 4.54487 19.4541C4.75585 19.6651 4.87437 19.9512 4.87438 20.2496C4.87438 20.548 4.75585 20.8341 4.54487 21.0451C4.33389 21.2561 4.04774 21.3746 3.74938 21.3746C3.45101 21.3746 3.16486 21.2561 2.95388 21.0451C2.7429 20.8341 2.62438 20.548 2.62438 20.2496Z"
                        fill="#16A34A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_11593">
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-base font-medium text-[#2E2E2E] mb-0">
                  Support & Service
                </h3>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center">
            <div className="w-[576px] h-[384px] rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] overflow-hidden">
              <Image
                src={CompleteSurveillance}
                alt="Surveillance Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
