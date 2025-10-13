/** @format */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

const WhereEagleEyeExcels = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-28">
      <div className="mx-auto max-w-[1920px]">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 2xl:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-medium text-gray-800 leading-tight">
            Where Eagle Eye Excels
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 max-w-7xl mx-auto">
          {[
            {
              title: "Multi-Tenant & Office Buildings",
              description:
                "Unify your locations into one view with cloud VMS and custom roles for staff or tenants.",
            },
            {
              title: "Schools & Campuses",
              description:
                "Enable secure remote viewing and AI alerts while retaining full control over user access.",
            },
            {
              title: "Retail & Hospitality",
              description:
                "Use customer flow analytics, POS integration, and mobile access to optimize security and operations.",
            },
            {
              title: "Hybrid Camera Systems",
              description:
                "Keep your existing cameras, add smart features, and push it all to the cloud. It’s that simple.",
            },
          ].map((card, index) => (
            <Card
              key={index}
              className="bg-white shadow-md hover:shadow-xl border border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 xl:p-12 transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-eagle-gray-800">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm sm:text-base md:text-lg xl:text-lg 2xl:text-xl leading-relaxed font-light">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereEagleEyeExcels;
