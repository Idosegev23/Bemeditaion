# סקשן "מי אנחנו" - הוראות שימוש

## תיאור
סקשן מותאם אישית שנבנה בהתאם למפרט העיצובי הספציפי עבור אתר Be Meditation.

## תכונות עיקריות

### 🎨 עיצוב
- **פונט**: Heebo (קיים כבר באתר)
- **צבעי טקסט**: 
  - כותרת: #9B6A3F (חום כהה)
  - טקסט רגיל: #3C3C3C
- **גודל טקסט**: 20px עם line-height: 1.7
- **רקע**: #F7FAFC (תכלת רך מאוד)
- **תמונה**: פינות עגולות 32px עם אפקט sepia קל

### 📱 Responsive
- **דסקטופ**: טקסט משמאל, תמונה מימין (RTL)
- **מובייל**: מבנה אנכי - כותרת, תמונה, טקסט

### ✨ אנימציות
- fade-in עדין בכניסה
- hover effects על התמונה
- אלמנטים דקורטיביים ברקע

## שימוש בקומפוננט

### שימוש בסיסי
```jsx
import AboutSection from '@/components/AboutSection';

<AboutSection />
```

### שימוש מתקדם עם props
```jsx
<AboutSection 
  title="מי אנחנו"
  name="השם שלך"
  text="הטקסט האישי שלך כאן..."
  showPlaceholder={false}
  imageSrc="/images/your-photo.jpg"
  imageAlt="תמונה שלך"
/>
```

## Props זמינים

| Prop | Type | Default | תיאור |
|------|------|---------|--------|
| `title` | string | "מי אנחנו" | כותרת הסקשן |
| `name` | string | "[שם]" | השם שיופיע בטקסט |
| `text` | string | טקסט ברירת מחדל | הטקסט המלא של הסקשן |
| `imageSrc` | string | רק אם showPlaceholder=false | נתיב לתמונה |
| `imageAlt` | string | "תמונה של המדריך/ה" | alt text לתמונה |
| `showPlaceholder` | boolean | true | האם להציג placeholder או תמונה אמיתית |

## החלפת Placeholder בתמונה אמיתית

### שלב 1: הוסף את התמונה שלך
שמור את התמונה בתיקיה `/public/images/`

### שלב 2: עדכן את הקומפוננט
```jsx
<AboutSection 
  showPlaceholder={false}
  imageSrc="/images/your-photo.jpg"
  imageAlt="תיאור התמונה שלך"
/>
```

## המלצות לתמונה

### גודל מומלץ
- **רוחב**: 400-600px
- **גובה**: 350-500px
- **יחס גובה-רוחב**: כמעט ריבועי

### איכות
- רזולוציה גבוהה לתצוגה חדה
- פורמט JPG או PNG
- גודל קובץ: מתחת ל-500KB למהירות טעינה

### סגנון מומלץ
- תמונה טבעית, לא מבוימת
- רקע נקי או טבעי
- תאורה רכה
- הביטה לכיוון המצלמה או הצדה

## התאמה אישית

### שינוי צבעים
עדכן את המשתנים ב-CSS בתוך הקומפוננט:
```css
.about-title {
  color: #9B6A3F; /* צבע הכותרת */
}

.about-text {
  color: #3C3C3C; /* צבע הטקסט */
}
```

### שינוי רקע
```css
.about-section {
  background: #F7FAFC; /* צבע הרקע */
}
```

## טיפים לשימוש

1. **טקסט אישי**: כתוב בשפה רגועה ולא שיווקית
2. **אורך טקסט**: 2-3 פסקאות, לא יותר מדי
3. **תמונה**: בחר תמונה שמשדרת חמימות ואמינות
4. **מובייל**: בדוק שהטקסט קריא במובייל
5. **נגישות**: ודא שיש alt text מתאים לתמונה

## דוגמאות טקסט

### גרסה אישית
```
"קוראים לי [שם]. אני מלווה תהליכים אישיים וקבוצתיים כבר [מספר] שנים, מתוך סקרנות עמוקה למה שקורה כשאנחנו פשוט עוצרים.

Be Meditation היא הדרך שלי לחלוק מרחבים של הקשבה, תנועה, ומדיטציה – שמחזירים אותנו אל עצמנו.

אני לא מחפש להוביל, אלא פשוט להזמין את מי שרוצה להיפגש, להיות, ולנשום."
```

### גרסת קבוצה
```
"אנחנו קבוצת מדריכים המחזיקים מרחב בטוח ורגוע למדיטציה ולחקירה עצמית.

Be Meditation נולדה מתוך אהבה עמוקה לתהליכי הקשבה ושחרור, ומתוך הרצון לחלוק את הכלים שלמדנו במסע שלנו.

הזמנה פתוחה לכל מי שמרגיש קריאה להיפגש, לנשום, ולגלות מה מתגלה בשקט."
```

---

💡 **עצה**: התחל עם הplaceholder ועבור לתמונה אמיתית כשתהיה מוכן. זה מאפשר לבדוק את העיצוב לפני הוספת התמונה הסופית. 