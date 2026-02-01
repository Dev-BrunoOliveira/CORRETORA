import React from "react";
import "./App.css";

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
  return (
    <div className="app-shell">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5521999999999"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <svg width="35" height="35" fill="white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.487l-.729 2.661 2.728-.715c.947.518 2.026.814 3.175.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.488 8.163c-.15.424-.877.788-1.216.837-.301.043-.687.067-1.127-.087-.27-.094-.61-.225-1.042-.412-1.848-.797-3.04-2.684-3.132-2.806-.092-.123-.746-.992-.746-1.889 0-.897.47-1.336.638-1.541.168-.206.37-.258.492-.258s.246.002.353.007c.112.005.263-.043.413.318.15.361.514 1.25.56 1.341.045.092.076.199.015.318-.061.12-.092.195-.184.301-.092.106-.194.238-.277.319-.092.091-.188.19-.081.374.107.184.475.785 1.018 1.268.699.623 1.285.817 1.468.91.184.091.29.076.398-.047.107-.123.46-.534.582-.716.123-.182.246-.153.414-.092.168.061 1.072.506 1.256.598.184.092.306.138.35.215.043.076.043.44-.107.864z" />
        </svg>
      </a>

      <nav>
        <div className="logo" style={{ fontSize: "1.5rem" }}>
          PARABELLUM<span style={{ color: "var(--accent)" }}>CORRETORA</span>
        </div>
        <div className="nav-links">
          <span>Vantagens</span>
          <span>Coberturas</span>
          <span style={{ color: "var(--accent)" }}>Simulação</span>
        </div>
      </nav>

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
          <button className="btn-primary">Solicitar Orçamento Grátis</button>

          <div style={{ marginTop: "40px", display: "flex", gap: "40px" }}>
            <div>
              <h4 style={{ fontSize: "1.5rem" }}>+10k</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Clientes Atendidos
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: "1.5rem" }}>24h</h4>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Suporte Especializado
              </p>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="./public/familia.jpg"
            alt="Pai e bebê - Segurança Familiar"
            className="hero-image"
          />
        </div>
      </header>

      <div className="container-full">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "3rem",
            letterSpacing: "-2px",
          }}
        >
          O que entregamos
        </h2>

        <section className="plans-grid">
          <div className="plan-card">
            <h3
              style={{
                color: "var(--accent)",
                marginBottom: "25px",
                fontSize: "2rem",
              }}
            >
              Indenizações
            </h3>
            <ul style={{ listStyle: "none", display: "grid", gap: "18px" }}>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Morte (Natural/Acidental)
              </li>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Invalidez Permanente Total
              </li>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Doenças Graves Plus
              </li>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Diária de Internação
              </li>
            </ul>
          </div>

          <div className="plan-card">
            <h3
              style={{
                color: "var(--accent)",
                marginBottom: "25px",
                fontSize: "2rem",
              }}
            >
              Diferenciais
            </h3>
            <ul style={{ listStyle: "none", display: "grid", gap: "18px" }}>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Assistência Funeral Familiar
              </li>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Sorteios Mensais em Dinheiro
              </li>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Descontos em Farmácias
              </li>
              <li style={{ display: "flex", gap: "12px", fontSize: "1.2rem" }}>
                <IconCheck /> Segunda Opinião Médica
              </li>
            </ul>
          </div>
        </section>

        <footer
          style={{
            padding: "60px 0",
            textAlign: "center",
            borderTop: "1px solid var(--border-color)",
            color: "var(--text-muted)",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              color: "#fff",
              marginBottom: "10px",
              fontSize: "1.2rem",
            }}
          >
            PARABELLUM CORRETORA DE SEGUROS LTDA
          </p>
          <p>CNPJ: 54.907.611/0001-47</p>
          <p>R EVILASIO SILVA 34 - FONSECA | CEP: 24130-720</p>
          <p style={{ marginTop: "30px", opacity: 0.6 }}>
            © 2026 SeguraMind - Protegendo o seu amanhã.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
