"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Calendar } from "lucide-react";

const jobs = [
  {
    title: "Registered Nurses (RN)",
    location: "UK & USA",
    salary: "$45,000 - $85,000",
    type: "Full-time",
    requirements: "Degree in Nursing, 2+ years experience, IELTS/OET",
    icon: "🏥"
  },
  {
    title: "Construction Workers",
    location: "Germany",
    salary: "€3,000 - €5,500 monthly",
    type: "Contract",
    requirements: "Trade certification, 3+ years experience, basic German",
    icon: "🏗️"
  },
  {
    title: "Hospitality & Tourism Staff",
    location: "USA (J-1/H-2B)",
    salary: "$15 - $25 hourly",
    type: "Seasonal/Full-time",
    requirements: "Service experience, friendly attitude, good English",
    icon: "🏨"
  },
  {
    title: "Tech & Software Engineers",
    location: "Canada & Germany",
    salary: "$70,000 - $120,000",
    type: "Remote/Hybrid",
    requirements: "CS Degree/Code Bootcamp, 3+ years experience",
    icon: "💻"
  }
];

const Jobs = () => {
  return (
    <section id="jobs" className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Direct <span className="gradient-text">Job Placements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Explore featured opportunities across sectors. Our agency bridges the gap between international employers and skilled talent.
          </motion.p>
        </div>

        <div className="grid grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card glass"
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', borderStyle: 'dashed' }}
            >
              <div style={{ fontSize: '3rem', background: 'white', padding: '1.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                {job.icon}
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--secondary)' }}>{job.title}</h3>
                
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                    <MapPin size={14} style={{ color: 'var(--primary)' }} /> {job.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                    <DollarSign size={14} style={{ color: 'var(--primary)' }} /> {job.salary}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                    <Calendar size={14} style={{ color: 'var(--primary)' }} /> {job.type}
                  </div>
                </div>
                
                <p style={{ fontSize: '0.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  <strong>Requirements:</strong> {job.requirements}
                </p>
                
                <button className="btn btn-outline" style={{ padding: '0.4rem 1.2rem', fontSize: '0.8rem' }}>
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary">
            Explore All 50+ Roles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
