import React, { useState, useEffect } from 'react';
import {IoSearchOutline} from "react-icons/io5"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchProduct } from '../redux/actions';
import './CSS/search.css';


function Search () {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    
    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/items/?search=${name}`)
        setName("")

    }

    return (
        <form className="input" onSubmit={handleSubmit}>
            <input
            className="form-input"
            type="text"
            placeholder="Buscar productos, marcas y más..."
            onChange={(e) => handleInputChange(e)} 
            />
            <button className="btn-search" type="button">
                <p className='linea-search'>|</p>
                <IoSearchOutline className='search-icon'/>
            </button>
        </form>
    )
};


  export default Search