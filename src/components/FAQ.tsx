import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "O dinheiro do seguro precisa de inventário ou advogado pra sair?",
    answer:
      "Não! O dinheiro do seguro de vida não passa por inventário nem justiça. Ele é pago direto na conta da pessoa que você escolheu em poucos dias, sem burocracia e sem precisar pagar advogado.",
  },
  {
    question: "Paga Imposto de Renda ou algum imposto quando recebe o dinheiro?",
    answer:
      "Não paga absolutamente nada! O valor contratado vai 100% limpo para a conta de quem você indicou. Não tem desconto de Imposto de Renda nem de imposto de herança.",
  },
  {
    question: "Posso receber o dinheiro em vida se eu tiver um problema de saúde?",
    answer:
      "Sim! Se você for diagnosticado com uma doença grave (como câncer, infarto ou AVC) ou sofrer um acidente que te impeça de trabalhar, você recebe o valor contratado para se cuidar e pagar seus custos.",
  },
  {
    question: "Quem eu posso colocar pra receber o dinheiro?",
    answer:
      "Quem você quiser! Pode ser seu marido, esposa, filhos, pais, irmãos ou qualquer pessoa que você queira proteger. E você pode mudar esses nomes a qualquer momento sem complicação.",
  },
  {
    question: "Como funciona pra fazer a simulação? É demorado?",
    answer:
      "É super rápido e 100% online. Em menos de 2 minutos você faz a simulação aqui pelo site e tira todas as suas dúvidas direto no WhatsApp com a nossa equipe.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container-full bg-surface">
      <div className="section-header">
        <span className="section-badge">TIRE SUAS DÚVIDAS</span>
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">
          Tudo o que você precisa saber para proteger quem você ama sem nenhuma complicação.
        </p>
      </div>

      <div className="faq-container">
        {faqList.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`faq-card ${isOpen ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <button className="faq-question" aria-expanded={isOpen}>
                <span>{item.question}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
