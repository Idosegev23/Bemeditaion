'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // חלוקת פריטי הניווט לשתי קבוצות
  const leftNavItems = [
    { name: 'בית', href: '/' },
    { name: 'אירועים', href: '/events' },
    { name: 'מפגשים', href: '/meetings' },
  ];

  const rightNavItems = [
    { name: 'מדיטציות', href: '/meditations' },
    { name: 'גלריה', href: '/gallery' },
    { name: 'מאמרים', href: '/articles' },
  ];

  // כל הפריטים למובייל
  const allNavItems = [...leftNavItems, ...rightNavItems];

  return (
    <header className="header-new-container">
      {/* תמונת רקע עליונה עם תפריט בתחתית */}
      <div className="header-image-section">
        <Image
          src="/images/navbarbg.webp"
          alt="רקע עליון"
          fill
          className="header-background-image"
          priority
          style={{ objectFit: 'cover' }}
        />
        
        {/* תפריט ממוקם בחלק התחתון של התמונה */}
        <div className="header-navbar-section">
          <div className="header-navbar-content">
            {/* Desktop Navigation - שמאל */}
            <nav className="header-nav-desktop">
              {leftNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="header-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* ספייסר באמצע */}
            <div className="header-nav-spacer"></div>

            {/* Desktop Navigation - ימין */}
            <nav className="header-nav-desktop">
              {rightNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="header-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-mobile-button"
              aria-label="תפריט ניווט"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="header-mobile-menu">
              <nav className="header-mobile-nav">
                {allNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="header-mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 