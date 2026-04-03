"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    location: "London, UK",
    quote: "Yabman Travel changed my life. They handled my Tier 2 visa flawlessly and now I'm working as a Senior Nurse in London.",
    image: "/avatar1.png"
  },
  {
    name: "Jane Smith",
    location: "Toronto, Canada",
    quote: "The Express Entry process was daunting, but Yabman's experts guided me at every step. Highly recommended for Canadian migration.",
    image: "/avatar2.png"
  },
  {
    name: "Samuel Mensah",
    location: "Berlin, Germany",
    quote: "Fast, reliable, and professional. I got my Blue Card within 3 months thanks to their efficient processing.",
    image: "/avatar3.png"
  }
];

const Testimonials = () => {
  return (
    <section className="section" style={{ background: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Hear from our clients who have successfully started their international careers with our help.
          </motion.p>
        </div>

        <div className="grid grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card glass"
              style={{ padding: '3rem 2rem 2rem', position: 'relative' }}
            >
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '-20px', 
                  left: '2rem', 
                  background: 'var(--primary)', 
                  padding: '0.8rem', 
                  borderRadius: '50%', 
                  color: 'white',
                  boxShadow: 'var(--shadow)'
                }}
              >
                <Quote size={20} />
              </div>
              
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', minHeight: '80px' }}>
                "{testimonial.quote}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>{testimonial.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
