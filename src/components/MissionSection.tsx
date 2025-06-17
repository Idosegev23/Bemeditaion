import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section 
      className="relative py-16 lg:py-20 md:py-16 sm:py-12 overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.06) 0%, rgba(224, 192, 151, 0.08) 50%, rgba(168, 218, 220, 0.04) 100%)',
      }}
    >
      {/* אלמנטים דקורטיביים ברקע */}
      <div 
        className="absolute top-1/4 -right-20 w-64 h-64 rounded-full z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(168, 218, 220, 0.15) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-1/4 -left-16 w-48 h-48 z-0 opacity-20"
        style={{
          background: 'rgba(139, 90, 60, 0.08)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-6 sm:px-4">
        <div className="text-center">
          {/* כותרת */}
          <h2 
            className="font-heebo font-semibold mb-12 md:mb-10 sm:mb-8"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 36px)',
              color: '#9B6A3F',
              lineHeight: '1.3'
            }}
          >
            המסע שלנו
          </h2>
          
          {/* תוכן הטקסט */}
          <div 
            className="font-heebo text-center space-y-6 md:space-y-5 sm:space-y-4 max-w-4xl mx-auto"
            style={{
              fontSize: 'clamp(1.0625rem, 2.5vw, 19px)',
              color: '#3C3C3C',
              lineHeight: '1.8'
            }}
          >
            <p>
              <strong style={{ color: '#9B6A3F', fontWeight: '600' }}>Be Meditation</strong> קם מתוך רצון להנגיש את תרגול המדיטציה לאנשים בחיי היומיום.
            </p>
            
            <p>
              אנחנו מאמינים שמדיטציה לא צריכה לקרות רק בשקט ובבידוד – אלא יכולה להיות חלק טבעי מהחיים, גם בתוך העשייה, הקשר והשגרה.
            </p>
            
            <p>
              המטרה שלנו היא לאפשר לכל אחד ואחת להכיר ולתרגל מגוון סוגים של מדיטציות – כדי שכל אחד יוכל למצוא את הדרך שמתאימה לו באמת.
            </p>
            
            <p>
              בנוסף, אנחנו יוצרים קהילה שמתפתחת ולומדת יחד – דרך סדנאות, ריטריטים, מפגשים שבועיים ותמיכה מתמשכת.
            </p>
            
            <p>
              אנחנו כאן כדי לאפשר מרחב שתומך בצמיחה ובהתבוננות – פשוט ובגובה העיניים.
            </p>
            
            <p 
              className="font-medium text-lg md:text-xl"
              style={{ 
                color: '#9B6A3F',
                fontSize: 'clamp(1.125rem, 2.8vw, 22px)',
                marginTop: '2rem'
              }}
            >
              מוזמנים להצטרף.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 