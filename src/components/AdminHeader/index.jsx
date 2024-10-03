import './style.css';
import logo from "../../../public/img/logo.png";
import { Link } from "react-router-dom";


export default function AdminHeader () {
    return (
        <>
            <nav id="nav-sec" className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="container-fluid">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">                        
                        <ul className="navbar-nav flex-column" id="principal-ul">
                            <li id="logo-item" className="nav-item">
                                <Link className="nav-link text-center" to={"/"}><img src={logo} alt="" /></Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to={"/admin/novoProduto"} className="nav-link" href="#">
                                <i class="bi bi-plus-square-fill m-3"></i>
                                    Novos produtos    
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="bi bi-pencil-fill m-3"></i>
                                    Visualizar e editar
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="bi bi-people-fill m-3"></i>
                                    Usuários
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i class="bi bi-person-lines-fill m-3"></i>
                                    Contatos
                                </a>
                            </li>

                            <li className="nav-item">
                                <Link 
                                    className="nav-link" href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.removeItem('token');
                                        window.location.reload();
                                    }}
                                >
                                    <i class="bi bi-box-arrow-left m-3"></i>
                                    Fazer Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}