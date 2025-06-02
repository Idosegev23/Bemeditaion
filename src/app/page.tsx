import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";

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

      {/* Call to Action Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center fade-in">
            <h2 className="text-h1 font-display text-text-highlighted mb-6">
              מוכנים להתחיל את המסע?
            </h2>
            <p className="text-body-large text-text-dark/80 mb-8 max-w-lg mx-auto">
              הצטרפו אלינו למדיטציה הקרובה וחוו את כוח השקט והנוכחות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/events" className="btn-primary">
                צפיה באירועים
              </a>
              <a href="/contact" className="btn-secondary">
                צרו קשר
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
