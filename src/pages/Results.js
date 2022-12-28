import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import {cleanSearch} from "../redux/actions.js"
//import './results.css';

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
          HOLA SOY Results
          <div className="offers-slider">
                {products?.map(result => {
                return (
                    <div key={result.id}>
                        <Link to={`/detail/${result.id}`} style={{"textDecoration":"none"}}>
                            <p>{result.title}</p>
                        </Link>
                    </div>
                )
                })} 
            </div>
      </div>
    );
}

export default Results;