import { DBRodape } from "../../DB/DB";
import "../../style/Rodape.css";

const Rodape = () => {
  return (
    <div className='rodapePai'>
      <p>{DBRodape.texto}</p>
      <ul>
        {DBRodape.links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Rodape