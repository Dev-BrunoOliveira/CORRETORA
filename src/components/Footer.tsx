import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content container-full">
        <div className="footer-brand-col">
          <Logo />
          <p className="footer-desc">
            Sua corretora de confiança especializada em proteção familiar, planejamento sucessório e seguros de vida de alta liquidez.
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
          <p><strong>PARABELLUM CORRETORA DE SEGUROS LTDA</strong></p>
          <p>CNPJ: 54.907.611/0001-47</p>
          <p>R EVILASIO SILVA 34 - FONSECA</p>
          <p>CEP: 24130-720 - Niterói / RJ</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PARABELLUM CORRETORA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
