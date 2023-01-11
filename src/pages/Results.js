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
    console.log(products)

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

                    <h4>Ubicación</h4>
                    {products?.slice(0, 12).map(product => {
                    return (
                        <p className="results-city" key={product.id}> {product.address.city_name} </p>
                    )
                    })}
                    <p className="results-show-more"> Mostrar más </p>

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