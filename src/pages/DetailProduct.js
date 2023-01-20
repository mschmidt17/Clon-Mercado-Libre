import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { verDetail } from '../redux/actions.js';
import {cleanSearch} from "../redux/actions.js";
import Supermarket from "../components/Supermarket.js"
import '../components/CSS/detail.css';



function DetailProduct() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const isLoading = useSelector((state) => state.loading)
  const detail = useSelector((state) => state.productDetail)

  useEffect(() => {
    dispatch(verDetail(id));
    console.log(detail) 
    return () => {                        
      dispatch(cleanSearch())
    };
  }, [])

  return (
    <div className='container-detail'>
      <Supermarket/> 

        <div className="img-detail">
          <img src={detail.thumbnail} alt="imagen producto" width="150"/>
          <h2>{detail.title}</h2>

          <div className='detail-description'>
            <h3> Caracteristicas principales </h3>
            
            <table>
              <thead>
                <tr className='table-header'>
                  <th className='columna-header'> </th>
                  <th className='columna-header-'> </th>
                  <th className='columna-header'> </th>
                  <th className='columna-header'> </th>
                </tr>
              </thead>

              <tbody>
                <tr >
                  <td className='columna-respuesta'> {} </td>
                  <td className='columna-respuesta'> {} </td>
                  <td className='columna-respuesta'> {} </td>
                  <td className='columna-respuesta'> {} </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            Envío gratis a todo el país
          </div>

        </div>
    </div>
    
  );
}

export default DetailProduct;