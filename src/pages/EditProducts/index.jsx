import './style.css'
import prodTemplate from "../../../public/img/product-template/bem-vindosCompleto.png";
import prodTemplate2 from "../../../public/img/product-template/calendario.png";
import prodTemplate3 from "../../../public/img/product-template/lagarga-vogais.png";
import prodTemplate4 from "../../../public/img/product-template/numeros.png";
import CardProduct from '../../components/CardProduct';
import CardEditProduct from '../../components/CardEditProduct';

export default function EditProducts () {
    return (
        <>
            <h3 className='text-uppercase fw-bold text-center'>Faça atualizações em seus produtos!</h3>
        
            <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1 mb-1 align-items-center justify-content-center">
                
            <CardEditProduct title={"bem-vindo"} price={"50"} img={ prodTemplate }/>
          
            <CardEditProduct title={"calendário"} price={"45"} img={ prodTemplate2 }/>

            <CardEditProduct title={"sentopéia vogais"} price={"50"} img={ prodTemplate3 } />

            <CardEditProduct title={"alfabeto"} price={"35"} img={ prodTemplate4 } />

            <CardEditProduct title={"bem-vindo"} price={"50"} img={ prodTemplate }/>
          
            <CardEditProduct title={"calendário"} price={"45"} img={ prodTemplate2 }/>

            </div>

        
        </>
    );
}