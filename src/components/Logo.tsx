import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="#" className="logo-brand">
      <div className="logo-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9.5 7.5h3.5a2.25 2.25 0 0 1 0 4.5h-3.5v-4.5z" />
          <path d="M9.5 12v4.5" />
        </svg>
      </div>
      <div className="logo-text">
        PROTECTUS<span>CORRETORA</span>
      </div>
    </a>
  );
};

export default Logo;