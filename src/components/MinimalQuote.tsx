'use client'

import { useEffect, useState } from 'react'

interface Quote {
  text: string
  author?: string
}

const inspirationalQuotes: Quote[] = [
  { text: "להקשיב לרגע. לנשום. להיות.", author: "אושו" },
  { text: "השלווה שאתה מחפש כבר נמצאת בתוכך" },
  { text: "כל נשימה היא הזדמנות חדשה להתחיל מחדש" },
  { text: "בשקט שבינך לבין עצמך, שם נמצא האושר האמיתי" },
  { text: "מדיטציה היא הדרך הביתה אל עצמך" },
  { text: "כשאתה נוכח במלואך, הקסם מתחיל לקרות", author: "אושו" },
  { text: "השמחה היא התפילה שלך, השמחה היא הודיית שלך", author: "אושו" },
  { text: "תן לחיים לזרום דרכך, ואל תנסה לשלוט" },
  { text: "כל רגע הוא מתנה. זה למה קוראים לו הווה" },
  { text: "האושר אינו יעד, הוא דרך הליכה" },
  { text: "בשתיקה נמצא כל מה שאתה זקוק לו" },
  { text: "האמת הכי עמוקה נמצאת בפשטות הכי גדולה" }
]

export default function MinimalQuote() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(inspirationalQuotes[0])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length)
    setCurrentQuote(inspirationalQuotes[randomIndex])
  }, [])

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length)
    setCurrentQuote(inspirationalQuotes[randomIndex])
  }

  return (
    <div className="quote-minimal fade-in">
      <div className="text-lg md:text-xl font-display font-medium text-text-dark mb-4 leading-relaxed">
        {currentQuote.text}
      </div>
      {currentQuote.author && (
        <div className="text-text-highlighted font-medium mb-6">
          — {currentQuote.author}
        </div>
      )}
      
      <button
        onClick={getNewQuote}
        className="btn-secondary text-sm"
      >
        ציטוט חדש
      </button>
    </div>
  )
} 