import EventCard from "@/components/EventCard";
import eventsData from "@/data/events.json";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* כותרת הדף */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary-calm/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1 font-display text-text-highlighted mb-6">
            אירועים וסדנאות
          </h1>
          <p className="text-body-large text-text-dark/80 leading-relaxed">
            סדנאות מיוחדות, ריטריטים ואירועים המעמיקים את התרגול ויוצרים חוויות טרנספורמטיביות.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 font-medium text-text-dark mb-6">
            מעוניינים להצטרף?
          </h2>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            לפרטים נוספים על האירועים ולהרשמה, אנא צרו איתנו קשר. 
            נשמח לענות על כל שאלה ולעזור לכם למצוא את האירוע המתאים ביותר עבורכם.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            צרו קשר
          </a>
        </div>
      </section>
    </div>
  );
} 