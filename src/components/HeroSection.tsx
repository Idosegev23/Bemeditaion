'use client';

import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // הפעלת האנימציה אחרי טעינה קצרה
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="h-[80vh] flex items-start justify-center pt-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(/images/herobg.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* אלמנטים ויזואליים מרגיעים על הרקע */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* עיגולים קונצנטריים - חזקים יותר */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 border-2 border-white/40 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 border border-white/25 rounded-full animate-ping-slower"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-white/50 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 border border-white/30 rounded-full animate-ping-slower"></div>
        
        {/* שיפועים עדינים */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/15 animate-pulse-gentle"></div>
      </div>

      {/* חלקיקים צפים - חזקים יותר */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/70 rounded-full animate-float-particle shadow-lg"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
              boxShadow: '0 0 10px rgba(255,255,255,0.5)'
            }}
          ></div>
        ))}
        
        {/* חלקיקי אור גדולים יותר */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-3 h-3 bg-white/60 rounded-full animate-float-gentle"
            style={{
              right: `${10 + i * 15}%`,
              bottom: `${25 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + (i % 2)}s`,
              boxShadow: '0 0 15px rgba(255,255,255,0.4)'
            }}
          ></div>
        ))}
      </div>

      {/* תוכן הטקסט עם אפקטים */}
      <div 
        className={`text-center text-black px-6 max-w-4xl mx-auto transition-all duration-2000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ fontFamily: 'Heebo, sans-serif' }}
      >
        {/* כותרת הירו עם אנימציית נשימה */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 transition-all duration-3000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } animate-breathe`}>
          להכניס נשימה לתוך החיים.
          <br />
          להפוך נוכחות – לדרך חיים.
        </h1>
        
        {/* טקסט פתיח עם הופעה מאוחרת */}
        <p className={`text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          לא צריך לנסוע רחוק או לעצור הכל כדי לפגוש את עצמך.
          <br />
          התרגול יכול להתחיל בדיוק איפה שאתה – בתוך היומיום.
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.05; }
        }
        
        @keyframes ping-slower {
          0%, 100% { transform: scale(1); opacity: 0.05; }
          50% { transform: scale(1.2); opacity: 0.02; }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.6; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.4; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 0.6; }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
          33% { transform: translateY(-15px) translateX(10px); opacity: 0.3; }
          66% { transform: translateY(-30px) translateX(-5px); opacity: 0.2; }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        
        .animate-ping-slow { animation: ping-slow 4s infinite; }
        .animate-ping-slower { animation: ping-slower 6s infinite; }
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-float-gentle { animation: float-gentle linear infinite; }
        .animate-breathe { animation: breathe 8s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection; 