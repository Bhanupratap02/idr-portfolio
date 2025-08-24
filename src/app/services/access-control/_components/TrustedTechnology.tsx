/** @format */

export default function TrustedTechnology() {
  
  return (
    <section className="bg-[#F9FAFB] px-4 lg:px-28 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#2E2E2E] text-4xl font-medium mb-6">
          Built on Trusted Technology
        </h2>
        <p className="text-[#626262] text-lg mb-16 max-w-3xl mx-auto">
          We deploy systems from top manufacturers like Kisi, Brivo, Rhombus,
          Verkada, Vicon, and ZKTeco.
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {["Kisi", "Brivo", "Rhombus", "Verkada", "Vicon", "ZKTeco"].map(
            (partner) => (
              <div
                key={partner}
                className="bg-white rounded-lg shadow-sm p-4 text-center"
              >
                <span className="text-[#626262] text-base font-medium">
                  {partner}
                </span>
              </div>
            )
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Door Control */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-7 h-6 bg-[#FFD700] rounded flex items-center justify-center">
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                    <path
                      d="M15.5 1.49979C15.5 1.03573 15.2891 0.599789 14.9234 0.318539C14.5578 0.0372894 14.0844 -0.0658357 13.6344 0.0466643L5.20156 2.15604C4.20313 2.40448 3.5 3.30448 3.5 4.33573V20.9998H2C1.17031 20.9998 0.5 21.6701 0.5 22.4998C0.5 23.3295 1.17031 23.9998 2 23.9998H5H14H15.5V22.4998V1.49979Z"
                      fill="#FFD700"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-lg font-medium mb-3">
                Door, Gate, Turnstile,
                <br />
                Elevator Control
              </h3>
              <p className="text-[#626262] text-base">
                Control all entry points from a<br />
                single interface.
              </p>
            </div>

            {/* Multiple Credentials */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-7 h-6 bg-[#FFD700] rounded flex items-center justify-center">
                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
                    <path
                      d="M0.5 4.5H27.5C27.5 2.84531 26.1547 1.5 24.5 1.5H3.5C1.84531 1.5 0.5 2.84531 0.5 4.5ZM0.5 6V19.5C0.5 21.1547 1.84531 22.5 3.5 22.5H24.5C26.1547 22.5 27.5 21.1547 27.5 19.5V6H0.5Z"
                      fill="#FFD700"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-lg font-medium mb-3">
                Multiple Credential Types
              </h3>
              <p className="text-[#626262] text-base">
                Card, Fob, Mobile, Biometric
                <br />
                credentials.
              </p>
            </div>

            {/* Remote Management */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-6 h-6 bg-[#FFD700] rounded flex items-center justify-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                      d="M17 12C17 13.0406 16.9438 14.0437 16.8453 15H8.15469C8.05156 14.0437 8 13.0406 8 12C8 10.9594 8.05625 9.95625 8.15469 9H16.8453C16.9484 9.95625 17 10.9594 17 12Z"
                      fill="#FFD700"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-lg font-medium mb-3">
                Remote Management
              </h3>
              <p className="text-[#626262] text-base">
                Control your system from
                <br />
                anywhere, anytime.
              </p>
            </div>

            {/* Time & Role-based */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-6 h-6 bg-[#FFD700] rounded flex items-center justify-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path
                      d="M12.5 0C15.6826 0 18.7348 1.26428 20.9853 3.51472C23.2357 5.76516 24.5 8.8174 24.5 12C24.5 15.1826 23.2357 18.2348 20.9853 20.4853C18.7348 22.7357 15.6826 24 12.5 24C9.3174 24 6.26516 22.7357 4.01472 20.4853C1.76428 18.2348 0.5 15.1826 0.5 12C0.5 8.8174 1.76428 5.76516 4.01472 3.51472C6.26516 1.26428 9.3174 0 12.5 0Z"
                      fill="#FFD700"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-lg font-medium mb-3">
                Time & Role-based
                <br />
                Permissions
              </h3>
              <p className="text-[#626262] text-base">
                Customize access by person,
                <br />
                time, and location.
              </p>
            </div>

            {/* Real-time Alerts */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
              <div className="flex justify-center mb-4">
                <div className="w-5 h-6 bg-[#FFD700] rounded flex items-center justify-center">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
                    <path
                      d="M10.9991 0C10.1694 0 9.4991 0.670312 9.4991 1.5V2.4C6.07723 3.09375 3.4991 6.12187 3.4991 9.75V10.6313C3.4991 12.8344 2.68817 14.9625 1.22567 16.6125L0.87879 17.0016C0.48504 17.4422 0.39129 18.075 0.630353 18.6141C0.869415 19.1531 1.40848 19.5 1.9991 19.5H19.9991C20.5897 19.5 21.1241 19.1531 21.3679 18.6141C21.6116 18.075 21.5132 17.4422 21.1194 17.0016L20.7725 16.6125C19.31 14.9625 18.4991 12.8391 18.4991 10.6313V9.75C18.4991 6.12187 15.921 3.09375 12.4991 2.4V1.5C12.4991 0.670312 11.8288 0 10.9991 0Z"
                      fill="#FFD700"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#2E2E2E] text-lg font-medium mb-3">
                Real-time Alerts & Logs
              </h3>
              <p className="text-[#626262] text-base">
                Stay informed with instant notifications and detailed access
                logs.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f9d9baacef0dc4b8e33937191d5929b7609f35cb?width=1168"
              alt="Technology Interface"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
