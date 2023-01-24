import React from 'react';
import './CSS/supermarket.css';
import { useSelector } from "react-redux";




function Supermarket() {
    const supermarketItems = useSelector((state) => state.supermarket)

    return (
        <div className='supermarket-detail'>
            <div className='supermarket-container'>
                <div className='supermarket-text'> 
                    <h2 className='supermarket-title'> Supermercado </h2>
                    <p> Envío gratis en carritos desde $ 5500. </p>
                </div>
                <div className='miki'>
                    {supermarketItems.length > 0 ? 
                        supermarketItems.map((item) => {
                            return(
                                <div className='img-supermarket' key={item.id}>
                                    <img src={item.image} alt="Ofertas" width="100" />
                                    <p className='text-image'> {item.text} </p>
                                </div>
                            )
                        })
                    : null
                    }
                </div>
            </div>
        </div>    
    );
}

export default Supermarket;