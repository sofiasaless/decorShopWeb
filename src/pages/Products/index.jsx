import Header from "../../components/Header";
import './style.css'

export default function Products () {
    return (
        <>
            <Header/>
            <section className="d-flex">
            
            <div className="embleme">
                <div className="breaker_text"></div>
                <h2><span>Produtos</span><span>Disponíveis</span></h2>
                <div className="breaker_text"></div>
            </div>

            <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1">
                
            </div>

            </section>
        </>
    );
}