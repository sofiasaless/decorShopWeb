import { useNavigate } from 'react-router-dom';
import './style.css';

export default function CardProduct( { product } ) {
    const navigator = useNavigate();

    return (
        <>
            <div className="col" style={{maxWidth: "250px"}}>
                <div class="card h-100 rounded-1  shadow-sm" style={{maxWidth: "250px"}}>
                    <img src={ product.image } class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title mb-0 text-uppercase fw-bold">{ product.name }</h5>
                        <p class="card-text">
                            R${ product.price }
                        </p>

                        <button id='bt-seemore' className="btn btn-dark rounded-5 fw-bold"
                            onClick={() => {
                                navigator(`/visualizar/${product.id}`)
                            }}
                        >
                            ver mais
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}