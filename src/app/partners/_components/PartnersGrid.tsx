/** @format */
"use client";
import PartnerCard from "./PartnerCard";
const alphatouch = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Falphatouch.png";
const akuvox = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fakuvox.png";
const butterflymx = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fbutterflymx.png";
const cisco = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fcisco.png";
const eagleeye = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Feagleeye.png";
const kisi = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fkisi.png";
const lencore = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Flencore.png";
const mvi = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fmvi.png";
const rhombus = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Frhombus.png";
const speco = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fspeco.png";
const teleportivity = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fteleportivity.png";
const verkada = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fverkada.png";
const vicon = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fvicon.png";
const vivotek = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fvivotek.png";
const zkteco = "https://idr-portfolio-storage.s3.amazonaws.com/assets%2Fpartners%2Flogos%2Fzkteco.png";
import Image from "next/image";

const partnersData = [
  {
    id: "alphatouch",
    logo: (
      <Image
        src={alphatouch}
        alt="Alphatouch"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Alphatouch",
    description:
      "AlphaTouch offers sleek, intuitive IP video intercom systems built for multi-family, commercial, and mixed-use properties. But what really sets them apart?........",
    url: "/partners/alphatouch",
  },
  {
    id: "akuvox",
    logo: (
      <Image
        src={akuvox}
        alt="Akuvox"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Akuvox",
    description:
      "Akuvox is a global leader in SIP-based intercom and access control solutions, offering beautifully designed devices powered by advanced features like facial recognition, QR entry, voice.......",
    url: "/partners/akuvox",
  },
  {
    id: "butterflymx",
    logo: (
      <Image
        src={butterflymx}
        alt="ButterflyMX"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "ButterflyMX",
    description:
      "ButterflyMX is the leading cloud-based video intercom system for apartment buildings, gated communities, and commercial properties. It offers secure, app-based entry for residents, staff.....",
    url: "/partners/butterflymx",
  },
  {
    id: "cisco",
    logo: (
      <Image
        src={cisco}
        alt="Cisco / Meraki"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Cisco / Meraki",
    description:
      "At IDR, we're proud to be your trusted partner for Cisco and Meraki systems — delivering powerful cloud-managed infrastructure and reliable hardware you can count on.........",
    url: "/partners/cisco-meraki",
  },
  {
    id: "eagle-eye",
    logo: (
      <Image
        src={eagleeye}
        alt="Eagle Eye"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Eagle Eye",
    description:
      "At IDR, we love Eagle Eye Networks because they make video surveillance smarter without locking you into proprietary hardware. Their system is truly camera agnostic — meaning......",
    url: "/partners/eagle-eye",
  },
  {
    id: "kisi",
    logo: <div className="text-2xl font-bold text-gray-900">KISI</div>,
    title: "Kisi",
    description:
      "IDR is a Platinum Kisi Partner and one of Kisi's preferred installation partners in New York State. Trusted by Kisi to handle complex and high-value deployments, we've earned our........",
    url: "/partners/kisi",
  },
  {
    id: "lencore",
    logo: (
      <Image
        src={lencore}
        alt="Lencore"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Lencore",
    description:
      "At IDR Technology Solutions, we specialize in deploying Lencore's cutting-edge sound masking and audio solutions for offices, healthcare, education, and secure government.......",
    url: "/partners/lencore",
  },
  {
    id: "mvi",
    logo: (
      <Image src={mvi} alt="MVI" width={200} height={80} className="w-full h-full object-contain" />
    ),
    title: "MVI",
    description:
      "At IDR Technology Solutions, we specialize in deploying Lencore's cutting-edge sound masking and audio solutions for offices, healthcare, education, and secure government.......",
    url: "/partners/mvi",
  },
  {
    id: "rhombus",
    logo: (
      <Image
        src={rhombus}
        alt="rhombus"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Rhombus",
    description:
      "Rhombus provides smarter physical security on a truly open cloud-managed platform to help you streamline operations and maximize safety at scale.......",
    url: "/partners/rhombus",
  },
  {
    id: "speco",
    logo: (
      <Image
        src={speco}
        alt="Speco Technologies"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Speco Technologies",
    description:
      "Speco Technologies is committed to improving surveillance, access control, and audio technology through innovation, exceptional customer service, and high-quality products.......",
    url: "/partners/speco-technologies",
  },
  {
    id: "teleportivity",
    logo: (
      <Image
        src={teleportivity}
        alt="teleportivity"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Teleportivity",
    description:
      "Teleportivity lets you modernize your building's entry experience with cloud-connected touchscreens, QR codes, live video assistance, and smart integrations — all without needing.......",
    url: "/partners/teleportivity",
  },
  {
    id: "verkada",
    logo: (
      <Image
        src={verkada}
        alt="Verkada"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Verkada",
    description:
      "Verkada is changing the game in physical security with a cloud-first approach that combines video surveillance, access control, environmental sensors, intercoms.......",
    url: "/partners/verkada",
  },
  {
    id: "vicon",
    logo: (
      <Image src={vicon} alt="Vicon" width={200} height={80} className="w-full h-full object-contain" />
    ),
    title: "Vicon",
    description:
      "IDR is a certified installer of both Vicon and VAX, delivering fully integrated video surveillance and access control systems for commercial buildings, schools, and residential.......",
    url: "/partners/vicon",
  },
  {
    id: "vivotek",
    logo: (
      <Image
        src={vivotek}
        alt="Vivotek / Vortex"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "Vivotek / Vortex",
    description:
      "Sustainability is all about keeping an eye on our world. At VIVOTEK, it means continuous attention and care. By paying attention all the time, we can detect problems early and activate.......",
    url: "/partners/vivotek-vortex",
  },
  {
    id: "zkteco",
    logo: (
      <Image
        src={zkteco}
        alt="ZKTeco"
        width={200}
        height={80}
        className="w-full h-full object-contain"
      />
    ),
    title: "ZKTeco",
    description:
      "ZKTeco delivers high-performance access control systems with an emphasis on biometric security, mobile access, and versatile reader configurations. From standalone........",
    url: "/partners/zk-teco",
  },
];

export default function PartnersGrid() {
  return (
    <section className="py-12 sm:py-14 md:py-16 xl:py-20 2xl:py-22 3xl:py-26 bg-white">
      <div className="max-w-7xl xl:max-w-[90rem] 2xl:max-w-[120rem] 3xl:max-w-[125rem] mx-auto px-4 sm:px-6 md:px-16 lg:px-12 xl:px-20 2xl:px-28 ">
        <div className="text-center mb-8 sm:mb-10 md:mb-14 xl:mb-16 2xl:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 leading-tight">
            Our best tech is for you
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-12 xl:gap-14 2xl:gap-16">
          {partnersData.map((partner) => (
            <PartnerCard
              key={partner.id}
              logo={partner.logo}
              title={partner.title}
              description={partner.description}
              url={partner.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
