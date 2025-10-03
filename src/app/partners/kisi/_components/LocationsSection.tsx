import { MapPin, Globe2 } from "lucide-react";

const locations = [
  {
    icon: <MapPin className="w-6 h-8 text-blue-600" />,
    title: "New York City",
    description: "All five boroughs",
  },
  {
    icon: <MapPin className="w-6 h-8 text-blue-600" />,
    title: "New Jersey",
    description: "North & Central regions",
  },
  {
    icon: <MapPin className="w-6 h-8 text-blue-600" />,
    title: "South Florida",
    description: "Miami-Dade & Broward",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-blue-600" />,
    title: "Nationwide",
    description: "Via partner network",
  },
];

export function LocationsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#2e2e2e] mb-4">
            Where We Operate
          </h2>
          <p className="text-lg lg:text-xl text-[#626262]">
            Local expertise, nationwide reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {location.icon}
              </div>
              <h3 className="text-lg text-[#2e2e2e] mb-2">
                {location.title}
              </h3>
              <p className="text-[#626262]">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
