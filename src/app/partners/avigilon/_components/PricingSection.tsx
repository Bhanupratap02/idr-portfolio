/** @format */

export function PricingSection() {
  const editions = [
    {
      name: "Professional",
      maxDoors: "50",
      maxOperators: "10",
      maxIdentities: "75,000",
      maxTransactions: "75M",
      deployment: "Appliance",
      highlight: false,
    },
    {
      name: "Enterprise",
      maxDoors: "400",
      maxOperators: "20",
      maxIdentities: "250,000",
      maxTransactions: "150M",
      deployment: "Appliance",
      highlight: false,
    },
    {
      name: "Enterprise Plus",
      maxDoors: "4,000",
      maxOperators: "50",
      maxIdentities: "500,000",
      maxTransactions: "150M",
      deployment: "Appliance",
      highlight: true,
    },
    {
      name: "Virtual",
      maxDoors: "4,000",
      maxOperators: "50",
      maxIdentities: "500,000",
      maxTransactions: "150M",
      deployment: "VMware / Hyper-V",
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-gray-50  py-12  md:py-16  lg:py-20  2xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-26">
        {/* Header */}
        <div className="mb-10 text-center md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  xl:text-5xl 2xl:text-6xl  mb-4 md:mb-6 text-[#2e2e2e]">
            Choose Your Edition
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-light text-gray-600 leading-relaxed">
            Scale from small sites to enterprise campuses — on-prem appliances
            or virtual deployments
          </p>
        </div>

        {/* Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-center text-gray-700 text-base xl:text-lg">
              <thead>
                <tr className="bg-[#2e2e2e] text-white text-sm xl:text-base">
                  <th className="px-6 py-5 text-left font-semibold">Edition</th>
                  <th className="px-6 py-5 font-semibold">Max Doors</th>
                  <th className="px-6 py-5 font-semibold">Max Operators</th>
                  <th className="px-6 py-5 font-semibold">Max Identities</th>
                  <th className="px-6 py-5 font-semibold">Max Transactions</th>
                  <th className="px-6 py-5 font-semibold">Deployment</th>
                </tr>
              </thead>
              <tbody>
                {editions.map((edition, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                      edition.highlight ? "bg-blue-50/70" : ""
                    }`}
                  >
                    <td
                      className={`px-6 py-5 text-left font-medium ${
                        edition.highlight ? "text-blue-600" : "text-[#2e2e2e]"
                      }`}
                    >
                      {edition.name}
                    </td>
                    <td className="px-6 py-5">{edition.maxDoors}</td>
                    <td className="px-6 py-5">{edition.maxOperators}</td>
                    <td className="px-6 py-5">{edition.maxIdentities}</td>
                    <td className="px-6 py-5">{edition.maxTransactions}</td>
                    <td className="px-6 py-5">{edition.deployment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cards - Mobile & Tablet */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {editions.map((edition, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-7 md:p-8 ${
                edition.highlight
                  ? "border-2 border-blue-500"
                  : "border border-gray-100"
              }`}
            >
              <h3
                className={`text-lg sm:text-xl md:text-2xl mb-5 font-semibold ${
                  edition.highlight ? "text-blue-600" : "text-[#2e2e2e]"
                }`}
              >
                {edition.name}
              </h3>
              <div className="space-y-3 text-gray-700 text-sm sm:text-base md:text-lg font-light">
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
        {/* <div className="text-center">
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-orange-500 text-white text-sm md:text-base xl:text-lg  rounded-xl hover:bg-orange-600 transition-colors duration-300 font-medium">
            Find Recommended Edition
          </button>
        </div> */}
      </div>
    </section>
  );
}
