import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content container-full">
        <div className="footer-brand-col">
          <Logo />
          <p className="footer-desc">
            Sua corretora de confiança especializada em cuidar de você e garantir a segurança financeira da sua família com transparência e rapidez.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#vantagens">Vantagens</a></li>
            <li><a href="#coberturas">Coberturas</a></li>
            <li><a href="#simulacao">Simulador</a></li>
            <li><a href="#faq">Dúvidas Frequentes</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
        </div>

        <div className="footer-info-col">
          <h4>Dados da Corretora</h4>
          <p><strong>PROTECTUS CORRETORA DE SEGUROS LTDA</strong></p>
          <p>CNPJ: 42.108.935/0001-60</p>
          <p>Av. Rio Branco, 156 - Sala 1204 - Centro</p>
          <p>CEP: 20040-003 - Rio de Janeiro / RJ</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PROTECTUS CORRETORA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
