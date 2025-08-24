/** @format */

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            Ready to Transform Your Meeting Spaces?
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Our team of experts is ready to help you design and implement the
            perfect conference room solution for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
              Request a Consultation
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              See Our Work Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
