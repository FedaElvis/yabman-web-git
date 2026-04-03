import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="var(--primary)" />
        <path d="M12 28L20 12L28 28H12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="4" stroke="var(--accent)" strokeWidth="2" />
      </svg>
      <span style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--secondary)', letterSpacing: '-0.03em' }}>
        YABMAN<span style={{ color: 'var(--primary)' }}>.</span>
      </span>
    </div>
  );
};

export default Logo;
