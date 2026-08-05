import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Proteção simples e sem burocracia
        </div>

        <h1>
          Tranquilidade para você viver bem, <br />
          <span className="text-gradient">segurança para quem você ama.</span>
        </h1>

        <p className="hero-description">
          Garanta um apoio financeiro rápido para sua família sem precisar de inventário ou complicação. Faça uma simulação em segundos e veja como cabe no seu bolso.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("simulacao")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Simular no WhatsApp Grátis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          
          <a
            href="#vantagens"
            className="btn-secondary"
          >
            Como Funciona
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h4>+10 mil</h4>
            <p>Famílias Protegidas</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h4>Atendimento</h4>
            <p>Rápido no WhatsApp</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Livre de Impostos</p>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <img
            src="/familia.webp"
            alt="Família sorrindo junta em ambiente acolhedor transmitindo segurança e tranquilidade"
            className="hero-image"
          />
          <div className="hero-glass-card">
            <div className="glass-icon">🛡️</div>
            <div>
              <strong>Proteção de Verdade</strong>
              <span>Sem burocracia nem surpresas na mensalidade</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
