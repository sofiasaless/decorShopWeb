import './style.css';

export default function CardProduct( { title, price, img } ) {
    return (
        <>
            <div class="col" style={{maxWidth: "250px"}}>
                <div class="card h-100 rounded-1" style={{maxWidth: "250px"}}>
                    <img src={ img } class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title mb-0">{ title }</h5>
                        <p class="card-text">
                            R${ price }
                        </p>

                        <button className="btn btn-dark">ver mais</button>

                    </div>
                </div>
            </div>
        </>
    );
}