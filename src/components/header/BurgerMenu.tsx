import React, { useState } from "react";
import { motion } from "framer-motion";
import { DBMenu } from "../../DB/DB";
import "../../style/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Bmenu-pai">
      <motion.div
        className="burger-icon"
        onClick={toggleMenu}
        animate={{ rotate: isOpen ? 180 : -180 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </motion.div>

      {isOpen && (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [10, 20, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="Bmenu"
        >
          <ul>
            <li className="Bmenu_titulo">Menu</li>
            {DBMenu.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target={link.type === "whatsapp" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default BurgerMenu;
