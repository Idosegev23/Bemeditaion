'use client'

import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Send, User } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const navItems = [
    { name: 'בית', href: '/' },
    { name: 'אירועים', href: '/events' },
    { name: 'מפגשים', href: '/meetings' },
    { name: 'מדיטציות', href: '/meditations' },
    { name: 'גלריה', href: '/gallery' },
    { name: 'מאמרים', href: '/articles' },
    { name: 'צרו קשר', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'פייסבוק', icon: Facebook, href: '#', color: '#1877F2' },
    { name: 'אינסטגרם', icon: Instagram, href: '#', color: '#E4405F' },
    { name: 'מייל', icon: Mail, href: 'mailto:info@bemeditation.co.il', color: '#8B5A3C' },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    
    setTimeout(() => {
      setIsContactSubmitting(false);
      setContactForm({ name: '', email: '', message: '' });
      alert('ההודעה נשלחה בהצלחה!');
    }, 2000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubmitting(true);
    
    setTimeout(() => {
      setIsNewsletterSubmitting(false);
      setNewsletterEmail('');
      alert('נרשמת בהצלחה לניוזלטר!');
    }, 2000);
  };

  return (
    <>
      {/* תוספת CSS לאפקט מים בחוף */}
      <style jsx>{`
        .beach-water {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(180deg, 
            transparent 0%,
            rgba(168, 218, 220, 0.3) 20%,
            rgba(168, 218, 220, 0.6) 40%,
            rgba(168, 218, 220, 0.8) 60%,
            rgba(168, 218, 220, 0.9) 80%,
            rgba(168, 218, 220, 1) 100%
          );
          animation: water-tide 8s ease-in-out infinite;
          transform-origin: bottom;
        }

        .beach-water::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg,
            rgba(224, 192, 151, 0.2) 0%,
            rgba(168, 218, 220, 0.1) 50%,
            rgba(224, 192, 151, 0.2) 100%
          );
          animation: water-shimmer 6s ease-in-out infinite;
        }

        .foam {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 25%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.8) 75%,
            transparent 100%
          );
          animation: foam-movement 4s ease-in-out infinite;
          filter: blur(1px);
        }

        @keyframes water-tide {
          0% {
            transform: scaleY(0.8);
            opacity: 0.7;
          }
          50% {
            transform: scaleY(1.2);
            opacity: 1;
          }
          100% {
            transform: scaleY(0.8);
            opacity: 0.7;
          }
        }

        @keyframes water-shimmer {
          0% {
            background-position: -200% 0%;
          }
          50% {
            background-position: 200% 0%;
          }
          100% {
            background-position: -200% 0%;
          }
        }

        @keyframes foam-movement {
          0% {
            transform: translateX(-100px) scaleX(0.8);
            opacity: 0.5;
          }
          50% {
            transform: translateX(100px) scaleX(1.2);
            opacity: 1;
          }
          100% {
            transform: translateX(-100px) scaleX(0.8);
            opacity: 0.5;
          }
        }

        .sand-base {
          background: linear-gradient(180deg,
            #F7F9F8 0%,
            #E0C097 40%,
            #D4B085 100%
          );
        }
      `}</style>

      <footer className="relative overflow-hidden isolate z-0 sand-base" style={{ contain: 'layout style paint', transform: 'translateZ(0)' }}>
        {/* אפקט מים בחוף */}
        <div className="beach-water">
          <div className="foam"></div>
        </div>

        {/* אלמנטים דקורטיביים צפים */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ zIndex: 4 }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-calm/10 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-natural-brown/10 rounded-full blur-xl animate-float-slow-reverse"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-text-highlighted/8 rounded-full blur-lg breathe"></div>
          
          {/* נקודות אור נוספות */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-md breathe" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/5 w-20 h-20 bg-primary-calm/15 rounded-full blur-lg breathe" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* תוכן הפוטר */}
        <div className="container-custom relative" style={{ zIndex: 10 }}>
          
          {/* תוכן פתוח וזורם */}
          <div className="py-20 space-y-16">
            
            {/* כותרת מרכזית */}
            <div className="text-center space-y-4 fade-in">
              <h2 className="text-h1 font-display font-light text-text-highlighted">
                בואו נתחבר
              </h2>
              <p className="text-body-large text-text-dark/80 max-w-2xl mx-auto leading-relaxed">
                נשמח לשמוע מכם, לחלוק ולהזמין אתכם למסע של נוכחות והתפתחות
              </p>
            </div>

            {/* תוכן מחולק לאזורים זורמים */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              
              {/* אזור צור קשר */}
              <div className="space-y-8 fade-in">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-calm to-text-highlighted rounded-full flex items-center justify-center mx-auto breathe">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="text-h2 font-display font-light text-text-highlighted">
                    השאירו פניה
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    נשמח לשמוע ולעזור בכל שאלה או בקשה
                  </p>
                </div>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="השם שלכם"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-text-highlighted/30 focus:bg-white/90 transition-all duration-300 placeholder-text-dark/50"
                      required
                    />
                    <input
                      type="email"
                      placeholder="כתובת המייל"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-text-highlighted/30 focus:bg-white/90 transition-all duration-300 placeholder-text-dark/50"
                      required
                    />
                    <textarea
                      placeholder="איך נוכל לעזור לכם?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      rows={4}
                      className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-text-highlighted/30 focus:bg-white/90 transition-all duration-300 resize-none placeholder-text-dark/50"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isContactSubmitting}
                    className="w-full py-4 px-8 rounded-2xl text-white font-medium focus:outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #8B5A3C 0%, #A67C5A 50%, #8B5A3C 100%)',
                      boxShadow: '0 8px 25px rgba(139, 90, 60, 0.4)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    {isContactSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mx-auto" />
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <Send size={18} />
                        שליחת הודעה
                      </div>
                    )}
                  </button>
                </form>
              </div>

              {/* אזור ניוזלטר */}
              <div className="space-y-8 fade-in stagger-1">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-natural-brown to-primary-calm rounded-full flex items-center justify-center mx-auto breathe">
                    <Mail size={24} className="text-white" />
                  </div>
                  <h3 className="text-h2 font-display font-light text-text-highlighted">
                    ניוזלטר
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    עדכונים על אירועים, מדיטציות וחוויות מעוררות השראה
                  </p>
                </div>
                
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="כתובת המייל שלכם"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 focus:outline-none focus:ring-2 focus:ring-text-highlighted/30 focus:bg-white/90 transition-all duration-300 placeholder-text-dark/50"
                    required
                  />
                  
                  <button
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="w-full py-3 px-6 rounded-2xl font-medium focus:outline-none transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, #A8DADC 0%, #C8EAEC 100%)',
                      color: '#1a1a1a',
                      boxShadow: '0 4px 15px rgba(168, 218, 220, 0.3)'
                    }}
                  >
                    {isNewsletterSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mx-auto" />
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send size={16} />
                        הצטרפו לניוזלטר
                      </div>
                    )}
                  </button>
                </form>
                
                {/* פרטי יצירת קשר */}
                <div className="space-y-6 pt-8 border-t border-white/30">
                  <h4 className="text-lg font-display font-light text-text-highlighted text-center">
                    צרו קשר
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-text-dark/80 hover:text-text-highlighted transition-colors">
                      <Mail size={18} className="text-text-highlighted" />
                      <span>info@bemeditation.co.il</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-text-dark/80 hover:text-text-highlighted transition-colors">
                      <Phone size={18} className="text-text-highlighted" />
                      <span>050-123-4567</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-text-dark/80 hover:text-text-highlighted transition-colors">
                      <MapPin size={18} className="text-text-highlighted" />
                      <span>תל אביב, ישראל</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* אזור קישורים וניווט */}
              <div className="space-y-8 fade-in stagger-2">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-text-highlighted to-primary-calm rounded-full flex items-center justify-center mx-auto breathe">
                    <User size={24} className="text-white" />
                  </div>
                  <h3 className="text-h2 font-display font-light text-text-highlighted">
                    עקבו אחרינו
                  </h3>
                </div>
                
                {/* קישורים חברתיים */}
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="p-4 rounded-full bg-white/70 backdrop-blur-sm border border-white/60 hover:-translate-y-1 hover:scale-105 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent size={20} className="text-text-highlighted" />
                      </a>
                    );
                  })}
                </div>

                {/* מפת אתר */}
                <div className="space-y-6 pt-8 border-t border-white/30">
                  <h4 className="text-lg font-display font-light text-text-highlighted text-center">
                    מפת האתר
                  </h4>
                  <nav className="grid grid-cols-2 gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-center text-text-dark/70 py-2 px-4 rounded-xl hover:text-text-highlighted hover:bg-white/30 transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          {/* תחתית מעוצבת */}
          <div className="py-8 border-t border-white/30">
            <div className="text-center">
              <p className="text-text-dark/60 text-sm font-light">
                © 2024 Be Meditation. כל הזכויות שמורות.
              </p>
              <div className="mt-2 flex items-center justify-center gap-1">
                <div className="w-1 h-1 bg-primary-calm rounded-full breathe"></div>
                <div className="w-1 h-1 bg-natural-brown rounded-full breathe" style={{animationDelay: '1s'}}></div>
                <div className="w-1 h-1 bg-text-highlighted rounded-full breathe" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 