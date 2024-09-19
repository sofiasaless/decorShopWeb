import './App.css';
import Header from './components/Header';
import CardInfo from './components/CardInfo';
import arqPd from "../public/img/arquivospdf.png";
import decor from "../public/img/decoracoes.png";
import CardProduct from './components/CardProduct';

import prodTemplate from "../public/img/product-template/bem-vindosCompleto.png";
import prodTemplate2 from "../public/img/product-template/calendario.png";
import prodTemplate3 from "../public/img/product-template/lagarga-vogais.png";
import prodTemplate4 from "../public/img/product-template/numeros.png";

function App() {

  return (
    <>
      <Header/>
      <section id='home_section' className='d-flex flex-column p-0 m-0 align-items-center'>
        
        <div id='text_intro' className='container fluid text-center d-flex flex-column justify-content-center'>
          <h1><span className='d-block'>Acervo</span><span className='d-block'>E.V.A</span></h1>
          <p id='description'>Transforme sua sala de aula com estilo, conheça a diversidade de belas decorações e efeites infantis produzidos com material EVA.</p>
        </div>

        <div id='break_infos' className='d-flex align-items-center justify-content-center'>

          <CardInfo 
            title={"Arquivos PDF"} 
            description={"Uma diversidade de arquivos PDF de atividades de todos os gêneros para você trabalhar em sala de aula."} 
            img={arqPd} 
          />

          <div className='divisor rounded-3 mx-3'></div>

          <CardInfo 
            title={"Enfeites de sala"} 
            description={"Decorações educativas para enfeitar sua sala de aula e trabalhar com as crianças."} 
            img={decor} 
          />

        </div>

      </section>

      <section id='product_section' className='p-5 d-flex flex-column'>

        <div className="embleme d-flex flex-row justify-content-space-evenly">
          <div className="breaker_text"></div>
          <h2 className='mx-3 text-uppercase fw-bold'><span className='d-block text-center'>Produtos</span><span className='d-block text-center'>Decorativos</span></h2>
          <div className="breaker_text"></div>
        </div>

        <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1 d-flex align-items-center justify-content-center">
          
          <CardProduct title={"bem-vindo"} price={"50"} img={ prodTemplate }/>
          
          <CardProduct title={"calendário"} price={"45"} img={ prodTemplate2 }/>

          <CardProduct title={"sentopéia vogais"} price={"50"} img={ prodTemplate3 } />

          <CardProduct title={"alfabeto"} price={"35"} img={ prodTemplate4 } />

        </div>

        <div className='container mt-5 d-flex justify-content-center align-items-center'>
          <button id='btn-seeallproduct' className='btn btn-info rounded-5 fw-bold text-uppercase'>ver todos produtos</button>
        </div>


      </section>
    </>
  )
}

export default App
