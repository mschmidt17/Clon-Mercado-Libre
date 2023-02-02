import React from "react";
import {number} from "../redux/actions.js";
import './CSS/card.css';



function Card({offer}) {
    const discount = Math.round((offer.original_price - offer.price) / offer.original_price * 100)
    const freeShipping = offer.shipping.free_shipping
    const cuotes = Math.ceil(offer.price/6)
    


    return(
        <div className="card-container"> 
            <div className="card-img">
                <img src={offer.thumbnail} alt="imagen produCto" width="150"/>
            </div>

            <div className="card-middle">
                <h2 className="card-price"> $ {number(Math.ceil(offer.price))} </h2>
                {discount > 0 ? <p className="card-discount"> {discount}% OFF </p> : null}
            </div>

            <div>
                {freeShipping ? 
                    <p className="card-promo">Envío gratis</p> 
                : 
                    <p className="card-promo">6x ${cuotes} sin interés</p> 
                }
            </div>

            {
            //<p>{offer.title}</p>                 PARA EL HOVER
            }
        </div>

    );
}
  
export default Card;