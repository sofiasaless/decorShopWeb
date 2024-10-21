import './style.css'
import CardEditProduct from '../../components/CardEditProduct';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditProducts () {
    const [ products, setProducts ] = useState([]);
    const [ resp, setResp ] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8080/decor/list")
        .then((resp) => {
            setProducts(resp.data)
            setResp(true)
        })
        .catch((err) => {
            console.log(err)
            setResp(false)
        })
    },[])
    
    return (
        <>
            <h3 className='text-uppercase fw-bold text-center'>Modifique seus produtos como quiser!</h3>
        
            <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1 mb-1 align-items-center justify-content-center">
                
                {   
                    resp ?
                    products.map((p) => (
                        <>

                            <CardEditProduct
                                title={p.name}
                                price={p.price}
                                img={p.image}
                                product={p}
                            />

                        </>
                    ))
                    :
                    <div class="text-center mt-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                }

            </div>

        
        </>
    );
}