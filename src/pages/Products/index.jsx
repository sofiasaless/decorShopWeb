import { useEffect, useState } from "react";
import Header from "../../components/Header";
import './style.css'
import axios from "axios";
import CardProduct from "../../components/CardProduct";

export default function Products () {
    
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
    })
    
    return (
        <>
            <Header/>

            <section id="initial-section" className="pt-5">
                <div id="break" className="text-center">
                    <span className="fw-bolder">Importante saber!</span>
                    <p>
                        Todas decorações, enfeites e materiais móveis são produzidos à mão, utilizando de folhas E.V.A de diversas cores e cola isopor. As produções são feitas com capricho e cuidado visando sua durabilidade.
                    </p>
                </div>
            </section>

            <section id="prod-section" className="d-flex flex-column">

            
                <div className="embleme d-flex flex-row justify-content-space-evenly">
                    <div className="breaker_text"></div>
                    <h2><span className='d-block text-center text-uppercase fw-bold'>Decorações</span><span className='d-block text-center text-uppercase fw-bold'>Disponíveis</span></h2>
                    <div className="breaker_text"></div>
                </div>

                <div id='grid-container' class="row row-cols-2 row-cols-md-4 g-3 mt-1 mb-1 align-items-center justify-content-center">
                    
                    {   
                        resp ?
                        products.map((p) => (
                            <>
                                <CardProduct 
                                    key={p.id}
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

            </section>
        </>
    );
}