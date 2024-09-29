import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import './style.css';

export default function Login () {
    return (
        <>
           <Header/>
           <section className="d-flex align-items-center justify-content-center">
            <LoginForm/>

           </section>
        </>
    );
}