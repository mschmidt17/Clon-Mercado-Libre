import React, {useEffect} from 'react';
import { description } from '../redux/actions.js';
import { useDispatch, useSelector } from "react-redux";


function Description({id}) {
  const dispatch = useDispatch()
  const descripcion = useSelector((state) => state.description)


  useEffect(() => {
    dispatch(description(id))
  }, [])

  return (
    <div className='container-question'>
      {descripcion ? 
      <p>{descripcion}</p>
      :
      <p>No se encontro la descripcion del producto</p>
      }
    </div>
  );
}

export default Description;