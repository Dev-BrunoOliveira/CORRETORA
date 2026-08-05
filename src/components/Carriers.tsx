import React from "react";

const carriers = [
  { name: "Porto Seguro", badge: "Parceiro Oficial" },
  { name: "SulAmérica", badge: "Parceiro Oficial" },
  { name: "Bradesco Seguros", badge: "Parceiro Oficial" },
  { name: "Prudential", badge: "Parceiro Oficial" },
  { name: "MAG Seguros", badge: "Parceiro Oficial" },
  { name: "Mapfre", badge: "Parceiro Oficial" },
  { name: "MetLife", badge: "Parceiro Oficial" },
];

const Carriers: React.FC = () => {
  return (
    <section className="carriers-section">
      <div className="container-full">
        <p className="carriers-label">
          Trabalhamos em parceria com as maiores e mais sólidas seguradoras do mercado brasileiro
        </p>
        <div className="carriers-grid">
          {carriers.map((carrier, index) => (
            <div key={index} className="carrier-badge">
              <span className="carrier-shield">🛡️</span>
              <span className="carrier-name">{carrier.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carriers;
