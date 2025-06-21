import dynamic from "next/dynamic";
import HomeSection from "@/app/sections/HomeSection";

// Lazy load seksi yang berada di bawah "lipatan" pertama
const AboutSection = dynamic(() => import("@/app/sections/AboutSection"));
const SkillsSection = dynamic(() => import("@/app/sections/SkillsSection"));
const PortfolioSection = dynamic(
  () => import("@/app/sections/PortfolioSection")
);
const EducationCertificatesSection = dynamic(
  () => import("@/app/sections/EducationCertificatesSection")
);
const ContactSection = dynamic(() => import("@/app/sections/ContactSection"));

export default function Home() {
  return (
    <div className="relative z-0">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <EducationCertificatesSection />
      <ContactSection />
    </div>
  );
}
