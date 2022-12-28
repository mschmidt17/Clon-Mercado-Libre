import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import Results from './pages/Results.js';
import DetailProduct from './pages/DetailProduct.js';
import Cart from './pages/Cart.js';
import BuyProducts from './pages/BuyProducts.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import './App.css';
import Footerend from './components/FooterEnd.js';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/results' element={<Results/>}/>
          <Route exact path='/detail/:id' element={<DetailProduct/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/buy' element={<BuyProducts/>}/>
        </Routes>
      <Footerend/>
    </div>
  );
}

export default App;
