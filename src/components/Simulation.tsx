import React, { useState } from "react";

const ageRanges = ["18 a 30 anos", "31 a 45 anos", "46 a 55 anos", "56+ anos"];

const Simulation: React.FC = () => {
  const [valorCobertura, setValorCobertura] = useState(500000);
  const [selectedAge, setSelectedAge] = useState(ageRanges[1]); // Default 31 a 45 anos
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // Formatação de telefone com máscara (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 11) input = input.substring(0, 11);

    if (input.length > 6) {
      input = `(${input.substring(0, 2)}) ${input.substring(2, 7)}-${input.substring(7)}`;
    } else if (input.length > 2) {
      input = `(${input.substring(0, 2)}) ${input.substring(2)}`;
    } else if (input.length > 0) {
      input = `(${input}`;
    }

    setPhone(input);
    if (error) setError("");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Por favor, informe o seu nome para personalizar a proposta.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setError("Por favor, insira um número de WhatsApp válido com DDD.");
      return;
    }

    setError("");

    const text = encodeURIComponent(
      `Olá! Meu nome é *${name.trim()}* (${phone.trim()}).\nFiz um pedido no site da Protectus Corretora e gostaria de receber uma cotação personalizada para:\n\n🛡️ *Capital Desejado:* R$ ${valorCobertura.toLocaleString("pt-BR")}\n🎂 *Faixa Etária:* ${selectedAge}\n\nFico no aguardo da proposta!`
    );

    window.open(`https://wa.me/message/XDBZLY2ZNU27H1?text=${text}`, "_blank");
  };

  return (
    <section id="simulacao" className="container-full">
      <div className="simulation-wrapper">
        <div className="simulation-header">
          <span className="section-badge">COTAÇÃO ONLINE</span>
          <h2 className="section-title">Monte sua Proteção Familiar</h2>
          <p className="section-subtitle">
            Escolha o valor que deseja garantir para sua família e solicite um orçamento sem compromisso:
          </p>
        </div>

        <div className="plan-card simulation-card">
          <div className="calculator-box">
            <div className="age-selector-container">
              <span className="calculator-sublabel">Sua Idade:</span>
              <div className="age-buttons">
                {ageRanges.map((age) => (
                  <button
                    key={age}
                    type="button"
                    className={`age-btn ${selectedAge === age ? "active" : ""}`}
                    onClick={() => setSelectedAge(age)}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>

            <span className="calculator-label">Qual valor você deseja deixar para sua família?</span>
            
            <div className="coverage-display">
              <span className="currency">R$</span>
              <span className="amount">{valorCobertura.toLocaleString("pt-BR")}</span>
            </div>

            <input
              type="range"
              min="100000"
              max="2000000"
              step="50000"
              value={valorCobertura}
              onChange={(e) => setValorCobertura(Number(e.target.value))}
              className="custom-range"
              aria-label="Ajustar valor da cobertura"
            />

            <div className="preset-buttons">
              {[250000, 500000, 1000000, 2000000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className={`preset-btn ${valorCobertura === preset ? "active" : ""}`}
                  onClick={() => setValorCobertura(preset)}
                >
                  R$ {preset >= 1000000 ? `${preset / 1000000} Milhão` : `${preset / 1000}k`}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="simulation-form">
            <div className="form-title">Receber Cotação Personalizada pelo WhatsApp</div>
            
            {error && <div className="form-error-alert">{error}</div>}

            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Seu Nome Completo"
                  value={name}
                  onChange={handleNameChange}
                  className="input-style"
                  required
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="tel"
                  placeholder="Seu WhatsApp com DDD"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="input-style"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary btn-submit-whatsapp">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.487l-.729 2.661 2.728-.715c.947.518 2.026.814 3.175.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.766-5.766zm3.488 8.163c-.15.424-.877.788-1.216.837-.301.043-.687.067-1.127-.087-.27-.094-.61-.225-1.042-.412-1.848-.797-3.04-2.684-3.132-2.806-.092-.123-.746-.992-.746-1.889 0-.897.47-1.336.638-1.541.168-.206.37-.258.492-.258s.246.002.353.007c.112.005.263-.043.413.318.15.361.514 1.25.56 1.341.045.092.076.199.015.318-.061.12-.092.195-.184.301-.092.106-.194.238-.277.319-.092.091-.188.19-.081.374.107.184.475.785 1.018 1.268.699.623 1.285.817 1.468.91.184.091.29.076.398-.047.107-.123.46-.534.582-.716.123-.182.246-.153.414-.092.168.061 1.072.506 1.256.598.184.092.306.138.35.215.043.076.043.44-.107.864z" />
              </svg>
              Solicitar Cotação no WhatsApp
            </button>
            
            <span className="form-guarantee">
              🔒 Seus dados estão 100% seguros e não fazemos spam.
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Simulation;