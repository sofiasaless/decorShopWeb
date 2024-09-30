import './style.css';

export default function CardProduct( { title, price, img } ) {
    return (
        <>
            <div class="col" style={{maxWidth: "250px"}}>
                <div class="card h-100 rounded-1" style={{maxWidth: "250px"}}>
                    <img src={ img } class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title mb-0 text-uppercase fw-bold">{ title }</h5>
                        <p class="card-text">
                            R${ price }
                        </p>

                        <button id='bt-seemore' className="btn btn-dark rounded-5 fw-bold">ver mais</button>

                    </div>
                </div>
            </div>
        </>
    );
}