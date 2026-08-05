import React, { useState } from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Logo />

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#vantagens" onClick={closeMenu}>Vantagens</a>
          <a href="#coberturas" onClick={closeMenu}>Coberturas</a>
          <a href="#faq" onClick={closeMenu}>Dúvidas Frequentes</a>
          <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
          <a
            href="#simulacao"
            className="nav-cta-btn"
            onClick={closeMenu}
          >
            Simulação Grátis
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;