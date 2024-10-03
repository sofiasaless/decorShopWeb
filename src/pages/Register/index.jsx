import "./style.css";
import Header from "../../components/Header";

export default function Register() {
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

                        <h2 className="text-break mb-4">Preencha e faça seu cadastro!</h2>

                        <div class="mb-3">
                            <label for="exampleInputUsername" class="form-label text-uppercase">Nome de usuário</label>
                            <input type="text" class="form-control" id="exampleInputUsername" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-uppercase">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
                            <div id="emailHelp" class="form-text" style={{color:"grey"}}>Evite compartilhar sua senha.</div>
                        </div>

                        <div className="d-flex justify-content-evenly">
                            <button type="submit" class="fw-bold btn btn-primary rounded-5" id="btn">cadastrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}