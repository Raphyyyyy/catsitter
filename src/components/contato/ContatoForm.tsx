import { DBContato } from "../../DB/DB";

const ContatoForm = () => {
  const campos = DBContato.formulario.campos;

  return (
    <form className="formularioContato">
      <div className="campo">
        <label>{campos.nome.label}</label>
        <input type="text" placeholder={campos.nome.placeholder} />
      </div>

      <div className="campo">
        <label>{campos.email.label}</label>
        <input type="email" placeholder={campos.email.placeholder} />
      </div>

      <div className="campo">
        <label>{campos.bairro.label}</label>
        <input type="text" placeholder={campos.bairro.placeholder} />
      </div>

      <div className="campo">
        <label>{campos.mensagem.label}</label>
        <textarea placeholder={campos.mensagem.placeholder}></textarea>
      </div>

      <button type="submit">{DBContato.formulario.botaoEnviar}</button>

      <p className="aviso">{DBContato.formulario.aviso}</p>
    </form>
  );
};

export default ContatoForm;
