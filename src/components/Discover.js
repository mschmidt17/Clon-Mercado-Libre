import React from 'react';
import hbo from "../assets/HBO.webp";
import paramount from "../assets/paramount_.jpg";
import "./";



function Discover() {

  return (
    <div className="container-benefits">

        <div className="benefits">
            <img src={widget} width='320' alt="Widget"/>
            <p> Sin cargo con el nivel 6 </p>
            <p> Disney+ y Star+ </p>
        </div>

        <div className="benefits">
            <img src={hbo} width='320' alt="HBO"/>
            <h5> 7 DIAS GRATIS </h5>
            <p> Hasta 50% OFF </p>
            <p> HBO Max </p>
        </div>


    </div>
  );
}

export default Discover;