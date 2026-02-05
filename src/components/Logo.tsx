import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
      PARABELLUM<span style={{ color: "var(--accent)" }}>CORRETORA</span>
    </div>
  );
};

export default Logo;