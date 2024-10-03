import AdminHeader from "../../components/AdminHeader";
import NewProducts from "../NewProducts";
import './style.css';

export default function Administrator ( { children } ) {
    return (
        <>
           <section id="admin-section">
                <AdminHeader/>

                <div id="section-contet" className="p-2 d-flex flex-column align-items-center justify-content-center">
                    <div className="m-4">
                        <h1>Bem-vindo a página administrador!</h1>
                        <p>Você é um administrador do Acervo E.V.A! Aqui você terá acesso a diversas funcionalidades feitas para melhorar sua página, Customize seus produtos, faça atualizações de estoque, e muito mais!</p>
                        <div id="break-line" className="mt-4 rounded-5"/>                
                    </div>

                    <div id="form-sec" className="container m-3 d-flex flex-column align-items-center justify-content-center">
                        { children }
                    </div>

                </div>

            </section>
        </>
    );
}