import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useSearchParams } from 'react-router-dom';
import {cleanSearch} from "../redux/actions.js"
import publicidad from "../assets/publicidad.jpg";
import publi from "../assets/publi.jfif";
import ofertas from "../assets/ofertas.png";
import '../components/CSS/results.css';


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
                <div className='results-right'>
                    <h2> {product[0].toUpperCase() + product.substring(1)} </h2>
                    <p> {products.length} resultados </p>
                    <div>Llegan hoy ICONO</div>
                    <div>Full te ahorra envíos ICONO</div>
                    <div>Envíos gratis ICONO</div>

                    {products?.map(product => {
                    return (
                        <p key={product.id}> {product.address.city_name.slice(0, 20)} </p>
                    )
                    })}

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
                        <div key={result.id}>
                            <Link to={`/detail/${result.id}`} style={{"textDecoration":"none"}}>
                                <div className='card-results'>
                                    <img src={result.thumbnail} width="120" className='img-results' alt='producto'/>

                                    <div className='container-card-results'>
                                        <p className='title-results'>{result.title}</p>
                                        <p className='price-results'> ${result.price}</p>
                                        {result.shipping.free_shipping ? <p> Llega gratis hoy </p> : null}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Results;