import React from "react";
import {useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Card from "./Card.js";
import './CSS/offers.css';


export default function Offers() {

    const listOffers = useSelector((state) => state.offers)

    return (

        <div className="offers-container">
            <div className="offers-top">
                <h2 className="offers-title"> Ofertas </h2>
                <p className="offers-seeAll"> Ver todas </p>
            </div>
            
            <div className="offers-slider">
                {listOffers?.map(offer => {
                return (
                    <div key={offer.id}>
                        <Link to={`/detail/${offer.id}`} style={{"textDecoration":"none"}}>
                            <Card offer={offer}/>
                        </Link>
                    </div>
                )
                })} 
            </div>
        </div>
    );
}
  