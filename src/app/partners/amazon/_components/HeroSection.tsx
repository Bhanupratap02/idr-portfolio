import imgImg1 from "../imports/figma:asset/991de5f62940aa2e11d24b88dc766a74e201ec5f.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center">
      <img 
        src={imgImg1}
        alt="Amazon Key Access Control System" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(35,47,62,0.8)] to-[rgba(35,47,62,0.7)] opacity-75" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
          Amazon Key Access Control System
        </h1>
        <p className="text-xl md:text-2xl lg:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto text-gray-100">
          Secure, seamless, smart access to your property with Amazon's trusted delivery ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#ff9900] text-white px-8 py-3 rounded-md font-medium hover:bg-[#e6890a] transition-colors">
            Learn More
          </button>
          <button className="bg-white text-[#2e2e2e] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}