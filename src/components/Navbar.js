import React from 'react';
import logo from "../assets/logo.png";
import nivel from "../assets/nivel.webp";
import {IoLocationOutline} from "react-icons/io5";
import {BsCart2} from "react-icons/bs";
import {RiArrowDropDownLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
import Search from './Search.js';
import './CSS/navbar.css';



function Navbar() {
  return (
    <div className='container-navbar'>

      <div className='top-navbar'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} width="135" alt="logo"/>
          </Link>
        </div>
        <Search/>
        <img src={nivel} width="340" alt="nivel"/>
      </div>

      <div className='bottom-navbar'>
        <div className='location'>
          <IoLocationOutline className='icon-location'/>
          <p className='send-to'> Enviar a <br></br> <p className='cap-federal'>Capital Federal</p> </p>
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
          <a> Creá tu cuenta  </a>
          <a> Ingresá </a>
          <a> Mis compras </a>
          <Link to='/cart' style={{"textDecoration":"none"}}>
            <BsCart2 className='icon-cart'/>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;