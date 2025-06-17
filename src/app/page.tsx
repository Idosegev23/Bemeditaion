import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import MinimalQuote from "@/components/MinimalQuote";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section מדיטטיבי עם תמונת רקע */}
      <HeroSection />

      {/* Mission Section - המסע שלנו */}
      <MissionSection />

      {/* About Section מינימליסטי */}
      <AboutSection />

      {/* Values Section החדש עם עיצוב משופר */}
      <ValuesSection />

      {/* ציטוט מעורר השראה */}
      <section className="relative">
        <MinimalQuote />
      </section>
    </div>
  );
}
