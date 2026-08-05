import React from "react";

interface AdvantageItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

const advantagesList: AdvantageItem[] = [
  {
    icon: "⚖️",
    title: "Liquidez Imediata",
    description:
      "O capital segurado não entra em inventário judicial. A indenização é paga diretamente aos beneficiários em poucos dias, garantindo recurso financeiro rápido quando a família mais necessita.",
    tag: "Sem Burocracia",
  },
  {
    icon: "💰",
    title: "Isenção de Impostos",
    description:
      "Toda a indenização do seguro de vida é 100% isenta de Imposto de Renda e do ITCMD (imposto estadual sobre herança). Cada centavo contratado vai integralmente para sua família.",
    tag: "Economia Garantida",
  },
  {
    icon: "🏥",
    title: "Proteção Usufruída em Vida",
    description:
      "O seguro não é apenas para fatalidades. Você também pode receber indenização em vida em casos de diagnóstico de doenças graves ou incapacidade temporária/permanente por acidente.",
    tag: "Uso em Vida",
  },
];

const Advantages: React.FC = () => {
  return (
    <section id="vantagens" className="container-full">
      <div className="section-header">
        <span className="section-badge">DIFERENCIAIS</span>
        <h2 className="section-title">Por que ter um Seguro de Vida?</h2>
        <p className="section-subtitle">
          Entenda os benefícios estratégicos que fazem do seguro de vida o pilar de proteção patrimonial mais inteligente.
        </p>
      </div>

      <div className="plans-grid">
        {advantagesList.map((adv, index) => (
          <div key={index} className="plan-card advantage-card">
            <div className="card-tag">{adv.tag}</div>
            <div className="card-icon">{adv.icon}</div>
            <h3 className="card-title">{adv.title}</h3>
            <p className="card-text">{adv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;