import './App.css'
import Menu from './components/header/Menu'
import Home from './components/header/Home'
import Apresentacao from './components/apresentacao/Apresentacao'
import Servicos from './components/servicos/Servicos'

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
            onde atendemos
        </div>

        <div className="plano">
            planos
        </div>

        <div className="depoimentos">
            depoimentos
        </div>

        <div className="perguntas">

        </div>

        <div className="contato">
            
        </div>

        <div>x</div><div>x</div><div>x</div><div>x</div><div>x</div><div>x</div><div>x</div><div>x</div><div>x</div><div>x</div>
    </>
  )
}

export default App
