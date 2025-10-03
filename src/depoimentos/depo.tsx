// src/components/depo/Depo.tsx
import React from 'react'
import DepoCard from './depoCard'
import { DBDepoimentos } from "../DB/DB";

const Depo = () => {
  return (
    <div className='depoPai'>
      <h1>Clientes felizes</h1>
      <div className='depoContainer'>
        {DBDepoimentos.map((dep, index) => (
          <DepoCard
            key={index}
            nome={dep.nome}
            texto={dep.texto}
            foto={dep.foto}
          />
        ))}
      </div>
    </div>
  )
}

export default Depo
