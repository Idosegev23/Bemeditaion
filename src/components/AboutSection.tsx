import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  title?: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  showPlaceholder?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "מי אנחנו",
  text,
  imageSrc = "/images/jivani.jpeg",
  imageAlt = "תמונה של המדריך/ה",
  showPlaceholder = false
}) => {
  const defaultText = `שמי ז'יוואני יובל, מתרגל ומנחה מדיטציות מבית אושו מעל 20 שנה.

ז'יוואני מטפל במגוון שיטות, כולל פסיכותרפיה הוליסטית גופנית, NLP, הילינג ועוד. הוא מביא את יכולות הטיפול לסדנאות המדיטציה יחד עם גישה מאפשרת, תומכת ונגישה.

ז'יוואני הוא ממקימי פסטיבל נאטראז' אותו מפיק עד היום. בנוסף מפיק ויוזם את סדנאות המדיטציה Be Meditation וסופ"ש 'ברגוע..' המאפשרות לשלב את המדיטציה והחוויה בחיי היומיום. הוא גם ממקימי מרכז OSHO TLV.`;

  const finalText = text || defaultText;

  return (
    <section 
      className="relative py-20 lg:py-20 md:py-15 sm:py-12 overflow-hidden"
      style={{ 
        background: '#F7FAFC',
      }}
    >
      {/* אלמנטים דקורטיביים ברקע */}
      <div 
        className="absolute top-1/5 -left-10 w-72 h-72 rounded-full z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.08) 0%, rgba(224, 192, 151, 0.05) 100%)'
        }}
      />
      <div 
        className="absolute bottom-1/10 -right-5 w-48 h-48 z-0"
        style={{
          background: 'rgba(139, 90, 60, 0.04)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-6 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-12 sm:gap-10 items-center">
          {/* Text Content - בצד שמאל בגלל RTL */}
          <div className="fade-in">
            <h2 
              className="font-heebo text-right lg:text-right md:text-center sm:text-center relative mb-8 md:mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 44px)',
                fontWeight: 600,
                color: '#9B6A3F',
                lineHeight: '1.2'
              }}
            >
              {title}
              <span 
                className="absolute -bottom-2 right-0 lg:right-0 md:left-1/2 sm:left-1/2 md:-translate-x-1/2 sm:-translate-x-1/2 h-0.5 w-15 rounded"
                style={{ backgroundColor: '#9B6A3F' }}
              />
            </h2>
            <div 
              className="font-heebo text-right lg:text-right md:text-center sm:text-center space-y-6"
              style={{
                fontSize: 'clamp(1.0625rem, 2.5vw, 20px)',
                color: '#3C3C3C',
                lineHeight: '1.7'
              }}
            >
              {finalText.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image - בצד ימין בגלל RTL */}
          <div className="fade-in flex justify-center items-center">
            {showPlaceholder ? (
              <div 
                className="flex flex-col items-center justify-center w-full max-w-sm md:max-w-xs sm:max-w-xs rounded-3xl border-2 border-dashed shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  height: 'clamp(17.5rem, 25vw, 350px)',
                  background: 'linear-gradient(135deg, rgba(168, 218, 220, 0.08) 0%, rgba(224, 192, 151, 0.12) 100%)',
                  borderColor: 'rgba(139, 90, 60, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div 
                  className="rounded-full flex items-center justify-center mb-6 shadow-lg"
                  style={{ 
                    width: 'clamp(6.25rem, 8vw, 7.5rem)',
                    height: 'clamp(6.25rem, 8vw, 7.5rem)',
                    background: 'rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div 
                    className="rounded-full flex items-center justify-center"
                    style={{ 
                      width: 'clamp(4.375rem, 6vw, 5rem)',
                      height: 'clamp(4.375rem, 6vw, 5rem)',
                      background: 'rgba(139, 90, 60, 0.1)' 
                    }}
                  >
                    <span 
                      className="font-heebo font-medium"
                      style={{ 
                        fontSize: 'clamp(0.75rem, 1.5vw, 14px)',
                        color: '#9B6A3F'
                      }}
                    >
                      תמונה
                    </span>
                  </div>
                </div>
                <p 
                  className="font-heebo font-medium text-center mb-2"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 18px)',
                    color: '#9B6A3F'
                  }}
                >
                  תמונה של המדריך/ה
                </p>
                <p 
                  className="font-heebo text-center"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.5vw, 14px)',
                    color: '#6B7280'
                  }}
                >
                  במרחב של שקט ונוכחות
                </p>
              </div>
            ) : (
              <Image 
                src={imageSrc} 
                alt={imageAlt}
                width={350}
                height={350}
                className="w-full max-w-sm md:max-w-xs sm:max-w-xs rounded-3xl object-cover shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  height: 'clamp(17.5rem, 25vw, 350px)',
                  filter: 'sepia(5%) saturate(110%)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 