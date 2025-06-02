'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'בית', href: '/' },
    { name: 'אירועים', href: '/events' },
    { name: 'מפגשים', href: '/meetings' },
    { name: 'מדיטציות', href: '/meditations' },
    { name: 'גלריה', href: '/gallery' },
    { name: 'מאמרים', href: '/articles' },
    { name: 'צרו קשר', href: '/contact' },
  ];

  return (
    <header className="navbar-container">
      {/* תמונת רקע */}
      <div className="navbar-background">
        <Image
          src="/images/nbbg.png"
          alt="רקע נאב בר"
          fill
          className="navbar-background-image"
          priority
          style={{ objectFit: 'cover' }}
        />
        {/* שכבת overlay עדינה */}
        <div className="navbar-overlay"></div>
      </div>

      <div className="navbar-content">
        {/* לוגו וטקסט - מימין */}
        <Link href="/" className="navbar-logo-section">
          <div className="navbar-logo">
            <Image
              src="/images/rnd_logo.png"
              alt="לוגו Be Meditation"
              width={60}
              height={60}
              className="navbar-logo-image"
              priority
            />
          </div>
          <div className="navbar-logo-text">
            Be Meditation
          </div>
        </Link>

        {/* Desktop Navigation - משמאל */}
        <nav className="navbar-nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="navbar-nav-link"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="navbar-mobile-button"
          aria-label="תפריט ניווט"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <nav className="navbar-mobile-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="navbar-mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 