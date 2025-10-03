import { useState } from "react";
import { DBFAQ } from "../../DB/DB";
import "../../style/Faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container">
      <h2 className="faq-title">Perguntas frequentes</h2>
      <div className="faq-list">
        {DBFAQ.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <button
              className={`accordion-header ${activeIndex === idx ? "active" : ""}`}
              onClick={() => toggle(idx)}
            >
              {item.pergunta}
              <span className={`arrow ${activeIndex === idx ? "rotate" : ""}`}>▼</span>
            </button>
            {activeIndex === idx && (
              <div className="accordion-body">{item.resposta}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
