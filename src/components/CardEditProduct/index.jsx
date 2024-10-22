import axios from 'axios';
import './style.css';

export default function CardEditProduct( { title, price, img, product } ) {
    

    // getting the authorities from token
    const authAxios = axios.create( {
        baseURL: "http://localhost:8080/decor",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    const deleteProduct = () => {
        authAxios.delete(`/${product.id}`)
        .then((res) => {
            console.log('exclusão feita com sucesso: ' + res);
            handleReload();
        })
        .catch((err) => {
            console.log('erro ao excluir produto: ' + err);
        })
    }

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <>
            <div className="col" style={{maxWidth: "250px"}}>
                <div className="card h-100 rounded-1 shadow-sm" style={{maxWidth: "250px"}}>
                    <img src={ img } className="card-img-top" alt="..."/>
                    <div className="card-body text-center p-3">
                        <h5 className="card-title mb-0 text-uppercase fw-bold">{ title }</h5>
                        <p className="card-text">
                            R${ price }
                        </p>

                        <div id='btn-section' className='d-flex flex-row justify-content-evenly'>
                            <button 
                                id='bt-edit' 
                                className="btn btn-dark rounded-4 fw-bold"
                                data-bs-toggle="modal" 
                                data-bs-target={`#editModal-${product.id}`}
                                data-bs-whatever="@fat"
                            >
                                <i className="bi bi-pencil-square m-3"></i>
                                <span className='m-2'>Editar</span>
                            </button>
                            <button 
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target={`#deleteModal-${product.id}`}
                                id='bt-trash' 
                                className="btn btn-danger rounded-4 fw-bold" 
                            >
                                <i className="bi bi-trash3"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* bootstrapt modal for update product form  */}
            <div className="modal fade" id={`editModal-${product.id}`} tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase fw-bold" id="editModalLabel">Editar produto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {product.id} - {product.name}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" id='save-btn' className="btn">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* bootstrapt modal for delete product  */}
            <div className="modal fade" id={`deleteModal-${product.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase fw-bold" id="deleteModalLabel">Confirmar Exclusão</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Tem certeza que deseja excluir o produto <strong>"{product.name}"</strong>?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={deleteProduct}>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}