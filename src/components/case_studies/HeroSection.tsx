export default function HeroSection({
  backgroundImage,
  heading,
  paragraph
}: {
  backgroundImage: string;
  heading: string;
  paragraph: string;
}){
  return (
    <section
      className="relative min-h-[517px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `${backgroundImage}`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[517px] px-6">
        <div className="max-w-4xl mx-auto">
          {/* Card container */}
          <div className="bg-white/5 backdrop-blur-sm border border-gray-light/20 rounded-lg p-6 md:p-8 lg:p-12 text-center">
            <h1 className="text-cream font-inter text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-cream font-inter text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
