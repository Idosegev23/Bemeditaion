import React from 'react';

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
    <section 
      className="relative py-20 lg:py-20 md:py-16 sm:py-12 overflow-hidden"
      style={{ 
        background: '#F7FAFC',
      }}
    >
      {/* אלמנטים דקורטיביים ברקע */}
      <div 
        className="absolute top-1/4 -right-10 w-64 h-64 rounded-full z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.06) 0%, rgba(224, 192, 151, 0.04) 100%)'
        }}
      />
      <div 
        className="absolute bottom-1/4 -left-8 w-52 h-52 z-0"
        style={{
          background: 'rgba(139, 90, 60, 0.03)',
          borderRadius: '70% 30% 40% 60% / 50% 70% 30% 50%'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-6 sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-12 sm:mb-10 fade-in">
          <h2 
            className="font-heebo relative mb-6 md:mb-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 44px)',
              fontWeight: 600,
              color: '#9B6A3F',
              lineHeight: '1.2'
            }}
          >
            {title}
            <span 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-16 rounded"
              style={{ backgroundColor: '#9B6A3F' }}
            />
          </h2>
          <p 
            className="font-heebo max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1.0625rem, 2.5vw, 20px)',
              color: '#3C3C3C',
              lineHeight: '1.7'
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Values Layout - סידור אורגני ורך */}
        <div className="relative">
          {/* שורה ראשונה - 2 כרטיסים מרוחקים */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-16 md:gap-12 sm:gap-8 mb-12 lg:mb-16">
            <div className="lg:w-80 md:w-full sm:w-full mb-8 lg:mb-0">
              <div
                className="group bg-white rounded-3xl p-8 md:p-6 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in stagger-1 h-full"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(168, 218, 220, 0.2)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full mb-6 mx-auto flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.15) 0%, rgba(224, 192, 151, 0.1) 100%)'
                  }}
                >
                  <div 
                    className="w-6 h-6 rounded-full"
                    style={{ background: 'rgba(155, 106, 63, 0.3)' }}
                  />
                </div>
                <h3 
                  className="font-heebo text-center mb-4 md:mb-3"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#9B6A3F',
                    lineHeight: '1.3'
                  }}
                >
                  {finalValues[0]?.name}
                </h3>
                <p 
                  className="font-heebo text-center"
                  style={{
                    fontSize: 'clamp(0.9375rem, 2vw, 18px)',
                    color: '#3C3C3C',
                    lineHeight: '1.7'
                  }}
                >
                  {finalValues[0]?.description}
                </p>
              </div>
            </div>

            <div className="lg:w-80 md:w-full sm:w-full">
              <div
                className="group bg-white rounded-3xl p-8 md:p-6 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in stagger-2 h-full"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(168, 218, 220, 0.2)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full mb-6 mx-auto flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.15) 0%, rgba(224, 192, 151, 0.1) 100%)'
                  }}
                >
                  <div 
                    className="w-6 h-6 rounded-full"
                    style={{ background: 'rgba(155, 106, 63, 0.3)' }}
                  />
                </div>
                <h3 
                  className="font-heebo text-center mb-4 md:mb-3"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#9B6A3F',
                    lineHeight: '1.3'
                  }}
                >
                  {finalValues[1]?.name}
                </h3>
                <p 
                  className="font-heebo text-center"
                  style={{
                    fontSize: 'clamp(0.9375rem, 2vw, 18px)',
                    color: '#3C3C3C',
                    lineHeight: '1.7'
                  }}
                >
                  {finalValues[1]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* כרטיס מרכזי בולט */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <div className="lg:w-96 md:w-full sm:w-full">
              <div
                className="group bg-white rounded-3xl p-10 md:p-8 sm:p-6 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl fade-in stagger-3"
                style={{
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.08)',
                  border: '2px solid rgba(168, 218, 220, 0.3)',
                  transform: 'scale(1.05)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full mb-8 mx-auto flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.2) 0%, rgba(224, 192, 151, 0.15) 100%)'
                  }}
                >
                  <div 
                    className="w-8 h-8 rounded-full"
                    style={{ background: 'rgba(155, 106, 63, 0.4)' }}
                  />
                </div>
                <h3 
                  className="font-heebo text-center mb-6"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 28px)',
                    fontWeight: 600,
                    color: '#9B6A3F',
                    lineHeight: '1.3'
                  }}
                >
                  {finalValues[2]?.name}
                </h3>
                <p 
                  className="font-heebo text-center"
                  style={{
                    fontSize: 'clamp(1rem, 2.2vw, 19px)',
                    color: '#3C3C3C',
                    lineHeight: '1.7'
                  }}
                >
                  {finalValues[2]?.description}
                </p>
              </div>
            </div>
          </div>

          {/* שורה תחתונה - 2 כרטיסים עם היסט קל */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-20 md:gap-12 sm:gap-8">
            <div className="lg:w-80 md:w-full sm:w-full mb-8 lg:mb-0" style={{ transform: 'translateY(-20px)' }}>
              <div
                className="group bg-white rounded-3xl p-8 md:p-6 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in stagger-1 h-full"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(168, 218, 220, 0.2)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full mb-6 mx-auto flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.15) 0%, rgba(224, 192, 151, 0.1) 100%)'
                  }}
                >
                  <div 
                    className="w-6 h-6 rounded-full"
                    style={{ background: 'rgba(155, 106, 63, 0.3)' }}
                  />
                </div>
                <h3 
                  className="font-heebo text-center mb-4 md:mb-3"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#9B6A3F',
                    lineHeight: '1.3'
                  }}
                >
                  {finalValues[3]?.name}
                </h3>
                <p 
                  className="font-heebo text-center"
                  style={{
                    fontSize: 'clamp(0.9375rem, 2vw, 18px)',
                    color: '#3C3C3C',
                    lineHeight: '1.7'
                  }}
                >
                  {finalValues[3]?.description}
                </p>
              </div>
            </div>

            <div className="lg:w-80 md:w-full sm:w-full" style={{ transform: 'translateY(20px)' }}>
              <div
                className="group bg-white rounded-3xl p-8 md:p-6 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl fade-in stagger-2 h-full"
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(168, 218, 220, 0.2)'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full mb-6 mx-auto flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.15) 0%, rgba(224, 192, 151, 0.1) 100%)'
                  }}
                >
                  <div 
                    className="w-6 h-6 rounded-full"
                    style={{ background: 'rgba(155, 106, 63, 0.3)' }}
                  />
                </div>
                <h3 
                  className="font-heebo text-center mb-4 md:mb-3"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.5vw, 24px)',
                    fontWeight: 600,
                    color: '#9B6A3F',
                    lineHeight: '1.3'
                  }}
                >
                  {finalValues[4]?.name}
                </h3>
                <p 
                  className="font-heebo text-center"
                  style={{
                    fontSize: 'clamp(0.9375rem, 2vw, 18px)',
                    color: '#3C3C3C',
                    lineHeight: '1.7'
                  }}
                >
                  {finalValues[4]?.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* הודעה מחברת */}
        <div className="text-center mt-20 md:mt-16 sm:mt-12 fade-in stagger-3">
          <div 
            className="inline-block px-8 py-4 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.08) 0%, rgba(224, 192, 151, 0.05) 100%)',
              border: '1px solid rgba(168, 218, 220, 0.15)'
            }}
          >
            <p 
              className="font-heebo"
              style={{
                fontSize: 'clamp(0.9375rem, 2vw, 18px)',
                color: '#3C3C3C',
                lineHeight: '1.6',
                fontStyle: 'italic'
              }}
            >
              ערכים אלה מנחים כל מפגש, כל תרגול, וכל רגע של חיבור אמיתי
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 