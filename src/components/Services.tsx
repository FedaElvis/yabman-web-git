"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, MapPin } from "lucide-react";

const majorDestinations = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    description: "Health & Care, Skilled Worker, Student Visas.",
    color: "#00247D"
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    description: "Express Entry, PNP, Work & Study Permits.",
    color: "#FF0000"
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    description: "Skilled Migration, Working Holiday, Student Permits.",
    color: "#00008B"
  },
  {
    country: "New Zealand",
    flag: "🇳🇿",
    description: "Employer-Led Work, Essential Skills, Residency.",
    color: "#012169"
  }
];

const schengenCountries = [
  "Germany", "Netherlands", "Switzerland", "Sweden", "Malta", "Croatia", "Poland", 
  "Luxembourg", "Romania", "Finland", "Turkey", "Italy", "Slovakia", 
  "Czech Republic", "Lithuania", "Portugal", "Austria", "Belgium"
];

const Services = () => {
  return (
    <section id="services" className="section" style={{ background: 'var(--background-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Global <span className="gradient-text">Destinations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            We specialize in visa processing and job placements for the world's most sought-after countries.
          </motion.p>
        </div>

        {/* Major Destinations */}
        <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Globe size={28} style={{ color: 'var(--primary)' }} /> Featured Countries
        </h3>
        <div className="grid grid-cols-4" style={{ marginBottom: '5rem' }}>
          {majorDestinations.map((dest, index) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ borderTop: `4px solid ${dest.color}` }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{dest.flag}</div>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--secondary)' }}>{dest.country}</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{dest.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Schengen Countries */}
        <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <ShieldCheck size={28} style={{ color: 'var(--secondary)' }} /> Schengen Zone Services
        </h3>
        <div 
          className="glass" 
          style={{ 
            padding: '3rem', 
            borderRadius: '24px', 
            background: 'white', 
            boxShadow: 'var(--shadow)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {schengenCountries.map((country, index) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.8rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--muted)'
              }}
            >
              <MapPin size={16} style={{ color: 'var(--primary)' }} /> {country}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
