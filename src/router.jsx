import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import App from "./App";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <App/> } ></Route>
                <Route path="/entrar" element = { <Login/> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}