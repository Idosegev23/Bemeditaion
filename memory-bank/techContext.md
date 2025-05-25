# Tech Context - Be Meditation

## מחסנית טכנולוגית
- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Heebo (Google Fonts)
- **Icons**: Lucide React
- **Deployment**: Vercel (מומלץ עבור Next.js)

## תלויות עיקריות
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0", 
  "tailwindcss": "^3.0.0",
  "typescript": "^5.0.0",
  "@next/font": "^14.0.0",
  "lucide-react": "^0.300.0"
}
```

## דרישות טכניות מיוחדות
1. **RTL Support** - תמיכה מלאה בעברית וכיוון מימין לשמאל
2. **SEO** - מטא-תגיות בעברית, structured data
3. **נגישות** - תקן ישראלי ו-WCAG 2.1 AA
4. **אנליטיקס** - Google Analytics 4
5. **ביצועים** - Core Web Vitals מעולים
6. **Responsive** - מובייל-פירסט

## מבנה תיקיות
```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Tailwind + CSS גלובלי
│   ├── layout.tsx         # Layout ראשי
│   ├── page.tsx          # עמוד בית
│   ├── events/           # עמוד אירועים
│   ├── meetings/         # עמוד מפגשים  
│   ├── meditations/      # עמוד מדיטציות
│   ├── gallery/          # עמוד גלריה
│   ├── articles/         # עמוד מאמרים
│   └── contact/          # עמוד צרו קשר
├── components/            # קומפוננטים משותפים
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── EventCard.tsx
│   └── MeditationModal.tsx
├── public/               # תמונות ואייקונים
└── data/                # מידע סטטי (JSON)
```

## אילוצים טכניים
1. **בחירת פונט** - חייב לתמוך בעברית וניקוד
2. **כיוון טקסט** - RTL ברמת הרכיב ולא רק CSS
3. **תמונות** - אופטימיזציה לווב, lazy loading
4. **נייד** - טאצ' ידידותי, גלילה חלקה
5. **טעינה** - זמן טעינה מתחת ל-3 שניות

## סביבת פיתוח
- Node.js 18+
- npm/yarn
- VS Code עם extensions של TypeScript ו-Tailwind
- Git לניהול גרסאות 