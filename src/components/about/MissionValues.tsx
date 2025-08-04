export default function MissionValues() {
  const values = [
    {
      number: "1",
      title: "Show Up. Do the Work.",
      description: "We believe in being present, prepared, and committed—on every job, for every client. No shortcuts, no excuses."
    },
    {
      number: "2",
      title: "White Glove Service",
      description: "From kickoff to closeout, we deliver with care. That means clear communication, structured project management, and full system documentation in the IDR Portal."
    },
    {
      number: "3",
      title: "Earn it, Every Day",
      description: "Trust is built through action. We work to earn our clients' confidence on every project—not just with words, but with results."
    },
    {
      number: "4",
      title: "Technical Excellence",
      description: "We don't just install—it has to work. Our team is trained, certified, and obsessed with doing things right the first time."
    },
    {
      number: "5",
      title: "Adapt and Grow",
      description: "The tech changes, and so do we. We're always learning, always evolving—because staying sharp means staying useful."
    },
    {
      number: "6",
      title: "Partnership over profit",
      description: "We play the long game. Our relationships matter more than the upsell. If it's not the right solution for you, we won't recommend it."
    },
    {
      number: "7",
      title: "Client Education",
      description: "We take time to explain systems clearly, so you're not just a customer—you're confident and informed."
    },
    {
      number: "8",
      title: "Security-First Thinking",
      description: "In everything we install—from networks to access control—security isn't a feature, it's the foundation."
    }
  ];

  return (
    <section className="bg-idr-cream py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-100 mb-6 sm:mb-8 shadow-sm">
            <span className="text-gray-700 text-lg sm:text-xl lg:text-2xl font-medium">Our Mission & Values</span>
          </div>
          
          {/* Mission */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-idr-text mb-6 sm:mb-8">Our Mission</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-idr-text max-w-5xl mx-auto leading-relaxed px-4">
              At IDR Technology Solutions, our mission is to deliver cutting-edge security and technology infrastructure with unmatched service, expert guidance, and white-glove project execution — empowering our clients to operate safer, smarter, and more efficiently.
            </p>
          </div>

          {/* Values Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-idr-text mb-8 sm:mb-12 lg:mb-16">Our Values</h2>
        </div>

        {/* Values Grid - 2x4 layout matching Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {values.map((value) => (
            <div
              key={value.number}
              className="bg-white rounded-xl p-6 sm:p-8 lg:p-6 xl:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 text-white rounded-full text-xl sm:text-2xl font-bold mb-4 sm:mb-6 shadow-md">
                {value.number}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-idr-text mb-3 sm:mb-4 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-idr-text-muted leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}