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
    <div className="relative overflow-hidden w-full mb-8 border-b-2 border-white/30" style={{ isolation: 'isolate' }}>
      {/* רקע ציטוטים */}
      <div className="absolute inset-0">
        <Image
          src="/images/qoutebg.webp"
          alt=""
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
      </div>

      {/* שכבת גרדיאנט עדינה מעל התמונות */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary-calm/10"></div>
      
      {/* שכבת הפרדה תחתונה */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-white/60"></div>
      
      {/* לוטוס - פינה ימנית עליונה */}
      <div className="absolute top-6 right-6 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 opacity-60 z-5">
        <Image
          src="/images/lutos.webp"
          alt=""
          fill
          className="object-contain animate-pulse"
          sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
        />
      </div>
      
      {/* מנדלה גיאומטרית - פינה שמאלית תחתונה */}
      <div className="absolute bottom-6 left-6 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-50 z-5">
        <Image
          src="/images/geometry.webp"
          alt=""
          fill
          className="object-contain breathe"
          sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 144px"
        />
      </div>

      {/* תוכן הציטוט */}
      <div className="relative z-10 w-full py-16 px-6 md:py-24 md:px-12 pb-20 md:pb-32">

        {/* תוכן מרכזי */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          
          {/* קו דקורטיבי עליון */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-24"></div>
            <div className="mx-4 w-3 h-3 bg-text-highlighted/50 rounded-full shadow-sm"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-24"></div>
          </div>

          {/* הציטוט */}
          <div 
            className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-text-dark leading-relaxed mb-6 text-center">
              <span className="relative">
                {/* תווי ציטוט דקורטיביים */}
                <span className="absolute -top-4 -right-3 text-5xl text-primary-calm/50 font-serif leading-none">&ldquo;</span>
                <span className="relative z-10 px-6">{currentQuote.text}</span>
                <span className="absolute -bottom-8 -left-3 text-5xl text-primary-calm/50 font-serif leading-none">&rdquo;</span>
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
          <div className="flex items-center justify-center my-8">
            <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-24"></div>
            <div className="mx-4 w-3 h-3 bg-text-highlighted/50 rounded-full shadow-sm"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-text-highlighted/40 to-transparent w-24"></div>
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
              className="group relative inline-flex items-center gap-3 px-8 py-4 
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
                className={`w-5 h-5 transition-transform duration-300 ${
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
                      shadow-minimal pointer-events-none"></div>
    </div>
  )
} 