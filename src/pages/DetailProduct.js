import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { verDetail } from '../redux/actions.js';
import {cleanSearch} from "../redux/actions.js";
import Supermarket from "../components/Supermarket.js"
import {IoLocationOutline} from "react-icons/io5";
import {BsTruck} from "react-icons/bs"
import {CiTrophy} from "react-icons/ci"
import '../components/CSS/detail.css';



function DetailProduct() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const isLoading = useSelector((state) => state.loading)
  const detail = useSelector((state) => state.productDetail)
  const [image, setImage] = useState("")
  const [seller, setSeller] = useState("")


  useEffect(() => {
    dispatch(verDetail(id))
    console.log("soy el detalle", detail)
    return () => {                        
      dispatch(cleanSearch())
      setImage(detail?.pictures[0]?.url)
      setSeller(detail?.seller_address?.city?.name + ", " + detail?.seller_address?.state?.name)
    };
  }, [])
  

  return (
    <div className='container-detail'>
      {detail?.tags?.includes("supermarket_eligible") ? <Supermarket/> : null }

        <div className="product-detail">
          <div className='detail-left'>
            <div className='detail-left-top'>
              <div className='container-tumbnails'>
                {detail.pictures?.slice(0, 8).map((p) => {
                  return <img src={p.url} key={p.id} alt="pic" width="50" className='thumbnail-detail'/>
                })}
              </div>
              <img src={image} width="400" alt="producto" className='picture-detail'/>
              <div className='container-details'>
                <h3>{detail.title}</h3>
                <p>$ {detail.price}</p>
                <p>en 6x $ {(detail.price/6).toFixed(2)}</p>
                <p>Ver los medios de pago</p>
              </div>
            </div>

            <div className='detail-left-table'>
              <h3> Caracteristicas principales </h3>
              <table>
                <thead>
                  <tr className='table-header'>
                    <th className='columna-header'> </th>
                    <th className='columna-header'> </th>
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

            <div className='detail-left-bottom'>
              <h3>Otros</h3>
            </div>
          </div>

          <div className='detail-right'>
            <div className='detail-right-shipping'>
              <p className='detail-send'> <BsTruck className='icon-truck'/> Envío gratis a todo el país</p>
              <p className='detail-time'>Conocé los tiempos y las formas de envío.</p>
              <p className='detail-location'> <IoLocationOutline/> Calcular cuándo llega </p>
              {detail.available_quantity > 0 ?
              <div>
                <p className='detail-stock'>Stock disponible</p>
                <div className='detail-quantity'>
                  <p> Cantidad:</p>
                  <select name="select">
                    <option value="value1" defaultValue>1 unidad</option>
                    <option value="value2">2 unidades</option>
                    <option value="value3">3 unidades</option>
                    <option value="value4">4 unidades</option>
                    <option value="value5">5 unidades</option>
                    <option value="value6">6 unidades</option>
                  </select>
                  <p className='available'> ({detail.available_quantity} disponibles) </p> 
                </div>
              </div>
              : <p>No hay stock</p> }
              <button className='btn-buy'> Comprar ahora </button>
              <button className='btn-cart'> Agregar al carrito </button>
              <p className='detail-point'> <CiTrophy className='icon-trophy'/> Mercado Puntos.</p>
            </div>

            <div className='detail-right-seller'>
              <p className='detail-information'>Información sobre el vendedor</p>
              <p className='detail-seller-location'> <IoLocationOutline className='location-icon'/> Ubicación </p>
              <p className='detail-site'>{seller}</p>
              <p className='detail-platinum'><img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg" alt="medal" style={{"marginRight":"3%"}}/>MercadoLíder Platinum</p>
              <p className='detail-site'>¡Es uno de los mejores del sitio!</p>
              <ul className='seller-calification-container'>
                <li className='seller-calification' style={{"backgroundColor":"#FFF0F0"}}></li>
                <li className='seller-calification' style={{"backgroundColor":"#FFF5E8"}}></li>
                <li className='seller-calification' style={{"backgroundColor":"#FFFCDA"}}></li>
                <li className='seller-calification' style={{"backgroundColor":"#F1FDD7"}}></li>
                <li className='seller-calification' style={{"height":"0.7rem"}}></li>
              </ul>
              <ul className='seller-data'>
                <li className='seller-data-item'>
                  <h2>+1000</h2>
                  <p> Ventas en los últimos 60 días</p>
                </li>
                <li className='seller-data-item-middle' >
                  <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg" alt="dato" width="26"/>
                  <p>Brinda buena atención</p>
                </li>
                <li className='seller-data-item'>
                  <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg" alt="dato" width="26"/>
                  <p>Despacha sus productos a tiempo</p>
                </li>
              </ul>
              <p className='detail-date'>Ver más datos de este vendedor</p>
            </div>

            <div className='detail-right-payment'>
              <p className='detail-information'>Medios de pago</p>
              <p className='detail-credit'>Hasta 12 cuotas sin tarjeta</p>
              <img src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" width="75" alt="Mercado crédito"/>
              <p className='payment-type'>Tarjetas de crédito</p>
              <div className='credit-contatiner'>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" width="40" alt="Visa"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg" width="30" alt="American Express"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" width="65" alt="Naranja"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" width="40" alt="MasterCard"/>
              </div>
              <p className='payment-type'>Tarjetas de débito</p>
              <div className='credit-contatiner'>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"  width="70" alt="Visa"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"  width="33" alt="Maestro"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"  width="60" alt="MasterCard"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"  width="60" alt="Cabal"/>  
              </div>
              <p className='payment-type'>Efectivo</p>
              <div className='efectivo-container'>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"  width="33"alt="Pago Facil"/>
                <img src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"  width="63"alt="RapiPago"/> 
              </div>
              <p className='detail-date'>Conocé otros medios de pago</p>
            </div>

          </div>

        </div>
    </div>
    
  );
}

export default DetailProduct;