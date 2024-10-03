import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import App from "./App";
import ProtectedPage from "./pages/ProtectedPage";
import Administrator from "./pages/Administrator";
// import AdminBuild from "./pages/AdminBuild";
import NewProducts from "./pages/NewProducts";
import EditProducts from "./pages/EditProducts";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <App/> } ></Route>
                <Route path="/entrar" element = { <Login/> } ></Route>
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


                {/* <Route path="/page" element = {<AdminBuild/>}></Route> */}

            </Routes>
        </BrowserRouter>
    );
}