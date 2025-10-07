/** @format */
import Image from "next/image";
import portal from "@/assets/services/access-control/portal.png";
import photos from "@/assets/services/access-control/icons/photos.png";
import folder from "@/assets/services/access-control/icons/folder.png";
import warning from "@/assets/services/access-control/icons/warning.png";
import track from "@/assets/services/access-control/icons/track.png";
const portalFeatures = [
  {
    icon: photos,
    title: "Photos/Videos of Work",
    desc: "Visual documentation of installations",
  },
  {
    icon: folder,
    title: "Equipment Docs",
    desc: "Manuals and specifications",
  },
  {
    icon: warning,
    title: "Warranty Tracking",
    desc: "Monitor coverage status",
  },
  {
    icon: track,
    title: "Submit & Track Requests",
    desc: "Manage support tickets",
  },
];
export default function IDRPortal() {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16 lg:py-20 2xl:py-24 3xl:py-28">
      <div
        className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem]
 mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 sm:mb-6">
              The IDR Portal: Total Transparency
            </h2>
            <p className="text-[#626262] text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-relaxed mb-8 sm:mb-12">
              Access everything about your system in one secure location. From
              installation documentation to support requests, everything is at
              your fingertips.
            </p>

            {/* Portal Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8 3xl:gap-10 mb-8 sm:mb-12">
              {portalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 object-contain"
                    />
                  </div>
                  <h3 className="text-[#2E2E2E] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#626262] text-sm sm:text-base 2xl:text-lg 3xl:text-xl">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#626262] text-base sm:text-lg lg:text-xl italic">
              From a single location to countless sites, you’re always in
              command.
            </p>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
            <Image
              src={portal}
              alt="IDR Portal Interface"
              className="w-full max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl h-auto rounded-lg  mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
