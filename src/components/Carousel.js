import React from "react";
import "./CSS/carousel.css";
import gaming from "../assets/gaming.webp";
import navidad from "../assets/navidad.webp";
import navidad1 from "../assets/navidad1.webp";
import deco from "../assets/deco.webp";
import tv from "../assets/tv.webp";
import aire from "../assets/aire.webp";




function Carousel() {
  return (

    <div className="slider">
      <ul>
        <li>
          <img src={navidad}alt="gaming" />
        </li>
        <li>
          <img src={navidad1}alt="gaming" />
        </li>
        <li>
          <img src={gaming}alt="gaming" />
        </li>
        <li>
            <img src={deco}alt="deco"/>
        </li>
        <li>
          <img src={tv} alt="iluminacion" />
        </li>
        <li>
          <img src={aire} alt="aire" />
        </li>
      </ul>
    </div>
  
  );
}

export default Carousel;