import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import App from "./App";
import ProtectedPage from "./pages/ProtectedPage";
import Administrator from "./pages/Administrator";
// import AdminBuild from "./pages/AdminBuild";
import NewProducts from "./pages/NewProducts";
import EditProducts from "./pages/EditProducts";
import Usuarios from "./pages/Usuarios";
import Register from "./pages/Register";
import Error403 from "./pages/errors/Error403";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <App/> } ></Route>
                <Route path="/entrar" element = { <Login/> } ></Route>
                <Route path="/cadastro" element = { <Register/> } ></Route>
                <Route path="/produtos" element = { <Products/> } ></Route>
                <Route 
                    path="/admin" 
                    element= {
                        <ProtectedPage>
                            <Administrator/>
                        </ProtectedPage>
                    }
                >
                </Route>
                <Route
                    path="/admin/novoProduto"
                    element= {
                        <ProtectedPage>
                            <Administrator>
                                <NewProducts/>
                            </Administrator>
                        </ProtectedPage>
                    }
                >
                </Route>
                <Route
                    path="/admin/editarProdutos"
                    element= {
                        <ProtectedPage>
                            <Administrator>
                                <EditProducts/>
                            </Administrator>
                        </ProtectedPage>
                    }
                ></Route>
                <Route
                    path="/admin/usuarios"
                    element= {
                        <ProtectedPage>
                            <Administrator>
                                <Usuarios/>
                            </Administrator>
                        </ProtectedPage>
                    }
                ></Route>


                {/* <Route path="/page" element = {<AdminBuild/>}></Route> */}
                <Route path="/error403" element = { <Error403/> } ></Route>

            </Routes>
        </BrowserRouter>
    );
}