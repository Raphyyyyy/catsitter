import "../../style/PlanosCard.css"

const PlanosCard = ({ nome, valor, cond, descricao, botao, botaoLink, bgColor, bgColorBot, icone }) => {
  return (
    <div className='planosCardPai' style={{ backgroundColor: bgColor }}>
      <img src={icone} className="iconeCardPlano"/>
      <h2 className="tituloCardPlano">{nome}</h2>
      <div className="subTitulo">
        <h1 className="valorPlano">{valor}</h1>
        <h3 className="condPlano">{cond}</h3>
      </div>
      <p className="descPlano">{descricao}</p>
      <div className="botaoPlano">
        <a className="linkBotaoPlano" href={botaoLink} target="_blank" rel="noreferrer">
          <button className="botaoPlanoInterno" style={{ backgroundColor: bgColorBot }}>{botao}</button>
        </a>
      </div>
    </div>
  )
}

export default PlanosCard
