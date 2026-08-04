import React, { useState } from 'react';

const Simulation: React.FC = () => {
  const [value, setValue] = useState(500000);

  return (
    <section id="simulacao" className="container-full">
      <div className="plan-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Simulador de Proteção</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Descubra o investimento ideal para garantir o futuro da sua família.
        </p>

        <div style={{ marginBottom: '3rem' }}>
          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '1.2rem' }}>
            Quanto de proteção sua família precisa?
          </label>
          <input 
            type="range" 
            min="100000" 
            max="2000000" 
            step="50000"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent)', cursor: 'pointer' }}
          />
          <h3 style={{ fontSize: '3rem', color: 'var(--accent)', marginTop: '1rem' }}>
            R$ {value.toLocaleString('pt-BR')}
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '2rem' }}>
          <input type="text" placeholder="Seu Nome" className="input-style" />
          <input type="text" placeholder="Seu WhatsApp" className="input-style" />
        </div>

        <button className="btn-primary" style={{ width: '100%' }}>
          Receber Proposta Personalizada
        </button>
      </div>
    </section>
  );
};

export default Simulation;