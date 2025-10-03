import PlanosCard from "./PlanosCard"
import { DBPlanos } from "../../DB/DB";
import "../../style/Planos.css"

const Planos = () => {
  return (
    <div className="planosPai">
      <h1 className="tituloPlanos">{DBPlanos.titulo}</h1>
      <div className="planosCards">
        {DBPlanos.planos.map((plano) => (
          <PlanosCard key={plano.id} {...plano} />
        ))}
      </div>
      <h3 className="planosSub">{DBPlanos.subtitulo}</h3>
    </div>
  )
}

export default Planos
