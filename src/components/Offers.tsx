"use client";

import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Award, HeartHandshake } from "lucide-react";

const offers = [
  {
    title: "Visa Before Payment",
    description: "Get your visa approved before making full payment. Terms and conditions apply.",
    icon: <Award size={32} style={{ color: 'var(--primary)' }} />,
    tag: "T&C Apply"
  },
  {
    title: "Direct Payments",
    description: "Flexible payment plans on an installment basis to suit your financial situation.",
    icon: <CreditCard size={32} style={{ color: 'var(--secondary)' }} />,
    tag: "Installments"
  },
  {
    title: "Work & Pay",
    description: "Pay for your processing through your earnings once you start working. Terms and conditions apply.",
    icon: <HeartHandshake size={32} style={{ color: 'var(--accent)' }} />,
    tag: "T&C Apply"
  },
  {
    title: "Half Sponsorship",
    description: "Get up to 50% sponsorship on your travel and visa processing costs.",
    icon: <CheckCircle size={32} style={{ color: 'var(--primary)' }} />,
    tag: "50% Off"
  }
];

const Offers = () => {
  return (
    <section id="offers" className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Exclusive <span className="gradient-text">Offers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            We provide flexible financial solutions and premium packages to make your global dreams a reality.
          </motion.p>
        </div>

        <div className="grid grid-cols-4">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '-2rem',
                  background: 'var(--accent)',
                  color: 'black',
                  padding: '0.2rem 2.5rem',
                  transform: 'rotate(45deg)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              >
                {offer.tag}
              </div>
              <div style={{ marginBottom: '1.5rem' }}>{offer.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--secondary)' }}>{offer.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
