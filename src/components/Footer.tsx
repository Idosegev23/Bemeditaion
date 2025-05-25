import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';

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
    <footer className="bg-primary/10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              Be Meditation
            </div>
            <p className="text-text-light text-sm leading-relaxed">
              מרכז למדיטציה ופיתוח אישי. מדיטציות פעילות של אושו, סדנאות וריטריטים 
              במטרה ליצור מרחב של שקט, תנועה והתבוננות.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-dark">ניווט באתר</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-light hover:text-primary transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-dark">צרו קשר</h3>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-text-light hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
            <div className="text-sm text-text-light space-y-1">
              <p>info@bemeditation.co.il</p>
              <p>050-123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-light text-sm">
            © 2024 Be Meditation. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 