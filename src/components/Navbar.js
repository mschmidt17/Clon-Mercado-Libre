import React from 'react';
import logo from "../assets/logo.png";
import nivel from "../assets/nivel.webp";
import {CiLocationOn} from "react-icons/ci";
import {BsCart2} from "react-icons/bs";
import {RiArrowDropDownLine} from "react-icons/ri";
import Search from './Search.js';
import './CSS/navbar.css';



function Navbar() {
  return (
    <div className='container-navbar'>

      <div className='top-navbar'>
        <div className='logo'>
          <img src={logo} width="140" alt="logo"/>
        </div>
        <Search/>
        <div className='nivel'>
          <img src={nivel} width="350" alt="nivel"/>
        </div>
      </div>

      <div className='bottom-navbar'>
        <div className='location'>
          <CiLocationOn style={{"fontSize" : "25px"}}/>
          <a style={{"fontWeight" : "lighter"}}> Enviar a <br></br> <b>Capital Federal</b> </a>
        </div>

        <div className='lista'>
          <a> Categorias <RiArrowDropDownLine/> </a> 
          <a> Ofertas </a>
          <a> Historial </a>
          <a> Supermercado </a>
          <a> Moda </a>
          <a> Vender </a>
          <a> Ayuda </a>
        </div>

        <div className='cart'>
          <a> Crea tu cuenta  </a>
          <a> Ingresa </a>
          <a> Mis compras </a>
          <BsCart2/>
        </div>

      </div>

    </div>
  );
}

export default Navbar;