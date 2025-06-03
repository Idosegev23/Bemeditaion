"use client";

import React from 'react';

interface Value {
  name: string;
  description: string;
  imagePlaceholder: string;
  content: string;
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
      description: "כל תרגול מתחיל ברגע הזה. בלי למהר, בלי לשפוט.",
      imagePlaceholder: "meditaion.webp",
      content: "אנו מאמינים שהרגע הנוכחי הוא המקום היחיד שבו אמיתית התרחשות מתקיימת."
    },
    {
      name: "פשטות ואותנטיות", 
      description: "המדיטציה איננה דבר מורכב – היא חלק טבעי מאיתנו. אנחנו מאמינים בכנות ובביטוי אישי.",
      imagePlaceholder: "simple.webp",
      content: "אין צורך בטכניקות מורכבות. כל אדם הוא עולם שלם. אנו מעודדים לבוא כמו שאתם, להביע את עצמכם באופן אמיתי."
    },
    {
      name: "קהילה",
      description: "התהליך האישי נבנה במרחב תומך, מקבל, ללא תחרות.",
      imagePlaceholder: "community.webp",
      content: "יחד אנו חזקים יותר. הקהילה שלנו מספקת מרחב בטוח לחקירה, למידה וצמיחה."
    },
    {
      name: "תנועה ונשימה",
      description: "הגוף הוא שער. התנועה היא הדרך להרגיש.",
      imagePlaceholder: "movment.webp",
      content: "אנו מאמינים שהגוף והנפש מחוברים באופן בלתי נפרד. דרך תנועה מודעת ונשימה עמוקה."
    }
  ];

  const finalValues = values || defaultValues;

  return (
    <>
      {/* תוספת CSS לאנימציות הגלים */}
      <style jsx>{`
        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }
        
        @keyframes move-forever {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }

        .value-card {
          width: 100%;
          max-width: 22rem;
          height: 32rem;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          color: rgb(240, 240, 240);
          box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-out;
          margin: 0 auto;
          flex: 1 1 22%;
          min-width: 200px;
        }

        .value-card:hover {
          transform: translateY(-5px);
        }

        .card-image {
          position: absolute;
          object-fit: cover;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0.9;
          transition: opacity 0.2s ease-out;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .card-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(84,58,183,0.4) 0%, rgba(0,172,193,0.4) 100%);
          z-index: 1;
        }

        .card-title {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          transition: all 0.4s ease-out;
          font-family: 'Playfair Display', serif;
          font-weight: normal;
          text-transform: uppercase;
          font-size: 1.4rem;
          text-align: center;
          width: 90%;
          z-index: 2;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
          color: white;
        }
        
        .card-description,
        .card-content {
          position: absolute;
          opacity: 0;
          max-width: 90%;
          left: 50%;
          transition: opacity 0.4s ease-out;
          text-align: center;
          line-height: 1.6;
          padding: 0 10px;
          z-index: 2;
          text-shadow: 0 2px 6px rgba(0,0,0,0.8);
          color: white;
        }

        .card-description {
          top: 100px;
          transform: translateX(-50%);
          font-size: 1rem;
        }
        
        .card-content {
          top: 60%;
          transform: translateX(-50%);
          font-size: 0.85rem;
        }
        
        .value-card:hover .card-title {
          top: 20px;
          transition: all 0.4s ease-out;
        }
        
        .value-card:hover .card-description,
        .value-card:hover .card-content {
          opacity: 1;
          transition: opacity 0.5s 0.2s ease-in;
        }
        
        .value-card:hover .card-image {
          transition: opacity 0.3s ease-in;
          opacity: 1;
        }

        .cards-container {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          gap: 1rem;
          max-width: 100%;
          padding: 0 1rem;
        }

        @media (max-width: 1400px) {
          .value-card {
            max-width: 20rem;
            height: 30rem;
            min-width: 180px;
          }
          .cards-container {
            gap: 0.8rem;
          }
          .card-title {
            font-size: 1.3rem;
            top: 25px;
          }
          .card-description {
            font-size: 0.95rem;
            top: 90px;
          }
          .card-content {
            font-size: 0.8rem;
          }
          .value-card:hover .card-title {
            top: 15px;
          }
        }

        @media (max-width: 1200px) {
          .cards-container {
            gap: 0.6rem;
          }
          .value-card {
            max-width: 18rem;
            height: 28rem;
            min-width: 160px;
          }
          .card-title {
            font-size: 1.2rem;
            top: 20px;
          }
          .card-description {
            font-size: 0.9rem;
            top: 80px;
          }
          .card-content {
            font-size: 0.75rem;
          }
          .value-card:hover .card-title {
            top: 15px;
          }
        }

        @media (max-width: 900px) {
          .value-card {
            max-width: 16rem;
            height: 26rem;
            min-width: 140px;
          }
          .cards-container {
            gap: 0.5rem;
          }
          .card-title {
            font-size: 1.1rem;
            top: 20px;
          }
          .card-description {
            font-size: 0.85rem;
            top: 75px;
          }
          .card-content {
            font-size: 0.7rem;
          }
          .value-card:hover .card-title {
            top: 15px;
          }
        }

        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
          .value-card {
            height: 24rem;
            max-width: 14rem;
            min-width: 120px;
          }
          .cards-container {
            gap: 0.4rem;
          }
          .card-title {
            font-size: 1rem;
            top: 15px;
          }
          .card-description {
            font-size: 0.8rem;
            top: 65px;
          }
          .card-content {
            font-size: 0.65rem;
          }
          .value-card:hover .card-title {
            top: 10px;
          }
        }

        @media (max-width: 600px) {
          .cards-container {
            gap: 0.3rem;
            padding: 0 0.5rem;
          }
          .value-card {
            height: 20rem;
            max-width: 12rem;
            min-width: 100px;
          }
          .card-title {
            font-size: 0.9rem;
            top: 15px;
          }
          .card-description {
            font-size: 0.7rem;
            top: 60px;
          }
          .card-content {
            font-size: 0.6rem;
          }
          .value-card:hover .card-title {
            top: 10px;
          }
        }
      `}</style>

      <section className="relative overflow-hidden">
        {/* Header עם גרדיאנט וגלים */}
        <div 
          className="relative text-center text-white"
                style={{
            background: 'linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%)'
          }}
        >
          {/* תוכן Header */}
          <div className="relative z-10 py-20 lg:py-32 md:py-24 sm:py-20">
            <div className="container-custom">
              <div className="flex flex-col justify-center items-center text-center min-h-[50vh]">
                <h2 
                  className="font-display text-h1 mb-8 text-white"
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 300,
                    letterSpacing: '2px'
                  }}
                >
                  {title}
                </h2>
                
                <p 
                  className="text-body-large max-w-4xl mx-auto leading-relaxed text-white/90"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                    letterSpacing: '1px'
                  }}
                >
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* גלים אנימטיביים */}
          <div>
            <svg 
              className="waves" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" 
              preserveAspectRatio="none" 
              shapeRendering="auto"
            >
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
        </div>

        {/* אזור התוכן עם הכרטיסים */}
        <div className="relative bg-white py-20 lg:py-32">
          <div className="container-custom">
            {/* 4 כרטיסי ערכים בשורה אחת */}
            <div className="cards-container">
              {finalValues.map((value, index) => (
                <div 
                  key={index}
                  className="value-card fade-in"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* תמונת רקע אמיתית */}
                  <div 
                    className="card-image"
                  style={{
                      backgroundImage: `url(/images/${value.imagePlaceholder})`
                    }}
                  >
                  </div>

                  {/* תוכן הכרטיס */}
                  <h3 className="card-title">
                    {value.name}
                </h3>
                  
                  <p className="card-description">
                    {value.description}
                  </p>
                  
                  <div className="card-content">
                    {value.content}
          </div>
                </div>
              ))}
            </div>

            {/* הודעה מחברת */}
            <div className="text-center mt-20 fade-in" style={{ animationDelay: '1s' }}>
              <div className="max-w-4xl mx-auto">
                <p 
                  className="font-display text-xl lg:text-2xl italic leading-relaxed text-text-dark"
                  style={{
                    fontWeight: 300,
                    letterSpacing: '1px'
                  }}
                >
                  ערכים אלה מנחים כל מפגש, כל תרגול, וכל רגע של חיבור אמיתי
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ValuesSection; 