import { useParams } from "react-router-dom";

export default function ProductDetails () {
    const { id } = useParams(); 
    
    return (
        <>
            <h1>produto de nome: {id} </h1>
            <h2>produto de id {} </h2>
        </>
    );
}