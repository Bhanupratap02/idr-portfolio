export default function CaseStudyContent() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header line */}
        <div className="w-full h-px bg-gray-text mb-16"></div>

        {/* Header with avatar and title */}
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-5 mb-16">
          <div className="w-20 h-20 md:w-22 md:h-22 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ab10950e41ead24bff21209ad5685642d20cd80d?width=200"
              alt="Case study author"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-gray-text font-inter text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            How IDR Eliminated Unauthorized Building Access for Fairstead.
          </h1>
        </div>

        {/* Case study details */}
        <div className="space-y-16">
          {/* Client details */}
          <div className="space-y-3">
            <div className="text-gray-text text-xl md:text-2xl lg:text-3xl leading-relaxed">
              <span className="font-semibold">Client:</span>
              <span className="text-lg md:text-xl lg:text-2xl ml-2">Fairstead</span>
              <span className="font-semibold ml-6">Property:</span>
              <span className="text-lg md:text-xl lg:text-2xl ml-2">Sunset Park (42 Buildings)</span>
            </div>
            <div className="text-gray-text text-xl md:text-2xl lg:text-3xl leading-relaxed">
              <span className="font-semibold">Challenge:</span>
              <span className="text-lg md:text-xl lg:text-2xl ml-2">Unauthorized fob duplication was allowing drug activity and non-residential access</span>
            </div>
            <div className="text-gray-text text-xl md:text-2xl lg:text-3xl leading-relaxed">
              <span className="font-semibold">Solution:</span>
              <span className="text-lg md:text-xl lg:text-2xl ml-2">High-Security Access Control Retrofit</span>
            </div>
          </div>

          {/* Main description */}
          <div>
            <p className="text-gray-medium text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Fairstead, a leading national property management firm, partnered with IDR to address a 
              widespread security concern across 42 buildings in their Sunset Park portfolio. Residents were 
              duplicating their proximity fobs at retail stores and handing them off to unauthorized 
              individuals — leading to serious safety and liability concerns for the property owner.
            </p>
          </div>

          {/* IDR Response */}
          <div className="space-y-4">
            <h2 className="text-gray-text font-zilla text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              IDR Responded by:
            </h2>
            <div className="text-gray-medium text-xl md:text-2xl lg:text-3xl leading-relaxed space-y-2">
              <p>• Replacing all exterior access readers with HID iClass high-security readers</p>
              <p>• Programming and distributing new encrypted iClass fobs to all tenants</p>
              <p>• Assisting Fairstead with secure distribution and tracking of credentials</p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/df086850bf771d381e110feb55fafcc3d2466ce3?width=1485"
                alt="Main security installation"
                className="w-full h-auto rounded"
              />
            </div>
            <div className="space-y-6">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9ea9a9ed60f3052643aa649b2b535c0841981b08?width=708"
                alt="Security reader close-up"
                className="w-full h-auto rounded"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/95d2a5624b7db437b4de9b277a53fac9f9562a37?width=708"
                alt="Access control device"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

          {/* Results */}
          <div>
            <p className="text-gray-medium text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Unlike generic fobs, HID iClass credentials are not easily cloned, effectively restoring access 
              control integrity. The result: a safer environment for residents, fewer liability concerns, and 
              tighter operational control for Fairstead&apos;s management team.
            </p>
          </div>

          {/* Client Feedback */}
          <div className="space-y-4">
            <h2 className="text-gray-text font-zilla text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Client Feedback
            </h2>
            <blockquote className="text-gray-medium text-xl md:text-2xl lg:text-3xl leading-relaxed">
              <p className="mb-4">
                &quot;I would highly recommend IDR, their dedication to excellence and innovation makes them a 
                standout in the industry&quot;
              </p>
              <footer className="text-gray-text text-xl md:text-2xl lg:text-3xl">
                -Anthony D&apos;Alessio, V.P. of Security, Fairstead
              </footer>
            </blockquote>
          </div>

          {/* Explore More CTA */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="bg-navy px-8 py-6 lg:px-12 lg:py-8">
              <h3 className="text-white font-zilla text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Explore More Case Study
              </h3>
            </div>
            <p className="flex-1 text-gray-medium text-lg md:text-xl lg:text-2xl leading-relaxed">
              We analyzed user behavior, reviewed existing workflows, and conducted stakeholder interviews 
              to uncover the root challenges impacting the user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
