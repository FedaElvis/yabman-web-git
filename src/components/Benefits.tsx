"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Handshake, Headphones } from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck size={40} style={{ color: 'var(--primary)' }} />,
    title: "100% Transparency",
    description: "No hidden fees or unexpected costs. We provide a clear breakdown of every step in your application process."
  },
  {
    icon: <Zap size={40} style={{ color: 'var(--secondary)' }} />,
    title: "Fast-Track Processing",
    description: "Our direct partnerships with employers and legal experts ensure the fastest possible processing times."
  },
  {
    icon: <Handshake size={40} style={{ color: 'var(--secondary)' }} />,
    title: "Expert Guidance",
    description: "Personalized support from certified visa consultants who understand the specific requirements of each region."
  },
  {
    icon: <Headphones size={40} style={{ color: 'var(--primary)' }} />,
    title: "24/7 Support",
    description: "From your first inquiry to your first day on the job abroad, we are with you every step of the way."
  }
];

const Benefits = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--background-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="gradient-text">YABMAN?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            We don't just process visas; we build futures. Our commitment to excellence set us apart as a leader in global talent placement.
          </motion.p>
        </div>

        <div className="grid grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div 
                style={{ 
                  margin: '0 auto 1.5rem', 
                  width: '80px', 
                  height: '80px', 
                  background: 'white', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow)',
                  border: '1px solid var(--border)'
                }}
              >
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{benefit.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
