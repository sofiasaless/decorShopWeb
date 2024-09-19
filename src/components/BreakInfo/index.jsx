import "./style.css";

export default function BreakInfo( { children } ){
    return (
        <>
            <div 
                id='break_infos' 
                className='d-flex align-items-center justify-content-center'
            >
                {
                    children
                }
            </div>
        </>
    );
}