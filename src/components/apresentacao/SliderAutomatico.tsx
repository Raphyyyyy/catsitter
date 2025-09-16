import React, { useEffect, useState } from "react";
import { DBApresentacao } from "../../DB/DB";
import "../../style/SliderAutomatico.css";

const SliderApresentacao = () => {
  const dados = DBApresentacao[0];
  const imagens = [dados.img1, dados.img2, dados.img3, dados.img4];
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((anterior) => (anterior + 1) % imagens.length);
    }, 5000); // 5 segundos

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <div className="slider">
      {imagens.map((imagem, index) => (
        <img
          key={index}
          src={`${imagem}`} 
          alt={`Imagem ${index + 1}`}
          className={`slider-imagem ${index === indiceAtual ? "ativa" : ""}`}
        />
      ))}
    </div>
  );
};

export default SliderApresentacao;
