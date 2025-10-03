/** @format */

export default function WhereAkuvoxShinesSection() {
  const applications = [
    {
      icon: "🏢",
      title: "Commercial Office Lobbies",
    },
    {
      icon: "🏘️",
      title: "Apartment & Condo Buildings",
    },
    {
      icon: "🏫",
      title: "Schools & Campus Entry",
    },
    {
      icon: "🚪",
      title: "Visitor Entrances",
    },
    {
      icon: "🏙️",
      title: "Mixed-Use Buildings",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-38 bg-white">
      <div className="max-w-[2120px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-center text-gray-800 mb-8 sm:mb-8 md:mb-10 xl:mb-16 2xl:mb-18 3xl:mb-20">
          Where Akuvox Shines
        </h2>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-5 md:p-6 xl:p-7 2xl:p-8  3xl:p-10 text-center  flex flex-col justify-center items-center hover:scale-105   duration-300 transition-transform "
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4 xl:mb-5 2xl:mb-6">
                <span className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
                  {app.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl  text-gray-800 leading-7">
                {app.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
