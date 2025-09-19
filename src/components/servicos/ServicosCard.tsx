import { DBServicos } from "../../DB/DB";
import "../../style/ServicosCard.css";
import Back from "../Back";

const ServicosCard = () => {
  const cardColors = ["#ff6f003b", "#00e1ff2d", "#ff05ff49"]; // cores diferentes para os 3 cards

  return (
    <>
      {["servico1", "servico2", "servico3"].map((key, index) => {
        const servico = DBServicos[0][key];
        return (
          <div
            className="servicosCardPai"
            key={key}
            style={{ backgroundColor: cardColors[index] }}
          >
            <img src={servico.icone} className="iconeCardServ"/>
            <h2 className="servicosCardTitulo">{servico.titulo}</h2>
            <h3 className="servicosCardSubtitulo">{servico.subtitulo}</h3>
            <ul>
              {servico.descricao.map((item, i) => (
                <li key={i} className="servicosCardItem">{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default ServicosCard;
