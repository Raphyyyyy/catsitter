import './App.css'
import Menu from './components/header/Menu'
import Home from './components/header/Home'
import Apresentacao from './components/apresentacao/Apresentacao'
import Servicos from './components/servicos/Servicos'
import Area from './components/area/AreaAtt'
import Planos from './components/planos/Planos'
import Depo from './components/depoimentos/depo'
import FAQ from './components/faq/Faq'
import Contato from './components/contato/Contato'
import Rodape from './components/rodape/Rodape'
import Whatsapp from './addons/Whatsapp'

function App() {


  return (
    <>
        <Whatsapp />    

        <div className="header">
            <Menu />
            <Home />
        </div>

        <div className="chamada">
            <Apresentacao />
        </div>

        <div className="servicos" id="servicos">
            <Servicos />
        </div>

        <div className="mapa" id="area">
            <Area />
        </div>

        <div className="plano" id="planos">
            <Planos />
        </div>

        <div className="depoimentos" id="depoimentos">
            <Depo />
        </div>

        <div className="perguntas" id="faq">
            <FAQ />
        </div>

        <div className="contato" id="contato">
            <Contato />
        </div>

        <div className="rodape">
            <Rodape />
        </div>

        
    </>
  )
}

export default App
