import React, { useState, useEffect } from "react";

interface LeadNotice {
  name: string;
  city: string;
  amount: string;
  time: string;
}

const mockNotices: LeadNotice[] = [
  { name: "Juliana M.", city: "Niterói / RJ", amount: "R$ 500.000", time: "há 4 minutos" },
  { name: "Marcelo S.", city: "Rio de Janeiro / RJ", amount: "R$ 750.000", time: "há 12 minutos" },
  { name: "Patricia K.", city: "São Paulo / SP", amount: "R$ 1.000.000", time: "há 18 minutos" },
  { name: "Felipe T.", city: "Belo Horizonte / MG", amount: "R$ 300.000", time: "há 25 minutos" },
];

const TrustNotification: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Exibir 4 segundos após carregamento inicial
    const timerInitial = setTimeout(() => setVisible(true), 4000);

    // Rotacionar notificações a cada 10 segundos
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mockNotices.length);
        setVisible(true);
      }, 500);
    }, 12000);

    return () => {
      clearTimeout(timerInitial);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const notice = mockNotices[index];

  return (
    <div className="trust-toast">
      <div className="trust-toast-icon">✓</div>
      <div className="trust-toast-content">
        <strong>{notice.name} ({notice.city})</strong>
        <span>Solicitou uma cotação de proteção • {notice.time}</span>
      </div>
      <button
        className="trust-toast-close"
        onClick={() => setDismissed(true)}
        aria-label="Fechar notificação"
      >
        ✕
      </button>
    </div>
  );
};

export default TrustNotification;
