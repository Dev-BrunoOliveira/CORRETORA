import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "O seguro de vida precisa entrar no inventário judicial?",
    answer:
      "Não! Por lei (Artigo 794 do Código Civil), o seguro de vida não é considerado herança e, por isso, não entra no inventário. O valor é pago diretamente aos beneficiários indicados, sem burocracia e em poucos dias úteis após a entrega dos documentos.",
  },
  {
    question: "A indenização paga Imposto de Renda ou imposto de herança (ITCMD)?",
    answer:
      "Não. Toda indenização recebida por seguro de vida é 100% isenta de Imposto de Renda (IRPF) e isenta do imposto estadual sobre transmissão causa mortis e doação (ITCMD).",
  },
  {
    question: "Posso utilizar a cobertura em vida?",
    answer:
      "Com certeza! Nossas apólices contam com coberturas que protegem você em vida, como diagnóstico de Doenças Graves (câncer, AVC, infarto), Invalidez Permanente por Acidente e Diária de Internação Hospitalar.",
  },
  {
    question: "Quem pode ser indicado como beneficiário?",
    answer:
      "Você escolhe livremente quem serão os seus beneficiários no momento da contratação (cônjuge, filhos, pais, parceiros de negócios ou qualquer pessoa que desejar) e pode alterar essa indicação quando quiser.",
  },
  {
    question: "Como funciona a contratação e qual a carência?",
    answer:
      "A contratação é 100% digital e sem burocracia. Para morte acidental não há carência após a emissão da apólice. Para morte natural ou doenças graves, aplicam-se carências regulamentadas que explicamos detalhadamente no seu orçamento.",
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
          Tudo o que você precisa saber para contratar seu seguro de vida com total segurança e clareza.
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
