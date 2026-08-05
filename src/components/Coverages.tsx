import React from "react";

const IconCheck = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#06b6d4"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check-icon"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Coverages: React.FC = () => {
  return (
    <section id="coberturas" className="container-full bg-surface">
      <div className="section-header">
        <span className="section-badge">TUDO O QUE ESTÁ INCLUSO</span>
        <h2 className="section-title">Proteção completa para o seu dia a dia</h2>
        <p className="section-subtitle">
          Entenda de forma simples e direta o que o seu plano garante para você e sua família:
        </p>
      </div>

      <div className="plans-grid">
        <div className="plan-card coverage-card highlight">
          <div className="card-header">
            <div className="coverage-badge">DINHEIRO NA CONTA</div>
            <h3 className="card-title">Pagamentos em Dinheiro</h3>
            <p className="card-desc">Valores depositados diretamente na conta em caso de necessidade:</p>
          </div>

          <ul className="feature-list">
            <li>
              <IconCheck />
              <div>
                <strong>Apoio por Morte (Qualquer Causa)</strong>
                <span>Valor pago integralmente para quem você escolher como beneficiário.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Afastamento por Acidente</strong>
                <span>Receba indenização se um acidente te impedir temporária ou permanentemente de trabalhar.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Doenças Graves (Câncer, Infarto, AVC)</strong>
                <span>Receba o dinheiro em vida no momento do diagnóstico para pagar tratamentos e remédios.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Diária por Internação no Hospital</strong>
                <span>Ajuda em dinheiro por dia que você precisar ficar internado se recuperando.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="plan-card coverage-card">
          <div className="card-header">
            <div className="coverage-badge secondary">SERVIÇOS INCLUSOS</div>
            <h3 className="card-title">Ajuda Prática 24 horas</h3>
            <p className="card-desc">Facilidades prontas para você usar desde o primeiro dia:</p>
          </div>

          <ul className="feature-list">
            <li>
              <IconCheck />
              <div>
                <strong>Assistência Funeral Completa</strong>
                <span>A seguradora cuida de todas as despesas e burocracias para sua família não ter dor de cabeça.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Consulta com Médicos no Celular</strong>
                <span>Tire dúvidas de saúde e peça segunda opinião médica sem precisar sair de casa.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Descontos de até 80% em Farmácias</strong>
                <span>Economize de verdade em medicamentos nas principais drogarias do país.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Sorteios Mensais em Dinheiro</strong>
                <span>Concorra a prêmios em dinheiro todo mês pela Loteria Federal.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Coverages;
