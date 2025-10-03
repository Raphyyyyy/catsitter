import './App.css'
import Menu from './components/header/Menu'
import Home from './components/header/Home'
import Apresentacao from './components/apresentacao/Apresentacao'
import Servicos from './components/servicos/Servicos'
import Area from './components/area/AreaAtt'
import Planos from './components/planos/Planos'
import Depo from './depoimentos/depo'
import FAQ from './components/faq/Faq'
import Contato from './components/contato/Contato'

function App() {


  return (
    <>
        <div className="header">
            <Menu />
            <Home />
        </div>

        <div className="chamada">
            <Apresentacao />
        </div>

        <div className="servicos">
            <Servicos />
        </div>

        <div className="mapa">
            <Area />
        </div>

        <div className="plano">
            <Planos />
        </div>

        <div className="depoimentos">
            <Depo />
        </div>

        <div className="perguntas">
            <FAQ />
        </div>

        <div className="contato">
            <Contato />
        </div>

        
    </>
  )
}

export default App
