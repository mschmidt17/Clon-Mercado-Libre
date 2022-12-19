import React from 'react';
import hbo from "../assets/HBO.webp";
import paramount from "../assets/paramount_.jpg";
import widget from "../assets/Widget.jpg";
import "./CSS/benefits.css";

const benefits = [
    {
        background: widget,
        gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(16, 27, 58, 1)",
        text: "Sin cargo con el nivel 6",
        company: "Disney+ y Star+",
        logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg"
    },
    {
        background: hbo,
        gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(58, 4, 82, 1)",
        days: "7 DIAS GRATIS",
        text: "Hasta 50% OFF",
        company: "HBO Max",
        logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
    },
    {
        background: paramount,
        gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(0, 95, 243, 1)",
        days: "7 DIAS GRATIS",
        text: "Sin cargo con el nivel 6",
        company: "Paramount+",
        logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png"
    }
]

function Benefits() {

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