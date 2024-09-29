import './style.css';
import logo from "../../../public/img/logo.png";
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <>
            <div id='header' className="nav justify-content-center">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link to={"/entrar"} class="nav-link active" aria-current="page">Entrar</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link">Produtos</Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/"} className="nav-link" id='logo'><img src={logo} alt="" /></Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link">Sobre</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link">Contato</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}