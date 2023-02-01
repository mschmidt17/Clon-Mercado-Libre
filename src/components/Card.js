import React from "react";
import './CSS/card.css';



function Card({offer}) {
    const discount = Math.round((offer.original_price - offer.price) / offer.original_price * 100)
    const freeShipping = offer.shipping.free_shipping
    const cuotes = (offer.price/6).toFixed(2)
    

    return(
        <div className="card-container"> 
            <div className="card-img">
                <img src={offer.thumbnail} alt="imagen produCto" width="150"/>
            </div>

            <div className="card-middle">
                <h2 className="card-price"> $ {offer.price} </h2>
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