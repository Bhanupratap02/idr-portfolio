/** @format */
import portal from "@/assets/services/data-center/portal.png";
import Image from "next/image";
const features = [
  {
    title: "Test Results Database",
    desc: "Access all cable test results with pass/fail indicators and certification data.",
    icon: (
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 0C1.89688 0 1 0.896875 1 2V9H4.5C4.69062 9 4.8625 9.10625 4.94688 9.275L5.5 10.3813L7.05312 7.275C7.1375 7.10625 7.3125 7 7.5 7C7.6875 7 7.8625 7.10625 7.94688 7.275L8.80937 9H11C11.275 9 11.5 9.225 11.5 9.5C11.5 9.775 11.275 10 11 10H8.5C8.30937 10 8.1375 9.89375 8.05313 9.725L7.5 8.61875L5.94688 11.725C5.8625 11.8938 5.6875 12 5.5 12C5.3125 12 5.1375 11.8938 5.05312 11.725L4.19063 10H1V14C1 15.1031 1.89688 16 3 16H11C12.1031 16 13 15.1031 13 14V5H9C8.44688 5 8 4.55312 8 4V0H3ZM9 0V4H13L9 0Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Interactive Diagrams",
    desc: "View and download rack elevations, cable paths, and network diagrams.",
    icon: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2.5C0 1.67188 0.671875 1 1.5 1H4.5C5.32812 1 6 1.67188 6 2.5V3H12V2.5C12 1.67188 12.6719 1 13.5 1H16.5C17.3281 1 18 1.67188 18 2.5V5.5C18 6.32812 17.3281 7 16.5 7H13.5C12.6719 7 12 6.32812 12 5.5V5H6V5.5C6 5.55312 5.99687 5.60625 5.99062 5.65625L8.5 9H11.5C12.3281 9 13 9.67188 13 10.5V13.5C13 14.3281 12.3281 15 11.5 15H8.5C7.67188 15 7 14.3281 7 13.5V10.5C7 10.4469 7.00313 10.3938 7.00938 10.3438L4.5 7H1.5C0.671875 7 0 6.32812 0 5.5V2.5Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Support Ticket System",
    desc: "Submit and track support requests with real-time status updates.",
    icon: (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2C0.896875 2 0 2.89688 0 4V6C0 6.275 0.23125 6.49063 0.490625 6.58125C1.07812 6.78438 1.5 7.34375 1.5 8C1.5 8.65625 1.07812 9.21562 0.490625 9.41875C0.23125 9.50937 0 9.725 0 10V12C0 13.1031 0.896875 14 2 14H16C17.1031 14 18 13.1031 18 12V10C18 9.725 17.7687 9.50937 17.5094 9.41875C16.9219 9.21562 16.5 8.65625 16.5 8C16.5 7.34375 16.9219 6.78438 17.5094 6.58125C17.7687 6.49063 18 6.275 18 6V4C18 2.89688 17.1031 2 16 2H2ZM4 5.5V10.5C4 10.775 4.225 11 4.5 11H13.5C13.775 11 14 10.775 14 10.5V5.5C14 5.225 13.775 5 13.5 5H4.5C4.225 5 4 5.225 4 5.5ZM3 5C3 4.44688 3.44688 4 4 4H14C14.5531 4 15 4.44688 15 5V11C15 11.5531 14.5531 12 14 12H4C3.44688 12 3 11.5531 3 11V5Z"
          fill="white"
        />
      </svg>
    ),
  },
];
export default function DCPortalSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 3xl:py-32 bg-white">
      <div className="max-w-7xl 2xl:max-w-[95rem] 3xl:max-w-[120rem] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 2xl:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl font-medium  text-gray-800 mb-6">
              The IDR Portal: Control and Clarity
            </h2>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl text-gray-600 mb-8 leading-relaxed">
              See everything, anytime. Track every test, change, and diagram
              through your personalized IDR Portal.
            </p>

            {/* Features list */}
            <div className=" space-y-4 lg:space-y-6 3xl:space-y-8 mb-8 2xl:mb-10 3xl:mb-12">
              {
                // Each feature item
                features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 bg-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg 2xl:text-xl 3xl:text-2xl font-medium text-gray-800 mb-1 3xl:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl text-gray-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 2xl:px-8 py-3 2xl:py-4 rounded-md font-normal transition-colors inline-flex items-center space-x-3 text-sm sm:text-base 2xl:text-lg 3xl:text-xl cursor-pointer">
              <span>See the Portal in Action</span>
              <svg
                width="14"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6861 8.70597C16.1046 8.3155 16.1046 7.68137 15.6861 7.2909L10.3286 2.29285C9.9101 1.90238 9.23037 1.90238 8.81182 2.29285C8.39327 2.68333 8.39327 3.31745 8.81182 3.70793L12.3444 7.00039H2.07149C1.47882 7.00039 1 7.44709 1 8C1 8.55291 1.47882 8.99961 2.07149 8.99961H12.341L8.81517 12.2921C8.39662 12.6825 8.39662 13.3167 8.81517 13.7071C9.23372 14.0976 9.91344 14.0976 10.332 13.7071L15.6894 8.7091L15.6861 8.70597Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Portal Dashboard Image */}
          <div className="lg:justify-self-end">
            <Image
              src={portal}
              alt="IDR Portal Dashboard"
              // className="w-full max-w-lg h-auto aspect-[3/2]"
              className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl h-auto aspect-[3/2] rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
