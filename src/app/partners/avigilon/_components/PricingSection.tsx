export function PricingSection() {
  const editions = [
    {
      name: "Professional",
      maxDoors: "50",
      maxOperators: "10",
      maxIdentities: "75,000",
      maxTransactions: "75M",
      deployment: "Appliance",
      highlight: false
    },
    {
      name: "Enterprise",
      maxDoors: "400",
      maxOperators: "20",
      maxIdentities: "250,000",
      maxTransactions: "150M",
      deployment: "Appliance",
      highlight: false
    },
    {
      name: "Enterprise Plus",
      maxDoors: "4,000",
      maxOperators: "50",
      maxIdentities: "500,000",
      maxTransactions: "150M",
      deployment: "Appliance",
      highlight: true
    },
    {
      name: "Virtual",
      maxDoors: "4,000",
      maxOperators: "50",
      maxIdentities: "500,000",
      maxTransactions: "150M",
      deployment: "VMware/Hyper-V",
      highlight: false
    }
  ];

  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#2e2e2e]">
            Choose Your Edition
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            Scale from small sites to enterprise campuses — on-prem appliances or virtual deployments
          </p>
        </div>

        {/* Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2e2e2e] text-white">
                  <th className="px-6 py-4 text-left">Edition</th>
                  <th className="px-6 py-4 text-center">Max Doors</th>
                  <th className="px-6 py-4 text-center">Max Operators</th>
                  <th className="px-6 py-4 text-center">Max Identities</th>
                  <th className="px-6 py-4 text-center">Max Transactions</th>
                  <th className="px-6 py-4 text-center">Deployment</th>
                </tr>
              </thead>
              <tbody>
                {editions.map((edition, index) => (
                  <tr 
                    key={index}
                    className={`border-t border-gray-200 ${edition.highlight ? 'bg-blue-50' : ''}`}
                  >
                    <td className={`px-6 py-4 ${edition.highlight ? 'text-blue-500' : 'text-[#2e2e2e]'}`}>
                      {edition.name}
                    </td>
                    <td className="px-6 py-4 text-center">{edition.maxDoors}</td>
                    <td className="px-6 py-4 text-center">{edition.maxOperators}</td>
                    <td className="px-6 py-4 text-center">{edition.maxIdentities}</td>
                    <td className="px-6 py-4 text-center">{edition.maxTransactions}</td>
                    <td className="px-6 py-4 text-center">{edition.deployment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cards - Mobile */}
        <div className="lg:hidden space-y-4 mb-8">
          {editions.map((edition, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 ${edition.highlight ? 'border-2 border-blue-500' : ''}`}
            >
              <h3 className={`text-xl mb-4 ${edition.highlight ? 'text-blue-500' : 'text-[#2e2e2e]'}`}>
                {edition.name}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Doors:</span>
                  <span>{edition.maxDoors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Operators:</span>
                  <span>{edition.maxOperators}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Identities:</span>
                  <span>{edition.maxIdentities}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Transactions:</span>
                  <span>{edition.maxTransactions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Deployment:</span>
                  <span>{edition.deployment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Find Recommended Edition
          </button>
        </div>
      </div>
    </section>
  );
}
