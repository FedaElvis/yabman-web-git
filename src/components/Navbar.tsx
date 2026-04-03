"use client";

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`glass`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.8rem 0' : '1.2rem 0',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'var(--glass)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              style={{ fontWeight: 600, color: 'var(--secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--secondary)')}
            >
              {link.name}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Book Consultation
          </Link>
        </div>

        {/* Mobile menu toggle (simple implementation) */}
        <button 
          className="mobile-toggle" 
          style={{ display: 'none' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Add hamburger icon here if needed */}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
