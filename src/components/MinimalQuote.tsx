'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Quote {
  text: string
  author?: string
}

const inspirationalQuotes: Quote[] = [
  { text: "להקשיב לרגע. לנשום. להיות.", author: "אושו" },
  { text: "השלווה שאתה מחפש כבר נמצאת בתוכך", author: "בודהה" },
  { text: "כל נשימה היא הזדמנות חדשה להתחיל מחדש", author: "תיך נהאת האן" },
  { text: "בשקט שבינך לבין עצמך, שם נמצא האושר האמיתי", author: "רומי" },
  { text: "מדיטציה היא הדרך הביתה אל עצמך", author: "נוואל רווק" },
  { text: "כשאתה נוכח במלואך, הקסם מתחיל לקרות", author: "אושו" },
  { text: "השמחה היא התפילה שלך, השמחה היא הודיית שלך", author: "אושו" },
  { text: "תן לחיים לזרום דרכך, ואל תנסה לשלוט", author: "לאו דזה" },
  { text: "כל רגע הוא מתנה. זה למה קוראים לו הווה", author: "אליס מורס ארל" },
  { text: "האושר אינו יעד, הוא דרך הליכה", author: "תיך נהאת האן" },
  { text: "בשתיקה נמצא כל מה שאתה זקוק לו", author: "אושו" },
  { text: "האמת הכי עמוקה נמצאת בפשטות הכי גדולה", author: "ליאונרד כהן" }
]


export default function MinimalQuote() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(inspirationalQuotes[0])
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length)
    setCurrentQuote(inspirationalQuotes[randomIndex])
    // יצירת עיכוב קטן לאנימציית כניסה
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  const getNewQuote = () => {
    setIsTransitioning(true)
    setIsVisible(false)
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length)
      setCurrentQuote(inspirationalQuotes[randomIndex])
      setIsVisible(true)
      setIsTransitioning(false)
    }, 500)
  }

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="relative overflow-hidden w-full h-64 md:h-80 rounded-3xl border border-white/20 backdrop-blur-sm bg-white/10" style={{ isolation: 'isolate' }}>
        
        {/* שכבת גרדיאנט עדינה */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary-calm/10 rounded-3xl"></div>
        
        {/* לוטוס - רקע גדול מאחורי הטקסט */}
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-10 z-0">
          <Image
            src="/images/lutos.webp"
            alt=""
            fill
            className="object-contain animate-pulse"
            sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
          />
        </div>
        
        {/* מנדלה גיאומטרית - רקע גדול מאחורי הטקסט */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 opacity-8 z-0">
          <Image
            src="/images/geometry.webp"
            alt=""
            fill
            className="object-contain breathe"
            sizes="(max-width: 768px) 176px, (max-width: 1024px) 240px, 288px"
          />
        </div>

        {/* תוכן הציטוט */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 md:px-12">

          {/* תוכן מרכזי */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            
            {/* קו דקורטיבי עליון */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-16"></div>
              <div className="mx-3 w-2 h-2 bg-text-highlighted/50 rounded-full shadow-sm"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-16"></div>
            </div>

            {/* הציטוט */}
            <div 
              className={`transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
                             <blockquote className="text-xl md:text-2xl lg:text-4xl font-display font-medium text-text-dark leading-relaxed mb-4 text-center">
                <span className="relative">
                  {/* תווי ציטוט דקורטיביים */}
                  <span className="absolute -top-2 -right-2 text-3xl text-primary-calm/50 font-serif leading-none">&ldquo;</span>
                  <span className="relative z-10 px-4">{currentQuote.text}</span>
                  <span className="absolute -bottom-4 -left-2 text-3xl text-primary-calm/50 font-serif leading-none">&rdquo;</span>
                </span>
              </blockquote>
            </div>

            {/* מחבר הציטוט */}
            {currentQuote.author && (
              <div 
                className={`transform transition-all duration-700 ease-out delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                                 <cite className="block text-text-highlighted font-heebo font-medium text-lg not-italic">
                  — {currentQuote.author}
                </cite>
              </div>
            )}

            {/* קו דקורטיבי תחתון */}
            <div className="flex items-center justify-center my-4">
              <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-16"></div>
              <div className="mx-3 w-2 h-2 bg-text-highlighted/50 rounded-full shadow-sm"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-16"></div>
            </div>
            
            {/* כפתור לציטוט חדש */}
            <div 
              className={`transform transition-all duration-700 ease-out delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <button
                onClick={getNewQuote}
                disabled={isTransitioning}
                                 className="group relative inline-flex items-center gap-2 px-6 py-3 
                            bg-white/60 hover:bg-white/80
                            text-text-highlighted font-heebo font-medium text-base
                           rounded-full border border-text-highlighted/30
                           transition-all duration-300 ease-out
                           hover:shadow-lg hover:scale-105 hover:-translate-y-0.5
                           disabled:opacity-50 disabled:cursor-not-allowed
                           backdrop-blur-sm"
              >
                <span className="relative z-10">ציטוט חדש</span>
                
                {/* איקון רענון */}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isTransitioning ? 'animate-spin' : 'group-hover:rotate-180'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
                
                {/* הילה רכה */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-primary-calm/10 rounded-full 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>

          </div>
        </div>

        {/* אפקט צללים רכים */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-primary-calm/5 
                        shadow-minimal pointer-events-none rounded-3xl"></div>
      </div>
    </div>
  )
} 