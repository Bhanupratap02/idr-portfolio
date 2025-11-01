import { Award, ShieldCheck, Layers } from "lucide-react";

const features = [
  {
    icon: <Award className="w-7 h-7 text-yellow-600" />,
    title: "Platinum Kisi Partner",
    description:
      "Priority access to new features, training, and support resources",
    bgColor: "bg-yellow-100",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
    title: "NYS Licensed & Insured",
    description:
      "Fully licensed security contractor with comprehensive insurance coverage",
    bgColor: "bg-green-100",
  },
  {
    icon: <Layers className="w-7 h-7 text-blue-600" />,
    title: "Integration Experts",
    description:
      "Seamless integration with intercoms, cameras, and building automation",
    bgColor: "bg-blue-100",
  },
];

export function WhyWorkWithIDRSection() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28">
        <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
       <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-16  text-center">
          <h2  className="mb-3 sm:mb-4 md:mb-6   text-2xl font-bold text-[#2e2e2e] sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl leading-tight">
            Why Work with IDR?
          </h2>
         <p className="text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-light">
            Your trusted Kisi implementation partner
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-10 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md group hover:shadow-2xl transition-shadow duration-200"
            >
              <div
                className={`${feature.bgColor} rounded-lg size-10 sm:size-11 md:size-12 xl:size-14 2xl:size-16 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 sm:text-lg md:text-xl 2xl:text-2xl mb-4">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Box */}
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <blockquote className="text-lg md:text-xl xl:text-2xl text-[#2e2e2e] mb-4">
            &quot;We don&apos;t just install access control — we build
            secure, scalable ecosystems.&quot;
          </blockquote>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base xl:text-lg 2xl:text-xl font-light">
            End-to-End Service from Design to Support
          </p>
        </div>
      </div>
    </section>
  );
}
