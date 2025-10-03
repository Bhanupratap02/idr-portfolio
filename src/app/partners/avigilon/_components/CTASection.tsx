export function CTASection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#1e293b] to-[#1e3a8a] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl mb-4 text-white">
          Ready to Transform Your Security?
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-blue-100 mb-8">
          Get a personalized demo and see how Unity Access + Alta can protect your organization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors w-full sm:w-auto">
            Request Demo
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1e293b] transition-colors w-full sm:w-auto">
            Book On-site Evaluation
          </button>
        </div>
      </div>
    </section>
  );
}
