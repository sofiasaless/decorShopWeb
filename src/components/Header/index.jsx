import './style.css';
import logo from "../../../public/img/logo.png";
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <>
            <div id='header' className="nav sticky-top justify-content-center align-items-center text-center">
                <ul className="nav justify-content-center">
                    <li class="nav-item d-flex align-items-center justify-content-center text-center">
                        <Link to={"/entrar"} class="nav-link text-uppercase fw-bold" aria-current="page">Entrar</Link>
                    </li>
                    <li class="nav-item d-flex align-items-center justify-content-center text-center">
                        <Link to={"/produtos"} class="nav-link text-uppercase fw-bold">Produtos</Link>
                    </li>

                    <li className="nav-item d-flex align-items-center justify-content-center text-center">
                        <Link to={"/"} className="nav-link text-uppercase fw-bold" id='logo'><img src={logo} alt="Logo" /></Link>
                    </li>

                    <li class="nav-item d-flex align-items-center justify-content-center text-center">
                        <Link to={"/"} class="nav-link text-uppercase fw-bold">Sobre</Link>
                    </li>
                    <li class="nav-item d-flex align-items-center justify-content-center text-center">
                        <Link  to={"/"} class="nav-link text-uppercase fw-bold">Contato</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}