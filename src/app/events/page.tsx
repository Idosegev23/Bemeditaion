'use client';

import EventCard from "@/components/EventCard";
import eventsData from "@/data/events.json";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section עם כותרת רגועה ועדינה */}
      <section 
        className="relative py-24 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(/images/herobg.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* אלמנטים ויזואליים עדינים */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168, 218, 220, 0.12) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-48 h-48"
            style={{
              background: 'rgba(139, 90, 60, 0.06)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
            }}
          />
          <div 
            className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full"
            style={{
              background: 'rgba(168, 218, 220, 0.08)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 
            className="font-heebo font-semibold leading-tight mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#9B6A3F'
            }}
          >
            האירועים שלנו
          </h1>
          <p 
            className="font-heebo leading-relaxed max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: '#3C3C3C',
              lineHeight: '1.7'
            }}
          >
            סדנאות, ריטריטים ואירועים המעמיקים את התרגול ויוצרים חוויות טרנספורמטיביות ומהנה.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4" style={{ background: '#F7FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {eventsData.map((event, index) => (
              <div
                key={event.id}
                className="fade-in-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* CSS לאנימציית הכרטיסיות עדינה */}
        <style jsx>{`
          @keyframes fade-in-card {
            0% { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          .fade-in-card { 
            animation: fade-in-card 0.8s ease-out; 
          }
        `}</style>
      </section>

      {/* Call to Action רגוע ועדין */}
      <section 
        className="relative py-20 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.08) 0%, rgba(224, 192, 151, 0.06) 100%)'
        }}
      >
        {/* אפקטים ויזואליים עדינים */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.06) 0%, rgba(224, 192, 151, 0.04) 100%)'
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-48 h-48"
            style={{
              background: 'rgba(139, 90, 60, 0.04)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 
            className="font-heebo font-semibold mb-8"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#9B6A3F'
            }}
          >
            מעוניינים להצטרף?
          </h2>
          <p 
            className="font-heebo leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1.0625rem, 2.5vw, 1.25rem)',
              color: '#3C3C3C',
              lineHeight: '1.7'
            }}
          >
            לפרטים נוספים על האירועים ולהרשמה, אנא צרו איתנו קשר. 
            נשמח לענות על כל שאלה ולעזור לכם למצוא את האירוע המתאים ביותר עבורכם.
          </p>
          <a
            href="/contact"
            className="inline-block font-heebo font-medium text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(155, 106, 63, 0.1)',
              color: '#9B6A3F',
              border: '2px solid rgba(155, 106, 63, 0.2)',
              boxShadow: '0 8px 20px rgba(155, 106, 63, 0.1)'
            }}
          >
            צרו קשר
          </a>
        </div>
      </section>
    </div>
  );
} 