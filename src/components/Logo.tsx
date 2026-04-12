import React from "react";
import Image from "next/image";

const LOGO_SRC = "/yabman%20logo.jpeg";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`logo-container ${className}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
      }}
    >
      <Image
        src={LOGO_SRC}
        alt="YABMAN Travel and Tour Agency"
        width={200}
        height={200}
        priority
        style={{
          height: "52px",
          width: "auto",
          maxWidth: "min(200px, 48vw)",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Logo;
