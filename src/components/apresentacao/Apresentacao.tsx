import React from 'react'
import { DBApresentacao } from "../../DB/DB";
import "../../style/Apresentacao.css";
import Slider from "./SliderAutomatico";
import Back from '../Back';

const Apresentacao = () => {
  const data = DBApresentacao[0]; 

  return (
    <div className="apresentacaoPai" id="apresentacao">
      <div className="aptEsq">
        <h1>{data.chamada}</h1>
        <h2>{data.subchamada}</h2>

        <div className="aptTags">
          {data.tags.map((tag, index) => (
            <span className="aptTag" key={index}>
              {tag}
            </span>
          ))}
        </div>

        <div className="aptBotao">

          <button
            id="aptBtn1"
            onClick={() => window.open(data.opt1Link, "_blank")}
          >
            {data.opt1}
          </button>

   
          <button
            id="aptBtn2"
            onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
          >
            {data.opt2}
          </button>
        </div>
      </div>

      <div className="aptDir">
        <><Slider /></>
      </div>

      <Back />
    </div>
  );
};

export default Apresentacao;
