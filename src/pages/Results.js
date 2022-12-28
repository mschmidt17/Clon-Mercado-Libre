import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {cleanSearch} from "../redux/actions.js"
import '../components/CSS/results.css';


function Results() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.searchProduct)
    console.log(products)

    useEffect(() => {
        return () => {                        
            dispatch(cleanSearch())
        };                 
    }, [])

    return (
      <div className='container-results'>

          <div className="results">
                {products?.map(result => {
                return (
                    <div key={result.id}>
                        <Link to={`/detail/${result.id}`} style={{"textDecoration":"none"}}>
                            <div className='card-results'>
                                <img src={result.thumbnail} width="120" className='img-results'/>

                                <div className='container-card-results'>
                                    <p className='title-results'>{result.title}</p>
                                    <p className='price-results'> ${result.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
                })}

            </div>
      </div>
    );
}

export default Results;