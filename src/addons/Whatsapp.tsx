import React from 'react';
import whatsappImagem from '../assets/whatsapp.png';
import '../style/Whatsapp.css';
import { DBContato } from '../DB/DB';

function Whatsapp() {
  return (
    <div className='whats'>
      <a href={DBContato.whatsapp.link} target="_blank" rel="noopener noreferrer">
        <img src={whatsappImagem} alt="whatsapp" />
      </a>
    </div>
  );
}

export default Whatsapp;
