import "../style/depoCard.css"
const DepoCard = ({ nome, texto, foto }) => {
  return (
    <div className='depoCard'>
      <img src={foto} alt={`Foto de ${nome}`} className="fotoDepo"/>
      <h3 className="depoTituloCard">{nome}</h3>
      <p className="depoTexto">{texto}</p>
    </div>
  )
}

export default DepoCard
