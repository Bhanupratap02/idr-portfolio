interface CaseStudyContentProps {
  title: string;
  description: string;
  client?: string;
  property?: string;
  challenge?: string;
  solution?: string;
  authorImage?: string;
  idrResponse?: string[];
  results?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

export default function CaseStudyContent({ 
  title, 
  description,
  client = "Fairstead",
  property = "Sunset Park (42 Buildings)",
  challenge = "Unauthorized fob duplication was allowing drug activity and non-residential access",
  solution = "High-Security Access Control Retrofit",
  authorImage = "https://api.builder.io/api/v1/image/assets/TEMP/ab10950e41ead24bff21209ad5685642d20cd80d?width=200",
  idrResponse = [
    "Replacing all exterior access readers with HID iClass high-security readers",
    "Programming and distributing new encrypted iClass fobs to all tenants", 
    "Assisting Fairstead with secure distribution and tracking of credentials"
  ],
  results = "Unlike generic fobs, HID iClass credentials are not easily cloned, effectively restoring access control integrity. The result: a safer environment for residents, fewer liability concerns, and tighter operational control for Fairstead's management team.",
  testimonial = {
    quote: "I would highly recommend IDR, their dedication to excellence and innovation makes them a standout in the industry",
    author: "Anthony D'Alessio, V.P. of Security, Fairstead"
  }
}: CaseStudyContentProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with avatar and title */}
        <div className="flex items-center space-x-6 mb-16">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img
              src={authorImage}
              alt="Case study author"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-gray-900 text-3xl font-semibold leading-tight">
            {title}
          </h1>
        </div>

        {/* Header line */}
        <div className="w-full h-px bg-gray-900 mb-16"></div>

        {/* Client details - stacked vertically */}
        <div className="space-y-3 mb-16">
          <div className="text-gray-900 text-lg leading-relaxed">
            <span className="font-semibold">Client:</span>
            <span className="ml-2">{client}</span>
          </div>
          <div className="text-gray-900 text-lg leading-relaxed">
            <span className="font-semibold">Property:</span>
            <span className="ml-2">{property}</span>
          </div>
          <div className="text-gray-900 text-lg leading-relaxed">
            <span className="font-semibold">Challenge:</span>
            <span className="ml-2">{challenge}</span>
          </div>
          <div className="text-gray-900 text-lg leading-relaxed">
            <span className="font-semibold">Solution:</span>
            <span className="ml-2">{solution}</span>
          </div>
        </div>

        {/* Case study details */}
        <div className="space-y-16">
          {/* Client details section removed from here since it's now above the line */}

          {/* Main description */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* IDR Response */}
          <div className="space-y-6">
            <h2 className="text-gray-900 text-3xl font-semibold leading-tight">
              IDR Responded by:
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-2">
              {idrResponse.map((response, index) => (
                <p key={index}>• {response}</p>
              ))}
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
            <p className="text-gray-600 text-lg leading-relaxed">
              {results}
            </p>
          </div>

          {/* Client Feedback */}
          <div className="space-y-6">
            <h2 className="text-gray-900 text-3xl font-semibold leading-tight">
              Client Feedback
            </h2>
            <blockquote className="text-gray-600 text-lg leading-relaxed">
              <p className="mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <footer className="text-gray-900 text-lg">
                -{testimonial.author}
              </footer>
            </blockquote>
          </div>

          {/* Explore More CTA - matching Figma design */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="bg-blue-900 px-8 py-6 inline-block">
                <h3 className="text-white text-3xl font-semibold leading-tight">
                  Explore More Case Studies
                </h3>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-gray-600 text-lg leading-relaxed lg:pt-2">
                We analyzed user behavior, reviewed existing workflows, and conducted stakeholder interviews 
                to uncover the root challenges impacting the user experience.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}