import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import MinimalQuote from "@/components/MinimalQuote";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section מדיטטיבי עם תמונת רקע */}
      <HeroSection
        title="להקשיב לרגע. לנשום. להיות."
      />

      {/* About Section מינימליסטי */}
      <AboutSection 
        name="[השם שלך]"
        text="קוראים לי [השם שלך]. אני מלווה תהליכים אישיים וקבוצתיים כבר שנים, מתוך סקרנות עמוקה למה שקורה כשאנחנו פשוט עוצרים.

Be Meditation היא הדרך שלי לחלוק מרחבים של הקשבה, תנועה, ומדיטציה – שמחזירים אותנו אל עצמנו.

אני לא מחפש להוביל, אלא פשוט להזמין את מי שרוצה להיפגש, להיות, ולנשום."
        imageSrc="/images/jivani.jpeg"
        showPlaceholder={false}
      />

      {/* Values Section החדש עם עיצוב משופר */}
      <ValuesSection />

      {/* ציטוט מעורר השראה */}
      <section className="relative">
        <MinimalQuote />
      </section>
    </div>
  );
}
