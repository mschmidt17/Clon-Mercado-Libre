import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { verDetail } from '../redux/actions.js';
import {cleanSearch} from "../redux/actions.js";
import ofertas2 from "../assets/ofertas2.png";
import personal from "../assets/personal.png";
import bebes from "../assets/bebes.png";
import limpieza from "../assets/limpieza.png";
import bebidas from "../assets/bebidas.png";
import almacen from "../assets/almacen.png";
import mascotas from "../assets/mascotas.png";
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

        <div className='supermarket-detail'>

          <h2 className='supermarket-title'> Supermercado </h2>

            <div className='img-supermarket'>
              <img src={ofertas2} alt="Ofertas" width="120" />
              <p className='text-image'> Ofertas </p>
            </div>

            <div className='img-supermarket'>
              <img src={personal} alt="Cuidado Personal" width="120" />
              <p className='text-image'> Cuidado Personal</p>
            </div>
            
            <div className='img-supermarket'>
              <img src={bebes} alt="Bebes" width="120" />
              <p className='text-image'> Bebes </p>
            </div>

            <div className='img-supermarket'>
              <img src={limpieza} alt="Limpieza" width="120" />
              <p className='text-image'> Limpieza </p>
            </div>

            <div className='img-supermarket'>
              <img src={bebidas} alt="Bebidas" width="120" />
              <p className='text-image'> Bebidas </p>
            </div>

            <div className='img-supermarket'>
              <img src={almacen} alt="Almacen"  width="120" />
              <p className='text-image'> Almacen </p>
            </div>

            <div className='img-supermarket'>
              <img src={mascotas} alt="Mascotas" width="100" />
              <p className='text-image'> Mascotas </p>
            </div>
        </div>

        

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