import React from 'react';
import './CSS/footerend.css';

function FooterEnd() {
  return (
    <div className='container-footerend'>
        
        <div className='footer-none'>
          <p> Trabajá con nosotros </p>
          <p> Términos y condiciones </p>
          <p> Cómo cuidamos tu privacidad</p>
          <p> Accesibildad </p>
          <p> Información al usuario financiero </p>
          <p> Ayuda </p>
          <p> Defensa del consumidor </p>
          <p> Información sobre seguros </p>
        </div>

        <div className='footer-end'>
          <p className='p-footer'> Copyright © 1999-2022 MercadoLibre S.R.L. </p>
          <p className='p-footer'> Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA </p>
        </div>

    </div>
  );
}

export default FooterEnd;