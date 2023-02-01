import React, {useEffect} from 'react';
import { description } from '../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";
import "./CSS/description.css"


function Description({id}) {
  const dispatch = useDispatch()
  const descripcion = useSelector((state) => state.description)

  const cleanText = (text) => {
    var newText = ``;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== ".") {
        newText = newText + text[i]
      } 
      else if (text[i] === "." && text[i-1] !== ".") {
        newText = newText + text[i] + "<br></br>"
      }
    }
    return newText
  }

  const textoLimpio = cleanText(descripcion)

  useEffect(() => {
    dispatch(description(id))
  }, [])

  return (
    <div className='container-description'>
      <h2 className='description-text'> Descripción </h2>
      {textoLimpio ? 
      <div dangerouslySetInnerHTML={{__html:`<p> ${textoLimpio}</p>`}}></div>
      :
      <p>No se encontro la descripcion del producto</p>
      }
    </div>
  );
}

export default Description;