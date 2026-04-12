"use client";

import Logo from "./Logo";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Contact Us", href: "#contact" },
        { name: "Privacy Policy", href: "#" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "UK Working Visas", href: "#services" },
        { name: "USA H-1B Permits", href: "#services" },
        { name: "Canada Residency", href: "#services" },
        { name: "Germany Blue Card", href: "#services" }
      ]
    },
    {
      title: "Popular Jobs",
      links: [
        { name: "Nursing Jobs", href: "#jobs" },
        { name: "Engineering Roles", href: "#jobs" },
        { name: "Hospitality Staff", href: "#jobs" },
        { name: "Tech Careers", href: "#jobs" }
      ]
    }
  ];

  return (
    <footer style={{ background: 'var(--primary)', color: 'white', padding: '6rem 0 2rem' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ gap: '4rem', marginBottom: '4rem' }}>
          <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Logo />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              Your leading partner for international career advancement and visa processing. Empowering your global dreams.
            </p>
            <div style={{ display: 'flex', gap: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
              <Link href="#"><Facebook size={20} /></Link>
              <Link href="#"><Twitter size={20} /></Link>
              <Link href="#"><Instagram size={20} /></Link>
              <Link href="#"><Linkedin size={20} /></Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem' }}>{group.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            &copy; {currentYear} YABMAN TRAVEL AND TOUR AGENCY. All rights reserved. Registered Overseas Recruitment Partner #12345.
          </p>
          <div style={{ display: 'flex', gap: '2rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Shield</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
