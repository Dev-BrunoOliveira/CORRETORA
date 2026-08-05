import React from "react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  stars: number;
}

const testimonialsList: Testimonial[] = [
  {
    name: "Carlos Eduardo Mendes",
    role: "Empresário, 42 anos",
    comment:
      "A Parabellum me ajudou a estruturar o seguro perfeito para garantir que minha família e meu negócio continuem amparados. Atendimento impecável e sem enrolação.",
    stars: 5,
  },
  {
    name: "Fernanda Ribeiro",
    role: "Médica, 36 anos",
    comment:
      "A cobertura para doenças graves me deu uma tranquilidade imensa. Consegui tirar minhas dúvidas direto pelo WhatsApp de forma super rápida e transparente.",
    stars: 5,
  },
  {
    name: "Roberto & Patricia Lima",
    role: "Advogado & Arquiteta",
    comment:
      "Saber que o valor do seguro de vida fica isento de impostos e não entra em inventário nos trouxe um alívio enorme sobre o futuro dos nossos filhos.",
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="container-full">
      <div className="section-header">
        <span className="section-badge">PROVA SOCIAL</span>
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          A confiança de milhares de famílias e profissionais que contam com a Parabellum Corretora.
        </p>
      </div>

      <div className="plans-grid">
        {testimonialsList.map((t, i) => (
          <div key={i} className="plan-card testimonial-card">
            <div className="stars">
              {"★".repeat(t.stars)}
            </div>
            <p className="testimonial-text">"{t.comment}"</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
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
            <span>Especialistas prontos para te atender</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
