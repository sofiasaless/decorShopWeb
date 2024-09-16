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

      <section id='product_section' className='pt-5'>

        <div className="embleme">
          <div className="breaker_text"></div>
          <h2><span>Produtos</span><span>Decorativos</span></h2>
          <div className="breaker_text"></div>
        </div>

        <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1">
          
          <CardProduct title={"bem-vindo"} price={"50"} img={ prodTemplate }/>
          
          <CardProduct title={"calendário"} price={"45"} img={ prodTemplate2 }/>

          <CardProduct title={"sentopéia vogais"} price={"50"} img={ prodTemplate3 } />

          <CardProduct title={"alfabeto"} price={"35"} img={ prodTemplate4 } />

        </div>

        <div className='container mt-5 d-flex justify-content-center align-items-center'>
          <button id='btn-seeallproduct' className='btn btn-info rounded-5'>ver todos produtos</button>
        </div>


      </section>
    </>
  )
}

export default App
