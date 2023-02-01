import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {offers, vendidos} from '../redux/actions.js';
import Carousel from '../components/Carousel.js';
import Payments from '../components/Payments.js';
import Offers from '../components/Offers.js';
import Subscription from '../components/Subscription.js';
import Benefits from '../components/Benefits.js';
import Advertising from '../components/Advertising';
import Discover from '../components/Discover.js';
import Categories from '../components/Categories.js';
import Footer from '../components/Footer.js';




//import './home.css';


function Home() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loading)
  const discover = useSelector((state) => state.discover);
  const interests = useSelector((state) => state.interests);
  const listOffers = useSelector((state) => state.offers)
  const listVendidos = useSelector((state) => state.vendidos)


  useEffect(() => {
    dispatch(offers());
    dispatch(vendidos());

    window.scrollTo(0, 0)
  }, [])

  return (

    <div className='container-home'>
        <Carousel/>
        <Payments/>
        <Offers title="Ofertas" listOffers={listOffers}/>
        <Subscription/>
        <Benefits/>
        <Advertising/>
        <Discover data={discover} title="Descubrí"/>
        <Offers title="Mas vendidos" listOffers={listVendidos}/>
        <Discover data={interests} title="Te puede interesar"/>
        <Categories/>
        <Footer/>
    </div>
  );
}

export default Home;