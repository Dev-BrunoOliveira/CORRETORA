import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="#" className="logo-brand">
      <div className="logo-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
      <div className="logo-text">
        PARABELLUM<span>CORRETORA</span>
      </div>
    </a>
  );
};

export default Logo;