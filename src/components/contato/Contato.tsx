import ContatoForm from "./ContatoForm";
import { DBContato } from "../../DB/DB";
import "../../style/Contato.css";

const Contato = () => {
  return (
    <section className="contatoPai container">
      <div className="textoContato">
        <h1>{DBContato.titulo}</h1>
        <h3>{DBContato.subtitulo}</h3>

        <ul>
          <li><strong>{DBContato.whatsapp.label}:</strong> {DBContato.whatsapp.numeroVisivel}</li>
          <li><strong>{DBContato.email.label}:</strong> {DBContato.email.endereco}</li>
          <li><strong>Endereço:</strong> {DBContato.endereco}</li>
          <li><strong>{DBContato.instagram.label}:</strong> {DBContato.instagram.usuario}</li>
        </ul>

        <a
          href={DBContato.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="botaoWhatsapp"
        >
          {DBContato.whatsapp.botao}
        </a>
      </div>

      <div className="formContato">
        <ContatoForm />
      </div>
    </section>
  );
};

export default Contato;
