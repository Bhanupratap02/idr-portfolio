/** @format */

export function IntegratedIntelligenceSection() {
  return (
    <section className="bg-white py-[57px]">
      <div className="container mx-auto px-[112px]">
        {/* Header */}
        <div className="text-center mb-[96px]">
          <h2 className="text-[#2E2E2E] text-[36px] font-medium leading-[40px] mb-4">
            Integrated, Intelligent, and Scalable
          </h2>
          <p className="text-[#626262] text-[20px] font-normal leading-[28px]">
            Our intercom systems are built to play well with others
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="w-[584px] h-[320px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2d847a1965b1ff48fce81d531c14775833e0628a?width=1168"
              alt="Integrated system dashboard"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-4">
            {/* Access Control */}
            <div className="flex items-center gap-4">
              <div className="w-[47px] h-[52px] bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_12484)">
                    <path
                      d="M12.5 1.50015C12.5 1.11343 12.3242 0.75015 12.0195 0.515775C11.7148 0.2814 11.3203 0.195462 10.9453 0.289212L3.91797 2.04702C3.08594 2.25406 2.5 3.00406 2.5 3.86343V17.7501H1.25C0.558594 17.7501 0 18.3087 0 19.0001C0 19.6916 0.558594 20.2501 1.25 20.2501H3.75H11.25H12.5V19.0001V1.50015ZM10 10.2501C10 10.9416 9.58203 11.5001 9.0625 11.5001C8.54297 11.5001 8.125 10.9416 8.125 10.2501C8.125 9.55874 8.54297 9.00015 9.0625 9.00015C9.58203 9.00015 10 9.55874 10 10.2501ZM13.75 5.25015H17.5V19.0001C17.5 19.6916 18.0586 20.2501 18.75 20.2501H21.25C21.9414 20.2501 22.5 19.6916 22.5 19.0001C22.5 18.3087 21.9414 17.7501 21.25 17.7501H20V5.25015C20 3.87124 18.8789 2.75015 17.5 2.75015H13.75V5.25015Z"
                      fill="#16A34A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12484">
                      <path d="M0 0.25H22.5V20.25H0V0.25Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-semibold leading-[28px]">
                  Access Control
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Connect to doors, gates, and elevator systems
                </p>
              </div>
            </div>

            {/* Surveillance Integration */}
            <div className="flex items-center gap-4">
              <div className="w-[47px] h-[52px] bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_12493)">
                    <path
                      d="M0 5.25C0 3.87109 1.12109 2.75 2.5 2.75H12.5C13.8789 2.75 15 3.87109 15 5.25V15.25C15 16.6289 13.8789 17.75 12.5 17.75H2.5C1.12109 17.75 0 16.6289 0 15.25V5.25ZM21.8398 4.14844C22.2461 4.36719 22.5 4.78906 22.5 5.25V15.25C22.5 15.7109 22.2461 16.1328 21.8398 16.3516C21.4336 16.5703 20.9414 16.5469 20.5547 16.2891L16.8047 13.7891L16.25 13.418V12.75V7.75V7.08203L16.8047 6.71094L20.5547 4.21094C20.9375 3.95703 21.4297 3.92969 21.8398 4.14844Z"
                      fill="#16A34A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12493">
                      <path d="M0 0.25H22.5V20.25H0V0.25Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-semibold leading-[28px]">
                  Surveillance Integration
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Seamless connection with camera feeds
                </p>
              </div>
            </div>

            {/* Visitor Management */}
            <div className="flex items-center gap-4">
              <div className="w-[49px] h-[52px] bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_12502)">
                    <path
                      d="M5.625 0.25C6.4538 0.25 7.24866 0.57924 7.83471 1.16529C8.42076 1.75134 8.75 2.5462 8.75 3.375C8.75 4.2038 8.42076 4.99866 7.83471 5.58471C7.24866 6.17076 6.4538 6.5 5.625 6.5C4.7962 6.5 4.00134 6.17076 3.41529 5.58471C2.82924 4.99866 2.5 4.2038 2.5 3.375C2.5 2.5462 2.82924 1.75134 3.41529 1.16529C4.00134 0.57924 4.7962 0.25 5.625 0.25ZM20 0.25C20.8288 0.25 21.6237 0.57924 22.2097 1.16529C22.7958 1.75134 23.125 2.5462 23.125 3.375C23.125 4.2038 22.7958 4.99866 22.2097 5.58471C21.6237 6.17076 20.8288 6.5 20 6.5C19.1712 6.5 18.3763 6.17076 17.7903 5.58471C17.2042 4.99866 16.875 4.2038 16.875 3.375C16.875 2.5462 17.2042 1.75134 17.7903 1.16529C18.3763 0.57924 19.1712 0.25 20 0.25ZM0 11.918C0 9.61719 1.86719 7.75 4.16797 7.75H5.83594C6.45703 7.75 7.04688 7.88672 7.57812 8.12891C7.52734 8.41016 7.50391 8.70312 7.50391 9C7.50391 10.4922 8.16016 11.832 9.19531 12.75C9.1875 12.75 9.17969 12.75 9.16797 12.75H0.832031C0.375 12.75 0 12.375 0 11.918ZM15.832 12.75C15.8242 12.75 15.8164 12.75 15.8047 12.75C16.8438 11.832 17.4961 10.4922 17.4961 9C17.4961 8.70312 17.4688 8.41406 17.4219 8.12891C17.9531 7.88281 18.543 7.75 19.1641 7.75H20.832C23.1328 7.75 25 9.61719 25 11.918C25 12.3789 24.625 12.75 24.168 12.75H15.832ZM8.75 9C8.75 8.00544 9.14509 7.05161 9.84835 6.34835C10.5516 5.64509 11.5054 5.25 12.5 5.25C13.4946 5.25 14.4484 5.64509 15.1517 6.34835C15.8549 7.05161 16.25 8.00544 16.25 9C16.25 9.99456 15.8549 10.9484 15.1517 11.6517C14.4484 12.3549 13.4946 12.75 12.5 12.75C11.5054 12.75 10.5516 12.3549 9.84835 11.6517C9.14509 10.9484 8.75 9.99456 8.75 9ZM5 19.207C5 16.332 7.33203 14 10.207 14H14.793C17.668 14 20 16.332 20 19.207C20 19.7812 19.5352 20.25 18.957 20.25H6.04297C5.46875 20.25 5 19.7852 5 19.207Z"
                      fill="#16A34A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_12502">
                      <path d="M0 0.25H25V20.25H0V0.25Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-semibold leading-[28px]">
                  Visitor Management
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Streamlined visitor and delivery workflows
                </p>
              </div>
            </div>

            {/* Management Dashboard */}
            <div className="flex items-center gap-4">
              <div className="w-[44px] h-[52px] bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 2.75C2.5 2.05859 1.94141 1.5 1.25 1.5C0.558594 1.5 0 2.05859 0 2.75V15.875C0 17.6016 1.39844 19 3.125 19H18.75C19.4414 19 20 18.4414 20 17.75C20 17.0586 19.4414 16.5 18.75 16.5H3.125C2.78125 16.5 2.5 16.2188 2.5 15.875V2.75ZM18.3828 6.13281C18.8711 5.64453 18.8711 4.85156 18.3828 4.36328C17.8945 3.875 17.1016 3.875 16.6133 4.36328L12.5 8.48047L10.2578 6.23828C9.76953 5.75 8.97656 5.75 8.48828 6.23828L4.11328 10.6133C3.625 11.1016 3.625 11.8945 4.11328 12.3828C4.60156 12.8711 5.39453 12.8711 5.88281 12.3828L9.375 8.89453L11.6172 11.1367C12.1055 11.625 12.8984 11.625 13.3867 11.1367L18.3867 6.13672L18.3828 6.13281Z"
                    fill="#16A34A"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[#2E2E2E] text-[18px] font-semibold leading-[28px]">
                  Management Dashboard
                </h4>
                <p className="text-[#626262] text-[16px] font-normal leading-[24px]">
                  Central property management interface
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Result Box */}
        <div className="bg-gray-50 rounded-2xl p-8 mt-16">
          <h3 className="text-[#2E2E2E] text-[24px] font-medium text-center mb-4">
            The Result
          </h3>
          <div className="text-center max-w-[768px] mx-auto">
            <p className="text-[#626262] text-[18px] font-normal leading-normal">
              A building that's more secure, more responsive, and easier to
              manage — no matter how many
              <br />
              doors or units you're dealing with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
