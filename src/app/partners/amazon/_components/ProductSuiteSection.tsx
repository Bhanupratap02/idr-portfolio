import imgRingChannelProgram1Page00043 from "../imports/figma:asset/639f5466a6f54242e13a1382810c98aa76c89924.png";

function ProductCard({ 
  image, 
  title, 
  description 
}: { 
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="h-48 bg-gray-100 rounded-t-lg overflow-hidden p-6">
        <div 
          className="w-full h-full bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-[#2e2e2e] mb-3">
          {title}
        </h3>
        <p className="text-[#626262] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ProductSuiteSection() {
  const products = [
    {
      image: imgRingChannelProgram1Page00043,
      title: "Virtual Key",
      description: "Quick, easy digital entry throughout your property, and the ability to grant access from anywhere."
    },
    {
      image: imgRingChannelProgram1Page00043,
      title: "Intercom Lite",
      description: "Can be used by itself or as an enhancement to existing systems to add video functionality and more."
    },
    {
      image: imgRingChannelProgram1Page00043,
      title: "Intercom Plus",
      description: "A sleek, intuitive video intercom with a touch screen and multiple ways to gain access."
    },
    {
      image: imgRingChannelProgram1Page00043,
      title: "Intercom Boost",
      description: "Advanced features with NFC tap functionality for seamless visitor management."
    }
  ];

  return (
    <section className="bg-[#e7f3ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#2e2e2e] mb-4">
            Our Product Suite
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}