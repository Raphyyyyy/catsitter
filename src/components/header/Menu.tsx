import React from 'react'
import '../../style/Menu.css'

const menu = () => {
  return (
    <div>
      <div className="menuPai">
        <div className="logo">xx</div>
        <nav className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#area">Área</a></li>
            <li><a href="#faq">Perguntas Frequentes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="agendar">agendar</div>
      </div>
    </div>
  )
}

export default menu