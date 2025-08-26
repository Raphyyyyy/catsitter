import './App.css'
import Menu from './components/header/Menu'
import Home from './components/header/Home'

function App() {


  return (
    <>
        <div className="header">
            <Menu />
            <Home />
        </div>

        <div className="chamada">
            Catsitters veterinárias em São Paulo, SP
                Cuidado profissional e carinhoso para gatinhos no conforto da sua casa — visitas agendadas, relatórios com fotos e suporte de quem entende de saúde felina.

                100% domiciliar
                Relatório com fotos
                Medicação oral/tópica
                Profissionais veterinárias
                Agendar agora
                Ver planos
        </div>

        <div className="servicos">
            o que esta incluso
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
    </>
  )
}

export default App
