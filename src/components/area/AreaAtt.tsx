import "../../style/AreaAtt.css";
import { DBArea } from "../../DB/DB";
import Mapa from "./Mapa";

const AreaAtt = () => {
    return (
        <div className="areaPai">
            <div className="listArea">
                <h1>{DBArea.titulo}</h1>
                <h2>{DBArea.subtitulo1}</h2>
                <ul className="ulArea">
                    {DBArea.locais.map((local, index) => (
                        <li key={index} className={`liArea ${local.ativo ? "ativo" : "inativo"}`}>
                            {local.nome}
                        </li>
                    ))}
                </ul>
                <h3>{DBArea.subtitulo2}</h3>
            </div>

            <div className="mapa1">
                <Mapa />
            </div>
        </div>
    );
};

export default AreaAtt;
