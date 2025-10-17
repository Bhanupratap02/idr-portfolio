import Link from "next/link";

export default function Finance() {
  return (
    <div className="px-4 sm:px-6 lg:px-20 2xl:px-32 3xl:px-48 py-12 sm:py-16 lg:py-20 2xl:py-24 3xl:py-28">
      <div className="w-full max-w-7xl 2xl:max-w-[85rem] 3xl:max-w-[105rem] mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 md:p-14">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-8 leading-tight">
            FINANCE ANY IDR INSTALL $3,000 AND UP
          </h1>

          {/* Get Started Button */}
          <div className="flex justify-center mb-12">
            <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg md:text-xl  transition-colors">
              <div className="w-13 h-13 bg-primary rounded-full flex items-center justify-center">
                <svg
                  width="13"
                  height="21"
                  viewBox="0 0 13 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-5"
                >
                  <g clipPath="url(#clip0_338_2473)">
                    <path
                      d="M6.25 0.5C6.9414 0.5 7.5 1.05859 7.5 1.75V3.14453C7.5625 3.15234 7.62109 3.16016 7.68359 3.17188C7.69921 3.17578 7.71093 3.17578 7.72656 3.17969L9.60156 3.52344C10.2812 3.64844 10.7305 4.30078 10.6055 4.97656C10.4805 5.65234 9.82812 6.10547 9.15234 5.98047L7.29687 5.64062C6.07421 5.46094 4.99609 5.58203 4.23828 5.88281C3.48046 6.18359 3.17578 6.59766 3.10546 6.98047C3.02734 7.39844 3.08593 7.63281 3.15234 7.77734C3.22265 7.92969 3.36718 8.10156 3.65234 8.29297C4.28906 8.71094 5.26562 8.98438 6.53125 9.32031L6.64453 9.35156C7.76171 9.64844 9.1289 10.0078 10.1445 10.6719C10.6992 11.0352 11.2227 11.5273 11.5469 12.2148C11.8789 12.9141 11.9492 13.6953 11.7969 14.5273C11.5273 16.0117 10.5039 17.0039 9.23437 17.5234C8.69921 17.7422 8.11718 17.8828 7.5 17.9531V19.25C7.5 19.9414 6.9414 20.5 6.25 20.5C5.55859 20.5 5 19.9414 5 19.25V17.8867C4.98437 17.8828 4.96484 17.8828 4.94921 17.8789H4.9414C3.98828 17.7305 2.42187 17.3203 1.36718 16.8516C0.738277 16.5703 0.45312 15.832 0.73437 15.2031C1.01562 14.5742 1.7539 14.2891 2.38281 14.5703C3.19921 14.9336 4.54296 15.293 5.32031 15.4141C6.5664 15.5977 7.59375 15.4922 8.28906 15.207C8.94921 14.9375 9.25 14.5469 9.33593 14.0781C9.41015 13.6641 9.35156 13.4258 9.28515 13.2812C9.21093 13.125 9.0664 12.9531 8.77734 12.7617C8.13671 12.3438 7.15625 12.0703 5.88671 11.7344L5.77734 11.707C4.66406 11.4102 3.29687 11.0469 2.28125 10.3828C1.72656 10.0195 1.20703 9.52344 0.882808 8.83594C0.554683 8.13672 0.488277 7.35547 0.644527 6.52344C0.925777 5.03125 2.04296 4.0625 3.3125 3.55859C3.83203 3.35156 4.40234 3.21094 5 3.12891V1.75C5 1.05859 5.55859 0.5 6.25 0.5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_2473">
                      <path d="M0 0.5H12.5V20.5H0V0.5Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              GET STARTED TODAY
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
            {/* Access Control */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 md:w-18 md:h-18 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <g clipPath="url(#clip0_338_2481)">
                    <path
                      d="M17.5869 18.2012C22.5703 18.2012 26.6104 14.1611 26.6104 9.17773C26.6104 4.19434 22.5703 0.154297 17.5869 0.154297C12.6035 0.154297 8.56348 4.19434 8.56348 9.17773C8.56348 10.1365 8.71216 11.0645 8.98901 11.9309L0.719238 20.2007C0.488525 20.4314 0.360352 20.7441 0.360352 21.0723V25.1738C0.360352 25.8557 0.908936 26.4043 1.59082 26.4043H5.69238C6.37427 26.4043 6.92285 25.8557 6.92285 25.1738V23.123H8.97363C9.65552 23.123 10.2041 22.5745 10.2041 21.8926V19.8418H12.2549C12.583 19.8418 12.8958 19.7136 13.1265 19.4829L14.8337 17.7756C15.7002 18.0525 16.6282 18.2012 17.5869 18.2012ZM19.6377 5.07617C20.1816 5.07617 20.7032 5.29224 21.0878 5.67683C21.4724 6.06143 21.6885 6.58305 21.6885 7.12695C21.6885 7.67085 21.4724 8.19248 21.0878 8.57707C20.7032 8.96167 20.1816 9.17773 19.6377 9.17773C19.0938 9.17773 18.5722 8.96167 18.1876 8.57707C17.803 8.19248 17.5869 7.67085 17.5869 7.12695C17.5869 6.58305 17.803 6.06143 18.1876 5.67683C18.5722 5.29224 19.0938 5.07617 19.6377 5.07617Z"
                      fill="#0A2647"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_2481">
                      <path
                        d="M0.360474 0.155273H26.6105V26.4053H0.360474V0.155273Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-primary font-medium text-sm md:text-lg">
                Access Control
              </span>
            </div>

            {/* Surveillance */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 md:w-18 md:h-18 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="31"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <g clipPath="url(#clip0_338_2488)">
                    <path
                      d="M0.73111 6.71777C0.73111 4.90796 2.20255 3.43652 4.01236 3.43652H17.1374C18.9472 3.43652 20.4186 4.90796 20.4186 6.71777V19.8428C20.4186 21.6526 18.9472 23.124 17.1374 23.124H4.01236C2.20255 23.124 0.73111 21.6526 0.73111 19.8428V6.71777ZM29.3959 5.27197C29.9291 5.55908 30.2624 6.11279 30.2624 6.71777V19.8428C30.2624 20.4478 29.9291 21.0015 29.3959 21.2886C28.8627 21.5757 28.2167 21.5449 27.7091 21.2065L22.7873 17.9253L22.0592 17.4382V16.5615V9.99902V9.12231L22.7873 8.63525L27.7091 5.354C28.2116 5.02075 28.8576 4.98486 29.3959 5.27197Z"
                      fill="#0A2647"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_2488">
                      <path
                        d="M0.729675 0.155273H30.2609V26.4053H0.729675V0.155273Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-primary font-medium text-sm md:text-lg">
                Surveillance
              </span>
            </div>

            {/* Network Cabling */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 md:w-18 md:h-18 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="33"
                  height="27"
                  viewBox="0 0 33 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <g clipPath="url(#clip0_338_2495)">
                    <path
                      d="M13.202 3.43555H19.7645V6.7168H13.202V3.43555ZM12.3817 0.154297C11.0231 0.154297 9.92078 1.25659 9.92078 2.61523V7.53711C9.92078 8.89575 11.0231 9.99805 12.3817 9.99805H14.8427V11.6387H1.71765C0.810181 11.6387 0.0770264 12.3718 0.0770264 13.2793C0.0770264 14.1868 0.810181 14.9199 1.71765 14.9199H6.63953V16.5605H4.17859C2.81995 16.5605 1.71765 17.6628 1.71765 19.0215V23.9434C1.71765 25.302 2.81995 26.4043 4.17859 26.4043H12.3817C13.7404 26.4043 14.8427 25.302 14.8427 23.9434V19.0215C14.8427 17.6628 13.7404 16.5605 12.3817 16.5605H9.92078V14.9199H23.0458V16.5605H20.5848C19.2262 16.5605 18.1239 17.6628 18.1239 19.0215V23.9434C18.1239 25.302 19.2262 26.4043 20.5848 26.4043H28.788C30.1466 26.4043 31.2489 25.302 31.2489 23.9434V19.0215C31.2489 17.6628 30.1466 16.5605 28.788 16.5605H26.327V14.9199H31.2489C32.1564 14.9199 32.8895 14.1868 32.8895 13.2793C32.8895 12.3718 32.1564 11.6387 31.2489 11.6387H18.1239V9.99805H20.5848C21.9435 9.99805 23.0458 8.89575 23.0458 7.53711V2.61523C23.0458 1.25659 21.9435 0.154297 20.5848 0.154297H12.3817ZM4.9989 23.123V19.8418H11.5614V23.123H4.9989ZM21.4052 19.8418H27.9677V23.123H21.4052V19.8418Z"
                      fill="#0A2647"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_2495">
                      <path
                        d="M0.0770874 0.155273H32.8896V26.4053H0.0770874V0.155273Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-primary font-medium text-sm md:text-lg">
                Network Cabling
              </span>
            </div>

            {/* Intercom */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 md:w-18 md:h-18 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <g clipPath="url(#clip0_338_2502)">
                    <path
                      d="M8.82001 1.41473C8.42523 0.461117 7.38446 -0.0464514 6.38983 0.225277L1.87811 1.45575C0.986023 1.70184 0.365662 2.5119 0.365662 3.43475C0.365662 16.1188 10.6503 26.4035 23.3344 26.4035C24.2573 26.4035 25.0673 25.7831 25.3134 24.891L26.5439 20.3793C26.8156 19.3847 26.308 18.3439 25.3544 17.9492L20.4326 15.8984C19.5969 15.5497 18.6279 15.7907 18.0588 16.4931L15.9875 19.0207C12.3781 17.3134 9.45575 14.391 7.74847 10.7817L10.2761 8.71551C10.9785 8.14129 11.2194 7.17743 10.8708 6.34173L8.82001 1.41986V1.41473Z"
                      fill="#0A2647"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_2502">
                      <path
                        d="M0.364136 0.155273H26.6141V26.4053H0.364136V0.155273Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-primary font-medium text-sm md:text-lg">
                Intercom
              </span>
            </div>

            {/* AV */}
            <div className="flex flex-col items-center text-center gap-3 col-span-2 md:col-span-1 md:col-start-auto">
              <div className="w-16 h-16 md:w-18 md:h-18 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  width="33"
                  height="27"
                  viewBox="0 0 33 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 md:w-7 md:h-7"
                >
                  <g clipPath="url(#clip0_338_2509)">
                    <path
                      d="M3.35278 3.43555V18.2012H29.6028V3.43555H3.35278ZM0.0715332 3.43555C0.0715332 1.62573 1.54297 0.154297 3.35278 0.154297H29.6028C31.4126 0.154297 32.884 1.62573 32.884 3.43555V18.2012C32.884 20.011 31.4126 21.4824 29.6028 21.4824H3.35278C1.54297 21.4824 0.0715332 20.011 0.0715332 18.2012V3.43555ZM6.63403 23.123H26.3215C27.229 23.123 27.9622 23.8562 27.9622 24.7637C27.9622 25.6711 27.229 26.4043 26.3215 26.4043H6.63403C5.72656 26.4043 4.99341 25.6711 4.99341 24.7637C4.99341 23.8562 5.72656 23.123 6.63403 23.123Z"
                      fill="#0A2647"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_338_2509">
                      <path
                        d="M0.0726318 0.155273H32.8851V26.4053H0.0726318V0.155273Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="text-primary font-medium text-sm md:text-lg">
                AV
              </span>
            </div>
          </div>

          {/* Ask Us Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-primary text-white w-48 py-4 rounded-full font-normal text-lg md:text-xl hover:bg-primary/90 transition-colors">
              <Link
                href="/contact"
                className="text-sm 2xl:text-base text-[#F7F6F2] hover:text-white transition block text-center"
              >
                Ask Us
              </Link>
            </button>
          </div>

          {/* Bottom Text */}
          <p className="text-primary font-bold text-center text-lg md:text-xl">
            FAST APPROVAL. FLEXIBLE TERMS.
          </p>
        </div>
      </div>
    </div>
  );
}
