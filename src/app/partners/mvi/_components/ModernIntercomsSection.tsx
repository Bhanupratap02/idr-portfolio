/** @format */

export default function ModernIntercomsSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-medium text-center text-gray-800 mb-16">
          Modern Intercoms for Every Building Type
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you manage multi-tenant residential towers, mixed-use
              campuses, or commercial buildings, MVI Systems provides flexible
              intercom solutions that scale with your needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our IP-based infrastructure allows for seamless integration with
              existing systems while providing the reliability and security
              modern properties demand.
            </p>
            <div className="bg-gray-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-800 font-medium text-base leading-relaxed">
                Deployed in high-rise buildings, affordable housing, and
                mixed-use sites across NY, NJ, and FL.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e18250530e9031af56f447bfaf850a19a804805c?width=1200"
                alt="Modern building with MVI intercom system"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/cb9ef14c4054906dddd1c2c120116ca9159f65bd?width=584"
                alt="Residential building entrance"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6620a6355cf1233a4ab92de1270623b39fccac95?width=584"
                alt="Commercial building lobby"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
