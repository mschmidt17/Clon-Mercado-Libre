import React from 'react';
import { useSelector } from 'react-redux';
import "./CSS/benefits.css";



function Benefits() {

    const benefits = useSelector((state) => state.benefits);

    

  return (
    <div className="container-benefits">
        <div className="benefits-top">
            <h2 className="benefits-title"> Beneficios de Mercado Puntos </h2>
            <p className="benefits-seeAll"> Ver todos los beneficios </p>
        </div>

        <div className="benefits-bottom">
            {benefits?.map((benefit) => {return (
                <div className="benefits" style={{"backgroundImage":`linear-gradient(${benefit.gradient}), url(${benefit.background})`}}>
                    <img src={benefit.logo} alt="Logo" className='logo-image'/>
                    <div>
                        {benefit.days? <h6>{benefit.days}</h6> : null}
                        <h3>{benefit.text}</h3>
                        <h5> {benefit.company}</h5>
                    </div>
                </div>
            )})}
        </div>
    </div>
  );
}

export default Benefits;