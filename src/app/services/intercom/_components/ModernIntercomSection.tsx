/** @format */

export function ModernIntercomSection() {
  return (
    <section className="bg-gray-50 py-[57px]">
      <div className="container mx-auto px-[322px]">
        {/* Header */}
        <div className="text-center mb-[96px]">
          <h2 className="text-[#2E2E2E] text-[36px] font-medium leading-[40px] mb-4">
            Modern Intercom Solutions for Modern Living
          </h2>
          <p className="text-[#626262] text-[24px] font-normal leading-[150%] max-w-[871px] mx-auto">
            We partner with leading manufacturers to deliver intercom systems
            that are as functional as they are future-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-[584px] h-[320px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2ba584fed406b61f6aa37f56447c9bf9d327a06b?width=1168"
              alt="Modern intercom system interface"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-4">
            {/* Video Calling */}
            <div className="flex items-center gap-4">
              <div className="w-[47px] h-[52px] bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_12347)">
                    <path
                      d="M0 5.5C0 4.12109 1.12109 3 2.5 3H12.5C13.8789 3 15 4.12109 15 5.5V15.5C15 16.8789 13.8789 18 12.5 18H2.5C1.12109 18 0 16.8789 0 15.5V5.5ZM21.8398 4.39844C22.2461 4.61719 22.5 5.03906 22.5 5.5V15.5C22.5 15.9609 22.2461 16.3828 21.8398 16.6016C21.4336 16.8203 20.9414 16.7969 20.5547 16.5391L16.8047 14.0391L16.25 13.668V13V8V7.33203L16.8047 6.96094L20.5547 4.46094C20.9375 4.20703 21.4297 4.17969 21.8398 4.39844Z"
                      fill="#2563EB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12347">
                      <path d="M0 0.5H22.5V20.5H0V0.5Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-medium leading-[28px]">
                  Video Calling
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Direct video calls from front entrance to residents' phones
                </p>
              </div>
            </div>

            {/* Multiple Access Methods */}
            <div className="flex items-center gap-4">
              <div className="w-[47px] h-[52px] bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  width="15"
                  height="21"
                  viewBox="0 0 15 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_12356)">
                    <path
                      d="M0.625 3C0.625 1.62109 1.74609 0.5 3.125 0.5H11.875C13.2539 0.5 14.375 1.62109 14.375 3V18C14.375 19.3789 13.2539 20.5 11.875 20.5H3.125C1.74609 20.5 0.625 19.3789 0.625 18V3ZM8.75 18C8.75 17.6685 8.6183 17.3505 8.38388 17.1161C8.14946 16.8817 7.83152 16.75 7.5 16.75C7.16848 16.75 6.85054 16.8817 6.61612 17.1161C6.3817 17.3505 6.25 17.6685 6.25 18C6.25 18.3315 6.3817 18.6495 6.61612 18.8839C6.85054 19.1183 7.16848 19.25 7.5 19.25C7.83152 19.25 8.14946 19.1183 8.38388 18.8839C8.6183 18.6495 8.75 18.3315 8.75 18ZM11.875 3H3.125V15.5H11.875V3Z"
                      fill="#2563EB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12356">
                      <path d="M0 0.5H15V20.5H0V0.5Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-medium leading-[28px]">
                  Multiple Access Methods
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  App-based entry, PINs, or QR codes for convenience
                </p>
              </div>
            </div>

            {/* Secure Management */}
            <div className="flex items-center gap-4">
              <div className="w-[47px] h-[52px] bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_12365)">
                    <path
                      d="M10 0.5C10.1797 0.5 10.3594 0.539063 10.5235 0.613281L17.8789 3.73438C18.7383 4.09766 19.3789 4.94531 19.375 5.96875C19.3555 9.84375 17.7617 16.9336 11.0313 20.1562C10.3789 20.4688 9.62111 20.4688 8.96877 20.1562C2.2383 16.9336 0.644549 9.84375 0.625018 5.96875C0.621112 4.94531 1.26174 4.09766 2.12111 3.73438L9.48049 0.613281C9.64064 0.539063 9.82033 0.5 10 0.5ZM10 3.10938V17.875C15.3906 15.2656 16.8399 9.48828 16.875 6.02344L10 3.10938Z"
                      fill="#2563EB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12365">
                      <path d="M0 0.5H20V20.5H0V0.5Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-medium leading-[28px]">
                  Secure Management
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Visitor management and package delivery support
                </p>
              </div>
            </div>

            {/* Cloud-Based */}
            <div className="flex items-center gap-4">
              <div className="w-[47px] h-[52px] bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 13.625C0 16.7305 2.51953 19.25 5.625 19.25H20C22.7617 19.25 25 17.0117 25 14.25C25 11.832 23.2812 9.8125 21 9.35156C21.1602 8.93359 21.25 8.47656 21.25 8C21.25 5.92969 19.5703 4.25 17.5 4.25C16.7305 4.25 16.0117 4.48438 15.418 4.88281C14.3359 3.00781 12.3164 1.75 10 1.75C6.54688 1.75 3.75 4.54688 3.75 8C3.75 8.10547 3.75391 8.21094 3.75781 8.31641C1.57031 9.08594 0 11.1719 0 13.625Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-medium leading-[28px]">
                  Cloud-Based
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Remote access and real-time event logs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Partners */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-16">
          <h3 className="text-[#2E2E2E] text-[24px] font-medium mb-6">
            Our Technology Partners
          </h3>
          <div className="flex justify-center gap-8">
            {["Akuvox", "ButterflyMX", "AlphaTouch", "Teleportivity", "2N"].map(
              (partner) => (
                <div
                  key={partner}
                  className="bg-gray-100 rounded-lg px-6 py-5 text-center"
                >
                  <span className="text-[#626262] text-[16px] font-normal">
                    {partner}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
