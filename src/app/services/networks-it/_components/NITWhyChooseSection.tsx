import Link from "next/link";

/** @format */
 const leftFeatures = [
   {
     title: "Enterprise-grade performance",
     description:
       "We build infrastructure that scales with your organization and delivers reliable performance.",
   },
   {
     title: "Cloud + On-Premise Support",
     description:
       "Flexible solutions that work with your existing infrastructure and future needs.",
   },
   {
     title: "Education IT Contracts",
     description:
       "Specialized experience working with K-12 and higher education institutions.",
   },
   {
     title: "CCNA-Certified Engineers",
     description:
       "Our team holds industry-leading certifications and ongoing training.",
   },
   {
     title: "Full Documentation",
     description:
       "Comprehensive documentation of all work performed and system configurations.",
   },
   {
     title: "IDR Portal Access",
     description:
       "Secure access to your network information and support resources.",
   },
 ];
export default function NITWhyChooseSection() {

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      {/* <div className="container mx-auto px-6 lg:px-8"> */}
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-6xl  font-medium text-gray-800 mb-4">
            Why Choose IDR?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Features List */}
          <div className="space-y-6">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7047 3.29297C14.0953 3.68359 14.0953 4.31797 13.7047 4.70859L5.70469 12.7086C5.31406 13.0992 4.67969 13.0992 4.28906 12.7086L0.289062 8.70859C-0.101562 8.31797 -0.101562 7.68359 0.289062 7.29297C0.679688 6.90234 1.31406 6.90234 1.70469 7.29297L4.99844 10.5836L12.2922 3.29297C12.6828 2.90234 13.3172 2.90234 13.7078 3.29297H13.7047Z"
                      fill="#16A34A"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base xl:text-lg 3xl:text-xl font-medium text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm xl:text-base 3xl:text-lg text-gray-600 ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Call to Action */}
          <div className="bg-blue-50 rounded-2xl p-8 3xl:p-10 shadow-lg">
            <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl font-medium text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-sm xl:text-base 3xl:text-lg  text-gray-600 mb-8 leading-relaxed">
              Contact us today to discuss your infrastructure needs and how IDR
              Technology Solutions can help your organization.
            </p>

            <div className="space-y-4">
              <Link href="/contact"
                className="w-full bg-blue-600 text-white px-6 py-3
              3xl:px-8 3xl:py-4 rounded-lg font-normal hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Request Consultation
              </Link>
              {/* <button className="w-full border border-blue-600 text-blue-600 px-6 py-3 3xl:px-8 3xl:py-4 3xl:text-lg rounded-lg font-normal hover:bg-blue-50 transition-colors cursor-pointer">
                Download Brochure
              </button> */}
            </div>

            <div className="flex justify-center space-x-6 mt-8 text-sm 3xl:text-base text-gray-600">
              <div className="flex items-center space-x-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25001 0C8.39376 0 8.53751 0.03125 8.66876 0.090625L14.5531 2.5875C15.2406 2.87813 15.7531 3.55625 15.75 4.375C15.7344 7.475 14.4594 13.1469 9.07501 15.725C8.55314 15.975 7.94689 15.975 7.42501 15.725C2.04064 13.1469 0.765639 7.475 0.750014 4.375C0.746889 3.55625 1.25939 2.87813 1.94689 2.5875L7.83439 0.090625C7.96251 0.03125 8.10626 0 8.25001 0ZM8.25001 2.0875V13.9C12.5625 11.8125 13.7219 7.19062 13.75 4.41875L8.25001 2.0875Z"
                    fill="#0057B8"
                  />
                </svg>
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.98565 0.227449C6.79815 0.0305737 6.5169 -0.0444264 6.2544 0.0243236C5.9919 0.0930737 5.78878 0.302449 5.72003 0.564949L5.22628 2.51807L3.28878 1.9712C3.02628 1.8962 2.74503 1.9712 2.5544 2.16182C2.36378 2.35245 2.28878 2.6337 2.36378 2.8962L2.91065 4.8337L0.957527 5.33057C0.695027 5.3962 0.488777 5.60245 0.416902 5.86495C0.345027 6.12745 0.423152 6.40557 0.620027 6.59307L2.06378 7.99932L0.620027 9.40557C0.423152 9.59307 0.348152 9.87432 0.416902 10.1368C0.485652 10.3993 0.695027 10.6024 0.957527 10.6712L2.91065 11.1649L2.36378 13.1024C2.28878 13.3649 2.36378 13.6462 2.5544 13.8368C2.74503 14.0274 3.02628 14.1024 3.28878 14.0274L5.22628 13.4806L5.72003 15.4337C5.78565 15.6962 5.9919 15.9024 6.2544 15.9743C6.5169 16.0462 6.79503 15.9681 6.98565 15.7743L8.3919 14.3306L9.79815 15.7743C9.98878 15.9681 10.2669 16.0462 10.5294 15.9743C10.7919 15.9024 10.995 15.6962 11.0638 15.4337L11.5575 13.4806L13.495 14.0274C13.7575 14.1024 14.0388 14.0274 14.2294 13.8368C14.42 13.6462 14.495 13.3649 14.42 13.1024L13.8732 11.1649L15.8263 10.6712C16.0888 10.6056 16.295 10.3993 16.3669 10.1368C16.4388 9.87432 16.3607 9.5962 16.1669 9.40557L14.7232 7.99932L16.1669 6.59307C16.3607 6.40245 16.4388 6.12432 16.3669 5.86182C16.295 5.59932 16.0888 5.3962 15.8263 5.32745L13.8732 4.8337L14.42 2.8962C14.495 2.6337 14.42 2.35245 14.2294 2.16182C14.0388 1.9712 13.7575 1.8962 13.495 1.9712L11.5575 2.51807L11.0607 0.564949C10.995 0.302449 10.7888 0.0961986 10.5263 0.0243236C10.2638 -0.0475513 9.98565 0.0305737 9.79815 0.227449L8.3919 1.6712L6.98565 0.227449Z"
                    fill="#0057B8"
                  />
                </svg>
                <span>Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.59375 0C10.7155 0 12.7503 0.842855 14.2506 2.34315C15.7509 3.84344 16.5938 5.87827 16.5938 8C16.5938 10.1217 15.7509 12.1566 14.2506 13.6569C12.7503 15.1571 10.7155 16 8.59375 16C6.47202 16 4.43719 15.1571 2.9369 13.6569C1.4366 12.1566 0.59375 10.1217 0.59375 8C0.59375 5.87827 1.4366 3.84344 2.9369 2.34315C4.43719 0.842855 6.47202 0 8.59375 0ZM7.84375 3.75V8C7.84375 8.25 7.96875 8.48438 8.17812 8.625L11.1781 10.625C11.5219 10.8562 11.9875 10.7625 12.2188 10.4156C12.45 10.0687 12.3562 9.60625 12.0094 9.375L9.34375 7.6V3.75C9.34375 3.33437 9.00937 3 8.59375 3C8.17812 3 7.84375 3.33437 7.84375 3.75Z"
                    fill="#0057B8"
                  />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
