import imgImg7 from "../imports/figma:asset/718afe2b4cc56c716dd89cb1eebf9119498e038d.png";
import svgPaths from "../imports/svg-intx8q9gz5";

function CheckIcon() {
  return (
    <div className="w-5 h-5 flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_7_689)">
          <path d={svgPaths.p124e9100} fill="#22C55E" />
        </g>
        <defs>
          <clipPath id="clip0_7_689">
            <path d="M0 0H20V20H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <CheckIcon />
      <span className="text-xl text-[#626262]">{children}</span>
    </div>
  );
}

export function IntercomPlusSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-xl shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] p-4 max-w-[600px] mx-auto">
              <img 
                src={imgImg7} 
                alt="Intercom Plus Features"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div>
            {/* Premium Solution Badge */}
            <div className="inline-block bg-[#626262] text-white px-4 py-2 rounded-md text-sm font-medium mb-6">
              PREMIUM SOLUTION
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-medium text-[#2e2e2e] leading-tight mb-6">
              Intercom PLUS Experience
            </h2>
            
            <p className="text-xl text-[#626262] leading-relaxed mb-8">
              Our premium touchscreen solution with multiple access options.
            </p>
            
            <div className="space-y-4 mb-12">
              <FeatureItem>All benefits of Intercom Lite</FeatureItem>
              <FeatureItem>Sleek touchscreen interface</FeatureItem>
              <FeatureItem>Access via Ring App</FeatureItem>
              <FeatureItem>On-screen keypad</FeatureItem>
              <FeatureItem>Custom access codes</FeatureItem>
            </div>
            
            <button className="bg-[#2e2e2e] text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
              Learn About Intercom Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}