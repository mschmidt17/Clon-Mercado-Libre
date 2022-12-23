import React from 'react';
import { Link } from 'react-router-dom';

//import './cart.css';

function Cart() {
  return (
    <div className='container-cart'>
        HOLA SOY Cart
        <Link to='/buy'>
          <button> COMPRAR </button>
        </Link>
    </div>
  );
}

export default Cart;