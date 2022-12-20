import React from 'react';
import vichy from "../assets/Vichy.jpg"
import './CSS/advertising.css';



function Advertising() {

  return (
    <div className='container-advertising'>
         <img src={vichy} alt="vichy" className='img-adv' />
         <div className='adv-text'>
            <h6>HASTA 20% OFF</h6>
            <h2>LA MEJOR PROTECCIÓN SOLAR</h2>
            <p>Ver productos {'>'}</p>
         </div>
    </div>
  );
}


export default Advertising;