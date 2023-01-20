import React from 'react';
import './CSS/supermarket.css';
import { useSelector } from "react-redux";




function Supermarket() {
    const supermarketItems = useSelector((state) => state.supermarket)

    return (
        <div className='supermarket-detail'>
            <h2 className='supermarket-title'> Supermercado </h2>
            {supermarketItems.length > 0 ? 
                supermarketItems.map((item) => {
                    return(
                        <div className='img-supermarket' key={item.id}>
                            <img src={item.image} alt="Ofertas" width="120" />
                            <p className='text-image'> {item.text} </p>
                        </div>
                    )
                })
            : null
            }

        </div>    
    );
}

export default Supermarket;