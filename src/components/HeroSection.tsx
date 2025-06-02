'use client';

import { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  title: string;
}

const HeroSection = ({ title }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // יצירת Intersection Observer כדי לזהות מתי ההירו נכנס לתצוגה
    const heroElement = heroRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // כשההירו נכנס לתצוגה - הפעל את האנימציה עם עיכוב קטן
            setTimeout(() => setIsVisible(true), 200);
          } else {
            // כשההירו יוצא מהתצוגה - החזר לאנימציה לנקודת התחלה
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // מפעיל כשלפחות 10% מההירו נראה
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        audioRef.current.volume = 0.3;
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(/images/herobg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* אודיו רקע - צלילי טבע */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* לעת עתה ללא קובץ אודיו - ניתן להוסיף מאוחר יותר */}
        {/* <source src="/audio/nature-sounds.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* Overlay עדין להבהרת טקסט */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/20"></div>
      
      {/* כפתור השתקת/הפעלת סאונד */}
      <button
        onClick={toggleSound}
        className="absolute top-8 left-8 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm 
                   hover:bg-white/30 transition-all duration-300 group"
        aria-label={isMuted ? "הפעל צלילי טבע" : "השתק צלילי טבע"}
      >
        {isMuted ? (
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* תוכן ראשי */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto hero-mobile-padding">
        
        {/* כותרת ראשית */}
        <h1 
          className={`font-heebo text-white font-semibold mb-8 leading-tight text-shadow-lg hero-mobile-text
                     text-4xl md:text-6xl lg:text-7xl
                     transform transition-all duration-1000 ease-out
                     ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
        >
          {title}
        </h1>

        {/* טקסט משני */}
        <p 
          className={`font-heebo text-white/95 text-lg md:text-2xl lg:text-3xl mb-12 leading-relaxed hero-mobile-subtitle
                     transform transition-all duration-1000 ease-out delay-300
                     ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.25)' }}
        >
          ברוכים הבאים למרחב של שקט, תנועה ונשימה
        </p>

        {/* כפתור CTA */}
        <div 
          className={`transform transition-all duration-1000 ease-out delay-700
                     ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <a 
            href="/events"
            className="inline-flex items-center gap-3 px-6 py-3 md:px-10 md:py-5
                       bg-[#C8A07E] hover:bg-[#B8926E] text-white font-heebo font-medium
                       rounded-full text-base md:text-xl transition-all duration-300 ease-out
                       shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1
                       group"
          >
            <span>גלו את הדרך</span>
            <svg 
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* אפקט עננים נעים */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float-slow-reverse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-float-slow"></div>
      </div>
    </section>
  );
};

export default HeroSection; 