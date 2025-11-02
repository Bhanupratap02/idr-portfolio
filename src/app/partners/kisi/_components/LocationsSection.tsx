import { MapPin, Globe2 } from "lucide-react";

const locations = [
  {
    icon: <MapPin className="size-6 xl:size-8 2xl:size-10 text-blue-600" />,
    title: "New York City",
    description: "All five boroughs",
  },
  {
    icon: <MapPin className="size-6 xl:size-8 2xl:size-10 text-blue-600" />,
    title: "New Jersey",
    description: "North & Central regions",
  },
  {
    icon: <MapPin className="size-6 xl:size-8 2xl:size-10 text-blue-600" />,
    title: "South Florida",
    description: "Miami-Dade & Broward",
  },
  {
    icon: <Globe2 className="size-6 xl:size-8 2xl:size-10 text-blue-600" />,
    title: "Nationwide",
    description: "Via partner network",
  },
];

export function LocationsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
              <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
              <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16  text-center">
          <h2  className="mb-3 sm:mb-4 md:mb-6   text-2xl font-bold text-[#2e2e2e] sm:text-3xl md:text-4xl  xl:text-5xl  leading-tight">
            Where We Operate
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl  font-light">
            Local expertise, nationwide reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6 text-center group hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex  justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {location.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl mb-2 2xl:mb-3">
                {location.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
