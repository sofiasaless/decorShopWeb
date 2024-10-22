import './style.css'
import { useNavigate } from 'react-router-dom';

export default function Error403 () {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center text-center mt-5">

      <div className="row">

        <div className="col-md-12">
          <h1 className="display-1 text-danger">403</h1>
          <h2 id='warn-title' className="mb-4">Acesso Negado :(</h2>
          <p id='warn-message' className="lead">Você não tem permissão para acessar esta página.</p>
          <button id='goHome-btn' className="btn fw-bold btn rounded-5 p-2" onClick={goHome}>
            voltar para a página inicial
          </button>
        </div>

      </div>

    </div>
  );
};