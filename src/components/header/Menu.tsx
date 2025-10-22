import React from "react";
import "../../style/Menu.css";
import { FaWhatsapp } from "react-icons/fa";
import { DBMenu } from "../../DB/DB";
import { useIsMobile } from "../../hooks/IsMobile";
import BurgerMenu from "./BurgerMenu";

const Menu = () => {
  const isMobile = useIsMobile();

  const mainLinks = DBMenu.links
    .filter((link) => link.type !== "whatsapp")
    .filter((link) => {
      if (!isMobile) return true;
      return [2, 3, 4].includes(link.id);
    });

  // 🔸 Renderiza só o BurgerMenu no mobile
  if (isMobile) {
    return <BurgerMenu />;
  }

  // 🔹 Caso contrário, mostra o menu tradicional
  return (
    <div className="menuPai">
      <div className="logoPequeno">
        <img src={DBMenu.logos.pequeno} alt="Logo" className="logoPequeno" />
      </div>

      <div className="logoPequenoBack">
        <img
          src={DBMenu.logos.fundoEsquerda}
          className="logoPequenoBack"
          alt="Fundo Esquerdo"
        />
      </div>

      <div className="logoPequenoBack2">
        <img
          src={DBMenu.logos.fundoDireita}
          className="logoPequenoBack2"
          alt="Fundo Direito"
        />
      </div>

      <nav className="menu">
        <ul>
          {mainLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {DBMenu.links
        .filter((link) => link.type === "whatsapp")
        .map((link, index) => (
          <div className="agendar" key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsMenu" />
              <p dangerouslySetInnerHTML={{ __html: link.label }} />
            </a>
          </div>
        ))}
    </div>
  );
};

export default Menu;
