/** @format */

export default function LencoreBetterSpacesSection() {
  return (
    <section className="w-full py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-7 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-medium text-white">
            Lencore + IDR = Better Spaces
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              A well-designed sound masking system helps improve productivity,
              reduces distractions, and enhances speech privacy. And Lencore
              doesn&apos;t just do one thing — it&apos;s a full-fledged
              platform.
            </p>

            <p className="text-lg text-blue-100 font-light leading-relaxed">
              When paired with IDR&apos;s expert deployment and documentation,
              you get a powerful, long-term solution. Need to retrofit a suite
              or spec a new construction project? We&apos;re here for both.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-2xl">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cbcc296a6ed111857e9fa0e1f207c44495da015e?width=1184"
              alt="Professional installation team working on sound masking system"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
