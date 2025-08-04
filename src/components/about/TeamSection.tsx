export default function TeamSection() {
  const teamMembers = [
    {
      name: "Anthony Paduano",
      title: "Director of Operations",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f8dc506627faf84f27edc24494e4b8a7e6d83f92?width=436"
    },
    {
      name: "Alfonso Douriet",
      title: "Client Success & Sales Coordinator",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/99b5e555dc1104c67f03ca76865bfb5461a2dfb6?width=436"
    },
    {
      name: "Klaus Isufaj",
      title: "Project Manager, Security & Infrastructure",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/60a9dc18587f1c8d6502b4854903ea45cfdc49b1?width=436"
    },
    {
      name: "Sunny Kwong",
      title: "Technical Support Lead",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/a4ab15d7b092b65e90e09ec08adcae877eaeb8e0?width=436"
    },
    {
      name: "Andrew Berkowitz",
      title: "IT & Security Solutions Sales Engineer",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/36961b61ffc0d1ffd39f4646cfbfa4586bf5cc13?width=436"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-100 mb-6 sm:mb-8 shadow-sm">
            <span className="text-idr-text-light text-2xl font-medium">Our Team</span>
          </div>
          
          <h2 className="text-6xl font-medium text-idr-text-light mb-8 leading-tight">Meet Expert Team</h2>
          
          <p className="text-2xl text-idr-text-light max-w-5xl mx-auto leading-relaxed">
            At IDR, our team is the driving force behind every innovative breakthrough. A blend of strategic minds, tech experts, and creative thinkers — all aligned to build bold solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              {/* Profile Image with Circular Border */}
              <div className="relative mb-3">
                <div className="w-64 h-64 mx-auto relative">
                  {/* SVG Border Background */}
                  <svg className="absolute top-30  inset-0 w-full h-full" viewBox="0 0 251 253" fill="none">
                    <path 
                      d="M247.338 0.600876C249.339 0.600876 250.966 2.22351 250.91 4.2238C250.473 19.6141 247.257 34.8056 241.409 49.0489C235.103 64.4089 225.861 78.3652 214.209 90.1212C202.557 101.877 188.724 111.203 173.5 117.565C158.276 123.927 141.959 127.202 125.481 127.202C109.002 127.202 92.6852 123.927 77.4612 117.565C62.2372 111.203 48.4043 101.877 36.7524 90.1212C25.1004 78.3652 15.8576 64.4088 9.55163 49.0489C3.70407 34.8056 0.488071 19.6141 0.0513871 4.2238C-0.00536914 2.22351 1.62221 0.600868 3.6233 0.600868C5.6244 0.600868 7.24091 2.22356 7.30114 4.22374C7.73569 18.6537 10.7633 32.8948 16.2466 46.251C22.1884 60.7239 30.8975 73.8743 41.8765 84.9513C52.8555 96.0284 65.8895 104.815 80.2344 110.81C94.5791 116.805 109.954 119.89 125.481 119.89C141.007 119.89 156.382 116.805 170.727 110.81C185.071 104.815 198.105 96.0284 209.085 84.9513C220.064 73.8743 228.773 60.7239 234.714 46.251C240.198 32.8948 243.225 18.6537 243.66 4.22374C243.72 2.22356 245.337 0.600876 247.338 0.600876Z" 
                      fill="#D9D9D9"
                    />
                  </svg>
                  
                  {/* Profile Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Member Info */}
              <div className="space-y-1">
                <h3 className="text-3xl font-medium text-idr-text-light leading-tight">
                  {member.name}
                </h3>
                <p className="text-base font-medium text-idr-text-light leading-relaxed">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
