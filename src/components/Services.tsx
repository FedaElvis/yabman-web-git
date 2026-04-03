"use client";

import { motion } from "framer-motion";
import { CreditCard, Briefcase, GraduationCap, MapPin } from "lucide-react";

const services = [
  {
    country: "UK",
    flag: "🇬🇧",
    description: "Expert assistance for UK Health & Care worker visas, skilled worker visas, and student permits. Quick turnaround with high success rates.",
    tags: ["Health & Care", "Skilled Worker", "Student"]
  },
  {
    country: "USA",
    flag: "🇺🇸",
    description: "H-1B, L-1, and J-1 visa processing expert services. We help with documentation, interview preparation, and employer filing.",
    tags: ["Work Permits", "Exchange Programs", "Business"]
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    description: "Express Entry, Provincial Nominee Programs (PNP), and student permit specialist. Your reliable path to Canadian residency.",
    tags: ["Express Entry", "Work Permits", "Study"]
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    description: "Blue Card (EU) and job seeker visa processing for skilled professionals. We bridge your path to Europe's largest economy.",
    tags: ["Blue Card", "Job Seeker", "Training"]
  }
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
            Visa <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            We provide expert guidance and full support for visa applications to the most sought-after global destinations.
          </motion.p>
        </div>

        <div className="grid grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.country}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.flag}</div>
              <h3 style={{ marginBottom: '1rem' }}>{service.country} Visa</h3>
              <p style={{ fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem' }}>{service.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.tags.map(tag => (
                  <span 
                    key={tag}
                    style={{
                      background: 'rgba(13, 71, 161, 0.05)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--secondary)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
