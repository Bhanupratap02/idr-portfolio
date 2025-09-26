/** @format */
"use client";
import PartnerCard from "./PartnerCard";
import alphatouch from "@/assets/partners/logos/alphatouch.png";
import akuvox from "@/assets/partners/logos/akuvox.png";
import butterflymx from "@/assets/partners/logos/butterflymx.png";
import cisco from "@/assets/partners/logos/cisco.png";
import eagleeye from "@/assets/partners/logos/eagleeye.png";
import kisi from "@/assets/partners/logos/kisi.png";
import lencore from "@/assets/partners/logos/lencore.png";
import mvi from "@/assets/partners/logos/mvi.png";
import rhombus from "@/assets/partners/logos/rhombus.png";
import speco from "@/assets/partners/logos/speco.png";
import teleportivity from "@/assets/partners/logos/teleportivity.png";
import verkada from "@/assets/partners/logos/verkada.png";
import vicon from "@/assets/partners/logos/vicon.png";
import vivotek from "@/assets/partners/logos/vivotek.png";
import zkteco from "@/assets/partners/logos/zkteco.png";
import Image from "next/image";

const partnersData = [
  {
    id: "alphatouch",
    logo: (
      <Image
        src={alphatouch}
        alt="Alphatouch"
        className="w-full h-full object-contain"
      />
    ),
    title: "Alphatouch",
    description:
      "AlphaTouch offers sleek, intuitive IP video intercom systems built for multi-family, commercial, and mixed-use properties. But what really sets them apart?........",
  },
  {
    id: "akuvox",
    logo: (
      <Image
        src={akuvox}
        alt="Akuvox"
        className="w-full h-full object-contain"
      />
    ),
    title: "Akuvox",
    description:
      "Akuvox is a global leader in SIP-based intercom and access control solutions, offering beautifully designed devices powered by advanced features like facial recognition, QR entry, voice.......",
  },
  {
    id: "butterflymx",
    logo: (
      <Image
        src={butterflymx}
        alt="ButterflyMX"
        className="w-full h-full object-contain"
      />
    ),
    title: "ButterflyMX",
    description:
      "ButterflyMX is the leading cloud-based video intercom system for apartment buildings, gated communities, and commercial properties. It offers secure, app-based entry for residents, staff.....",
  },
  {
    id: "cisco",
    logo: (
      <Image
        src={cisco}
        alt="Cisco / Meraki"
        className="w-full h-full object-contain"
      />
    ),
    title: "Cisco / Meraki",
    description:
      "At IDR, we're proud to be your trusted partner for Cisco and Meraki systems — delivering powerful cloud-managed infrastructure and reliable hardware you can count on.........",
  },
  {
    id: "eagle-eye",
    logo: (
      <Image
        src={eagleeye}
        alt="Eagle Eye"
        className="w-full h-full object-contain"
      />
    ),
    title: "Eagle Eye",
    description:
      "At IDR, we love Eagle Eye Networks because they make video surveillance smarter without locking you into proprietary hardware. Their system is truly camera agnostic — meaning......",
  },
  {
    id: "kisi",
    logo: <div className="text-2xl font-bold text-gray-900">KISI</div>,
    title: "Kisi",
    description:
      "IDR is a Platinum Kisi Partner and one of Kisi's preferred installation partners in New York State. Trusted by Kisi to handle complex and high-value deployments, we've earned our........",
  },
  {
    id: "lencore",
    logo: (
      <Image
        src={lencore}
        alt="Lencore"
        className="w-full h-full object-contain"
      />
    ),
    title: "Lencore",
    description:
      "At IDR Technology Solutions, we specialize in deploying Lencore's cutting-edge sound masking and audio solutions for offices, healthcare, education, and secure government.......",
  },
  {
    id: "mvi",
    logo: (
      <Image src={mvi} alt="MVI" className="w-full h-full object-contain" />
    ),
    title: "MVI",
    description:
      "At IDR Technology Solutions, we specialize in deploying Lencore's cutting-edge sound masking and audio solutions for offices, healthcare, education, and secure government.......",
  },
  {
    id: "rhombus",
    logo: (
      <Image
        src={rhombus}
        alt="rhombus"
        className="w-full h-full object-contain"
      />
    ),
    title: "Rhombus",
    description:
      "Rhombus provides smarter physical security on a truly open cloud-managed platform to help you streamline operations and maximize safety at scale.......",
  },
  {
    id: "speco",
    logo: (
      <Image
        src={speco}
        alt="Speco Technologies"
        className="w-full h-full object-contain"
      />
    ),
    title: "Speco Technologies",
    description:
      "Speco Technologies is committed to improving surveillance, access control, and audio technology through innovation, exceptional customer service, and high-quality products.......",
  },
  {
    id: "teleportivity",
    logo: (
      <Image
        src={teleportivity}
        alt="teleportivity"
        className="w-full h-full object-contain"
      />
    ),
    title: "Teleportivity",
    description:
      "Teleportivity lets you modernize your building's entry experience with cloud-connected touchscreens, QR codes, live video assistance, and smart integrations — all without needing.......",
  },
  {
    id: "verkada",
    logo: <Image src={verkada} alt="Verkada" className="w-full h-full object-contain" />,
    title: "Verkada",
    description:
      "Verkada is changing the game in physical security with a cloud-first approach that combines video surveillance, access control, environmental sensors, intercoms.......",
  },
  {
    id: "vicon",
    logo: <Image src={vicon} alt="Vicon" className="w-full h-full object-contain" />,
    title: "Vicon",
    description:
      "IDR is a certified installer of both Vicon and VAX, delivering fully integrated video surveillance and access control systems for commercial buildings, schools, and residential.......",
  },
  {
    id: "vivotek",
    logo: (
      <Image
        src={vivotek}
        alt="Vivotek / Vortex"
        className="w-full h-full object-contain"
      />
    ),
    title: "Vivotek / Vortex",
    description:
      "Sustainability is all about keeping an eye on our world. At VIVOTEK, it means continuous attention and care. By paying attention all the time, we can detect problems early and activate.......",
  },
  {
    id: "zkteco",
    logo: <Image src={zkteco} alt="ZKTeco" className="w-full h-full object-contain" />,
    title: "ZKTeco",
    description:
      "ZKTeco delivers high-performance access control systems with an emphasis on biometric security, mobile access, and versatile reader configurations. From standalone........",
  },
];

export default function PartnersGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[56px]">
            Our best tech is for you
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {partnersData.map((partner) => (
            <div key={partner.id}>
              <PartnerCard
                logo={partner.logo}
                title={partner.title}
                description={partner.description}
                onReadMore={() =>
                  console.log(`Read more about ${partner.title}`)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
