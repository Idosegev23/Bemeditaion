import HeroSection from "@/components/HeroSection";
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="צרו קשר"
        description="נשמח לענות על כל שאלה ולעזור לכם למצוא את הדרך המתאימה ביותר עבורכם במסע המדיטציה."
        className="bg-gradient-to-b from-secondary/20 to-background"
      />

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-h1 font-medium text-text-dark mb-6">
                דרכי יצירת קשר
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-1">טלפון</h3>
                    <p className="text-text-light">050-123-4567</p>
                    <p className="text-sm text-text-light">זמינים בימים א'-ה', 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-1">אימייל</h3>
                    <p className="text-text-light">info@bemeditation.co.il</p>
                    <p className="text-sm text-text-light">נענה תוך 24 שעות</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-1">וואטסאפ</h3>
                    <p className="text-text-light">050-123-4567</p>
                    <p className="text-sm text-text-light">הדרך המהירה ביותר לקבל מענה</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-1">מיקום</h3>
                    <p className="text-text-light">מרכז Be Meditation</p>
                    <p className="text-sm text-text-light">כתובת מדויקת תישלח עם אישור ההגעה</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-text-dark mb-6">
                שלחו לנו הודעה
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    שם מלא
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="השם שלכם"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    אימייל
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    הודעה
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="איך נוכל לעזור לכם?"
                  />
                </div>

                <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  שלח הודעה
                </button>
              </div>

              <p className="text-sm text-text-light mt-4 text-center">
                * הטופס זה הוא לדוגמה. לפניות אמיתיות, אנא השתמשו בפרטי הקשר למעלה.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h1 font-medium text-text-dark mb-8 text-center">
            שאלות נפוצות
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-dark">האם צריך ניסיון קודם?</h3>
              <p className="text-text-light">
                לא! המדיטציות שלנו מתאימות לכולם, ללא קשר לרמת הניסיון. 
                אנחנו מספקים הדרכה מלאה לכל מתרגל חדש.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-dark">מה להביא למפגש?</h3>
              <p className="text-text-light">
                בגדים נוחים לתנועה, בקבוק מים ומגבת קטנה. 
                כל השאר נמצא במקום.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-dark">כמה עולה השתתפות?</h3>
              <p className="text-text-light">
                המחירים משתנים בהתאם לסוג הפעילות. 
                צרו קשר לקבלת מחירון מפורט.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-dark">איך מגיעים למקום?</h3>
              <p className="text-text-light">
                הכתובת המדויקת ופרטי הגעה יישלחו עם אישור ההרשמה. 
                יש חניה בחינם במקום.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 