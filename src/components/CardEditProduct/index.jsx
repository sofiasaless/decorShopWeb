import './style.css';

export default function CardEditProduct( { title, price, img, product } ) {
        
    return (
        <>
            <div className="col" style={{maxWidth: "250px"}}>
                <div class="card h-100 rounded-1  shadow-sm" style={{maxWidth: "250px"}}>
                    <img src={ img } class="card-img-top" alt="..."/>
                    <div class="card-body text-center p-3">
                        <h5 class="card-title mb-0 text-uppercase fw-bold">{ title }</h5>
                        <p class="card-text">
                            R${ price }
                        </p>

                        <div id='btn-section' className='d-flex flex-row justify-content-evenly'>
                            <button 
                                id='bt-edit' 
                                className="btn btn-dark rounded-4 fw-bold"
                                data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat"
                            >
                                <i class="bi bi-pencil-square m-3"></i>
                                <span className='m-2'>Editar</span>
                            </button>
                            <button id='bt-trash' className="btn btn-danger rounded-4 fw-bold"
                                onClick={(e) => {
                                    e.preventDefault()
                                    console.log(product.id)
                                    console.log(product.name)
                                }}
                            >
                                <i class="bi bi-trash3"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}