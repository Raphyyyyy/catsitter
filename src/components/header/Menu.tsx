import React from "react";
import "../../style/Menu.css";
import { FaWhatsapp } from "react-icons/fa";
import { DBMenu } from "../../DB/DB";

const Menu = () => {
  return (
    <div>
      <div className="menuPai">
        {/* Logo */}
        <div className="logoPequeno">
          <img src={DBMenu.logos.pequeno} alt="Logo" className="logoPequeno" />
        </div>

        {/* Fundo do logo */}
        <div className="logoPequenoBack">
          <img
            src={DBMenu.logos.fundoEsquerda}
            className="logoPequenoBack"
            alt="Fundo Esquerdo"
          />
        </div>

        {/* Menu principal */}
        <nav className="menu">
          <ul>
            {DBMenu.links
              .filter((link) => link.type !== "whatsapp") // menos o do whats
              .map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
          </ul>
        </nav>

        {/* Link especial do WhatsApp */}
        {DBMenu.links
          .filter((link) => link.type === "whatsapp")
          .map((link, index) => (
            <div className="agendar" key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="whatsMenu" />
                {/* Renderiza HTML para não bugar o <br/> */}
                <p dangerouslySetInnerHTML={{ __html: link.label }} />
              </a>
            </div>
          ))}

        {/* Fundo direito */}
        <div className="logoPequenoBack2">
          <img
            src={DBMenu.logos.fundoDireita}
            className="logoPequenoBack2"
            alt="Fundo Direito"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
