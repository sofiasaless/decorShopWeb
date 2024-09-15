import './App.css';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
import arqPd from "../public/img/arquivospdf.png";
import decor from "../public/img/decoracoes.png";

function App() {

  return (
    <>
      <Header/>
      <section id='home_section'>
        
        <div id='text_intro' className='container fluid'>
          <h1><span>Acervo</span><span>E.V.A</span></h1>
          <p id='description'>Transforme sua sala de aula com estilo, conheça a diversidade de belas decorações e efeites infantis produzidos com material EVA.</p>
        </div>

        <div id='break_infos'>

          <CardInfo 
            title={"Arquivos PDF"} 
            description={"Uma diversidade de arquivos PDF de atividades de todos os gêneros para você trabalhar em sala de aula."} 
            img={arqPd} 
          />

          <div className='divisor'></div>

          <CardInfo 
            title={"Enfeites de sala"} 
            description={"Decorações educativas para enfeitar sua sala de aula e trabalhar com as crianças."} 
            img={decor} 
          />

        </div>

      </section>
    </>
  )
}

export default App
