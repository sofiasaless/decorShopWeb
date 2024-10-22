import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export default function ProtectedPage( { children } ) {
    const navigate = useNavigate();
    
    // getting the authorites from token
    const authAxios = axios.create( {
        baseURL: "http://localhost:8080/auth",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    // testing if the user has admin role for acess admin page
    const getAuth = authAxios.get("/authorize")
    .then((r) => {
        if (r.status == 200) {
            console.log('status da requisição: ' + r.status)
            return true;
        }
    })
    .catch(() => {
        console.log("nao autorizado")
        return navigate('/error403');
    })
    

    return getAuth ? children : <Navigate to={"/"}/>

    // return children;
}