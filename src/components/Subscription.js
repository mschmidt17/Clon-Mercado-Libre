import React from "react";
import "./CSS/subscription.css";



function Subscription() {


    return(
        <div className="container-subscription">
            <div className="subscription-top">
                <h2>Suscribite al nivel 6</h2>
                <div className="subscription-promo">
                    <p className="subscription-num"><del>$ 1.439</del></p>
                    <div className="subscription-algo">
                        <p className="subscription-number">$ 499</p>
                        <p className="subscription-num">/mes </p>
                    </div>
                </div>
            </div>

            <div className="susbscription-bottom">
                <p className="subscription-text"> Conseguí los mejores beneficios en Mercado Libre </p>

                <div className="subscription-options">
                    <div className="icon-subscription">
                        <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/dplus.svg" className="circle-icon" alt="Disney+"/>
                        <p> Disney+ sin cargo </p>
                    </div>

                    <div className="icon-subscription">
                        <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/widget-l6/starplus.svg" className="circle-icon" alt="Star+"/>
                        <p> Star+ sin cargo </p>
                    </div>

                    <div className="icon-subscription">
                        <img src="https://http2.mlstatic.com/resources/frontend/statics/loyal/v2/truckgiftv4@2x.png" className="circle-icon" alt="Star+"/>
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