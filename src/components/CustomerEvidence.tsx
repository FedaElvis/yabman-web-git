"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Video } from "lucide-react";

const photos = [
  {
    src: "/yabman%20passport.jpeg",
    alt: "YABMAN client passport and travel documentation success",
    caption: "Visa & passport wins",
  },
  {
    src: "/yabman%20students.jpg",
    alt: "YABMAN students supported for study abroad",
    caption: "Student placements",
  },
  {
    src: "/yabman%20nurses.jpg",
    alt: "YABMAN healthcare and nursing job placements abroad",
    caption: "Healthcare & nursing roles",
  },
];

const videos = [
  {
    src: "/yabman%20vid%201.mp4",
    title: "Client story 1",
  },
  {
    src: "/yabman%20vid%202.mp4",
    title: "Client story 2",
  },
];

const CustomerEvidence = () => {
  return (
    <section
      id="evidence"
      className="section"
      style={{ background: "var(--background-alt)" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real Results,{" "}
            <span className="gradient-text">Real Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ maxWidth: "640px", margin: "0 auto" }}
          >
            Photos and videos from our work—so you can see the kind of outcomes
            we deliver before you get started.
          </motion.p>
        </div>

        <h3
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "1.25rem",
          }}
        >
          <Camera size={26} style={{ color: "var(--primary)" }} />
          Photo evidence
        </h3>
        <div
          className="grid grid-cols-3"
          style={{ marginBottom: "4rem" }}
        >
          {photos.map((item, index) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card"
              style={{ padding: 0, overflow: "hidden", margin: 0 }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  background: "var(--border)",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption
                style={{
                  padding: "1rem 1.25rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--foreground)",
                  margin: 0,
                }}
              >
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <h3
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "1.25rem",
          }}
        >
          <Video size={26} style={{ color: "var(--secondary)" }} />
          Video stories
        </h3>
        <div className="grid grid-cols-2">
          {videos.map((v, index) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
              style={{ padding: 0, overflow: "hidden" }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  background: "#0f172a",
                }}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "contain",
                  }}
                  title={v.title}
                >
                  <source src={v.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p
                style={{
                  padding: "1rem 1.25rem",
                  margin: 0,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {v.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerEvidence;
