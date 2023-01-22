import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useSearchParams } from 'react-router-dom';
import {cleanSearch} from "../redux/actions.js"
import publicidad from "../assets/publicidad.jpg";
import publi from "../assets/publi.jfif";
import ofertas from "../assets/ofertas.png";
import '../components/CSS/results.css';
import ToggleSwitch from "../components/ToggleSwitch";



function Results() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.searchProduct)
    const [params] = useSearchParams()
    const product = params.get('search') ?? "";

    useEffect(() => {
        return () => {                        
            dispatch(cleanSearch())
        };                 
    }, [])

    

    return (
        <div className='container-results'>
            <img src={publicidad} alt="publicidad" className='publicidad-results'/>

            <div className='results-filtros'>
                <div className='results-left'>
                    <h2> {product[0].toUpperCase() + product.substring(1)} </h2>
                    <p className='results-number'> {(Math.random()*100).toFixed(3)} resultados </p>

                    <ToggleSwitch label="Llegan hoy" />
                    <ToggleSwitch label="Full te ahorra envíos" />
                    <ToggleSwitch label="Envíos gratis" />
                    
                    <div>
                        <h4>Tiempo de entrega</h4>
                        <p className="results-city"> Llega en menos de 24 horas</p>
                    </div>

                    <div>
                        <h4>Marca</h4>
                        {products?.slice(0, 12).map(product => {
                        return (
                            <p className="results-city" key={product.id}> {product.attributes[0].value_name} </p>
                        )
                        })}
                        <p className="results-show-more"> Mostrar más </p>
                    </div>

                    <div>
                        <h4>Costo de envío</h4>
                        <p className="results-city"> Gratis </p>
                    </div>

                    <div>
                        <h4>Ubicación</h4>
                        {products?.slice(0, 12).map(product => {
                        return (
                            <p className="results-city" key={product.id}> {product.address.city_name} </p>
                        )
                        })}
                        <p className="results-show-more"> Mostrar más </p>
                    </div>

                    <div>
                        <h4>Descuentos</h4>
                        <p className="results-off"> Desde 5% OFF </p>
                        <p className="results-off"> Desde 10% OFF </p>
                        <p className="results-off"> Desde 15% OFF </p>
                        <p className="results-off"> Desde 20% OFF </p>
                        <p className="results-off"> Desde 25% OFF </p>
                        <p className="results-off"> Desde 30% OFF </p>
                        <p className="results-off"> Desde 40% OFF </p>
                    </div>

                    <div>
                        <h4>Tiendas oficiales</h4>
                        <p className="results-city">Solo tiendas oficiales</p>
                    </div>

                    <div className='imagen-publi'>
                        <img src={publi} alt='Oferta' className='img-public'/>
                    </div>
                    
                    <div className='img-oferta'>
                        <img src={ofertas} alt='Oferta' className='imagen-oferta'/>
                    </div>

                </div>

                <div className="results">
                    {products?.map(result => {
                    return (
                        <Link to={`/detail/${result.id}`} style={{"textDecoration":"none"}}  key={result.id}>
                            <div className='card-results'>
                                <img src={result.thumbnail} width="140" className='img-results' alt='producto'/>
                                <div className='container-card-results'>
                                    <p className='title-results'>{result.title} </p>
                                    <p className='price-results'> $ {Math.floor(result.price)}</p>
                                    {result.shipping.free_shipping ? <p className='free-today'> Llega gratis hoy </p> : null}
                                </div>
                                    
                            </div>
                        </Link>
                    )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Results;