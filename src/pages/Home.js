import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {offers, categories} from '../redux/actions.js';
import Carousel from '../components/Carousel.js';
import Payments from '../components/Payments.js';
import Offers from '../components/Offers.js';
import Subscription from '../components/Subscription.js';
import Benefits from '../components/Benefits.js';
import Advertising from '../components/Advertising';
import Discover from '../components/Discover.js';
import Categories from '../components/Categories.js';
import Footer from '../components/Footer.js';
import Footerend from '../components/FooterEnd.js';



//import './home.css';


function Home() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loading)
  const discover = useSelector((state) => state.discover);
  const interests = useSelector((state) => state.interests);


  useEffect(() => {
    dispatch(offers());
    dispatch(categories());
  }, [])

  return (

    <div className='container-home'>
        <Carousel/>
        <Payments/>
        <Offers/>
        <Subscription/>
        <Benefits/>
        <Advertising/>
        <Discover data={discover} title="Descubrí"/>
        <Offers/>
        <Discover data={interests} title="Te puede interesar"/>
        <Categories/>
        <Footer/>
    </div>
  );
}

export default Home;