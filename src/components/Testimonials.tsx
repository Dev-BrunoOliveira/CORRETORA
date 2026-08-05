import React from "react";

interface Testimonial {
  initials: string;
  name: string;
  location: string;
  comment: string;
  date: string;
  verified: boolean;
  avatarBg: string;
}

const testimonialsList: Testimonial[] = [
  {
    initials: "RS",
    name: "Rodrigo Silva",
    location: "São Gonçalo / RJ",
    comment:
      "Fiquei com receio de ser aquela burocracia sem fim ou um valor absurdo por mês, mas me surpreendi bastante. O atendimento no Zap foi direto ao ponto, explicaram tudo sem enrolação e fechei o plano pra mim e pra minha esposa no mesmo dia.",
    date: "Avaliado há 1 semana",
    verified: true,
    avatarBg: "linear-gradient(135deg, #06b6d4, #0284c7)",
  },
  {
    initials: "JC",
    name: "Juliana Costa",
    location: "Niterói / RJ",
    comment:
      "Depois que minha filha nasceu, fiquei muito mais preocupada com o futuro. O corretor me explicou como funcionava a cobertura de doenças graves e a parte de isenção de imposto. Deu uma paz de espírito gigantesca pra nossa família.",
    date: "Avaliado há 2 semanas",
    verified: true,
    avatarBg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
  },
  {
    initials: "TA",
    name: "Thiago & Amanda",
    location: "Rio de Janeiro / RJ",
    comment:
      "Estava pesquisando seguro de vida há semanas e só achava gente querendo empurrar plano caro. Na Protectus o atendimento foi sincero demais, mostraram várias opções de seguradoras e achamos uma que coube certinho no nosso orçamento.",
    date: "Avaliado há 3 semanas",
    verified: true,
    avatarBg: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    initials: "MO",
    name: "Marcelo G. Oliveira",
    location: "Maricá / RJ",
    comment:
      "Nota 10 pro suporte. Tive uma dúvida sobre a apólice meses depois de contratar e me responderam em menos de 5 minutos no WhatsApp. Hoje em dia é raro ver uma empresa tratar o cliente com tanta atenção pós-venda.",
    date: "Avaliado há 1 mês",
    verified: true,
    avatarBg: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="container-full">
      <div className="section-header">
        <span className="section-badge">DEPOIMENTOS REAIS</span>
        <h2 className="section-title">O que diz quem já contratou</h2>
        <p className="section-subtitle">
          Experiências reais de clientes que buscaram tranquilidade financeira e encontraram atendimento transparente na Protectus Corretora.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonialsList.map((t, i) => (
          <div key={i} className="plan-card testimonial-card">
            <div className="testimonial-header">
              <div className="avatar-circle" style={{ background: t.avatarBg }}>
                {t.initials}
              </div>
              <div className="author-meta">
                <div className="author-name-row">
                  <strong>{t.name}</strong>
                  {t.verified && (
                    <span className="verified-badge" title="Cliente com apólice emitida">
                      ✓ Verificado
                    </span>
                  )}
                </div>
                <span className="author-location">{t.location}</span>
              </div>
            </div>

            <div className="stars-row">
              {"★★★★★"}
              <span className="review-date">{t.date}</span>
            </div>

            <p className="testimonial-text">"{t.comment}"</p>
          </div>
        ))}
      </div>

      <div className="trust-strip">
        <div className="trust-item">
          <span className="trust-icon">🔒</span>
          <div>
            <strong>Corretora Habilitada</strong>
            <span>Regulamentada conforme as normas da SUSEP</span>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">⚡</span>
          <div>
            <strong>Agilidade no Resgate</strong>
            <span>Indenização paga direto aos beneficiários</span>
          </div>
        </div>
        <div className="trust-item">
          <span className="trust-icon">💬</span>
          <div>
            <strong>Suporte Consultivo</strong>
            <span>Especialistas prontos para te atender no WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
