import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { verDetail } from '../redux/actions.js';
//import './detail.css';

function DetailProduct() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const isLoading = useSelector((state) => state.loading)
  const detail = useSelector((state) => state.productDetail)

  useEffect(() => {
    dispatch(verDetail(id));
    console.log(detail) //para ver las cosas que podemos renderizar
  }, [])

  return (
    <div className='container-detail'>
        <h1>{detail.title}</h1>
        <img src={detail.pictures[0].url} alt='producto' />
    </div>
  );
}

export default DetailProduct;