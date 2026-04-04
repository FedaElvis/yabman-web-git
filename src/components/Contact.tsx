"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "UK",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", country: "UK", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name.toLowerCase().replace(" ", "")]: value }));
  };

  // Helper for input change with specific name
  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone Support",
      value: "0244789834",
      color: "var(--primary)"
    },
    {
      icon: <Mail size={24} />,
      label: "Email Address",
      value: "yabmanagency@gmail.com",
      color: "var(--secondary)"
    },
    // {
    //   icon: <MapPin size={24} />,
    //   label: "Office Address",
    //   value: "123 Travel Plaza, Downtown District, City 10101",
    //   color: "var(--accent)"
    // }
  ];

  return (
    <section id="contact" className="section" style={{ background: 'var(--background-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Start Your <span className="gradient-text">Journey Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            Have questions about visa requirements or available job openings? Send us a message, and our experts will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ marginBottom: '2rem' }}>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {contactInfo.map((info) => (
                <div key={info.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div 
                    style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '16px', 
                      background: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: info.color,
                      boxShadow: 'var(--shadow)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h5 style={{ margin: 0, color: 'var(--muted)', fontSize: '0.9rem' }}>{info.label}</h5>
                    <p style={{ margin: 0, fontWeight: 700, color: 'var(--secondary)' }}>{info.value}</p>
                    {/* <p style={{ margin: 0, fontWeight: 700 }}>
  {info.label === "Phone Support" ? (
    <a 
      href={`tel:${info.value}`} 
      style={{ color: 'var(--secondary)', textDecoration: 'none' }}
    >
      {info.value}
    </a>
  ) : info.label === "Email Address" ? (
    <a 
      href={`mailto:${info.value}`} 
      style={{ color: 'var(--secondary)', textDecoration: 'none' }}
    >
      {info.value}
    </a>
  ) : (
    <span style={{ color: 'var(--secondary)' }}>{info.value}</span>
  )}
</p> */}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--secondary)', borderRadius: '20px', color: 'white' }}>
              <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Business Hours</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 0 }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 0 }}>Saturday: 10:00 AM - 2:00 PM</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: 0 }}>Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
            style={{ padding: '3rem' }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Enter your name"
                  required
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--background)', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="name@email.com"
                  required
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--background)', outline: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Preferred Country</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--background)', outline: 'none' }}
                >
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={4} 
                  placeholder="Tell us about your goals..."
                  required
                  style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--background)', outline: 'none', resize: 'none' }}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="btn btn-primary" 
                style={{ marginTop: '1rem', padding: '1rem' }}
              >
                {status === "loading" ? <Loader2 size={24} className="spin" /> : status === "success" ? "Message Sent!" : status === "error" ? "Failed to Send" : "Send Message"}
                {status === "idle" && <Send size={24} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .spin { animation: rotate 1s linear infinite; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Contact;
