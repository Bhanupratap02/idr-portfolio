/** @format */

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 2xl:py-24 3xl:py-32 bg-dark-blue">
      <div className="mx-auto max-w-7x 2xl:max-w-[90rem] 3xl:max-w-[120rem] px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium text-white leading-tight">
            Ready to Transform Your Meeting Spaces?
          </h2>
          {/* Subtext */}
          <p className="text-lg md:text-xl 2xl:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our team of experts is ready to help you design and implement the
            perfect conference room solution for your organization.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              href={"/contact"}
              className="bg-white text-dark-blue px-8 py-4 2xl:px-10 2xl:py-5 rounded-md text-lg 2xl:text-xl font-medium hover:bg-gray-50  focus:outline-none focus:ring-2 focus:ring-white cursor-pointer hover:shadow-2xl hover:scale-105 transition-all"
            >
              Request a Consultation
            </Link>
            <Link
              href={"/portfolio"}
              className="border border-white text-white px-8 py-4 2xl:px-10 2xl:py-5 rounded-md text-lg 2xl:text-xl font-medium hover:bg-white hover:text-dark-blue transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              See Our Work Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
