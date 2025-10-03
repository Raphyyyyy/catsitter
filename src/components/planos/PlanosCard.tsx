import "../../style/Planos.css"

const PlanosCard = ({ nome, valor, cond, descricao, botao, botaoLink }) => {
  return (
    <div className='planosCardPai'>
      <h2 className="tituloCardPlano">{nome}</h2>
      <div className="subTitulo">
        <h1 className="valorPlano">{valor}</h1>
        <h3 className="condPlano">{cond}</h3>
      </div>
      <p className="descPlano">{descricao}</p>
      <div className="botaoPlano">
        <a className="linkBotaoPlano" href={botaoLink} target="_blank" rel="noreferrer">
          <button className="botaoPlanoInterno">{botao}</button>
        </a>
      </div>
    </div>
  )
}

export default PlanosCard
