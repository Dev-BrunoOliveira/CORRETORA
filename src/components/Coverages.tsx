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
        <span className="section-badge">COBERTURAS COMPLETAS</span>
        <h2 className="section-title">O que entregamos para você</h2>
        <p className="section-subtitle">
          Combinações de indenizações financeiras e assistências 24h pensadas para cobrir todos os cenários da sua vida.
        </p>
      </div>

      <div className="plans-grid">
        <div className="plan-card coverage-card highlight">
          <div className="card-header">
            <div className="coverage-badge">INDENIZAÇÕES FINANCEIRAS</div>
            <h3 className="card-title">Garantias em Dinheiro</h3>
            <p className="card-desc">Valores depositados diretamente na conta em caso de sinistro:</p>
          </div>

          <ul className="feature-list">
            <li>
              <IconCheck />
              <div>
                <strong>Morte (Natural ou Acidental)</strong>
                <span>Pagamento integral aos beneficiários escolhidos.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Invalidez Permanente por Acidente</strong>
                <span>Indenização antecipada caso perca a capacidade laboral.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Doenças Graves Plus</strong>
                <span>Resgate do valor em vida ao diagnosticar câncer, infarto, AVC e mais.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Diária por Internação Hospitalar (DIT)</strong>
                <span>Renda garantida para autônomos e profissionais em afastamento.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="plan-card coverage-card">
          <div className="card-header">
            <div className="coverage-badge secondary">SERVIÇOS & ASSISTÊNCIAS</div>
            <h3 className="card-title">Assistências 24 horas</h3>
            <p className="card-desc">Benefícios prontos para uso desde o primeiro dia:</p>
          </div>

          <ul className="feature-list">
            <li>
              <IconCheck />
              <div>
                <strong>Assistência Funeral Familiar Completa</strong>
                <span>Cobertura de todos os custos e trâmites burocráticos sem estresse.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Segunda Opinião Médica Internacional</strong>
                <span>Consulta com especialistas dos maiores centros médicos mundiais.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Descontos de até 80% em Farmácias</strong>
                <span>Economia em medicamentos nas principais redes do país.</span>
              </div>
            </li>
            <li>
              <IconCheck />
              <div>
                <strong>Sorteios Mensais em Dinheiro</strong>
                <span>Concorra a prêmios em dinheiro pela Loteria Federal todo mês.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Coverages;
