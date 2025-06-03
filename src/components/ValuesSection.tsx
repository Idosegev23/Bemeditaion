import React from 'react';
import BreathingElement from './BreathingElement';

interface Value {
  name: string;
  description: string;
}

interface ValuesSectionProps {
  title?: string;
  subtitle?: string;
  values?: Value[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({
  title = "הערכים שלנו",
  subtitle = "הדרך שבה אנו פועלים נובעת מערכים שמחוברים ללב, לחיים, ולאנשים שמגיעים לפגוש את עצמם.",
  values
}) => {
  const defaultValues: Value[] = [
    {
      name: "נוכחות",
      description: "כל תרגול מתחיל ברגע הזה. בלי למהר, בלי לשפוט."
    },
    {
      name: "פשטות", 
      description: "המדיטציה איננה דבר מורכב – היא חלק טבעי מאיתנו."
    },
    {
      name: "אותנטיות",
      description: "אנחנו מאמינים בכנות, בביטוי אישי, ובמפגש אמיתי."
    },
    {
      name: "קהילה",
      description: "התהליך האישי נבנה במרחב תומך, מקבל, ללא תחרות."
    },
    {
      name: "תנועה ונשימה",
      description: "הגוף הוא שער. התנועה – היא הדרך להרגיש."
    }
  ];

  const finalValues = values || defaultValues;

  return (
    <section className="relative py-20 lg:py-24 md:py-20 sm:py-16 overflow-hidden bg-soft-green">
      {/* אלמנטים נשימתיים ברקע */}
      <div className="absolute top-20 right-10 opacity-60">
        <BreathingElement variant="lotus" size="md" color="natural-brown" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-40">
        <BreathingElement variant="circle" size="sm" color="primary-calm" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-30 hidden lg:block">
        <BreathingElement variant="wave" size="lg" color="text-highlighted" />
      </div>

      <div className="relative z-10 container-custom">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-16 sm:mb-12 fade-in">
          <h2 className="font-display text-h1 text-text-highlighted mb-6 md:mb-4 relative">
            {title}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-16 bg-text-highlighted rounded"></span>
          </h2>
          <p className="text-body-large text-text-dark max-w-3xl mx-auto opacity-90">
            {subtitle}
          </p>
        </div>

        {/* Values Grid - עיצוב מחדש */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {finalValues.map((value, index) => (
            <div 
              key={index}
              className={`card group relative overflow-hidden ${
                index === 2 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              } fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* אלמנט נשימתי קטן בפינה */}
              <div className="absolute top-4 left-4 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
                <BreathingElement 
                  variant={index % 3 === 0 ? "lotus" : index % 3 === 1 ? "circle" : "wave"} 
                  size="xs" 
                  color="primary-calm" 
                />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="font-display text-xl lg:text-2xl font-medium text-text-highlighted mb-4 group-hover:text-text-dark transition-colors duration-300">
                  {value.name}
                </h3>
                <p className="text-text-dark leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {value.description}
                </p>
              </div>

              {/* גרדיאנט עדין בהובר */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-calm/5 to-natural-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* הודעה מחברת עם עיצוב חדש */}
        <div className="text-center fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block relative">
            {/* אלמנט נשימתי ברקע ההודעה */}
            <div className="absolute -top-8 -right-8 opacity-30">
              <BreathingElement variant="lotus" size="sm" color="natural-brown" />
            </div>
            
            <div className="bg-white-panoramic border border-border-light rounded-2xl px-8 py-6 shadow-minimal relative overflow-hidden">
              <p className="font-display text-lg text-text-highlighted italic leading-relaxed">
                ערכים אלה מנחים כל מפגש, כל תרגול, וכל רגע של חיבור אמיתי
              </p>
              
              {/* גרדיאנט עדין ברקע */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-calm/3 via-transparent to-natural-brown/3 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 