export default function Administrator () {
    return (
        <>
            <h1>voce esta na pagina de admin, esta pagina é protegida</h1>
            {/* logout process (still might be change) */}
            <button onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem('token')
                window.location.reload();
            }}>fazer logout</button>
        
        </>
    );
}