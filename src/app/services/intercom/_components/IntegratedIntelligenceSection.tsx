/** @format */
import Image from "next/image";
const integratedIntelligenceImg = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fintercom%2Fintegrated_intelligence.png";
const features = [
  {
    title: "Access Control",
    description: "Connect to doors, gates, and elevator systems",
    icon: (
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
    ),
  },
  {
    title: "Surveillance Integration",
    description: "Seamless connection with camera feeds",
    icon: (
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
    ),
  },
  {
    title: "Visitor Management",
    description: "Streamlined visitor and delivery workflows",
    icon: (
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
    ),
  },
  {
    title: "Management Dashboard",
    description: "Central property management interface",
    icon: (
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
    ),
  },
];
export function IntegratedIntelligenceSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-40">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 3xl:px-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold leading-tight sm:leading-tight lg:leading-snug mb-4">
            Integrated, Intelligent, and Scalable
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed max-w-3xl mx-auto">
            Our intercom systems are built to play well with others
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-32 items-start">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-start w-full h-full">
            <Image
              src={integratedIntelligenceImg}
              width={1200} // ✅ Add approximate width
              height={800} // ✅ Add height to maintain ratio
              alt="Integrated system dashboard"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl  h-auto object-cover rounded-xl"
              priority
              quality={90}
            />
            {/* <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl  h-auto overflow-hidden rounded-xl">
              <Image
                src={integratedIntelligenceImg}
                alt="Integrated system dashboard"
                fill
                className="object-cover"
                priority
                quality={90}
              />
            </div> */}
          </div>

          {/* Right Features */}
          <div className="space-y-4 lg:space-y-6 2xl:space-y-8 3xl:space-y-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-4 2xl:gap-6 3xl:gap-8"
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 bg-green-100 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-[#2E2E2E] text-lg 2xl:text-xl 3xl:text-2xl font-medium leading-snug 3xl:mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[#626262] text-sm xl:text-base 2xl:text-lg 3xl:text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Result Box */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 mt-12 sm:mt-16">
          <h3 className="text-[#2E2E2E] text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium text-center mb-4">
            The Result
          </h3>
          <div className="text-center mx-auto">
            <p className="text-[#626262] text-base sm:text-lg  xl:text-xl  3xl:text-2xl font-normal leading-leading-relaxed">
              A building that&apos;s more secure, more responsive, and easier to
              manage — no matter how many
              <br />
              doors or units you&apos;re dealing with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
