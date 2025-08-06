import youtubeIcon from "@/assets/aboutus/Vector.png";
import linkedinIcon from "@/assets/aboutus/Vector (1).png";
import facebookIcon from "@/assets/aboutus/Vector (2).png";
import Founder from "@/assets/aboutus/founder.png"
import Image from "next/image";
import Link from "next/link";
export default function FounderMessage() {
    const socialLinks = [
    {
      href: "https://www.youtube.com/@Idrtechnologysolutions",
      icon: youtubeIcon,
      alt: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/idr-technology-solutions",
      icon: linkedinIcon,
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100057472869428",
      icon: facebookIcon,
      alt: "Facebook",
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Founder Photo */}
          <div className="w-full lg:w-1/3">
         
             <Image
                    src={Founder}
                   alt="Michael LaPunzina Head Shot"
              className="w-full max-w-lg h-auto rounded-lg object-cover"
                  />
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl text-idr-text-light">Founder&apos;s Message</p>
                <h2 className="text-4xl font-medium text-idr-text-light">Michael LaPunzina</h2>
              </div>
              
              <div className="text-idr-text-light leading-relaxed space-y-4">
                <p>
                  I started IDR Technology Solutions with $600, a credit card, and a belief that this industry needed something better — cleaner work, honest relationships, and real follow-through.
                </p>
                <p>
                  For eight years, I worked full-time in accounting while building IDR from the ground up. During that time, I earned my CCNA, became a licensed NYS Alarm Installer, and studied computer science at Baruch&apos;s MBA program. Since then, we&apos;ve grown into a trusted technology partner with deep expertise in security, networking, and system design — backed by top-tier manufacturers and a rock-solid team.
                </p>
                <p>
                  Our success isn&apos;t just about technical skill — it&apos;s about attention to detail and the quality of our relationships. I believe every client should feel like a friend. Compatibility matters, and trust is everything.
                </p>
                <p>
                  Today, IDR is powered by a dedicated support team, a full-service division, and a growing regional footprint — with a reputation for doing things the right way, from the first site walk to the final handoff and beyond.
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-5">
             {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 2xl:w-10 2xl:h-10 rounded flex items-center justify-center transition cursor-pointer"
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={48}
                    height={32}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
