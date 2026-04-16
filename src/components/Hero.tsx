"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, CheckCircle } from "lucide-react";

const HERO_IMAGE = "/yabman%20logo.jpeg";

const Hero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(194, 65, 12, 0.1) 0%, rgba(251, 146, 60, 0.12) 100%)',
        padding: '100px 0 60px',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Orbs */}
      <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', background: 'var(--primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'var(--secondary)', opacity: 0.1, filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="badge" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(251, 191, 36, 0.25)',
                color: 'var(--primary)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                border: '1px solid rgba(194, 65, 12, 0.25)'
              }}
            >
              <Globe size={16} /> Expert Assist In Visa Processing
            </span>
            
            <h1 style={{ marginBottom: '1.5rem' }}>
              Your Bridge to <span className="gradient-text">Global Opportunities</span>
            </h1>
            
            <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem' }}>
              YABMAN TRAVEL AND TOUR AGENCY specializes in seamless working visa processing and job placements across the UK, USA, Canada, and Germany. Start your international career today.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Start My Application <ArrowRight size={20} />
              </Link>
              <Link href="#services" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
                View Services
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Fast Processing</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={18} style={{ color: 'var(--primary)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>95% Success Rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ position: 'relative' }}
          >
            <div 
              style={{ 
                position: 'relative',
                width: '100%', 
                aspectRatio: '1/1', 
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <Image
                src={HERO_IMAGE}
                alt="YABMAN clients with successful travel documentation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(124, 45, 18, 0.82) 0%, rgba(124, 45, 18, 0.15) 50%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2.5rem',
                  pointerEvents: 'none',
                }}
              >
                <h3 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.5rem' }}>Travel with Ease</h3>
                <p style={{ color: 'rgba(255,255,255,0.88)', marginBottom: 0, fontSize: '1rem' }}>We handle the paperwork, you handle the luggage.</p>
              </div>
            </div>
            
            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="card glass"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                padding: '1.5rem',
                borderRadius: '20px',
                zIndex: 2,
                maxWidth: '200px'
              }}
            >
              <h4 style={{ margin: 0, color: 'var(--primary)' }}>500+</h4>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Visas Approved this year</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
