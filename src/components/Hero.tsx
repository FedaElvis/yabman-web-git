"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(13, 71, 161, 0.05) 0%, rgba(27, 94, 32, 0.05) 100%)',
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
                background: 'rgba(27, 94, 32, 0.1)',
                color: 'var(--primary)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                border: '1px solid rgba(27, 94, 32, 0.2)'
              }}
            >
              <Globe size={16} /> Trusted Visa Experts
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
                width: '100%', 
                aspectRatio: '1/1', 
                background: 'linear-gradient(225deg, var(--secondary) 0%, var(--primary) 100%)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* This is a placeholder for a rich visual - I will use a generated image if needed, but for now a gradient blob looks premium */}
               <div style={{ padding: '4rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                  <h3 style={{ color: 'white', fontSize: '2.5rem' }}>Travel with Ease</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>We handle the paperwork, you handle the luggage.</p>
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
