import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - חזון */}
      <HeroSection
        title="דרך המדיטציה"
        subtitle="Be Meditation"
        description="Be Meditation נולד מתוך התשוקה להפיץ תרגול עמוק, פשוט ונגיש לכל אדם. מרחב של שקט, תנועה, והתבוננות – מתוך החיים עצמם."
        className="bg-gradient-to-b from-primary/20 to-background"
      />

      {/* About Section - אודות */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-h1 font-medium text-text-dark mb-6">
                מי אנחנו
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  שמי [שם], מלווה תהליכים אישיים וקבוצתיים כבר למעלה מ-15 שנה. 
                  המדיטציה עבורי היא שער לבית הפנימי – חיבור, ריפוי, שחרור.
                </p>
                <p>
                  אנחנו מאמינים שהמדיטציה היא לא רק תרגול, אלא דרך חיים. 
                  דרך שמאפשרת לנו להתחבר לעצמנו, לאחרים ולעולם סביבנו בצורה עמוקה יותר.
                </p>
                <p>
                  במרכז שלנו תמצאו מגוון רחב של מדיטציות פעילות של אושו, 
                  סדנאות וריטריטים המיועדים לכל רמות הניסיון.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-text-light">
                  <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧘‍♀️</span>
                  </div>
                  <p className="text-sm">תמונה של המדריך/ה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-h1 font-medium text-text-dark mb-12">
            הערכים שלנו
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-medium text-text-dark">צמיחה אישית</h3>
              <p className="text-text-light">
                מרחב בטוח לחקירה עצמית והתפתחות אישית דרך המדיטציה והתבוננות.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-text-dark">קהילה תומכת</h3>
              <p className="text-text-light">
                יצירת קשרים אמיתיים עם אנשים הנמצאים במסע דומה של התפתחות רוחנית.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">☮️</span>
              </div>
              <h3 className="text-xl font-medium text-text-dark">שלווה פנימית</h3>
              <p className="text-text-light">
                כלים מעשיים להשגת שקט נפשי ושלווה בתוך הקצב המהיר של החיים המודרניים.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
