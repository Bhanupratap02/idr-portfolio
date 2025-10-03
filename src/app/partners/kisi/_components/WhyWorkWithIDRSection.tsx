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
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl text-[#2e2e2e] mb-4">
            Why Work with IDR?
          </h2>
          <p className="text-lg lg:text-xl text-[#626262]">
            Your trusted Kisi implementation partner
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div
                className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl text-[#2e2e2e] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#626262] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Box */}
        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <blockquote className="text-xl lg:text-2xl text-[#2e2e2e] mb-4">
            &quot;We don&apos;t just install access control — we build
            secure, scalable ecosystems.&quot;
          </blockquote>
          <p className="text-[#626262]">
            End-to-End Service from Design to Support
          </p>
        </div>
      </div>
    </section>
  );
}
