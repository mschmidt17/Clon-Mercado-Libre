import React from "react";
import disney from "../assets/Disney+_logo.svg.png";
import star from "../assets/Star+_logo.svg.png";
import truck from "../assets/truckgiftv4@2x.png";
import "./CSS/subscription.css";



function Subscription() {


    return(
        <div className="container-subscription">
            <div className="subscription-top">
                <h2>Suscribite al nivel 6</h2>
                <p>  | $499/mes </p>
            </div>

            <div className="susbscription-bottom">
                <p> Conseguí los mejores beneficios en Mercado Libre </p>

                <div className="subscription-options">
                    <div className="icon-subscription">
                        <img src={disney} width='40' alt="Disney+"/>
                        <p> Disney+ sin cargo </p>
                    </div>

                    <div className="icon-subscription">
                        <img src={star} width='40' alt="Star+"/>
                        <p> Star+ sin cargo </p>
                    </div>

                    <div className="icon-subscription">
                        <img src={truck} width='40' alt="Star+"/>
                        <p>  Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de menos de $ 5.500 </p>
                    </div>
                </div>

                <div className="subscription-btn-container">
                    <button className="subscription-btn"> Suscribite </button>
                </div>
            </div>

        </div>
    );
}
  
export default Subscription;