import MeetingCard from "@/components/MeetingCard";
import meetingsData from "@/data/meetings.json";

export default function MeetingsPage() {
  return (
    <div className="min-h-screen">
      {/* כותרת הדף */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary-calm/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1 font-display text-text-highlighted mb-6">
            מפגשים קבועים
          </h1>
          <p className="text-body-large text-text-dark/80 leading-relaxed">
            מפגשי מדיטציה קבועים המתקיימים מדי שבוע. כל מפגש הוא חוויה ייחודית של שקט, תנועה והתבוננות פנימית.
          </p>
        </div>
      </section>

      {/* Meetings Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {meetingsData.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 font-medium text-text-dark mb-6">
            איך להצטרף למפגשים?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-dark">מפגשים קבוצתיים</h3>
              <p className="text-text-light leading-relaxed">
                המפגשים הקבוצתיים פתוחים לכולם. מומלץ להגיע 15 דקות לפני תחילת המפגש.
                לא נדרש ניסיון קודם במדיטציה.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-dark">מפגשים אישיים</h3>
              <p className="text-text-light leading-relaxed">
                למפגשים אישיים נדרש תיאום מראש. ניתן לקבוע פגישת היכרות ללא התחייבות
                כדי לבדוק התאמה.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              צרו קשר לפרטים
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 