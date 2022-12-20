import React from 'react';
import vichy from "../assets/Vichy.jpg"
import './CSS/advertising.css';



function Advertising() {

  return (
    <div className='container-advertising'>
        <div className='img-adv' style={{"backgroundImage":`url(${vichy})`}}>
            <img src="https://http2.mlstatic.com/D_NQ_809833-MLA52443961496_112022-OO.jpg" width="110" alt='La Roche Posay' className='img-logo'/>
            <img src="https://http2.mlstatic.com/D_NQ_779606-MLA52443961592_112022-OO.jpg" width="110" alt='Vichy' className='img-logo'/>
        </div>
            
        <div className='adv-text'>
            <h6 className='discount-adv'>HASTA 20% OFF</h6>
            <h2 className='title-discount'>LA MEJOR <br></br> PROTECCIÓN SOLAR</h2>
            <p>Ver productos {'>'}</p>
        </div>
    </div>
  );
}


export default Advertising;