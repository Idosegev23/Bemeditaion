import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import MinimalQuote from './MinimalQuote';

const Footer = () => {
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
    { name: 'פייסבוק', icon: Facebook, href: '#' },
    { name: 'אינסטגרם', icon: Instagram, href: '#' },
    { name: 'מייל', icon: Mail, href: 'mailto:info@bemeditation.co.il' },
  ];

  return (
    <footer className="bg-soft-green border-t border-border-light">
      <div className="container-custom">
        {/* ציטוט מינימליסטי */}
        <div className="section-padding">
          <MinimalQuote />
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Logo and Description */}
          <div className="space-y-6 fade-in">
            <div>
              <div className="font-display text-2xl font-medium text-text-highlighted mb-2">
                Be Meditation
              </div>
              <div className="text-sm text-text-dark/60 font-light">
                להקשיב לרגע. לנשום. להיות.
              </div>
            </div>
            <p className="text-body-large text-text-dark/80 leading-relaxed border-accent">
              מרכז למדיטציה ופיתוח אישי. מדיטציות פעילות של אושו, סדנאות וריטריטים 
              במטרה ליצור מרחב של שקט, תנועה והתבוננות פנימית.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 fade-in stagger-1">
            <h3 className="text-h2 font-display font-medium text-text-highlighted">ניווט באתר</h3>
            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-dark hover:text-text-highlighted transition-colors duration-200 
                           text-sm py-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 fade-in stagger-2">
            <h3 className="text-h2 font-display font-medium text-text-highlighted">צרו קשר</h3>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-dark/80">
                <Mail size={16} className="text-text-highlighted" />
                <span className="text-sm">info@bemeditation.co.il</span>
              </div>
              <div className="flex items-center gap-3 text-text-dark/80">
                <Phone size={16} className="text-text-highlighted" />
                <span className="text-sm">050-123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-text-dark/80">
                <MapPin size={16} className="text-text-highlighted" />
                <span className="text-sm">תל אביב, ישראל</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-3 rounded-lg border border-border-light bg-white-panoramic 
                             hover:bg-text-highlighted hover:text-white-panoramic hover:border-text-highlighted
                             transition-all duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-border-light text-center">
          <p className="text-text-dark/60 text-sm">
            © 2024 Be Meditation. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 