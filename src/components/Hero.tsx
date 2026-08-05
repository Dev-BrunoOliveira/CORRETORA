import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot"></span>
          Seguro de Vida com Liquidez Imediata
        </div>

        <h1>
          Sua família segura, <br />
          <span className="text-gradient">seu legado protegido.</span>
        </h1>

        <p className="hero-description">
          Não deixe o futuro ao acaso. Proteja quem você ama com o seguro de
          vida mais completo, transparente e acessível do Brasil.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("simulacao")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Solicitar Orçamento Grátis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          
          <a
            href="#vantagens"
            className="btn-secondary"
          >
            Conhecer Vantagens
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h4>+10k</h4>
            <p>Famílias Protegidas</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h4>24h</h4>
            <p>Atendimento Dedicado</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Isento de Imposto</p>
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
              <strong>Proteção Garantida</strong>
              <span>Sem burocracia nem inventário</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
