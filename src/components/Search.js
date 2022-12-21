import React from 'react';
import './CSS/search.css';
import {IoSearchOutline} from "react-icons/io5"


function Search () {

    return (
        <div className="input">
            <input
            className="form-input"
            type="text"
            placeholder="Buscar productos, marcas y más..."
            />
            <button className="btn-search" type="button">
                <p className='linea-search'>|</p>
                <IoSearchOutline className='search-icon'/>
            </button>
        </div>
    )
};


  export default Search