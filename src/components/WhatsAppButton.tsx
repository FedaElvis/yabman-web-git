"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "0555983716";
  const message = "Hello YABMAN, I'm interested in your visa services. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '64px',
        height: '64px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
        zIndex: 5000,
        textDecoration: 'none'
      }}
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <div 
        style={{
          position: 'absolute',
          right: '80px',
          backgroundColor: 'white',
          color: 'black',
          padding: '8px 16px',
          borderRadius: '12px',
          fontSize: '0.85rem',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          pointerEvents: 'none',
          border: '1px solid #eee'
        }}
        className="wa-tooltip"
      >
        Chat with us!
      </div>
      
      <style jsx>{`
        .wa-tooltip { opacity: 0; transform: translateX(10px); transition: all 0.3s ease; }
        a:hover .wa-tooltip { opacity: 1; transform: translateX(0); }
      `}</style>
    </motion.a>
  );
};

export default WhatsAppButton;
