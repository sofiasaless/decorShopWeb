import './style.css';
import logo from "../../../public/img/logo.png";

export default function Header () {
    return (
        <>
            <div id='header' className="nav justify-content-center ">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Produtos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link p-0" href="#" id='logo'><img src={logo} alt="" /></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Materiais</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </>
    );
}