/** @format */

export default function CertificationCards() {
  return (
    <section className="bg-[#F8F9FA] px-4 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cisco Select Certified Partner Card */}
          <div className="bg-white rounded-xl shadow-[0_2px_4px_0_rgba(0,0,0,0.10),0_4px_6px_0_rgba(0,0,0,0.10)] p-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex justify-center items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_25169)">
                    <path
                      d="M15.1071 12.0107L10.0071 9.1125V14.9089L15.1071 12.0107ZM20.5714 0H3.42857C1.5375 0 0 1.5375 0 3.42857V20.5714C0 22.4625 1.5375 24 3.42857 24H20.5714C22.4625 24 24 22.4625 24 20.5714V3.42857C24 1.5375 22.4625 0 20.5714 0ZM21.3429 7.29107C21.75 8.82321 21.75 12.0161 21.75 12.0161C21.75 12.0161 21.75 15.2089 21.3429 16.7357C21.1179 17.5821 20.4589 18.2196 19.6179 18.4446C18.1018 18.8571 12 18.8571 12 18.8571C12 18.8571 5.89821 18.8571 4.38214 18.45C3.54107 18.225 2.88214 17.5875 2.65714 16.7411C2.25 15.2089 2.25 12.0161 2.25 12.0161C2.25 12.0161 2.25 8.81786 2.65714 7.29107C2.88214 6.44464 3.54107 5.78036 4.38214 5.55536C5.89821 5.14286 12 5.14286 12 5.14286C12 5.14286 18.1018 5.14286 19.6179 5.55536C20.4589 5.78036 21.1179 6.44464 21.3429 7.29107Z"
                      fill="#EAB308"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_25169">
                      <path d="M0 0.75H30V30.75H0V0.75Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-[#2E2E2E] text-2xl font-medium">
                Cisco Select Certified Partner
              </h3>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-[#626262] text-lg leading-normal mb-1">
                We meet Cisco's rigorous standards in service and support.
              </p>
              <p className="text-[#626262] text-lg leading-normal">
                Your network is in expert hands.
              </p>
            </div>

            {/* Cisco Logo */}
            <div className="flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2475810318877bb8ba7d23e67bf8b8eab6b23b9a?width=256"
                alt="Cisco Partner Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          {/* Full-Stack Solutions Card */}
          <div className="bg-white rounded-xl shadow-[0_2px_4px_0_rgba(0,0,0,0.10),0_4px_6px_0_rgba(0,0,0,0.10)] p-8">
            {/* Header with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex justify-center items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30 30.75H0V0.75H30V30.75Z" stroke="#E5E7EB" />
                  <path
                    d="M10.3125 5.90625V8.25H19.6875V5.90625C19.6875 5.64844 19.4766 5.4375 19.2188 5.4375H10.7812C10.5234 5.4375 10.3125 5.64844 10.3125 5.90625ZM7.5 8.25V5.90625C7.5 4.0957 8.9707 2.625 10.7812 2.625H19.2188C21.0293 2.625 22.5 4.0957 22.5 5.90625V8.25H24.1465C24.8906 8.25 25.6055 8.54883 26.1328 9.07617L29.1738 12.1172C29.7012 12.6445 30 13.3594 30 14.1035V18.5625H22.5V17.625C22.5 16.5879 21.6621 15.75 20.625 15.75C19.5879 15.75 18.75 16.5879 18.75 17.625V18.5625H11.25V17.625C11.25 16.5879 10.4121 15.75 9.375 15.75C8.33789 15.75 7.5 16.5879 7.5 17.625V18.5625H0V14.1035C0 13.3594 0.298828 12.6445 0.826172 12.1172L3.86719 9.07617C4.39453 8.54883 5.10938 8.25 5.85352 8.25H7.5ZM0 25.125V20.4375H7.5V21.375C7.5 22.4121 8.33789 23.25 9.375 23.25C10.4121 23.25 11.25 22.4121 11.25 21.375V20.4375H18.75V21.375C18.75 22.4121 19.5879 23.25 20.625 23.25C21.6621 23.25 22.5 22.4121 22.5 21.375V20.4375H30V25.125C30 27.1934 28.3184 28.875 26.25 28.875H3.75C1.68164 28.875 0 27.1934 0 25.125Z"
                    fill="#4A90E2"
                  />
                </svg>
              </div>
              <h3 className="text-[#2E2E2E] text-2xl font-medium">
                Full-Stack Solutions
              </h3>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-[#626262] text-lg leading-normal mb-1">
                We sell, design, install, and configure full-stack Cisco and
              </p>
              <p className="text-[#626262] text-lg leading-normal">
                Meraki solutions across:
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Commercial */}
              <div className="border border-[#E5E7EB] rounded-lg p-5 flex flex-col items-center gap-1">
                <div className="flex justify-center items-center h-6">
                  <svg
                    width="18"
                    height="24"
                    viewBox="0 0 19 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_25189)">
                      <path
                        d="M2.57812 0C1.33594 0 0.328125 1.00781 0.328125 2.25V21.75C0.328125 22.9922 1.33594 24 2.57812 24H7.07812V20.25C7.07812 19.0078 8.08594 18 9.32812 18C10.5703 18 11.5781 19.0078 11.5781 20.25V24H16.0781C17.3203 24 18.3281 22.9922 18.3281 21.75V2.25C18.3281 1.00781 17.3203 0 16.0781 0H2.57812ZM3.32812 11.25C3.32812 10.8375 3.66563 10.5 4.07812 10.5H5.57812C5.99062 10.5 6.32812 10.8375 6.32812 11.25V12.75C6.32812 13.1625 5.99062 13.5 5.57812 13.5H4.07812C3.66563 13.5 3.32812 13.1625 3.32812 12.75V11.25ZM8.57812 10.5H10.0781C10.4906 10.5 10.8281 10.8375 10.8281 11.25V12.75C10.8281 13.1625 10.4906 13.5 10.0781 13.5H8.57812C8.16563 13.5 7.82812 13.1625 7.82812 12.75V11.25C7.82812 10.8375 8.16563 10.5 8.57812 10.5ZM12.3281 11.25C12.3281 10.8375 12.6656 10.5 13.0781 10.5H14.5781C14.9906 10.5 15.3281 10.8375 15.3281 11.25V12.75C15.3281 13.1625 14.9906 13.5 14.5781 13.5H13.0781C12.6656 13.5 12.3281 13.1625 12.3281 12.75V11.25ZM4.07812 4.5H5.57812C5.99062 4.5 6.32812 4.8375 6.32812 5.25V6.75C6.32812 7.1625 5.99062 7.5 5.57812 7.5H4.07812C3.66563 7.5 3.32812 7.1625 3.32812 6.75V5.25C3.32812 4.8375 3.66563 4.5 4.07812 4.5ZM7.82812 5.25C7.82812 4.8375 8.16563 4.5 8.57812 4.5H10.0781C10.4906 4.5 10.8281 4.8375 10.8281 5.25V6.75C10.8281 7.1625 10.4906 7.5 10.0781 7.5H8.57812C8.16563 7.5 7.82812 7.1625 7.82812 6.75V5.25ZM13.0781 4.5H14.5781C14.9906 4.5 15.3281 4.8375 15.3281 5.25V6.75C15.3281 7.1625 14.9906 7.5 14.5781 7.5H13.0781C12.6656 7.5 12.3281 7.1625 12.3281 6.75V5.25C12.3281 4.8375 12.6656 4.5 13.0781 4.5Z"
                        fill="#4A90E2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_25189">
                        <path
                          d="M0.328125 0H18.3281V24H0.328125V0Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#2E2E2E] text-base text-center font-normal">
                  Commercial
                </span>
              </div>

              {/* Residential */}
              <div className="border border-[#E5E7EB] rounded-lg p-5 flex flex-col items-center gap-1">
                <div className="flex justify-center items-center h-6">
                  <svg
                    width="27"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_25194)">
                      <path
                        d="M27.475 11.9766C27.475 12.8203 26.7719 13.4813 25.975 13.4813H24.475L24.5078 20.9906C24.5078 21.1172 24.4984 21.2437 24.4844 21.3703V22.125C24.4844 23.1609 23.6453 24 22.6094 24H21.8594C21.8078 24 21.7563 24 21.7047 23.9953C21.6391 24 21.5734 24 21.5078 24H19.9844H18.8594C17.8234 24 16.9844 23.1609 16.9844 22.125V21V18C16.9844 17.1703 16.3141 16.5 15.4844 16.5H12.4844C11.6547 16.5 10.9844 17.1703 10.9844 18V21V22.125C10.9844 23.1609 10.1453 24 9.10938 24H7.98438H6.48906C6.41875 24 6.34844 23.9953 6.27812 23.9906C6.22187 23.9953 6.16563 24 6.10938 24H5.35938C4.32344 24 3.48438 23.1609 3.48438 22.125V16.875C3.48438 16.8328 3.48438 16.7859 3.48906 16.7438V13.4813H1.98438C1.14062 13.4813 0.484375 12.825 0.484375 11.9766C0.484375 11.5547 0.625 11.1797 0.953125 10.8516L12.9719 0.375C13.3 0.046875 13.675 0 14.0031 0C14.3312 0 14.7062 0.09375 14.9875 0.328125L26.9594 10.8516C27.3344 11.1797 27.5219 11.5547 27.475 11.9766Z"
                        fill="#4A90E2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_25194">
                        <path
                          d="M0.484375 0H27.4844V24H0.484375V0Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#2E2E2E] text-base text-center font-normal">
                  Residential
                </span>
              </div>

              {/* Multi-site */}
              <div className="border border-[#E5E7EB] rounded-lg p-5 flex flex-col items-center gap-1">
                <div className="flex justify-center items-center h-6">
                  <svg
                    width="30"
                    height="24"
                    viewBox="0 0 31 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_25199)">
                      <path
                        d="M12.6562 3H18.6562V6H12.6562V3ZM11.9062 0C10.6641 0 9.65625 1.00781 9.65625 2.25V6.75C9.65625 7.99219 10.6641 9 11.9062 9H14.1562V10.5H2.15625C1.32656 10.5 0.65625 11.1703 0.65625 12C0.65625 12.8297 1.32656 13.5 2.15625 13.5H6.65625V15H4.40625C3.16406 15 2.15625 16.0078 2.15625 17.25V21.75C2.15625 22.9922 3.16406 24 4.40625 24H11.9062C13.1484 24 14.1562 22.9922 14.1562 21.75V17.25C14.1562 16.0078 13.1484 15 11.9062 15H9.65625V13.5H21.6562V15H19.4062C18.1641 15 17.1562 16.0078 17.1562 17.25V21.75C17.1562 22.9922 18.1641 24 19.4062 24H26.9062C28.1484 24 29.1562 22.9922 29.1562 21.75V17.25C29.1562 16.0078 28.1484 15 26.9062 15H24.6562V13.5H29.1562C29.9859 13.5 30.6562 12.8297 30.6562 12C30.6562 11.1703 29.9859 10.5 29.1562 10.5H17.1562V9H19.4062C20.6484 9 21.6562 7.99219 21.6562 6.75V2.25C21.6562 1.00781 20.6484 0 19.4062 0H11.9062ZM5.15625 21V18H11.1562V21H5.15625ZM20.1562 18H26.1562V21H20.1562V18Z"
                        fill="#4A90E2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_25199">
                        <path
                          d="M0.65625 0H30.6562V24H0.65625V0Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#2E2E2E] text-base text-center font-normal">
                  Multi-site
                </span>
              </div>
            </div>

            {/* Check mark with text */}
            <div className="flex items-start gap-6">
              <div className="flex justify-center items-center mt-1">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_25204)">
                    <path
                      d="M15.4183 3.95557C15.8577 4.39502 15.8577 5.10869 15.4183 5.54814L6.41826 14.5481C5.97881 14.9876 5.26514 14.9876 4.82568 14.5481L0.325684 10.0481C-0.11377 9.60869 -0.11377 8.89502 0.325684 8.45557C0.765137 8.01611 1.47881 8.01611 1.91826 8.45557L5.62373 12.1575L13.8292 3.95557C14.2687 3.51611 14.9823 3.51611 15.4218 3.95557H15.4183Z"
                      fill="#22C55E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_25204">
                      <path d="M0 0.25H15.75V18.25H0V0.25Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-[#626262] text-lg leading-normal mb-1">
                  Whether it's a new secure network or upgrading legacy
                </p>
                <p className="text-[#626262] text-lg leading-normal">
                  systems — we ensure smooth delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
