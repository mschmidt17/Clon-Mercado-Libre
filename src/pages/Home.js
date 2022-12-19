import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {offers, categories} from '../redux/actions.js';
import Carousel from '../components/Carousel.js';
import Payments from '../components/Payments.js';
import Offers from '../components/Offers.js';
import Subscription from '../components/Subscription.js';




//import './home.css';


function Home() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.loading)
  const listCategories = useSelector((state) => state.categories)

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

        <h2>CATEGORIES: </h2>
        {listCategories?.map(category => {
          return (
            <div key={category.id}>
              <p>{category.name}</p>
            </div>
          )
        })}
    </div>
  );
}

export default Home;