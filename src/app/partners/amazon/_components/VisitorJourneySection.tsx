import imgImg2 from "../imports/figma:asset/5f813c2a1ad30b5d118263653787e120dca81717.png";
import imgImg3 from "../imports/figma:asset/27bee27c584cfb8f78194e27c4b7f02cd5a59a65.png";
import imgImg4 from "../imports/figma:asset/5e4fde7ff0a9b476f36afb75db6c8baa4b7e2420.png";
import imgImg5 from "../imports/figma:asset/37e3ecdbf1035b91151b8f706f9919c7cf8afdc4.png";
import imgImg from "../imports/figma:asset/92c4a8b0c13fd54ac18b84b2caf50c035b9c64cf.png";
import imgChatGptImageJul132025103719Am1 from "../imports/figma:asset/c3d8bf5457ac90b112f022d3ce7009b16b567817.png";

function StepCard({ 
  stepNumber, 
  title, 
  description, 
  image,
  showConnector = true 
}: { 
  stepNumber: number;
  title: string;
  description: string;
  image: string;
  showConnector?: boolean;
}) {
  return (
    <div className="relative">
      {/* Connector line for larger screens */}
      {showConnector && (
        <div className="hidden lg:block absolute top-10 left-[120px] h-1 bg-gray-300 w-[calc(100vw/3-160px)] z-0" />
      )}
      
      {/* Step number circle */}
      <div className="relative z-10 mb-8">
        <div className="bg-[#232f3e] rounded-full w-20 h-20 flex items-center justify-center text-white text-2xl font-bold">
          {stepNumber}
        </div>
      </div>
      
      {/* Card content */}
      <div className="bg-white rounded-lg shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="h-40 bg-gray-100 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
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
    </div>
  );
}

export function VisitorJourneySection() {
  const steps = [
    {
      title: "Visitor Taps",
      description: "Visitor taps phone or intercom (no app required)",
      image: imgImg2
    },
    {
      title: "Directory Opens",
      description: "Virtual directory opens for resident search",
      image: imgImg3
    },
    {
      title: "Initiates Call",
      description: "Visitor selects resident and initiates call",
      image: imgImg4
    },
    {
      title: "Resident Answers",
      description: "Resident receives notification and answers call",
      image: imgImg5
    },
    {
      title: "Video Call",
      description: "Resident verifies visitor through video call",
      image: imgImg
    },
    {
      title: "Unlock Access",
      description: "Resident unlocks door remotely with one tap",
      image: imgChatGptImageJul132025103719Am1
    }
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#2e2e2e] mb-4">
            Visitor Journey with Intercom Boost & Lite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless experience for visitors and residents alike.
          </p>
        </div>
        
        {/* First row - 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.slice(0, 3).map((step, index) => (
            <StepCard
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              image={step.image}
              showConnector={index < 2}
            />
          ))}
        </div>
        
        {/* Second row - 3 steps, centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.slice(3, 6).map((step, index) => (
            <StepCard
              key={index + 3}
              stepNumber={index + 4}
              title={step.title}
              description={step.description}
              image={step.image}
              showConnector={index < 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}