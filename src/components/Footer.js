import React from 'react';
import './CSS/footer.css';

function Footer() {
  return (
    <div className='container-footer'>

      <div className='footer-name'>

        <div className="card-footer">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="pay" className="icon-ft"/>
            <div className="footer-text">
                <p className='footer-subtext1'> Elegí cómo pagar</p>
                <p className="footer-subtext2"> Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito. </p>
                <p className='footer-subtext3'> Cómo pagar tus compras </p>
            </div>
        </div>
        <hr className='vertical-pne'></hr>
        <div className="card-footer">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="send" className="icon-ft"/>
            <div className="footer-text">
                <p className='footer-subtext1'> Envío gratis desde $ 5.500 </p>
                <p className="footer-subtext2"> Solo por estar registrado en Mercado pbre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos. </p>
                <p className='footer-subtext3'> Conocé más sobre este beneficio </p>
            </div>
        </div>
        <hr className='vertical-pne'></hr>
        <div className="card-footer">
            <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="security" className="icon-ft"/>
            <div className="footer-text">
                <p className='footer-subtext1'> Seguridad, de principio a fin </p>
                <p className="footer-subtext2"> ¿No te gusta? ¡Devolvelo! En Mercado pbre, no hay nada que no puedas hacer, porque estás siempre protegido. </p>
                <p className='footer-subtext3'> Cómo te protegemos </p>
            </div>
        </div>

      </div>

      <div className='footer-bottom'>

        <div className='footer-box'>
          <p className='footer-box-title'> <b>B</b>otón de arrepentimiento </p>
          <p className='footer-subtext3'> Cancelar una compra <br></br> Cancelar una suscripción <br></br> Cancelar un seguro o garantía </p>
        </div>

        <div className='footer-box'>
          <p className='footer-box-title'> <b>C</b>onocé las normas que aplican cuando comprás </p>
          <p className='footer-subtext3'> Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor </p>
        </div>

      </div>

      <div className='footer-insurance'>
        <img src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/insurance/ssnlogo.svg" alt="insurance" className="icon-ssn" width="300"/>
        <img src="https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg" alt="user" className="icon-ssn"/>
        <img src="" alt="user" className="icon-ssn"/>
      </div>

    </div>
  );
}

export default Footer;