import Header from "../../components/Header";
import './style.css'

export default function Products () {
    return (
        <>
            <Header/>
            <section className="d-flex">
            
            <div className="embleme d-flex flex-row justify-content-space-evenly">
                <div className="breaker_text"></div>
                <h2><span className='d-block text-center text-uppercase fw-bold'>Produtos</span><span className='d-block text-center text-uppercase fw-bold'>Disponíveis</span></h2>
                <div className="breaker_text"></div>
            </div>

            <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1">
                
            </div>

            </section>
        </>
    );
}