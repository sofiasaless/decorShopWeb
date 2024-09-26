import './style.css';

export default function CardInfo( { title, description, img } ){
    return (
        <>
          <div id='card-info'>
            <div className='card' style={{maxWidth: "500px"}}>
              <div className='row g-0'>
                <div className='col-md-4' style={{ display:"flex", alignItems: "center"}}>
                  <img src={img} alt="foto do card" />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title text-start text-uppercase'>{ title }</h5>
                    <p className='card-text text-start'>{ description }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}