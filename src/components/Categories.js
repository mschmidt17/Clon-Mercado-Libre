import React from 'react';
import {useSelector } from "react-redux";
import "./CSS/categories.css"


function Categories() {

    const listCategories = useSelector((state) => state.categories)

  return (
    <div className='container-categories'>
        <div className='container-top'>
            <h2>Categorías populares </h2>
        </div>

        <div className='categories'>
            {listCategories?.map(category => {
            return (
                <div key={category.id}>
                <p>{category.name}</p>
                </div>
            )
            })}
        </div>
    
       
    </div>
  );
}

export default Categories;