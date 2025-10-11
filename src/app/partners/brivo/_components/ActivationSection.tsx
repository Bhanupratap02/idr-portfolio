/** @format */
import { DownloadCloud, Mail, Wallet } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Open Email Invitation",
    description: "Open your Brivo Mobile Pass email invitation.",
    icon: Mail,
  },
  {
    id: 2,
    title: "Download App",
    description: "Download the Brivo Mobile Pass app.",
    icon: DownloadCloud,
  },
  {
    id: 3,
    title: "Add to Wallet",
    description: 'Tap "Add to Apple Wallet" on your badge.',
    icon: Wallet,
  },
];

export default function ActivationSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
      <div className="max-w-[100rem] mx-auto">
        {/* Outer Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-14 lg:py-16">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl  font-semibold text-[#2e2e2e] mb-3 sm:mb-4">
              Simple & Secure Activation
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl  text-[#626262] font-light">
              Getting started is easy, fast, and secure with Brivo Access.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14 mb-10 sm:mb-12 md:mb-14">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e6f3ff] rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0066cc]">
                    {step.id}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#2e2e2e] mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm sm:text-base md:text-lg text-[#626262] leading-relaxed mb-4 sm:mb-5 md:mb-6 font-light max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Step Icon */}
                <div className="flex justify-center">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#0066cc] transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl font-medium text-[#2e2e2e]">
              That&apos;s it — your badge is now ready on iPhone and Apple
              Watch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
