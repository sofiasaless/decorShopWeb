import "./style.css";

export default function LoginForm() {
    return (
        <>
            <form className="p-4 rounded-1 shadow">

                <h2 className="text-break mb-4">Faça login para continuar</h2>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-uppercase">Nome de usuário</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-uppercase">Senha</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                    <div id="emailHelp" class="form-text" style={{color:"grey"}}>Evite compartilhar sua senha.</div>
                </div>

                <button type="submit" class="btn btn-primary rounded-5" id="btn">entrar</button>
            </form>
        </>
    );
}