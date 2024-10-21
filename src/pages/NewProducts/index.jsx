import { useState } from 'react';
import './style.css';
import axios from 'axios';

export default function NewProducts() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [image, setImage] = useState('')

    const clearFields = () => {
        setName('')
        setDescription('')
        setPrice('')
        setStock('')
        setImage('')
    }

    // data for posting
    const product = {
        name: name,
        description: description,
        price: price,
        stock: stock,
        image: image
    }

    // getting the authorites from token
    const authAxios = axios.create( {
        baseURL: "http://localhost:8080/decor",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    const registraitNewProduct = () => {
        authAxios.post('/save', product)
        .then((res) => {
            clearFields()
            console.log('deu certo: ' + res);
        })
        .catch((err) => {
            console.log('deu merda: ' + err);
        })
    }

    return (
        <>
            <h3 className='text-center fw-bold text-uppercase mb-4'>Poste um novo produto e automaticamente estará disponível no seu site!</h3>
            <form id='post-form' className='rounded-3 shadow'
                onSubmit={(e) => {
                    e.preventDefault();
                    registraitNewProduct();
                }}
            >
                <div class="mb-2">
                    <label for="exampleInputName" class="ms-1 form-label text-uppercase fw-bold">Nome do produto</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} class="form-control" type="text" placeholder="Ex: Calendário temático" aria-label="default input example"/>
                </div>

                <div class="mb-2">
                    <label for="exampleFormControlTextarea1" class="ms-1 form-label text-uppercase fw-bold">Descrição</label>
                    <textarea required value={description} onChange={(e) => setDescription(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder='Ex: O calendário temático é feito com ...'></textarea>
                </div>

                <div class="row mb-2">
                    <div class="col">
                        <label for="price" class="ms-1 form-label text-uppercase fw-bold">Preço</label>
                        <input required value={price} onChange={(e) => setPrice(e.target.value)} id='price' type="number" class="form-control" min={0} placeholder="Ex: 20.99"/>
                    </div>
                    <div class="col">
                        <label for="stock" class="ms-1 form-label text-uppercase fw-bold">Estoque</label>
                        <input required value={stock} onChange={(e) => setStock(e.target.value)} id='stock' type="number" class="form-control" min={0} placeholder="Ex: 2"/>
                    </div>
                </div>

                <div class="mb-2">
                    <label for="image" class="ms-1 form-label text-uppercase fw-bold">Imagem</label>
                    <input required value={image} onChange={(e) => setImage(e.target.value)} id='image' type="url" class="form-control" min={0} placeholder='Ex: https://i.pinimg.com/736x/ce/48/ba/ce48ba6ee9adc9904cb8024897b86377.jpg'/>
                </div>

                <div id='btn-group'>
                    <button type="submit" id='cadastrar' class="btn rounded-5 text-lowercase">Cadastrar novo produto</button>
                    <button onClick={clearFields} type="button" id='limpar' class="btn rounded-5 text-lowercase">Limpar</button>
                </div>
            </form>
        </>
    );
}