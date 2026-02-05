import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Logo />
      <div className="nav-links">
        <a href="#vantagens"><span>Vantagens</span></a>
        <a href="#coberturas"><span>Coberturas</span></a>
        <a href="#simulacao">
          <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
            Simulação
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;