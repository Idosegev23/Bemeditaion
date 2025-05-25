# System Patterns - Be Meditation

## ארכיטקטורת המערכת
אתר סטטי מבוסס Next.js עם App Router, ללא צורך בבסיס נתונים. כל התוכן נשמר כקבצי JSON או קובץ Markdown.

## תבניות עיצוב מרכזיות

### 1. Layout Pattern
```
Header (קבוע)
├── Logo + Navigation
└── Mobile Menu (Hamburger)

Main Content (משתנה)
├── Hero Section (לכל עמוד)
├── Content Grid/Cards
└── Call to Action

Footer (קבוע)
├── Logo + Links
├── Social Icons
└── Credit
```

### 2. Color System
```css
:root {
  --primary: #A8DADC;      /* תכלת רך */
  --secondary: #E0C097;    /* חום בהיר */
  --background: #F5F3EF;   /* גוון חול */
  --white: #FFFFFF;
  --text: #333333;         /* אפור כהה */
  --text-light: #666666;
}
```

### 3. Typography Scale
```css
.text-hero    { font-size: 2.5rem; font-weight: 300; }
.text-h1      { font-size: 2rem;   font-weight: 500; }
.text-h2      { font-size: 1.5rem; font-weight: 500; }
.text-body    { font-size: 1rem;   font-weight: 400; }
.text-small   { font-size: 0.875rem; font-weight: 400; }
```

### 4. Card Component Pattern
כל הכרטיסים (אירועים, מפגשים, מדיטציות) משתמשים באותה תבנית:
- תמונה עליונה
- כותרת
- תיאור קצר
- CTA button או לינק

### 5. Modal Pattern
מדיטציות נפתחות במודאל עם:
- Overlay כהה
- תוכן מרכזי
- X לסגירה
- אפשרות סגירה בלחיצה על Overlay

## תבניות קוד מרכזיות

### 1. Page Structure
```typescript
export default function PageName() {
  return (
    <main className="min-h-screen">
      <HeroSection title="כותרת" subtitle="תת-כותרת" />
      <ContentSection>
        {/* תוכן העמוד */}
      </ContentSection>
    </main>
  );
}
```

### 2. Data Management
```typescript
// /data/events.json
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  link?: string;
}
```

### 3. Responsive Grid
```css
.grid-responsive {
  @apply grid gap-6;
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
```

## קומפוננטים משותפים

### 1. Header
- ניווט הורזונטלי בדסקטופ
- תפריט המבורגר במובייל
- Active state לעמוד הנוכחי

### 2. Footer  
- תוכן זהה בכל עמוד
- לינקים לעמודים + רשתות חברתיות
- רספונסיבי

### 3. EventCard / MeetingCard
- תמונה, כותרת, תיאור, CTA
- Hover effects עדינים
- לינק לעמוד פרטים או אתר חיצוני

### 4. SEO Head
- Title, Description, Keywords בעברית
- Open Graph tags
- Structured Data (JSON-LD)

## תבניות אינטראקציה
1. **Hover States** - שינוי עדין בצבע/צל
2. **Focus States** - מסגרת ברורה לנגישות
3. **Loading States** - שלד או ספינר
4. **Error States** - הודעות ברורות בעברית
5. **Success States** - אישור פעולה

## נגישות Patterns
1. **ARIA Labels** - בעברית לכל הקומפוננטים
2. **Keyboard Navigation** - Tab order הגיוני
3. **Color Contrast** - יחס ניגודיות מינימום 4.5:1
4. **Screen Readers** - alt texts מתארים
5. **Focus Management** - במודאלים ובטפסים 