import imgRingChannelProgram1Page00161 from "../imports/figma:asset/3cc0e50e5b143a9459d0a205b3433f5c7c167bb0.png";

export function FinalCTASection() {
  return (
    <section className="bg-[#232f3e] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-medium text-white leading-tight mb-8">
              Ready to upgrade your property with the Amazon Key Access Control System?
            </h2>
            
            <p className="text-xl text-gray-200 leading-relaxed mb-12">
              Join thousands of properties that trust Amazon Key for secure, seamless access control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ff9900] text-white px-8 py-4 rounded-md font-medium hover:bg-[#e6890a] transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-[#232f3e] transition-colors">
                Request Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img 
                src={imgRingChannelProgram1Page00161} 
                alt="Amazon Key Access Control System"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}