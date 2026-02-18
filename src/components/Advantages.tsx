import React from "react";

const Advantages: React.FC = () => {
  return (
    <section id="vantagens" className="container-full">
      <h2 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "3rem", letterSpacing: "-2px" }}>
        Vantagens de se proteger
      </h2>
      
      <div className="plans-grid">
        <div className="plan-card">
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>⚖️</div>
          <h3 style={{ color: "var(--accent)", marginBottom: "15px" }}>Liquidez Imediata</h3>
          <p style={{ color: "var(--text-muted)" }}>
            O valor do seguro não entra em inventário, garantindo recurso rápido para a família 
            sem burocracia judicial.
          </p>
        </div>

        <div className="plan-card">
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>💰</div>
          <h3 style={{ color: "var(--accent)", marginBottom: "15px" }}>Isenção de Impostos</h3>
          <p style={{ color: "var(--text-muted)" }}>
            A indenização do seguro de vida é isenta de Imposto de Renda e de ITCMD (imposto de herança).
          </p>
        </div>

        <div className="plan-card">
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🏥</div>
          <h3 style={{ color: "var(--accent)", marginBottom: "15px" }}>Proteção em Vida</h3>
          <p style={{ color: "var(--text-muted)" }}>
            Você também pode usar o seguro para custear tratamentos de doenças graves ou em caso 
            de invalidez por acidente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;