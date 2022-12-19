import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { verDetail } from '../redux/actions.js';
//import './detail.css';

function DetailProduct({id}) {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loading)
  const detail = useSelector((state) => state.productDetail)

  useEffect(() => {
    dispatch(verDetail(id));
  }, [])

  return (
    <div className='container-detail'>
        HOLA SOY DetailProduct
    </div>
  );
}

export default DetailProduct;