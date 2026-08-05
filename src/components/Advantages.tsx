import React from "react";

interface AdvantageItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

const advantagesList: AdvantageItem[] = [
  {
    icon: "⚡",
    title: "Dinheiro Rápido na Conta",
    description:
      "Se o pior acontecer, a família não precisa esperar processo na justiça ou inventário. O dinheiro cai direto na conta de quem você escolher em poucos dias para pagar contas e manter a rotina.",
    tag: "Sem Enrolação",
  },
  {
    icon: "💰",
    title: "100% Livre de Impostos",
    description:
      "Nem o Governo nem o Imposto de Renda tiram nada desse valor. O dinheiro contratado vai integralmente para sua família, sem nenhum desconto de imposto sobre herança.",
    tag: "Valor Integral",
  },
  {
    icon: "🏥",
    title: "Você Também Usa em Vida",
    description:
      "O seguro não é só pra quando você faltar! Se você for diagnosticado com uma doença grave ou precisar parar de trabalhar por conta de um acidente, você recebe o dinheiro em vida para se cuidar.",
    tag: "Ajuda em Vida",
  },
];

const Advantages: React.FC = () => {
  return (
    <section id="vantagens" className="container-full">
      <div className="section-header">
        <span className="section-badge">POR QUE TER?</span>
        <h2 className="section-title">O que faz o seguro valer a pena?</h2>
        <p className="section-subtitle">
          Muito mais do que uma proteção para o futuro: uma ajuda financeira de verdade nos momentos que você mais precisa.
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