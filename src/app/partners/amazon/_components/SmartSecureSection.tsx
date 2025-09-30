import imgRingChannelProgram1Page00172 from "../imports/figma:asset/f4ac287bc560b4917d6f6c3073b5e2869f41b196.png";

export function SmartSecureSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-[#2e2e2e] mb-6">
            Smart. Secure. Scalable.
          </h2>
          <p className="text-xl text-[#626262] max-w-2xl mx-auto">
            Amazon Key Access Control System for modern properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={imgRingChannelProgram1Page00172} 
              alt="Smart Access Control"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src={imgRingChannelProgram1Page00172} 
              alt="Secure Technology"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}