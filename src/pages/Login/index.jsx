import "./style.css";
import { useState } from "react";
import Header from "../../components/Header";
import './style.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login () {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ response, setResponse ] = useState(null);
    
    const navigate = useNavigate();

    const data = {
        username: username,
        password: password
    }

    const login = () => {
        axios.post("http://localhost:8080/auth/login", data)
        .then((resp) => {
            localStorage.setItem('token', resp.data.token)
            setResponse(true)
            return navigate("/");
        })
        .catch((err) => {
            setResponse(false)
        });
    }
    
    return (
        <>
           <Header/>
           <section className="d-flex align-items-center justify-content-center">
           <div>
                <form className="p-4 rounded-1 shadow" 
                    onSubmit={(e) => {
                        e.preventDefault();
                        login();
                    }}
                >

                    <h2 className="text-break mb-4">Faça login para continuar</h2>

                    <div class="mb-3">
                        <label for="exampleInputUsername" class="form-label text-uppercase">Nome de usuário</label>
                        <input type="text" class="form-control" id="exampleInputUsername" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label text-uppercase">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                        <div id="emailHelp" class="form-text" style={{color:"grey"}}>Evite compartilhar sua senha.</div>
                    </div>

                    <button type="submit" class="btn btn-primary rounded-5" id="btn">entrar</button>
                </form>
            </div>
           </section>
        </>
    );
}