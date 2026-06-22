/** @format */
import Image from "next/image";
const before_after = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Fbefore_after.png";
const entry_control = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fentry_control.png";
const credential_types = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fcredential_types.png";
const remote_management = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fremote_management.png";
const time = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Ftime.png";
const bell = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fservices%2Faccess-control%2Ficons%2Fbell.png";
import Link from "next/link";
export default function TrustedTechnology() {
  return (
    <section className="bg-[#F9FAFB] px-4 sm:px-8 lg:px-16 xl:px-28 py-12 sm:py-16">
      <div className="max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[#2E2E2E] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 sm:mb-6">
          Built on Trusted Technology
        </h2>

        <p className="text-[#626262] text-base sm:text-lg 2xl:text-xl 3xl:text-2xl mb-10 sm:mb-16 max-w-3xl mx-auto">
          We deploy advanced access control systems from top manufacturers like Kisi, Brivo, Rhombus, Verkada, Vicon and ZKTeco, ensuring reliable performance, scalability, and seamless integration.
        </p>
        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { name: "Kisi", url: "/partners/kisi" },
            { name: "Brivo", url: "/partners/brivo" },
            { name: "Rhombus", url: "/partners/rhombus" },
            { name: "Verkada", url: "/partners/verkada" },
            { name: "Vicon", url: "/partners/vicon" },
            { name: "ZKTeco", url: "/partners/zk-teco" },
          ].map((partner) => (
            <Link
              key={partner.name}
              href={partner.url}
              className="bg-white rounded-lg shadow-sm p-3 sm:p-4 text-center flex items-center justify-center"
            >
              <span className="text-[#626262] text-sm sm:text-base font-medium">
                {partner.name}
              </span>
            </Link>
          ))}
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                img: entry_control,
                alt: "Entry Control",
                title: "Door, Gate, Turnstile, Elevator Control",
                desc: "Control all entry points from a single interface.",
              },
              {
                img: credential_types,
                alt: "Multiple Credentials",
                title: "Multiple Credential Types",
                desc: "Card, Fob, Mobile, Biometric credentials.",
              },
              {
                img: remote_management,
                alt: "Remote Management",
                title: "Remote Management",
                desc: "Control your system from anywhere, anytime.",
              },
              {
                img: time,
                alt: "Time & Role-based",
                title: "Time & Role-based Permissions",
                desc: "Customize access by person, time, and location.",
              },
              {
                img: bell,
                alt: "Real-time Alerts",
                title: "Real-time Alerts & Logs",
                desc: "Stay informed with instant notifications and detailed logs.",
                span: "md:col-span-2",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 2xl:p-8 3xl:p-14 ${
                  item.span || ""
                }`}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-[#2E2E2E] text-base sm:text-lg 3xl:text-2xl font-medium mb-2">
                  {item.title}
                </h3>
                <p
                  className="text-[#626262] text-sm sm:text-base xl:text-lg 
                 3xl:text-xl leading-relaxed"
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          {/* Right Image */}
          <div className="w-full self-center">
            <Image
              src={before_after}
              alt="Technology Interface"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
