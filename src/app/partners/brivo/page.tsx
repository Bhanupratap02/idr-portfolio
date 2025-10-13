// BrivoLanding.jsx
import {
  BadgeCheck,
  Wallet,
  PlayCircle,
  Key,
  BatteryCharging,
  Zap,
  Mail,
  DownloadCloud,
  PlusSquare,
  Send,
  ShieldCheck,
  Smartphone,
  Lock,
  CheckCircle,
  Building,
  Users,
  Eye,
  AlertTriangle,
  Server,
  Star,
  Briefcase,
  Calendar,
} from "lucide-react";

import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import ActivationSection from "./_components/ActivationSection";
import KeyAdvantagesSection from "./_components/KeyAdvantagesSection";
import VisitorManagementSection from "./_components/VisitorManagementSection";
import SecuritySuiteSection from "./_components/SecuritySuiteSection";
import CallToActionSection from "./_components/CallToActionSection";
import ImagesSection from "./_components/ImagesSection";














export default function Brivo() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <ActivationSection />
      <KeyAdvantagesSection />

      <VisitorManagementSection />
      <ImagesSection />
      <SecuritySuiteSection />
      <CallToActionSection />
    </div>
  );
}
