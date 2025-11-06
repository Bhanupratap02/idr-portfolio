/** @format */
const included = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Fconference-room%2Fincluded.png";
import Image from "next/image";
const includedServices = [
  {
    title: "Expert consulting and site walkthroughs",
    description:
      "We analyze your space and needs before recommending solutions.",
  },
  {
    title: "Custom room design and system selection",
    description:
      "Tailored solutions that match your specific requirements and budget.",
  },
  {
    title: "Installation by certified A/V technicians",
    description: "Expert installation that ensures everything works perfectly.",
  },
  {
    title: "DSP programming & audio tuning",
    description:
      "Precisely calibrated audio for perfect sound in your unique space.",
  },
  {
    title: "Staff training & walkthrough",
    description: "We ensure your team knows how to use all features.",
  },
];
export default function IncludedSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 2xl:py-28 3xl:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl  font-medium text-gray-900">
            What&apos;s Included in Every IDR Conference Room
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Conference Room Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <Image
              src={included}
              alt="Modern Conference Room Setup"
              width={800}
              height={600}
              className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] 3xl:max-w-[800px] h-auto rounded-lg"
            />
          </div>

          {/* Right side - Services List */}
          <div className="order-1 lg:order-2 space-y-8">
            {includedServices.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-dark-blue rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl xl:text-2xl font-medium text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base xl:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
