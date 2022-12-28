import React from "react";
import "./CSS/carousel.css";
import argentina from "../assets/argentina.webp";
import ruta from "../assets/ruta.webp";
import herramientas from "../assets/herramientas.webp";
import belleza from "../assets/belleza.webp";
import navidad from "../assets/navidad.webp";
import notebooks from "../assets/notebooks.webp";



function Carousel() {
  return (

    <div className="slider">
      <ul>
        <li>
          <img src={argentina}alt="argentina" />
        </li>
        <li>
          <img src={ruta}alt="ruta" />
        </li>
        <li>
            <img src={belleza}alt="belleza"/>
        </li>
        <li>
          <img src={navidad} alt="navidad" />
        </li>
        <li>
          <img src={notebooks} alt="notebooks" />
        </li>
        <li>
          <img src={herramientas}alt="herramientas" />
        </li>
      </ul>
    </div>
  
  );
}

export default Carousel;