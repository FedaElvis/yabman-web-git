"use client";

import { motion } from "framer-motion";
import { Laptop, ShoppingCart, Truck, HardHat, Heart } from "lucide-react";

const jobCategories = [
  {
    title: "Office & Administrative",
    icon: <Laptop size={22} />,
    roles: ["Accounts", "IT Support Staff", "Office Admin", "Customer Service"],
    color: "#1e3a8a"
  },
  {
    title: "Retail & Sales",
    icon: <ShoppingCart size={22} />,
    roles: ["Cashier", "Sales Executive", "Storekeeper"],
    color: "#ea580c"
  },
  {
    title: "Logistics & Warehouse",
    icon: <Truck size={22} />,
    roles: ["Warehouse Staff", "Warehouse Supervisor", "Storekeeper"],
    color: "#2563eb"
  },
  {
    title: "Industrial & Labor",
    icon: <HardHat size={22} />,
    roles: ["Factory Work", "Food Packaging", "Construction"],
    color: "#f59e0b"
  },
  {
    title: "Transport & Security",
    icon: <ShieldCheck size={22} />,
    roles: ["Driving", "Security Guard"],
    color: "#1d4ed8"
  },
  {
    title: "Healthcare & Support",
    icon: <Heart size={22} />,
    roles: ["Caregiver"],
    color: "#fb923c"
  }
];

// Helper to provide specific icons for categories - but I'll use simple checkmarks for roles
import { ShieldCheck, Check } from "lucide-react";

const Jobs = () => {
  return (
    <section id="jobs" className="section" style={{ background: 'var(--background)', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
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
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Choose from a wide variety of roles across different sectors in our partner countries.
          </motion.p>
        </div>

        <div className="grid grid-cols-3" style={{ gap: '1rem' }}>
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card glass"
              style={{ padding: '1.15rem 1.25rem', height: '100%', borderTop: `3px solid ${category.color}` }}
            >
              <div 
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'rgba(0,0,0,0.03)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: category.color,
                  marginBottom: '0.85rem'
                }}
              >
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.65rem', color: 'var(--secondary)', lineHeight: 1.25 }}>{category.title}</h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {category.roles.map((role) => (
                  <li key={role} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', lineHeight: 1.35 }}>
                    <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} /> {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            Book Consultation for Jobs
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Jobs;
