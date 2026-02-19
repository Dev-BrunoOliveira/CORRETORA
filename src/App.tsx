import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const IconCheck = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#06b6d4"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const App: React.FC = () => {
  const [valorCobertura, setValorCobertura] = useState(500000);

  return (
    <div className="app-shell">
      <a
        href="https://wa.me/message/XDBZLY2ZNU27H1"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="35" height="35" fill="white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.487l-.729 2.661 2.728-.715c.947.518 2.026.814 3.175.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.488 8.163c-.15.424-.877.788-1.216.837-.301.043-.687.067-1.127-.087-.27-.094-.61-.225-1.042-.412-1.848-.797-3.04-2.684-3.132-2.806-.092-.123-.746-.992-.746-1.889 0-.897.47-1.336.638-1.541.168-.206.37-.258.492-.258s.246.002.353.007c.112.005.263-.043.413.318.15.361.514 1.25.56 1.341.045.092.076.199.015.318-.061.12-.092.195-.184.301-.092.106-.194.238-.277.319-.092.091-.188.19-.081.374.107.184.475.785 1.018 1.268.699.623 1.285.817 1.468.91.184.091.29.076.398-.047.107-.123.46-.534.582-.716.123-.182.246-.153.414-.092.168.061 1.072.506 1.256.598.184.092.306.138.35.215.043.076.043.44-.107.864z" />
        </svg>
      </a>

      <Navbar />

      <header className="hero">
        <div className="hero-content">
          <h1>
            Sua família segura, <br />
            <span>seu legado protegido.</span>
          </h1>
          <p>
            Não deixe o futuro ao acaso. Proteja quem você ama com o seguro de
            vida mais completo e transparente do Brasil.
          </p>
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("simulacao")?.scrollIntoView()
            }
          >
            Solicitar Orçamento Grátis
          </button>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>+10k</h4>
              <p>Clientes Atendidos</p>
            </div>
            <div className="stat-item">
              <h4>24h</h4>
              <p>Suporte Especializado</p>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/familia.webp" alt="Família Segura" className="hero-image" />
        </div>
      </header>

      <section id="vantagens" className="container-full">
        <h2 className="section-title">Por que nos escolher?</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3 className="card-title">Liquidez Imediata</h3>
            <p className="card-text">
              O seguro de vida não entra em inventário, garantindo dinheiro na
              mão da família quando eles mais precisam.
            </p>
          </div>
          <div className="plan-card">
            <h3 className="card-title">Isenção de Impostos</h3>
            <p className="card-text">
              Todo capital segurado é isento de Imposto de Renda e ITCMD,
              protegendo 100% do valor para seus herdeiros.
            </p>
          </div>
        </div>
      </section>

      <section id="coberturas" className="container-full">
        <h2 className="section-title">O que entregamos</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3 className="card-title">Indenizações</h3>
            <ul className="feature-list">
              <li>
                <IconCheck /> Morte (Natural/Acidental)
              </li>
              <li>
                <IconCheck /> Invalidez Permanente Total
              </li>
              <li>
                <IconCheck /> Doenças Graves Plus
              </li>
              <li>
                <IconCheck /> Diária de Internação
              </li>
            </ul>
          </div>

          <div className="plan-card">
            <h3 className="card-title">Assistências</h3>
            <ul className="feature-list">
              <li>
                <IconCheck /> Assistência Funeral Familiar
              </li>
              <li>
                <IconCheck /> Sorteios Mensais em Dinheiro
              </li>
              <li>
                <IconCheck /> Descontos em Farmácias
              </li>
              <li>
                <IconCheck /> Segunda Opinião Médica
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="simulacao" className="container-full">
        <div className="plan-card simulation-card">
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Simule sua proteção
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
            Ajuste o valor que deseja deixar para sua família e veja como é
            acessível estar protegido.
          </p>

          <div style={{ margin: "40px 0" }}>
            <label
              style={{
                display: "block",
                fontSize: "1.2rem",
                marginBottom: "10px",
              }}
            >
              Capital Segurado:{" "}
              <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
                R$ {valorCobertura.toLocaleString("pt-BR")}
              </span>
            </label>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="50000"
              value={valorCobertura}
              onChange={(e) => setValorCobertura(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Seu Nome" className="input-style" />
            <input
              type="tel"
              placeholder="Seu WhatsApp"
              className="input-style"
            />
          </div>

          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: "30px" }}
            onClick={() =>
              window.open(
                `https://wa.me/message/XDBZLY2ZNU27H1?text=Olá! Fiz uma simulação no site e gostaria de uma proposta para cobertura de R$ ${valorCobertura.toLocaleString("pt-BR")}`,
              )
            }
          >
            Enviar Simulação por WhatsApp
          </button>
        </div>
      </section>

      <footer className="footer-main">
        <p className="footer-brand">PARABELLUM CORRETORA DE SEGUROS LTDA</p>
        <p>CNPJ: 54.907.611/0001-47</p>
        <p>R EVILASIO SILVA 34 - FONSECA | CEP: 24130-720</p>
        <p className="footer-copy">© 2026 PARABELLUM CORRETORA.</p>
      </footer>
    </div>
  );
};

export default App;
