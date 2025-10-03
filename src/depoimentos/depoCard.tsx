
const DepoCard = ({ nome, texto, foto }) => {
  return (
    <div className='depoCard'>
      <img src={foto} alt={`Foto de ${nome}`} />
      <h3>{nome}</h3>
      <p>{texto}</p>
    </div>
  )
}

export default DepoCard
