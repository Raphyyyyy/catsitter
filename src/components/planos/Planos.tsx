import PlanosCard from "./PlanosCard"
import { DBPlanos } from "../../DB/DB";
import "../../style/Planos.css"

const Planos = () => {
  const cardColors = ["#ff6f003b", "#00e1ff2d", "#ff05ff49"]; 
  const bgColorBot = ["#ff6f00ff", "rgba(29, 168, 187, 1)", "#ff05ffff"]; 
  return (
    <div className="planosPai">
      <h1 className="tituloPlanos">{DBPlanos.titulo}</h1>
      <div className="planosCards">
        {DBPlanos.planos.map((plano, index) => (
          <PlanosCard 
          key={plano.id} {...plano} 
          bgColor={cardColors[index % cardColors.length]} 
          bgColorBot={bgColorBot[index % bgColorBot.length]} />
        ))}
      </div>
      <h3 className="planosSub">{DBPlanos.subtitulo}</h3>
    </div>
  )
}

export default Planos
