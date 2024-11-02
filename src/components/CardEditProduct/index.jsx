import axios from 'axios';
import './style.css';
import { useState } from 'react';

export default function CardEditProduct( { title, img, product } ) {
    
    // states
    const [name, setName] = useState(product.name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [stock, setStock] = useState(product.stock)
    const [image, setImage] = useState(product.image)

    // getting the authorities from token
    const authAxios = axios.create( {
        baseURL: "http://localhost:8080/decor",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    // delete method with axios
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

    // update method with axios
    const updateProduct = () => {
        const productData = {
            id: product.id,
            name: name,
            description: description,
            price: price,
            stock: stock,
            image: image
        }

        authAxios.put('/update', productData)
        .then((resp) => {
            console.log('atualização feita com sucesso, ' + resp)
            handleReload()
        })
        .catch((err) => {
            console.log('erro ao atualizar o produto: ' + err)
        })
        
    }

    // reloding page function
    const handleReload = () => {
        window.location.reload();
    };

    // go back to product attributes if press close button
    const goBack = () => {
        setName(product.name)
        setDescription(product.description)
        setPrice(product.price)
        setStock(product.stock)
        setImage(product.image)
    }

    return (
        <>
            <div className="col" style={{maxWidth: "250px"}}>
                <div className="card h-100 rounded-1 shadow-sm" style={{maxWidth: "250px"}}>
                    <img src={ img } className="card-img-top" alt="..."/>
                    <div className="card-body text-center p-3">
                        <h5 className="card-title mb-0 text-uppercase fw-bold">{ title }</h5>
                        <p className="card-text">
                            R${ product.price }
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
                            <form>
                                <div class="mb-2">
                                    <label for="exampleInputName" class="ms-1 form-label text-uppercase fw-bold">Nome do produto</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} required class="form-control" type="text"/>
                                </div>

                                <div class="mb-2">
                                    <label for="exampleFormControlTextarea1" class="ms-1 form-label text-uppercase fw-bold">Descrição</label>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required class="form-control" id="exampleFormControlTextarea1" rows="3"/>
                                </div>

                                <div class="row mb-2">
                                    <div class="col">
                                        <label for="price" class="ms-1 form-label text-uppercase fw-bold">Preço</label>
                                        <input value={price} onChange={(e) => setPrice(e.target.value)} required id='price' type="number" class="form-control" min={0}/>
                                    </div>
                                    <div class="col">
                                        <label for="stock" class="ms-1 form-label text-uppercase fw-bold">Estoque</label>
                                        <input value={stock} onChange={(e) => setStock(e.target.value)} required id='stock' type="number" class="form-control" min={0}/>
                                    </div>
                                </div>

                                <div class="mb-2">
                                    <label for="image" class="ms-1 form-label text-uppercase fw-bold">Imagem</label>
                                    <input value={image} onChange={(e) => setImage(e.target.value)} required id='image' type="url" class="form-control" min={0}/>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={goBack}
                            >
                                Fechar
                            </button>
                            <button 
                                type="button" 
                                id='save-btn' 
                                className="btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    updateProduct();
                                }}
                            >
                                Salvar
                            </button>
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