/** @format */

interface SmartFeatureCardProps {
  title: string;
  description: string;
}

function SmartFeatureCard({ title, description }: SmartFeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4  2xl:gap-5 rounded-[12px] border border-gray-700 bg-gray-800 p-6 transition-all  transform hover:scale-105 hover:shadow-xl duration-300 group hover:border-gray-600 hover:bg-gray-750 md:gap-4 md:p-8">
      <h3 className="text-base font-semibold text-white sm:text-lg md:text-xl 2xl:text-2xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-300 sm:text-base xl:text-lg 2xl:text-xl font-light">
        {description}
      </p>
    </div>
  );
}

export function ButterflyMXSmartFeatures() {
  const features = [
    {
      title: "Virtual Keys",
      description: "Schedule guest or staff access by time or day",
    },
    {
      title: "PMS Integrations",
      description: "Connect to Yardi, Entrata, RealPage, etc.",
    },
    {
      title: "Access Control Integration",
      description: "Combine with readers and mobile credentials",
    },
    {
      title: "Package Delivery Management",
      description: "Issue delivery PINs with activity tracking",
    },
    {
      title: "Elevator Controls",
      description: "Seamless integration with elevator systems",
    },
    {
      title: "Event History",
      description: "Cloud archive of all door events with video",
    },
  ];

  return (
    <section className="bg-gray-900 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 text-center">
          <h2 className="mb-3 sm:mb-4 md:mb-6 xl:mb-8 2xl:mb-10 text-2xl font-bold text-white   sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
            Smart Features & Integrations
          </h2>
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            Advanced capabilities that set ButterflyMX apart
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <SmartFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
