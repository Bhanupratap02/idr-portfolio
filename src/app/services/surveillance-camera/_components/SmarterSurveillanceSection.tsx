/** @format */
import Image from "next/image";
import integration from "@/assets/services/surveillance-camera/integration.png";
import cloud from "@/assets/services/surveillance-camera/cloud.png";
import brain from "@/assets/services/surveillance-camera/brain.png";
import bell from "@/assets/services/surveillance-camera/bell.png";

export default function SmarterSurveillanceSection() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-[#2E2E2E] leading-[111.111%] mb-4">
            Smarter Surveillance, Built Around You
          </h2>
          <p className="text-lg text-[#626262] leading-[155.556%] max-w-4xl mx-auto">
            We specialize in cloud-first, AI-enabled camera systems from
            top-tier manufacturers like Vivotek, Rhombus, Verkada, Speco, and
            Eagle Eye Networks.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Cloud Access Card */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)]">
            <div className="w-16 h-16 bg-[#DBEAFE] rounded-full flex items-center justify-center mb-6">
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_11726)">
                  <path
                    d="M0 16.25C0 19.9766 3.225 23 7.2 23H25.6C29.135 23 32 20.3141 32 17C32 14.0984 29.8 11.675 26.88 11.1219C27.085 10.6203 27.2 10.0719 27.2 9.5C27.2 7.01562 25.05 5 22.4 5C21.415 5 20.495 5.28125 19.735 5.75937C18.35 3.50937 15.765 2 12.8 2C8.38 2 4.8 5.35625 4.8 9.5C4.8 9.62656 4.805 9.75313 4.81 9.87969C2.01 10.8031 0 13.3062 0 16.25Z"
                    fill="#2563EB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_11726">
                    <path d="M0 0H30V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2E2E2E] mb-4">
              Cloud Access & Storage
            </h3>
            <p className="text-base text-[#626262] leading-[150%]">
              Skip the NVR and access your video from anywhere with secure cloud
              storage and real-time monitoring.
            </p>
          </div>

          {/* AI Detection Card */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)]">
            <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_11738)">
                  <path
                    d="M9.34375 0C10.9129 0 12.1875 1.17656 12.1875 2.625V21.375C12.1875 22.8234 10.9129 24 9.34375 24C7.87617 24 6.66758 22.9734 6.51523 21.6516C6.25117 21.7172 5.97188 21.75 5.6875 21.75C3.89492 21.75 2.4375 20.4047 2.4375 18.75C2.4375 18.4031 2.50352 18.0656 2.62031 17.7562C1.08672 17.2219 0 15.8531 0 14.25C0 12.7547 0.949609 11.4609 2.32578 10.8609C1.88398 10.35 1.625 9.70312 1.625 9C1.625 7.56094 2.72188 6.36094 4.18438 6.06562C4.10313 5.80781 4.0625 5.53125 4.0625 5.25C4.0625 3.84844 5.10859 2.66719 6.51523 2.33906C6.66758 1.02656 7.87617 0 9.34375 0ZM16.6562 0C18.1238 0 19.3273 1.02656 19.4848 2.33906C20.8965 2.66719 21.9375 3.84375 21.9375 5.25C21.9375 5.53125 21.8969 5.80781 21.8156 6.06562C23.2781 6.35625 24.375 7.56094 24.375 9C24.375 9.70312 24.116 10.35 23.6742 10.8609C25.0504 11.4609 26 12.7547 26 14.25C26 15.8531 24.9133 17.2219 23.3797 17.7562C23.4965 18.0656 23.5625 18.4031 23.5625 18.75C23.5625 20.4047 22.1051 21.75 20.3125 21.75C20.0281 21.75 19.7488 21.7172 19.4848 21.6516C19.3324 22.9734 18.1238 24 16.6562 24C15.0871 24 13.8125 22.8234 13.8125 21.375V2.625C13.8125 1.17656 15.0871 0 16.6562 0Z"
                    fill="#9333EA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_11738">
                    <path d="M0 0H24V24H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2E2E2E] mb-4">
              AI-Powered Detection
            </h3>
            <p className="text-base text-[#626262] leading-[150%]">
              Advanced motion detection, facial recognition, and tracking
              capabilities powered by artificial intelligence.
            </p>
          </div>

          {/* Real-time Alerts Card */}
          <div className="bg-white rounded-xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)]">
            <div className="w-16 h-16 bg-[#FEE2E2] rounded-full flex items-center justify-center mb-6">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_11750)">
                  <path
                    d="M11.4989 0C10.5902 0 9.85603 0.670312 9.85603 1.5V2.4C6.10831 3.09375 3.28469 6.12187 3.28469 9.75V10.6313C3.28469 12.8344 2.39653 14.9625 0.794766 16.6125L0.41486 17.0016C-0.0163843 17.4422 -0.119062 18.075 0.142765 18.6141C0.404592 19.1531 0.994986 19.5 1.64185 19.5H21.3559C22.0027 19.5 22.588 19.1531 22.855 18.6141C23.1219 18.075 23.0141 17.4422 22.5829 17.0016L22.203 16.6125C20.6012 14.9625 19.713 12.8391 19.713 10.6313V9.75C19.713 6.12187 16.8894 3.09375 13.1417 2.4V1.5C13.1417 0.670312 12.4076 0 11.4989 0ZM13.8245 23.1234C14.4406 22.5609 14.7845 21.7969 14.7845 21H11.4989H8.21319C8.21319 21.7969 8.55716 22.5609 9.17323 23.1234C9.78929 23.6859 10.6261 24 11.4989 24C12.3716 24 13.2084 23.6859 13.8245 23.1234Z"
                    fill="#DC2626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_11750">
                    <path d="M0.5 0H21.5V24H0.5V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2E2E2E] mb-4">
              Real-Time Alerts
            </h3>
            <p className="text-base text-[#626262] leading-[150%]">
              Instant notifications with live video feeds and less than 1 second
              latency for immediate response.
            </p>
          </div>
        </div>

        {/* Deep Integration Section */}
        <div className="bg-white rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-12 lg:p-16">
              <h3 className="text-2xl font-medium text-[#2E2E2E] leading-[133.333%] mb-6">
                Deep Integration Capabilities
              </h3>
              <p className="text-base text-[#626262] leading-[150%] mb-8">
                Our systems are fully integratable with other platforms using
                APIs — from access control and tenant apps to gym software and
                building management systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-4">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_11766)">
                        <path
                          d="M8.5 16C10.7543 16 12.9163 15.1571 14.5104 13.6569C16.1045 12.1566 17 10.1217 17 8C17 5.87827 16.1045 3.84344 14.5104 2.34315C12.9163 0.842855 10.7543 0 8.5 0C6.24566 0 4.08365 0.842855 2.48959 2.34315C0.895533 3.84344 0 5.87827 0 8C0 10.1217 0.895533 12.1566 2.48959 13.6569C4.08365 15.1571 6.24566 16 8.5 16ZM12.252 6.53125L8.00195 10.5312C7.68984 10.825 7.18516 10.825 6.87637 10.5312L4.75137 8.53125C4.43926 8.2375 4.43926 7.7625 4.75137 7.47188C5.06348 7.18125 5.56816 7.17813 5.87695 7.47188L7.4375 8.94063L11.123 5.46875C11.4352 5.175 11.9398 5.175 12.2486 5.46875C12.5574 5.7625 12.5607 6.2375 12.2486 6.52812L12.252 6.53125Z"
                          fill="#16A34A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_11766">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-base text-[#2E2E2E] leading-[150%]">
                    Access control systems like Kisi
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_11766)">
                        <path
                          d="M8.5 16C10.7543 16 12.9163 15.1571 14.5104 13.6569C16.1045 12.1566 17 10.1217 17 8C17 5.87827 16.1045 3.84344 14.5104 2.34315C12.9163 0.842855 10.7543 0 8.5 0C6.24566 0 4.08365 0.842855 2.48959 2.34315C0.895533 3.84344 0 5.87827 0 8C0 10.1217 0.895533 12.1566 2.48959 13.6569C4.08365 15.1571 6.24566 16 8.5 16ZM12.252 6.53125L8.00195 10.5312C7.68984 10.825 7.18516 10.825 6.87637 10.5312L4.75137 8.53125C4.43926 8.2375 4.43926 7.7625 4.75137 7.47188C5.06348 7.18125 5.56816 7.17813 5.87695 7.47188L7.4375 8.94063L11.123 5.46875C11.4352 5.175 11.9398 5.175 12.2486 5.46875C12.5574 5.7625 12.5607 6.2375 12.2486 6.52812L12.252 6.53125Z"
                          fill="#16A34A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_11766">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-base text-[#2E2E2E] leading-[150%]">
                    Building management systems
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_11766)">
                        <path
                          d="M8.5 16C10.7543 16 12.9163 15.1571 14.5104 13.6569C16.1045 12.1566 17 10.1217 17 8C17 5.87827 16.1045 3.84344 14.5104 2.34315C12.9163 0.842855 10.7543 0 8.5 0C6.24566 0 4.08365 0.842855 2.48959 2.34315C0.895533 3.84344 0 5.87827 0 8C0 10.1217 0.895533 12.1566 2.48959 13.6569C4.08365 15.1571 6.24566 16 8.5 16ZM12.252 6.53125L8.00195 10.5312C7.68984 10.825 7.18516 10.825 6.87637 10.5312L4.75137 8.53125C4.43926 8.2375 4.43926 7.7625 4.75137 7.47188C5.06348 7.18125 5.56816 7.17813 5.87695 7.47188L7.4375 8.94063L11.123 5.46875C11.4352 5.175 11.9398 5.175 12.2486 5.46875C12.5574 5.7625 12.5607 6.2375 12.2486 6.52812L12.252 6.53125Z"
                          fill="#16A34A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_11766">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-base text-[#2E2E2E] leading-[150%]">
                    Tenant and property apps
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_11766)">
                        <path
                          d="M8.5 16C10.7543 16 12.9163 15.1571 14.5104 13.6569C16.1045 12.1566 17 10.1217 17 8C17 5.87827 16.1045 3.84344 14.5104 2.34315C12.9163 0.842855 10.7543 0 8.5 0C6.24566 0 4.08365 0.842855 2.48959 2.34315C0.895533 3.84344 0 5.87827 0 8C0 10.1217 0.895533 12.1566 2.48959 13.6569C4.08365 15.1571 6.24566 16 8.5 16ZM12.252 6.53125L8.00195 10.5312C7.68984 10.825 7.18516 10.825 6.87637 10.5312L4.75137 8.53125C4.43926 8.2375 4.43926 7.7625 4.75137 7.47188C5.06348 7.18125 5.56816 7.17813 5.87695 7.47188L7.4375 8.94063L11.123 5.46875C11.4352 5.175 11.9398 5.175 12.2486 5.46875C12.5574 5.7625 12.5607 6.2375 12.2486 6.52812L12.252 6.53125Z"
                          fill="#16A34A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_11766">
                          <path d="M0 0H16V16H0V0Z" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-base text-[#2E2E2E] leading-[150%]">
                    Intercom systems
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Content - Image */}
            <div className="flex items-center justify-center p-8">
              <Image
                src={integration}
                alt="System Integration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
