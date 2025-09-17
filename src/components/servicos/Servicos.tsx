import React from 'react'
import { DBServicos } from "../../DB/DB";
import ServicosCard from './ServicosCard';
import "../../style/Servicos.css";

const Servicos = () => {
  return (
    <div className='servicosPai'>
        <h1 className='servicosTitulo'>{DBServicos[0].titulo}</h1>
        <div className='servicosCards'>
          <ServicosCard />
        </div>
    </div>
  )
}


export default Servicos